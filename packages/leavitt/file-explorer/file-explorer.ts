import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import '@material/mwc-icon-button';
import '@leavittsoftware/titanium-loading-indicator/lib/loading';
import '@material/mwc-linear-progress';
import './file-explorer-no-files';
import './file-explorer-no-permission';
import './file-explorer-error';
import './file-explorer-image';
import './folder-modal';
import './file-modal';

import * as Throttle from 'promise-parallel-throttle';
import { button, h1, a, ellipsis } from '@leavittsoftware/titanium-styles';
import { FormatBytes } from './format-bytes';
import dayjs from 'dayjs/esm';
import { LeavittFolderModalElement } from './folder-modal';
import { FileExplorerFolderDto, FileExplorerPathDto, FileExplorerFileDto, FileExplorerDto } from '@leavittsoftware/lg-core-typescript/api3.leavitt.com';
import { FileExplorerAttachment, FileExplorerFolder } from '@leavittsoftware/lg-core-typescript/lg.net.core';
import { LeavittAddFolderModalElement } from './add-folder-modal';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar/lib/snackbar';
import { LeavittFileModalElement } from './file-modal';
import { ConfirmDialogOpenEvent } from '@leavittsoftware/titanium-dialog/lib/confirm-dialog-open-event';
import { PendingStateEvent } from '@leavittsoftware/titanium-loading-indicator/lib/loading';
import fileExplorerEvents from './file-explorer-events';
import { join, LoadWhile } from '@leavittsoftware/web/packages/titanium/helpers/helpers';
import { getIcon } from './file-types';
import ConfirmDialogElement from '@leavittsoftware/titanium-dialog/lib/confirm-dialog';
import { ActionDetail } from '@material/mwc-list';
import { Menu } from '@material/mwc-menu';
import { Button } from '@material/mwc-button';
import ApiService from '@leavittsoftware/api-service/lib/api-service';

/**
 * Leavitt Group specific file explorer
 *
 * @element leavitt-file-explorer
 *
 * @cssprop {Color} [--app-light-text-color=#80868b]
 * @cssprop {Color} [--app-hover-color=#f9f9f9]
 * @cssprop {Color} [--app-text-color=#6200ee]
 * @cssprop {Color} [--app-accent-color-blue=#4285f4]
 * @cssprop {Color} [--app-border-color=#dadce0]
 * @cssprop {Color} [--app-primary-color=#1a73e8]
 * @cssprop {Color} [--leavitt-file-explorer-font-family='Roboto', 'Noto', sans-serif] - Font family
 * @cssprop {Color} [--leavitt-file-explorer-selected-bg-color=#e8f0fe] - selected file and folder item bg color
 *
 * @fires folder-added - Fired when a new folder is added.
 * @fires folder-deleted - Fired when a folder is deleted.
 * @fires file-added - Fired when a new file is added.
 * @fires file-deleted - Fired when a file is deleted.
 */
@customElement('leavitt-file-explorer')
export class LeavittFileExplorerElement extends LoadWhile(LitElement) {
  /**
   * ID File explorer to display. This is required.
   */
  @property({ type: Number, attribute: 'file-explorer-id' }) fileExplorerId: number = 0;

  /**
   * Optional folder to show on first load rather than showing the root
   */
  @property({ type: Number, attribute: 'folder-id' }) folderId: number | null = null;

  /**
   * Prevents a user from navigating up the folder tree past the initially provided folderId.
   *
   * FolderId must be set for this to operate properly.
   */
  @property({ type: Boolean, reflect: true, attribute: 'prevent-navigation-up' }) preventNavigationUp: boolean = false;

  @property({ type: String, reflect: true, attribute: 'display' })
  protected get display() {
    return (window.localStorage.getItem('leavitt-file-explorer-display') as 'grid' | 'list') || 'grid';
  }

  protected set display(val: 'grid' | 'list') {
    localStorage.setItem('leavitt-file-explorer-display', val);
    this.requestUpdate('display');
  }

  /**
   *  Required
   */
  @property({ attribute: false }) apiService: ApiService | null;

  @property({ type: String }) protected state: 'no-permission' | 'files' | 'no-files' | 'error' = 'files';
  @state() isAdmin: boolean = false;

  @state() protected fileExplorer: FileExplorerDto | null = null;
  @state() protected files: FileExplorerFileDto[] = [];
  @state() protected folders: FileExplorerFolderDto[] = [];

  @state() protected path: FileExplorerPathDto[] = [];
  @state() protected selected: ((FileExplorerFolderDto | FileExplorerFileDto) & { type: 'folder' | 'file' })[] = [];

  @query('leavitt-folder-modal') protected folderDialog!: LeavittFolderModalElement;
  @query('leavitt-add-folder-modal') protected addFolderModal!: LeavittAddFolderModalElement;
  @query('leavitt-file-modal') protected fileDialog!: LeavittFileModalElement;
  @query('input[files]') protected fileInput!: HTMLInputElement;
  @query('input[folders]') protected folderInput!: HTMLInputElement;
  @query('confirm-dialog') protected confirmDialog: ConfirmDialogElement;
  @query('mwc-button[upload]') protected uploadButton: Button;
  @query('mwc-menu') protected uploadMenu: Menu;

  #originalFolderId = 0;

  firstUpdated() {
    //force attribute to reflect
    this.display = this.display;

    this.addEventListener(ConfirmDialogOpenEvent.eventType, async (e: ConfirmDialogOpenEvent) => {
      e.stopPropagation();
      await import('@leavittsoftware/titanium-dialog/lib/confirm-dialog');
      this.confirmDialog.handleEvent(e);
    });

    this.addEventListener(PendingStateEvent.eventType, async (e: PendingStateEvent) => {
      e.stopPropagation();
      this.loadWhile(e.detail.promise);
    });

    fileExplorerEvents.subscribe<FileExplorerAttachment>('FileExplorerFileDto', 'Update', o => {
      const index = this.files.findIndex(file => file.Id === o.Id);
      if (index > -1) {
        this.files[index] = { ...this.files[index], ...o };
        this.requestUpdate('files');
      }
    });

    fileExplorerEvents.subscribe<FileExplorerFolderDto>('FileExplorerFolder', 'Update', o => {
      const index = this.folders.findIndex(folder => folder.Id === o.Id);
      if (index > -1) {
        this.folders[index] = { ...this.folders[index], ...o } as FileExplorerFolderDto;
        this.requestUpdate('folders');
      }
    });
  }

  async updated(changedProps: PropertyValues<this>) {
    if ((this.fileExplorerId > 0 && changedProps.has('fileExplorerId')) || changedProps.has('folderId')) {
      if (this.folderId && this.#originalFolderId === 0) {
        this.#originalFolderId = this.folderId;
      }

      this.isAdmin = false;
      await this.reload();
    }

    if (changedProps.has('isAdmin') && this.isAdmin) {
      //load admin elements
      await import('./add-folder-modal');
      await import('@material/mwc-menu');
      await import('@material/mwc-list/mwc-list-item');
      await this.updateComplete;
      this.uploadMenu.anchor = this.uploadButton;
    }
  }

  /**
   *  @internal
   */
  #isFolder(fileOrFolder: ((FileExplorerFolderDto | FileExplorerFileDto) & { type: 'folder' | 'file' }) | null) {
    return fileOrFolder?.type === 'folder';
  }

  /**
   * Refetches current file explorer data and re-renders
   */
  async reload() {
    await this.#getExplorerData(this.fileExplorerId, this.folderId);
  }

  /**
   *  @internal
   */
  async #getExplorerData(fileExplorerId: number, folderId: number | null) {
    try {
      const get = this.apiService?.getAsync<FileExplorerDto>(`FileExplorers(${fileExplorerId})/FileExplorerView(folderId=${folderId})`);
      if (get) {
        this.loadWhile(get);
      }
      const result = await get;

      if (result?.status == 200 && result.entity) {
        this.fileExplorer = result.entity;
        this.folders = result.entity.Folders as FileExplorerFolderDto[];
        this.files = result.entity.Files as FileExplorerFileDto[];

        const path = result.entity.Path as FileExplorerPathDto[];
        if (this.preventNavigationUp && this.#originalFolderId > 0) {
          const shortenedPath = [] as FileExplorerPathDto[];
          for (let index = path.length - 1; index > 0; index--) {
            const p = path[index];
            shortenedPath.unshift(p);
            if (p.FolderId === this.#originalFolderId) {
              break;
            }
          }
          this.path = shortenedPath;
        } else {
          this.path = path;
        }

        this.isAdmin = result.entity.CanEdit;
        this.state = this.folders.length > 0 || this.files.length > 0 ? 'files' : 'no-files';
      }
    } catch (error) {
      if (error?.statusCode == 401 || error?.statusCode == 404) {
        this.path = [{ Name: 'Files' } as FileExplorerPathDto];
        this.state = 'no-permission';
        return;
      }
      this.path = [{ Name: 'Files' } as FileExplorerPathDto];
      this.state = 'error';
    }
  }

  /**
   *  @internal
   */
  async #addFolderClick() {
    const newFolder = await this.addFolderModal.open();
    if (newFolder) {
      this.folders = [...this.folders, newFolder];
      if (this.fileExplorer) {
        this.fileExplorer.FoldersCount = this.fileExplorer?.FoldersCount + 1;
        this.requestUpdate('fileExplorer');
      }
      this.state = 'files';
      this.dispatchEvent(new CustomEvent('folder-added', { detail: newFolder }));
    }
  }

  /**
   *  @internal
   */
  async #deleteSelectedClick() {
    const confirmationDialogEvent = new ConfirmDialogOpenEvent(
      'Please confirm delete',
      `Deleting folders will delete all of their contents. Are you sure you would like to delete the selected item${this.selected.length === 1 ? '' : 's'}?`
    );
    this.dispatchEvent(confirmationDialogEvent);
    if (await confirmationDialogEvent.dialogResult) {
      const items = [...this.selected];
      const errorMessageToCount: Map<string, number> = new Map();
      let totalErrorCount = 0;
      const requests = Promise.all(
        items.map(async o => {
          try {
            if (this.#isFolder(o)) {
              await this.apiService?.deleteAsync(`FileExplorerFolders(${o.Id})`);
              this.folders.splice(
                this.folders.findIndex(folder => folder.Id === o.Id),
                1
              );
              this.dispatchEvent(new CustomEvent('folder-deleted'));
              if (this.fileExplorer) {
                this.fileExplorer.FoldersCount = this.fileExplorer?.FoldersCount - 1;
                this.requestUpdate('fileExplorer');
              }
              this.requestUpdate('folders');
            } else {
              await this.apiService?.deleteAsync(`FileExplorerAttachments(${o.Id})`);
              this.files.splice(
                this.files.findIndex(file => file.Id === o.Id),
                1
              );
              this.requestUpdate('files');
              if (this.fileExplorer) {
                this.fileExplorer.FilesCount = this.fileExplorer?.FilesCount - 1;
                this.fileExplorer.Size = this.fileExplorer?.Size - (o as FileExplorerFileDto).Size;
                this.requestUpdate('fileExplorer');
              }
              this.dispatchEvent(new CustomEvent('file-deleted'));
            }
          } catch (newError) {
            const newErrorCount = (errorMessageToCount.get(newError) ?? 0) + 1;
            errorMessageToCount.set(newError, newErrorCount);
            totalErrorCount++;
          }
        })
      );
      this.loadWhile(requests);
      await requests;
      this.selected = [];
      this.state = this.folders.length > 0 || this.files.length > 0 ? 'files' : 'no-files';
      await this.reload();
      if (totalErrorCount > 0) {
        TitaniumSnackbarSingleton.open(
          html`Failed to delete ${totalErrorCount === 1 ? 'files and folders' : `${totalErrorCount} files and folders: <br />`}.
          ${errorMessageToCount.size === 1
            ? Array.from(errorMessageToCount.keys())[0]
            : Array.from(errorMessageToCount.entries()).map(([error, count]) => `(${count}) ${error} <br />`)}`
        );
      }
    }
  }

  /**
   *  @internal
   */
  #getFolderPath(file: File) {
    return file.webkitRelativePath.replace('/' + file.name, '');
  }

  /**
   *  @internal
   */
  async #createDirectoryStructure(files: FileList | null) {
    const pathToFolderId = new Map<string, number>();

    const filesArr = Array.from(files ?? []);
    for (let index = 0; index < filesArr.length; index++) {
      const file = filesArr[index];
      const parentFolderPath = this.#getFolderPath(file).split('/');

      const parentFolders: string[] = [];
      let parentId = this.folderId;
      for (let index = 0; index < parentFolderPath.length; index++) {
        const folderName = parentFolderPath[index];

        const newPath = [...parentFolders, folderName].join('/');

        if (pathToFolderId.has(newPath)) {
          parentFolders.push(folderName);
          parentId = pathToFolderId.get(newPath) ?? 0;
          continue;
        }

        const folder = await this.#createFolder(folderName, parentId || null);

        parentId = folder?.Id ?? 0;
        parentFolders.push(folderName);
        pathToFolderId.set(parentFolders.join('/'), folder?.Id ?? 0);

        if ((folder?.ParentFolderId && folder?.ParentFolderId === this.folderId) || (!folder?.ParentFolderId && !this.folderId)) {
          const folderDto = {
            ...folder,
            CreatorLastName: folder?.CreatorPerson?.LastName,
            CreatorFirstName: folder?.CreatorPerson?.FirstName,
          } as FileExplorerFolderDto;
          this.folders = [...this.folders, folderDto];
          this.state = 'files';
          this.dispatchEvent(new CustomEvent('folder-added', { detail: folderDto }));
        }
      }
    }
    return pathToFolderId;
  }

  /**
   *  @internal
   */
  async #uploadFiles(files: FileList | null) {
    const uri = this.folderId
      ? `FileExplorerFolders(${this.folderId})/UploadAttachment?expand=Creator(select=Firstname,Lastname)`
      : `FileExplorers(${this.fileExplorerId})/UploadAttachment?expand=Creator(select=Firstname,Lastname)`;

    const failedFiles: string[] = [];
    const requests = Array.from(files ?? []).map(file => async () => {
      try {
        const result = (await this.apiService?.uploadFile<FileExplorerAttachment>(uri, file, () => console.log))?.entity;
        if (result) {
          const attachment: FileExplorerFileDto = {
            ...result,
            CreatorFirstName: result.Creator?.FirstName ?? '',
            CreatorLastName: result.Creator?.LastName ?? '',
          };
          this.files = [...this.files, attachment];
          this.state = 'files';
          this.dispatchEvent(new CustomEvent('file-added'));
          if (this.fileExplorer) {
            this.fileExplorer.FilesCount = this.fileExplorer?.FilesCount + 1;
            this.fileExplorer.Size = this.fileExplorer?.Size + result.Size;
            this.requestUpdate('fileExplorer');
          }
        }
      } catch (error) {
        failedFiles.push(file.name + ': ' + error);
      }
    });

    const uploadAll = Throttle.all(requests, { maxInProgress: 4 });
    this.loadWhile(uploadAll);
    await uploadAll;

    if (failedFiles.length > 0) {
      TitaniumSnackbarSingleton.open(
        html`Failed to upload ${failedFiles.length} file${failedFiles.length === 1 ? '' : 's'}: <br />
          ${join(failedFiles, html`<br />`)}`
      );
      console.warn(`Failed to upload ${failedFiles.length} file${failedFiles.length === 1 ? '' : 's'}: \r\n${failedFiles.join('\r\n')}`);
    }
    this.fileInput.value = '';
  }

  /**
   *  @internal
   */
  async #uploadFolders(files: FileList | null) {
    const directoryToIdMap = this.#createDirectoryStructure(files);

    const failedFiles: string[] = [];
    const requests = Array.from(files ?? []).map(file => async () => {
      try {
        const path = this.#getFolderPath(file);
        const folderId = (await directoryToIdMap).get(path);

        const uri = folderId
          ? `FileExplorerFolders(${folderId})/UploadAttachment?expand=Creator(select=Firstname,Lastname)`
          : `FileExplorers(${this.fileExplorerId})/UploadAttachment?expand=Creator(select=Firstname,Lastname)`;

        const result = (await this.apiService?.uploadFile<FileExplorerAttachment>(uri, file, () => console.log))?.entity;
        if (result) {
          this.dispatchEvent(new CustomEvent('file-added'));
          if (this.fileExplorer) {
            this.fileExplorer.FilesCount = this.fileExplorer?.FilesCount + 1;
            this.fileExplorer.Size = this.fileExplorer?.Size + result.Size;
            this.requestUpdate('fileExplorer');
          }
        }
      } catch (error) {
        failedFiles.push(file.webkitRelativePath + ': ' + error);
      }
    });

    const uploadAll = Throttle.all(requests, { maxInProgress: 4 });
    this.loadWhile(uploadAll);
    await uploadAll;

    if (failedFiles.length > 0) {
      TitaniumSnackbarSingleton.open(
        html`Failed to upload ${failedFiles.length} file${failedFiles.length === 1 ? '' : 's'}: <br />
          ${join(failedFiles, html`<br />`)}`
      );
      console.warn(`Failed to upload ${failedFiles.length} file${failedFiles.length === 1 ? '' : 's'}: \r\n${failedFiles.join('\r\n')}`);
    }
    await this.reload();
    this.folderInput.value = '';
  }

  /**
   *  @internal
   */
  async #createFolder(name: string, parentFolderId: number | null) {
    const dto: Partial<FileExplorerFolder> = {
      FileExplorerId: this.fileExplorerId,
      Name: name,
      ParentFolderId: parentFolderId || undefined,
    };

    try {
      const post = this.apiService?.postAsync<FileExplorerFolder>('FileExplorerFolders?expand=CreatorPerson(select=FirstName,LastName)', dto);
      if (post) {
        /**
         *  @ignore
         */
        this.dispatchEvent(new PendingStateEvent(post));
      }
      const result = (await post)?.entity;
      if (this.fileExplorer) {
        this.fileExplorer.FoldersCount = this.fileExplorer?.FoldersCount + 1;
        this.requestUpdate('fileExplorer');
      }
      return result;
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
    }
    return null;
  }

  /**
   *  @internal
   */
  #toggleSelected(item: FileExplorerFileDto | FileExplorerFolderDto, type: 'folder' | 'file') {
    const selected = this.selected.find(s => s?.Id === item.Id && s.type === type);
    if (selected) {
      this.selected = [...this.selected.filter(o => o !== selected)];
    } else {
      this.selected = [...this.selected, { ...item, type: type }];
    }
  }

  /**
   *  @internal
   */
  #kFormatter(num) {
    return Math.abs(num) > 999 ? Math.floor((Math.sign(num) * Math.round(Math.abs(num) / 100)) / 10) + 'k+' : Math.sign(num) * Math.abs(num);
  }

  static styles = [
    button,
    h1,
    ellipsis,
    a,
    css`
      :host {
        display: grid;
        grid:
          'header' 69px
          'main' minmax(150px, 1fr)
          'footer' auto;

        background-color: #fff;
        border: 1px solid var(--app-border-color, #dadce0);
        border-radius: 8px;

        font-family: var(--leavitt-file-explorer-font-family, 'Roboto', 'Noto', sans-serif);
        -webkit-font-smoothing: antialiased;
      }

      main {
        position: relative;
        overflow-y: auto;
      }

      content-veil {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        opacity: 0;
        -webkit-transition: opacity 75ms linear;
        -o-transition: opacity 75ms linear;
        transition: opacity 75ms linear;
        z-index: 6;
      }

      content-veil[opened] {
        opacity: 0.8;
        display: block;
      }

      main > section {
        display: flex;
        flex-direction: column;
      }

      :host([display='grid']) section:last-of-type {
        margin-bottom: 12px;
      }

      main > h3 {
        display: none;
      }

      :host([display='grid']) main > h3 {
        display: block;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        letter-spacing: -0.264px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        margin: 24px 12px 0 24px;
        color: var(--app-text-color, #5f6368);
      }

      :host([display='grid']) main > section {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-gap: 12px;
        padding: 12px 24px;
      }

      header {
        display: grid;
        grid:
          'nav actions'
          'loader loader' 4px / 4fr auto;
        gap: 0px 12px;

        margin: 0;
        padding: 12px 12px 0 12px;
        border-bottom: 1px solid var(--app-border-color, #dadce0);
      }

      mwc-linear-progress {
        grid-area: loader;
        margin: 0 -12px;
      }

      header aside {
        grid-area: nav;
      }

      header nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2px;
        font-size: 18px;
        margin-left: 12px !important;
      }

      file-summary {
        grid-area: summary;
        display: block;
        padding-left: 12px !important;
        font-size: 12px;
      }

      :host([prevent-navigation-up]) file-summary {
        display: none;
      }

      header nav mwc-icon {
        color: var(--app-light-text-color, #80868b);
        flex-shrink: 0;
      }

      header header-actions {
        grid-area: actions;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: -4px;
      }

      nav a:visited,
      nav span,
      nav a {
        display: block;
        font-size: 18px;
        min-width: 20px;
      }

      a[disabled] {
        pointer-events: none;
        cursor: default;
      }

      nav a span {
        padding: 0;
      }

      nav span[last] {
        flex-shrink: 0;
      }

      header span {
        grid-area: text;
      }

      folder-item {
        display: grid;
        box-sizing: border-box;
        grid: 'icon name' / auto 1fr;
        align-items: center;
        align-content: center;
        gap: 8px;
        padding: 0 24px;
        font-size: 14px;
        border-bottom: 1px solid var(--app-border-color, #dadce0);

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;

        outline: none;
      }

      :host([display='grid']) folder-item {
        cursor: pointer;
        border: 1px solid var(--app-border-color, #dadce0);
        border-radius: 8px;
        padding: 0 12px;
        max-height: 50px;
      }

      folder-item:focus:not([selected]) {
        background-color: var(--app-hover-color, #f9f9f9);
      }

      folder-item[selected] {
        background-color: var(--leavitt-file-explorer-selected-bg-color, #e8f0fe);
      }

      folder-item icon-wrapper {
        grid-area: icon;
        --mdc-icon-size: 32px;
        color: var(--app-accent-color-blue, #4285f4);
        position: relative;
      }

      file-count {
        font-family: 'Roboto', 'Noto', sans-serif;
        color: var(--app-accent-color-blue, #4285f4);
        position: absolute;
        top: 8px;
        left: 4px;
        right: 5px;
        font-size: 11px;
        line-height: 20px;
        text-align: center;
      }

      folder-item span {
        grid-area: name;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--app-dark-text-color, #202124);
      }

      file-item {
        display: grid;
        grid: 'name date size' / 1fr 100px 100px;
        gap: 12px;
        padding: 12px 24px;
        font-size: 14px;
        border-bottom: 1px solid var(--app-border-color, #dadce0);
        align-content: center;
        align-items: center;
        position: relative;
        outline: none;
      }

      select-icon {
        display: block;
        position: absolute;
        top: 5px;
        left: 5px;
        height: 20px;
        width: 20px;
        background: #fff;
        border-radius: 50%;
      }

      svg {
        position: absolute;
        top: -2px;
        left: -2px;
        height: 24px;
        width: 24px;
      }

      :host(:not([display='grid'])) select-icon {
        display: none;
      }

      svg[circle] {
        color: var(--app-border-color, #dadce0);
      }

      file-item svg[check] {
        color: #bebebe;
      }

      file-item svg[check] {
        display: none;
      }

      :host(:not([display='grid'])) file-item svg[circle],
      file-item:hover svg[circle] {
        display: none;
      }

      file-item:hover svg[check],
      file-item[selected] svg[check] {
        display: block;
      }

      file-item:not([selected]) svg[check]:hover {
        color: #707175;
      }

      file-item[selected] svg[check] {
        color: var(--app-accent-color-blue, #4285f4);
      }

      :host(:not([display='grid'])) section:last-of-type > *:last-child {
        border-bottom: none;
      }

      :host([display='grid']) file-item {
        cursor: pointer;
        border: 1px solid var(--app-border-color, #dadce0);
        border-radius: 8px;
        padding: 0;
        max-height: 166px;
        overflow: hidden;
        grid:
          'preview' 118px
          'name' auto;
        gap: 0;
        align-content: inherit;
        align-items: inherit;
      }

      file-item[selected] {
        background-color: var(--leavitt-file-explorer-selected-bg-color, #e8f0fe);
      }

      file-item:focus:not([selected]) {
        background-color: var(--app-hover-color, #f9f9f9);
      }

      file-item image-wrapper {
        display: block;
        overflow: none;
        grid-area: preview;
        background-color: var(--leavitt-file-explorer-selected-bg-color, #e8f0fe);
      }

      file-item image-wrapper leavitt-file-explorer-image {
        height: 100%;
        width: 100%;
        transition: all 0.2s ease-in-out;
        transform-origin: center bottom;
      }

      file-item[selected] leavitt-file-explorer-image {
        transform: scale(0.9) rotate(0.01deg);
      }

      file-item file-name {
        grid-area: name;
        display: flex;
        flex-direction: row;
        align-items: center;

        color: var(--app-dark-text-color, #202124);

        min-width: 0;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
      }

      :host([display='grid']) file-item file-name {
        padding: 12px;
        border-top: 1px solid var(--app-border-color, #dadce0);
      }

      file-item file-name mwc-icon {
        padding-right: 8px;
        color: var(--app-text-color, #5f6368);
        flex-shrink: 0;
      }

      file-item file-name span[name] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 20px;
      }

      file-item file-name span[name]:after {
        content: '.';
      }

      file-item file-name span[ext] {
        flex-shrink: 0;
      }

      file-item span[date] {
        grid-area: date;
        text-align: center;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
      }

      file-item span[size] {
        grid-area: size;
        text-align: right;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
      }

      footer {
        display: grid;
        grid: 'button count . actions' / auto 1fr auto;
        gap: 12px;
        align-items: center;
        padding: 6px 12px;
        border-top: 1px solid var(--app-border-color, #dadce0);
      }

      footer mwc-icon-button {
        grid-area: button;
        margin-left: -10px;
      }

      mwc-icon-button[primary] {
        color: var(--app-link-color, #1a73e8);
      }

      mwc-icon-button {
        color: var(--app-text-color, #5f6368);
      }

      footer span[counts] {
        grid-area: count;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
        color: var(--app-dark-text-color, #202124);

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
      }

      div[footer-actions] {
        grid-area: actions;
      }

      :host([display='grid']) footer span[counts] {
        display: none;
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <header>
        <aside ellipsis>
          <nav heading1 ellipsis>
            ${this.fileExplorer
              ? this.path.map(
                  (o, i) => html`
                    ${i == this.path.length - 1
                      ? html` <span ellipsis end title=${o?.Name ?? ''}> ${o.Name} </span> `
                      : html`
                          <a
                            ?disabled=${this.isLoading}
                            ellipsis
                            title=${o.Name ?? ''}
                            href="#"
                            @click=${e => {
                              e.preventDefault();
                              this.folderId = o.FolderId ?? null;
                              this.selected = [];
                            }}
                          >
                            ${o.Name}</a
                          >
                          <mwc-icon>navigate_next</mwc-icon>
                        `}
                  `
                )
              : html`<span ellipsis end> File explorer</span>`}
          </nav>
          <file-summary ?hidden=${!this.fileExplorer} ellipsis heading3
            >${this.fileExplorer?.FilesCount} files | ${this.fileExplorer?.FoldersCount} folders | ${FormatBytes(this.fileExplorer?.Size)}</file-summary
          >
        </aside>
        <header-actions>
          ${this.selected
            ? html`
                ${
                  this.isAdmin && this.selected.length
                    ? html` <mwc-icon-button title="Delete selected" @click=${this.#deleteSelectedClick} icon="delete"></mwc-icon-button> `
                    : nothing
                }
                <mwc-icon-button
                 primary
                 ?hidden=${!this.selected.length}
                 ?disabled=${this.selected.length !== 1}
                 icon="info"
                  @click=${() => {
                    if (!this.selected) {
                      return;
                    }
                    if (this.#isFolder(this.selected[0])) {
                      this.folderDialog.open(this.selected[0] as FileExplorerFolderDto);
                    } else {
                      this.fileDialog.open(this.selected[0] as FileExplorerFileDto);
                    }
                  }}
                >
                </mwc-icon-button>
              </header-contextual-actions>
            `
            : ''}
        </header-actions>

        <mwc-linear-progress ?hidden=${!this.isLoading} ?closed=${!this.isLoading} indeterminate></mwc-linear-progress>
      </header>
      <main>
        <leavitt-file-explorer-no-files ?hidden=${this.state !== 'no-files'}> </leavitt-file-explorer-no-files>
        <leavitt-file-explorer-no-permission ?hidden=${this.state !== 'no-permission'}> </leavitt-file-explorer-no-permission>
        <leavitt-file-explorer-error ?hidden=${this.state !== 'error'}> </leavitt-file-explorer-error>

        <h3 ?hidden=${this.folders.length === 0 || this.state != 'files'}>Folders (${this.folders.length})</h3>
        <section ?hidden=${this.folders.length === 0 || this.state != 'files'}>
          ${this.folders.map(
            folder => html`
              <folder-item
                role="button"
                ?selected=${this.selected.some(s => s?.Id === folder.Id && s.type === 'folder')}
                tabindex="0"
                aria-label=${folder.Name ?? ''}
                title="${folder.Name ?? ''}
${folder.FilesCount} file${folder.FilesCount === 1 ? '' : 's'}, ${folder.FoldersCount} folder${folder.FoldersCount === 1 ? '' : 's'}"
                @dblclick=${e => {
                  e.preventDefault();
                  this.folderId = folder.Id ?? null;
                  this.selected = [];
                }}
                @click=${e => {
                  e.stopPropagation();
                  this.#toggleSelected(folder, 'folder');
                }}
                @keydown=${(e: KeyboardEvent) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    this.folderId = folder.Id ?? null;
                    this.selected = [];
                  } else if (e.key == ' ') {
                    e.preventDefault();
                    this.#toggleSelected(folder, 'folder');
                  }
                }}
              >
                <icon-wrapper>
                  <mwc-icon>folder_open</mwc-icon>
                  <file-count>${this.#kFormatter(folder.FilesCount ?? 0) || ''}</file-count>
                </icon-wrapper>
                <span>${folder.Name}</span>
              </folder-item>
            `
          )}
        </section>
        <h3 ?hidden=${this.files.length === 0 || this.state != 'files'}>Files (${this.files.length})</h3>
        <section ?hidden=${this.files.length === 0 || this.state != 'files'}>
          ${this.files.map(
            file => html`
              <file-item
                role="button"
                ?selected=${this.selected.some(s => s?.Id === file.Id && s.type === 'file')}
                tabindex="0"
                aria-label="${file.Name}.${file.Extension}"
                title="${file.Name}.${file.Extension}"
                @dblclick=${e => {
                  e.preventDefault();
                  if (this.display === 'list' && this.selected.length === 0) {
                    this.fileDialog.open(file);
                  }
                }}
                @click=${e => {
                  e.stopPropagation();

                  if (this.display === 'grid' && this.selected.length === 0) {
                    this.fileDialog.open(file);
                  } else {
                    this.#toggleSelected(file, 'file');
                  }
                }}
                @keydown=${(e: KeyboardEvent) => {
                  if (e.key == ' ') {
                    this.#toggleSelected(file, 'file');
                  }
                }}
              >
                <file-name>
                  <mwc-icon>${getIcon(file.Extension ?? '')}</mwc-icon>
                  <span name>${file.Name}</span>
                  <span ext>${file.Extension}</span>
                </file-name>
                ${this.display === 'list'
                  ? html`
                      <span date>${dayjs(file.CreatedDate).format('MMM D, YYYY')}</span>
                      <span size>${FormatBytes(file.Size)}</span>
                    `
                  : html`<image-wrapper> <leavitt-file-explorer-image .attachment=${file}></leavitt-file-explorer-image></image-wrapper>`}
                <select-icon
                  @click=${e => {
                    e.stopPropagation();
                    this.#toggleSelected(file, 'file');
                  }}
                >
                  <svg circle viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                    />
                  </svg>
                  <svg check viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    />
                  </svg>
                </select-icon>
              </file-item>
            `
          )}
        </section>
        <content-veil ?opened=${this.isLoading}></content-veil>
      </main>
      <footer>
        <mwc-icon-button
          ?disabled=${this.isLoading}
          view-style
          @click=${() => (this.display = this.display === 'grid' ? 'list' : 'grid')}
          title=${this.display === 'grid' ? 'Show list view' : 'Show grid view'}
          icon="${this.display === 'grid' ? 'view_list' : 'view_module'}"
        >
        </mwc-icon-button>
        <span counts> ${this.files.length} files | ${this.folders.length} folders </span>

        ${this.isAdmin
          ? html`
              <div footer-actions style="position: relative;">
                <mwc-button lowercase ?disabled=${this.isLoading} label="Add folder" file @click=${this.#addFolderClick} icon="create_new_folder"></mwc-button>
                <mwc-button
                  lowercase
                  upload
                  ?disabled=${this.isLoading}
                  label="Upload"
                  @click=${() => this.shadowRoot?.querySelector<Menu>('mwc-menu[upload-menu]')?.show()}
                  file
                  icon="backup"
                ></mwc-button>
                <mwc-menu
                  upload-menu
                  corner="BOTTOM_END"
                  menuCorner="END"
                  @action=${(e: CustomEvent<ActionDetail>) => {
                    switch (e.detail.index) {
                      case 0:
                        this.fileInput.click();
                        break;

                      case 1:
                        this.folderInput.click();
                        break;
                    }
                  }}
                >
                  <mwc-list-item graphic="icon">
                    <span>Upload files</span>
                    <mwc-icon slot="graphic">upload_file</mwc-icon>
                  </mwc-list-item>
                  <mwc-list-item graphic="icon">
                    <span>Upload folders</span>
                    <mwc-icon slot="graphic">drive_folder_upload</mwc-icon>
                  </mwc-list-item>
                </mwc-menu>
                <input
                  folders
                  @change=${async () => {
                    this.#uploadFolders(this.folderInput.files);
                  }}
                  type="file"
                  webkitdirectory
                  directory
                  multiple
                  id="file"
                  style="display:none;"
                />
                <input
                  files
                  @change=${async () => {
                    this.#uploadFiles(this.fileInput.files);
                  }}
                  type="file"
                  multiple
                  id="file"
                  style="display:none;"
                />
              </div>
            `
          : nothing}
      </footer>
      <leavitt-add-folder-modal
        .apiService=${this.apiService}
        .fileExplorerId=${this.fileExplorerId}
        .parentFolderId=${this?.folderId ?? 0}
      ></leavitt-add-folder-modal>
      <leavitt-folder-modal .apiService=${this.apiService} .enableEditing=${this.isAdmin}></leavitt-folder-modal>
      <leavitt-file-modal .enableEditing=${this.isAdmin}></leavitt-file-modal>
      <confirm-dialog></confirm-dialog>
    `;
  }
}

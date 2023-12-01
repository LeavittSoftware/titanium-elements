import { LoadWhile } from '../../titanium/helpers/load-while';
import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import ApiService from '../api-service/api-service';
import {
  FileExplorerAttachment,
  FileExplorerDto,
  FileExplorerFileDto,
  FileExplorerFolder,
  FileExplorerFolderDto,
  FileExplorerPathDto,
} from '@leavittsoftware/lg-core-typescript';
import { PendingStateEvent } from '../../titanium/types/pending-state-event';
import { ConfirmDialogOpenEvent } from '../../titanium/confirm-dialog/confirm-dialog-open-event';

import '../../titanium/confirm-dialog/confirm-dialog';
import fileExplorerEvents from './events/file-explorer-events';
import { TitaniumSnackbarSingleton } from '../../titanium/snackbar/snackbar';

import '@material/web/focus/md-focus-ring';
import '@material/web/icon/icon';
import '@material/web/iconbutton/filled-tonal-icon-button';
import '@material/web/button/text-button';
import '@material/web/progress/linear-progress';
import '@material/web/chips/filter-chip';
import '@material/web/menu/menu';
import '@material/web/menu/menu-item';

import './add-folder-modal';
import './file-explorer-image';
import './file-explorer-no-files';
import './file-explorer-error';
import './file-explorer-no-permission';
import './file-modal';
import './folder-modal';
import './file-list-item';

import * as Throttle from 'promise-parallel-throttle';
import { join } from '../../titanium/helpers/helpers';
import { a, ellipsis, h1 } from '../../titanium/styles/styles';

import { formatBytes } from './helpers/format-bytes';
import { CloseMenuEvent, MdMenu, MenuItem } from '@material/web/menu/menu';
import TitaniumConfirmDialog from '../../titanium/confirm-dialog/confirm-dialog';
import { FileModal } from './file-modal';
import { AddFolderModal } from './add-folder-modal';
import { FolderModal } from './folder-modal';

/**
 * Leavitt Group specific file explorer
 *
 * @element leavitt-file-explorer
 *
 * @cssprop {Color} [--leavitt-file-explorer-font-family='Roboto', 'Noto', sans-serif] - Font family
 *
 * @fires folder-added - Fired when a new folder is added.
 * @fires folder-deleted - Fired when a folder is deleted.
 * @fires file-added - Fired when a new file is added.
 * @fires file-deleted - Fired when a file is deleted.
 */
@customElement('leavitt-file-explorer')
export class LeavittFileExplorer extends LoadWhile(LitElement) {
  /**
   *  This is required.
   */
  @property({ attribute: false }) accessor apiService: ApiService | null;

  /**
   * ID File explorer to display. This is required.
   */
  @property({ type: Number, attribute: 'file-explorer-id' }) accessor fileExplorerId: number = 0;

  /**
   * Optional folder to show on first load rather than showing the root
   */
  @property({ type: Number, attribute: 'folder-id' }) accessor folderId: number | null = null;

  /**
   * Prevents a user from navigating up the folder tree past the initially provided folderId.
   *
   * FolderId must be set for this to operate properly.
   */
  @property({ type: Boolean, reflect: true, attribute: 'prevent-navigation-up' }) accessor preventNavigationUp: boolean = false;

  private get display() {
    return (window.localStorage.getItem('leavitt-file-explorer-display') as 'grid' | 'list') || 'grid';
  }
  @property({ type: String, reflect: true, attribute: 'display' })
  private set display(val: 'grid' | 'list') {
    localStorage.setItem('leavitt-file-explorer-display', val);
  }

  @property({ type: String }) private accessor state: 'no-permission' | 'files' | 'no-files' | 'error' = 'files';

  @state() private accessor isAdmin: boolean = false;
  @state() private accessor fileExplorer: FileExplorerDto | null = null;
  @state() private accessor files: FileExplorerFileDto[] = [];
  @state() private accessor folders: FileExplorerFolderDto[] = [];
  @state() private accessor path: FileExplorerPathDto[] = [];
  @state() private accessor selected: ((FileExplorerFolderDto | FileExplorerFileDto) & { type: 'folder' | 'file' })[] = [];

  @query('md-menu[upload-menu]') private accessor uploadMenu: MdMenu;

  @query('leavitt-folder-modal') private accessor folderDialog: FolderModal;
  @query('leavitt-add-folder-modal') private accessor addFolderDialog: AddFolderModal;
  @query('leavitt-file-modal') private accessor fileDialog: FileModal;
  @query('input[files]') private accessor fileInput: HTMLInputElement;
  @query('input[folders]') private accessor folderInput: HTMLInputElement;
  @query('titanium-confirm-dialog') private accessor confirmDialog: TitaniumConfirmDialog;

  #originalFolderId = 0;

  firstUpdated() {
    //force attribute to reflect
    this.display = this.display;

    this.addEventListener(ConfirmDialogOpenEvent.eventType, async (e: ConfirmDialogOpenEvent) => {
      e.stopPropagation();
      this.confirmDialog.handleEvent(e);
    });

    this.addEventListener(PendingStateEvent.eventType, async (e: PendingStateEvent) => {
      e.stopPropagation();
      this.loadWhile(e.detail.promise);
    });

    fileExplorerEvents.subscribe<FileExplorerAttachment>('FileExplorerFileDto', 'Update', (o) => {
      const index = this.files.findIndex((file) => file.Id === o.Id);
      if (index > -1) {
        this.files[index] = { ...this.files[index], ...o };
        this.requestUpdate('files');
      }
    });

    fileExplorerEvents.subscribe<FileExplorerFolderDto>('FileExplorerFolder', 'Update', (o) => {
      const index = this.folders.findIndex((folder) => folder.Id === o.Id);
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
  }

  #isFolder(fileOrFolder: ((FileExplorerFolderDto | FileExplorerFileDto) & { type: 'folder' | 'file' }) | null) {
    return fileOrFolder?.type === 'folder';
  }

  /**
   * Refetches current file explorer data and re-renders
   */
  async reload() {
    await this.#getExplorerData(this.fileExplorerId, this.folderId);
  }

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

  async #addFolderClick() {
    const newFolder = await this.addFolderDialog.open();
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
        items.map(async (o) => {
          try {
            if (this.#isFolder(o)) {
              await this.apiService?.deleteAsync(`FileExplorerFolders(${o.Id})`);
              this.folders.splice(
                this.folders.findIndex((folder) => folder.Id === o.Id),
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
                this.files.findIndex((file) => file.Id === o.Id),
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

  #getFolderPath(file: File) {
    return file.webkitRelativePath.replace('/' + file.name, '');
  }

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

  async #uploadFiles(files: FileList | null) {
    const uri = this.folderId
      ? `FileExplorerFolders(${this.folderId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`
      : `FileExplorers(${this.fileExplorerId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`;

    const failedFiles: string[] = [];
    const requests = Array.from(files ?? []).map((file) => async () => {
      try {
        const result = (await this.apiService?.uploadFile<FileExplorerAttachment>(uri, file, () => console.log))?.entity;
        if (result) {
          const attachment: FileExplorerFileDto = {
            ...result,
            CreatorProfilePictureCndFileName: result.Creator?.ProfilePictureCdnFileName ?? '',
            CreatorFullName: result.Creator?.FullName ?? '',
            CreatorFirstName: '',
            CreatorLastName: '',
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

  async #uploadFolders(files: FileList | null) {
    const directoryToIdMap = this.#createDirectoryStructure(files);

    const failedFiles: string[] = [];
    const requests = Array.from(files ?? []).map((file) => async () => {
      try {
        const path = this.#getFolderPath(file);
        const folderId = (await directoryToIdMap).get(path);

        const uri = folderId
          ? `FileExplorerFolders(${folderId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`
          : `FileExplorers(${this.fileExplorerId})/UploadAttachment?expand=Creator(select=FullName,ProfilePictureCdnFileName)`;

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

  #toggleSelected(item: FileExplorerFileDto | FileExplorerFolderDto, type: 'folder' | 'file') {
    const selected = this.selected.find((s) => s?.Id === item.Id && s.type === type);
    if (selected) {
      this.selected = [...this.selected.filter((o) => o !== selected)];
    } else {
      this.selected = [...this.selected, { ...item, type: type }];
    }
  }

  #kFormatter(num) {
    return Math.abs(num) > 999 ? Math.floor((Math.sign(num) * Math.round(Math.abs(num) / 100)) / 10) + 'k+' : Math.sign(num) * Math.abs(num);
  }

  #doubleClickTimeout = 0;

  static styles = [
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

        border: 1px solid var(--md-sys-color-outline-variant);
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        border-radius: 8px;

        font-family: var(--leavitt-file-explorer-font-family, 'Roboto', 'Noto', sans-serif);
        -webkit-font-smoothing: antialiased;
        width: 100%;
      }

      header {
        display: grid;
        grid: 'nav actions' / 4fr auto;
        gap: 0px 12px;
        position: relative;

        margin: 0;
        padding: 0 12px 0 12px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      header aside {
        grid-area: nav;
      }

      header nav {
        font-family: Metropolis;
        font-size: 18px;
        letter-spacing: -0.264px;
        font-weight: 400;
        flex-direction: row;
        align-items: center;
        gap: 2px;
        display: flex;
        margin: 12px 0 0 12px;
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
        background-color: var(--md-sys-color-scrim);
        opacity: 0;
        -webkit-transition: opacity 75ms linear;
        -o-transition: opacity 75ms linear;
        transition: opacity 75ms linear;
        z-index: 6;
        backdrop-filter: blur(6px);
      }

      content-veil[opened] {
        opacity: 0.32;
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
      }

      :host([display='grid']) main > section {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-gap: 12px;
        padding: 12px 24px;
      }

      md-linear-progress {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        width: unset;
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

      header nav md-icon {
        color: var(--md-sys-color-surface-variant);
        flex-shrink: 0;
      }

      header header-actions {
        grid-area: actions;
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
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

      /*Folder styles */
      md-filter-chip[folder] {
        /* overflow: hidden; */
        --md-filter-chip-icon-size: 24px;
        --md-filter-chip-leading-icon-color: var(--md-sys-color-on-surface);
        --md-filter-chip-outline-color: var(--md-sys-color-outline-variant);
      }

      :host(:not([display='grid'])) md-filter-chip[folder] {
        --md-filter-chip-icon-size: 24px;
        --md-filter-chip-container-shape: 0;
        --md-filter-chip-container-height: 46px;
        --md-filter-chip-outline-width: 1px 0 0 0;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      md-filter-chip[folder] icon-wrapper {
        display: block;
        position: relative;
      }

      md-filter-chip[folder] icon-wrapper file-count {
        font-family: 'Roboto', 'Noto', sans-serif;
        position: absolute;
        top: 4px;
        left: 4px;
        right: 5px;
        font-size: 11px;
        line-height: 20px;
        text-align: center;
      }

      :host(:not([display='grid'])) section:last-of-type > *:last-child {
        border-bottom: none;
      }

      /*File item styles */

      footer {
        display: grid;
        grid: 'button count . actions' / auto 1fr auto;
        gap: 12px;
        align-items: center;
        padding: 6px 2px;
        border-top: 1px solid var(--md-sys-color-outline-variant);
      }

      footer span[counts] {
        grid-area: count;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
      }

      footer-actions {
        grid-area: actions;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      md-menu[upload-menu] md-menu-item {
        min-width: 200px;
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
          <nav ellipsis>
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
                            @click=${(e) => {
                              e.preventDefault();
                              this.folderId = o.FolderId ?? null;
                              this.selected = [];
                            }}
                          >
                            ${o.Name}</a
                          >
                          <md-icon>navigate_next</md-icon>
                        `}
                  `
                )
              : html`<span ellipsis end> File explorer</span>`}
          </nav>
          <file-summary ?hidden=${!this.fileExplorer} ellipsis heading3
            >${this.fileExplorer?.FilesCount} files | ${this.fileExplorer?.FoldersCount} folders | ${formatBytes(this.fileExplorer?.Size)}</file-summary
          >
        </aside>
        <header-actions>
          ${this.selected
            ? html`
                ${
                  this.isAdmin && this.selected.length
                    ? html` <md-icon-button title="Delete selected" @click=${this.#deleteSelectedClick}> <md-icon>delete</md-icon></md-icon-button> `
                    : nothing
                }
                <md-icon-button
                 primary
                 ?hidden=${!this.selected.length}
                 ?disabled=${this.selected.length !== 1}
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
                <md-icon>info</md-icon>
                </md-icon-button>
              </header-contextual-actions>
            `
            : ''}
        </header-actions>

        <md-linear-progress ?hidden=${!this.isLoading} indeterminate></md-linear-progress>
      </header>
      <main>
        <leavitt-file-explorer-no-files ?hidden=${this.state !== 'no-files'}> </leavitt-file-explorer-no-files>
        <leavitt-file-explorer-no-permission ?hidden=${this.state !== 'no-permission'}> </leavitt-file-explorer-no-permission>
        <leavitt-file-explorer-error ?hidden=${this.state !== 'error'}> </leavitt-file-explorer-error>

        <h3 ?hidden=${this.folders.length === 0 || this.state != 'files'}>Folders (${this.folders.length})</h3>
        <section ?hidden=${this.folders.length === 0 || this.state != 'files'}>
          ${this.folders.map(
            (folder) => html`
              <md-filter-chip
                folder
                label="${folder.Name ?? ''}"
                ?selected=${this.selected.some((s) => s?.Id === folder.Id && s.type === 'folder')}
                title="${folder.Name ?? ''}
${folder.FilesCount} file${folder.FilesCount === 1 ? '' : 's'}, ${folder.FoldersCount} folder${folder.FoldersCount === 1 ? '' : 's'}"
                @dblclick=${(e) => {
                  window.clearTimeout(this.#doubleClickTimeout);
                  e.preventDefault();
                  this.folderId = folder.Id ?? null;
                  this.selected = [];
                }}
                @click=${(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  this.#doubleClickTimeout = window.setTimeout(() => this.#toggleSelected(folder, 'folder'), 220);
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
                <icon-wrapper slot="icon">
                  <md-icon>folder</md-icon>
                  <file-count>${this.#kFormatter(folder.FilesCount ?? 0) || ''}</file-count>
                </icon-wrapper>
              </md-filter-chip>
            `
          )}
        </section>
        <h3 ?hidden=${this.files.length === 0 || this.state != 'files'}>Files (${this.files.length})</h3>
        <section ?hidden=${this.files.length === 0 || this.state != 'files'}>
          ${this.files.map(
            (file) => html`
              <file-list-item
                .file=${file}
                ?selected=${this.selected.some((s) => s?.Id === file.Id && s.type === 'file')}
                .selectedCount=${this.selected.length}
                .display=${this.display}
                @display-file=${() => this.fileDialog.open(file)}
                @toggle-selected=${() => this.#toggleSelected(file, 'file')}
              ></file-list-item>
            `
          )}
        </section>
        <content-veil ?opened=${this.isLoading}></content-veil>
      </main>
      <footer>
        <md-icon-button
          ?disabled=${this.isLoading}
          view-style
          @click=${() => (this.display = this.display === 'grid' ? 'list' : 'grid')}
          title=${this.display === 'grid' ? 'Show list view' : 'Show grid view'}
        >
          <md-icon>${this.display === 'grid' ? 'view_list' : 'view_module'}</md-icon>
        </md-icon-button>
        <span counts> ${this.files.length} files | ${this.folders.length} folders </span>

        ${this.isAdmin
          ? html`
              <footer-actions>
                <md-text-button ?disabled=${this.isLoading} @click=${this.#addFolderClick}>
                  <md-icon slot="icon">create_new_folder</md-icon>
                  <span> Add folder</span>
                </md-text-button>
                <div style="position: relative;">
                  <md-text-button
                    id="upload-button"
                    ?disabled=${this.isLoading}
                    @click=${() => {
                      this.uploadMenu.open = !this.uploadMenu.open;
                    }}
                  >
                    <md-icon slot="icon">backup</md-icon>
                    Upload
                  </md-text-button>
                  <md-menu
                    upload-menu
                    anchor="upload-button"
                    @close-menu=${(e: CloseMenuEvent) => {
                      (e.detail.itemPath?.[0] as MenuItem & { action?: () => void })?.action?.();
                    }}
                  >
                    <md-menu-item .action=${() => this.fileInput.click()}>
                      <span slot="headline">Upload files</span>
                      <md-icon slot="start">upload_file</md-icon>
                    </md-menu-item>
                    <md-menu-item .action=${() => this.folderInput.click()}>
                      <span slot="headline">Upload folders</span>
                      <md-icon slot="start">perm_media</md-icon>
                    </md-menu-item>
                  </md-menu>
                </div>
                <input
                  folders
                  @change=${async () => this.#uploadFolders(this.folderInput.files)}
                  type="file"
                  webkitdirectory
                  directory
                  multiple
                  id="file"
                  style="display:none;"
                />
                <input files @change=${async () => this.#uploadFiles(this.fileInput.files)} type="file" multiple id="file" style="display:none;" />
              </footer-actions>
            `
          : nothing}
      </footer>
      <leavitt-add-folder-modal
        .apiService=${this.apiService}
        .fileExplorerId=${this.fileExplorerId}
        .parentFolderId=${this?.folderId ?? 0}
      ></leavitt-add-folder-modal>
      <leavitt-folder-modal .apiService=${this.apiService} .enableEditing=${this.isAdmin}></leavitt-folder-modal>
      <leavitt-file-modal .apiService=${this.apiService} .enableEditing=${this.isAdmin}></leavitt-file-modal>
      <titanium-confirm-dialog></titanium-confirm-dialog>
    `;
  }
}

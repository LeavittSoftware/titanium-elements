import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import '@material/mwc-icon-button';
import '@leavittsoftware/titanium-loading-indicator';
import '@material/mwc-linear-progress';
import './leavitt-file-explorer-no-files';
import './leavitt-file-explorer-no-permission';
import './leavitt-file-explorer-error';
import './leavitt-file-explorer-image';
import './leavitt-folder-modal';
import './leavitt-file-modal';

import { button, h1, a, ellipsis } from '@leavittsoftware/titanium-styles';
import { FormatBytes } from './format-bytes';
import dayjs from 'dayjs/esm';
import { LeavittFolderModalElement } from './leavitt-folder-modal';
import { FileExplorerFolderDto, FileExplorerPathDto, FileExplorerFileDto, FileExplorerDto } from '@leavittsoftware/lg-core-typescript/api2.leavitt.com';
import { FileExplorerAttachment } from '@leavittsoftware/lg-core-typescript/lg.core';
import { LeavittAddFolderModalElement } from './leavitt-add-folder-modal';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';
import { LeavittFileModalElement } from './leavitt-file-modal';
import { ConfirmDialogOpenEvent } from '@leavittsoftware/titanium-dialog/lib/confirm-dialog-open-event';
import { PendingStateEvent } from '@leavittsoftware/titanium-loading-indicator/lib/titanium-full-page-loading-indicator';
import api2Service from './api2-service';
import mapiService from './mapi-service';
import fileExplorerEvents from './file-explorer-events';
import { LoadWhile } from '@leavittsoftware/titanium-helpers';
import { getIcon } from './file-types';
import ConfirmDialogElement from '@leavittsoftware/titanium-dialog/lib/confirm-dialog';

/**
 * Leavitt Group specific file explorer
 *
 * @element leavitt-file-explorer
 *
 * @cssprop {Color} --app-light-text-color
 * @cssprop {Color} --app-hover-color
 * @cssprop {Color} --app-text-color
 * @cssprop {Color} --app-accent-color-blue
 * @cssprop {Color} --app-border-color
 * @cssprop {Color} --app-primary-color
 * @cssprop {Color} --leavitt-file-explorer-font-family - Font family
 * @cssprop {Color} --leavitt-file-explorer-selected-bg-color - selected file and folder item bg color
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
  private get display() {
    return (window.localStorage.getItem('leavitt-file-explorer-display') as 'grid' | 'list') || 'grid';
  }

  private set display(val: 'grid' | 'list') {
    localStorage.setItem('leavitt-file-explorer-display', val);
    this.requestUpdate('display');
  }

  @property({ type: String }) private state: 'no-permission' | 'files' | 'no-files' | 'error' = 'files';
  @state() isAdmin: boolean = false;
  @state() private files: FileExplorerFileDto[] = [];
  @state() private folders: FileExplorerFolderDto[] = [];
  @state() private path: FileExplorerPathDto[] = [];
  @state() private selected: ((FileExplorerFolderDto | FileExplorerFileDto) & { type: 'folder' | 'file' })[] = [];

  @query('leavitt-folder-modal') private folderDialog!: LeavittFolderModalElement;
  @query('leavitt-add-folder-modal') private addFolderModal!: LeavittAddFolderModalElement;
  @query('leavitt-file-modal') private fileDialog!: LeavittFileModalElement;
  @query('input') private fileInput!: HTMLInputElement;
  @query('confirm-dialog') private confirmDialog: ConfirmDialogElement;

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
      await this.#getExplorerData(this.fileExplorerId, this.folderId);
    }

    if (changedProps.has('isAdmin') && this.isAdmin) {
      //load admin elements
      await import('./leavitt-add-folder-modal');
    }
  }

  #isFolder(fileOrFolder: ((FileExplorerFolderDto | FileExplorerFileDto) & { type: 'folder' | 'file' }) | null) {
    return fileOrFolder?.type === 'folder';
  }

  async #getExplorerData(fileExplorerId: number, folderId: number | null) {
    try {
      const get = api2Service.getAsync<FileExplorerDto>(`FileExplorers(${fileExplorerId})/Default.FileExplorerView(folderId=${folderId})`);
      this.loadWhile(get);
      const result = await get;
      if (result.status == 200 && result.entity) {
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
      if (result.status == 401 || result.status == 404) {
        this.path = [{ Name: 'Files' } as FileExplorerPathDto];
        this.state = 'no-permission';
      }
    } catch (error) {
      console.warn(error);
      this.path = [{ Name: 'Files' } as FileExplorerPathDto];
      this.state = 'error';
    }
  }

  async #addFolderClick() {
    const newFolder = await this.addFolderModal.open();
    if (newFolder) {
      this.folders = [...this.folders, newFolder];
      this.state = 'files';
      // this.selected = [...this.selected, { ...newFolder, type: 'folder' }];
      this.dispatchEvent(new CustomEvent('folder-added', { detail: newFolder }));
    }
  }

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
              await api2Service.deleteAsync(`FileExplorerFolders(${o.Id})`);
              this.folders.splice(
                this.folders.findIndex(folder => folder.Id === o.Id),
                1
              );
              this.requestUpdate('folders');
            } else {
              await mapiService.deleteAsync(`FileExplorerAttachments(${o.Id})`);
              this.files.splice(
                this.files.findIndex(file => file.Id === o.Id),
                1
              );
              this.requestUpdate('files');
              this.selected = [];
            }

            this.state = this.folders.length > 0 || this.files.length > 0 ? 'files' : 'no-files';
          } catch (newError) {
            const newErrorCount = (errorMessageToCount.get(newError) ?? 0) + 1;
            errorMessageToCount.set(newError, newErrorCount);
            totalErrorCount++;
          }
        })
      );
      this.loadWhile(requests);
      await requests;
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

  async #uploadFiles(files: FileList | null) {
    const uri = this.folderId
      ? `FileExplorerFolders(${this.folderId})/Default.UploadAttachment()?$expand=Creator($select=Firstname,Lastname)`
      : `FileExplorers(${this.fileExplorerId})/Default.UploadAttachment()?$expand=Creator($select=Firstname,Lastname)`;

    const errorMessageToCount: Map<string, number> = new Map();
    let totalErrorCount = 0;
    const requests = Promise.all(
      Array.from(files ?? []).map(async file => {
        try {
          const result = (await mapiService.uploadFile<FileExplorerAttachment>(uri, file, () => console.log)).entity;
          if (result) {
            const attachment: FileExplorerFileDto = {
              ...result,
              CreatorFirstName: result.Creator?.FirstName ?? '',
              CreatorLastName: result.Creator?.LastName ?? '',
            };
            this.files = [...this.files, attachment];
            this.state = 'files';
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
    if (totalErrorCount > 0) {
      TitaniumSnackbarSingleton.open(
        html`Failed to upload ${totalErrorCount === 1 ? 'file' : `${totalErrorCount} files: <br />`}.
        ${errorMessageToCount.size === 1
          ? Array.from(errorMessageToCount.keys())[0]
          : Array.from(errorMessageToCount.entries()).map(([error, count]) => `(${count}) ${error} <br />`)}`
      );
    }
    this.fileInput.value = '';
  }

  #toggleSelected(item: FileExplorerFileDto | FileExplorerFolderDto, type: 'folder' | 'file') {
    const selected = this.selected.find(s => s?.Id === item.Id && s.type === type);
    if (selected) {
      this.selected = [...this.selected.filter(o => o !== selected)];
    } else {
      this.selected = [...this.selected, { ...item, type: type }];
    }
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
        gap: 8px 12px;

        margin: 0;
        padding: 12px 12px 0 12px;
        border-bottom: 1px solid var(--app-border-color, #dadce0);
      }

      mwc-linear-progress {
        grid-area: loader;
        margin: 0 -12px;
      }

      header nav {
        grid-area: nav;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2px;
        font-size: 18px;
        margin-left: 12px !important;
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
        gap: 8px;
        padding: 12px 24px;
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
        padding: 12px;
        max-height: 50px;
      }

      folder-item:focus:not([selected]) {
        background-color: var(--app-hover-color, #f9f9f9);
      }

      folder-item[selected] {
        background-color: var(--leavitt-file-explorer-selected-bg-color, #e8f0fe);
      }

      folder-item mwc-icon {
        grid-area: icon;
        color: var(--app-accent-color-blue, #4285f4);
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
        color: #707175;
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
      }

      file-item span[size] {
        grid-area: size;
        text-align: right;
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
        <nav heading1 ellipsis>
          ${this.path.map(
            (o, i) =>
              html`
                ${i == this.path.length - 1
                  ? html` <span ellipsis end title=${o?.Name ?? ''}> ${o.Name} </span> `
                  : html`
                      <a
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
          )}
        </nav>
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
                      this.folderDialog.open(this.selected[0]);
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
            folder =>
              html`
                <folder-item
                  role="button"
                  ?selected=${this.selected.some(s => s?.Id === folder.Id && s.type === 'folder')}
                  tabindex="0"
                  aria-label=${folder.Name ?? ''}
                  title=${folder.Name ?? ''}
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
                  <mwc-icon>folder_open</mwc-icon>
                  <span>${folder.Name}</span>
                </folder-item>
              `
          )}
        </section>
        <h3 ?hidden=${this.files.length === 0 || this.state != 'files'}>Files (${this.files.length})</h3>
        <section ?hidden=${this.files.length === 0 || this.state != 'files'}>
          ${this.files.map(
            file =>
              html`
                <file-item
                  role="button"
                  ?selected=${this.selected.some(s => s?.Id === file.Id && s.type === 'file')}
                  tabindex="0"
                  aria-label="${file.Name}.${file.Extension}"
                  title="${file.Name}.${file.Extension}"
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
        <span counts>${this.folders.length} folders | ${this.files.length} files </span>

        ${this.isAdmin
          ? html`
              <div footer-actions>
                <mwc-button lowercase ?disabled=${this.isLoading} label="Add folder" file @click=${this.#addFolderClick} icon="create_new_folder"></mwc-button>
                <mwc-button lowercase ?disabled=${this.isLoading} label="Upload" file @click=${() => this.fileInput.click()} icon="backup"></mwc-button>
                <input
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
      <leavitt-add-folder-modal .fileExplorerId=${this.fileExplorerId} .parentFolderId=${this?.folderId ?? 0}></leavitt-add-folder-modal>
      <leavitt-folder-modal .enableEditing=${this.isAdmin}></leavitt-folder-modal>
      <leavitt-file-modal .enableEditing=${this.isAdmin}></leavitt-file-modal>
      <confirm-dialog></confirm-dialog>
    `;
  }
}

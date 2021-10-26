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
import { ODataResponse } from '@leavittsoftware/api-service/lib/odata-response';
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
  @state() private selected: ((FileExplorerFolderDto | FileExplorerFileDto) & { type: 'folder' | 'file' }) | null = null;

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

  #isFolder(
    fileOrFolder: ((FileExplorerFolderDto | FileExplorerFileDto) & { type: 'folder' | 'file' }) | null
  ): fileOrFolder is FileExplorerFolderDto & { type: 'folder' | 'file' } {
    return (fileOrFolder as FileExplorerFolderDto & { type: 'folder' | 'file' }).type === 'folder';
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
      this.selected = { ...newFolder, type: 'folder' };
      this.dispatchEvent(new CustomEvent('folder-added', { detail: newFolder }));
    }
  }

  async #deleteSelectedClick() {
    if (!this.selected) {
      return;
    }
    const isFolder = this.#isFolder(this.selected);

    const confirmDialogEvent = new ConfirmDialogOpenEvent(
      'Please confirm delete',
      isFolder
        ? 'Deleting this folder will delete all of its contents. Are you sure you would like to delete it?'
        : 'Are you sure you would like to delete this file?'
    );

    this.dispatchEvent(confirmDialogEvent);

    if (await confirmDialogEvent.dialogResult) {
      this.#deleteSelected(this.selected, isFolder ? 'folders' : 'files');
      this.selected = null;
    }
  }

  async #deleteSelected(selected: FileExplorerFolderDto | FileExplorerFileDto, collection: 'folders' | 'files') {
    try {
      let del: Promise<ODataResponse<unknown>>;
      if (collection === 'files') {
        del = mapiService.deleteAsync(`FileExplorerAttachments(${selected?.Id})`);
      } else {
        del = api2Service.deleteAsync(`FileExplorerFolders(${selected?.Id})`);
      }
      this.dispatchEvent(new PendingStateEvent(del));
      await del;

      const idx = this[`${collection}`].findIndex(o => o.Id === selected?.Id);
      if (idx > -1) {
        this[`${collection}`].splice(idx, 1);
        this.state = this.folders.length > 0 || this.files.length > 0 ? 'files' : 'no-files';
        this.requestUpdate();
      }
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
    }
  }

  #openSelectedModal() {
    if (!this.selected) {
      return;
    }

    if (this.#isFolder(this.selected)) {
      this.folderDialog.open(this.selected);
    } else {
      this.fileDialog.open(this.selected);
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
                          this.selected = null;
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
                  this.isAdmin ? html` <mwc-icon-button title="Delete selected" @click=${this.#deleteSelectedClick} icon="delete"></mwc-icon-button> ` : nothing
                }
                <mwc-icon-button
                 primary
                 icon="info"
                  @click=${() => {
                    if (!this.selected) {
                      return;
                    }
                    this.#openSelectedModal();
                  }}
                >
                </mwc-icon-button>
              </header-contextual-actions>
            `
            : ''}
        </header-actions>
        <mwc-linear-progress ?hidden=${!this.isLoading} ?closed=${!this.isLoading} indeterminate></mwc-linear-progress>
      </header>
      <main
        @click=${() => {
          this.selected = null;
        }}
      >
        <leavitt-file-explorer-no-files ?hidden=${this.state !== 'no-files'}> </leavitt-file-explorer-no-files>
        <leavitt-file-explorer-no-permission ?hidden=${this.state !== 'no-permission'}> </leavitt-file-explorer-no-permission>
        <leavitt-file-explorer-error ?hidden=${this.state !== 'error'}> </leavitt-file-explorer-error>

        <h3 ?hidden=${this.folders.length === 0 || this.state != 'files'}>Folders (${this.folders.length})</h3>
        <section ?hidden=${this.folders.length === 0 || this.state != 'files'}>
          ${this.folders.map(
            o =>
              html`
                <folder-item
                  role="button"
                  ?selected=${this.selected?.Id === o.Id && this.selected.type === 'folder'}
                  tabindex="0"
                  aria-label=${o.Name ?? ''}
                  title=${o.Name ?? ''}
                  @dblclick=${e => {
                    e.preventDefault();
                    this.folderId = o.Id ?? null;
                    this.selected = null;
                  }}
                  @click=${e => {
                    e.stopPropagation();
                    if (this.selected?.Id === o.Id) {
                      this.selected = null;
                    } else {
                      this.selected = { ...o, type: 'folder' };
                    }
                  }}
                  @keydown=${e => {
                    if (e.keyCode === 13) {
                      e.preventDefault();
                      this.folderId = o.Id ?? null;
                      this.selected = null;
                    } else if (e.keyCode === 32) {
                      e.preventDefault();
                      if (this.selected?.Id === o.Id) {
                        this.selected = null;
                      } else {
                        this.selected = { ...o, type: 'folder' };
                      }
                    }
                  }}
                >
                  <mwc-icon>folder_open</mwc-icon>
                  <span>${o.Name}</span>
                </folder-item>
              `
          )}
        </section>
        <h3 ?hidden=${this.files.length === 0 || this.state != 'files'}>Files (${this.files.length})</h3>
        <section ?hidden=${this.files.length === 0 || this.state != 'files'}>
          ${this.files.map(
            o =>
              html`
                <file-item
                  role="button"
                  ?selected=${this.selected?.Id === o.Id && this.selected.type === 'file'}
                  tabindex="0"
                  aria-label="${o.Name}.${o.Extension}"
                  title="${o.Name}.${o.Extension}"
                  @click=${e => {
                    e.stopPropagation();
                    if (this.selected?.Id === o.Id) {
                      this.selected = null;
                    } else {
                      this.selected = { ...o, type: 'file' };
                    }
                    if (this.display === 'grid') {
                      this.#openSelectedModal();
                    }
                  }}
                  @keydown=${(e: KeyboardEvent) => {
                    if (e.key == ' ') {
                      if (this.selected?.Id === o.Id) {
                        this.selected = null;
                      } else {
                        this.selected = { ...o, type: 'file' };
                      }
                    }
                  }}
                >
                  <file-name>
                    <mwc-icon>${getIcon(o.Extension ?? '')}</mwc-icon>
                    <span name>${o.Name}</span>
                    <span ext>${o.Extension}</span>
                  </file-name>
                  ${this.display === 'list'
                    ? html`
                        <span date>${dayjs(o.CreatedDate).format('MMM D, YYYY')}</span>
                        <span size>${FormatBytes(o.Size)}</span>
                      `
                    : html`<image-wrapper> <leavitt-file-explorer-image .attachment=${o}></leavitt-file-explorer-image></image-wrapper>`}
                  <select-icon
                    @click=${e => {
                      e.stopPropagation();
                      if (this.selected?.Id === o.Id) {
                        this.selected = null;
                      } else {
                        this.selected = { ...o, type: 'file' };
                      }
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
                    if (this.fileInput?.files?.[0]) {
                      try {
                        const uri = this.folderId
                          ? `FileExplorerFolders(${this.folderId})/Default.UploadAttachment()?$expand=Creator($select=Firstname,Lastname)`
                          : `FileExplorers(${this.fileExplorerId})/Default.UploadAttachment()?$expand=Creator($select=Firstname,Lastname)`;

                        const upload = mapiService.uploadFile<FileExplorerAttachment>(uri, this.fileInput?.files?.[0], () => console.log);
                        this.dispatchEvent(new PendingStateEvent(upload));
                        const result = (await upload).entity;
                        if (result) {
                          const attachment: FileExplorerFileDto = {
                            ...result,
                            CreatorFirstName: result.Creator?.FirstName ?? '',
                            CreatorLastName: result.Creator?.LastName ?? '',
                          };
                          console.log(attachment);
                          this.files = [attachment, ...this.files];
                          this.state = 'files';
                        }
                      } catch (error) {
                        TitaniumSnackbarSingleton.open(error);
                      } finally {
                        this.fileInput.value = '';
                      }
                    }
                  }}
                  type="file"
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

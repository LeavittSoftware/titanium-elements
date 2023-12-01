import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import '@material/web/dialog/dialog';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/button/text-button';
import '@material/web/textfield/filled-text-field';
import '../profile-picture/profile-picture';

import dayjs from 'dayjs/esm';
import { FileExplorerFolderDto } from '@leavittsoftware/lg-core-typescript';
import { a, dataRow, ellipsis, h1, h5, p } from '../../titanium/styles/styles';
import fileExplorerEvents from './events/file-explorer-events';
import { MdDialog } from '@material/web/dialog/dialog';
import { DOMEvent } from '../../titanium/types/dom-event';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import ApiService from '../api-service/api-service';
import { TitaniumSnackbarSingleton } from '../../titanium/snackbar/snackbar';
import { LoadWhile } from '../../titanium/helpers/helpers';

@customElement('leavitt-folder-modal')
export class FolderModal extends LoadWhile(LitElement) {
  @property({ attribute: false }) accessor apiService: ApiService | null;
  @property({ type: Boolean }) accessor enableEditing: boolean = false;

  @state() private accessor state: 'view' | 'edit' = 'view';
  @state() private accessor folder: FileExplorerFolderDto | null = null;
  @state() private accessor folderName: string;

  @query('md-dialog') private accessor dialog!: MdDialog;

  firstUpdated() {
    fileExplorerEvents.subscribe<FileExplorerFolderDto>('FileExplorerFolder', 'Update', (o) => {
      if (o.Id === this.folder?.Id) {
        this.folder = { ...this.folder, ...o };
      }
    });
  }

  async #saveFolderName() {
    if (!this.apiService || this.folderName === this.folder?.Name || !this.folderName) {
      return;
    }

    const dto: Partial<FileExplorerFolderDto> = {
      Name: this.folderName,
    };

    try {
      const patch = this.apiService.patchAsync(`FileExplorerFolders(${this.folder?.Id})`, dto);
      this.loadWhile(patch);
      await patch;
      fileExplorerEvents.dispatch('FileExplorerFolder', 'Update', { ...this.folder, Name: this.folderName });
      this.state = 'view';
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
    }
  }

  open(folder: FileExplorerFolderDto) {
    this.folder = folder;
    this.state = 'view';
    this.dialog.show();
  }

  static styles = [
    h1,
    h5,
    p,
    a,
    ellipsis,
    dataRow,
    css`
      :host {
        display: block;
      }

      md-dialog {
        min-width: 550px;
      }

      static-header {
        height: 80px;
        display: grid;
        grid: 'icon input button' / auto 1fr auto;
      }

      static-header h1 {
        word-break: break-all;
      }

      md-icon-button[save] {
        --md-icon-button-icon-color: var(--md-sys-color-primary);
        --md-icon-button-focus-icon-color: var(--md-sys-color-primary);
      }

      md-filled-text-field {
        width: 100%;
        --md-filled-text-field-container-shape-start-start: 16px;
        --md-filled-text-field-container-shape-start-end: 16px;
      }

      main {
        display: flex;
        flex-direction: column;
        gap: 12px;
        overflow: auto;
      }

      data-row {
        margin: 0;
        border: none;
        padding: 8px 24px 8px 0px;
      }

      data-row p {
        max-width: 450px;
      }

      @media (max-width: 620px) {
        md-dialog {
          min-width: initial;
        }
      }

      @media (max-width: 480px) {
        header {
          gap: 12px;
          align-items: center;
        }

        header {
          flex-direction: column;
        }
      }

      [hidden] {
        display: none;
      }
    `,
  ];

  render() {
    return html`
      <md-dialog>
        ${this.state === 'view'
          ? html`<static-header slot="headline"
              ><md-icon>folder</md-icon>
              <h1>${this.folder?.Name}</h1>
              <md-icon-button
                ?hidden=${!this.enableEditing}
                @click=${() => {
                  this.state = 'edit';
                  this.folderName = this.folder?.Name ?? '';
                }}
              >
                <md-icon>create</md-icon>
              </md-icon-button>
            </static-header>`
          : html`<md-filled-text-field
              slot="headline"
              label="Folder name"
              .value=${this.folderName ?? ''}
              @input=${(event: DOMEvent<MdOutlinedTextField>) => (this.folderName = event.target.value)}
            >
              <md-icon-button slot="trailing-icon" @click=${() => (this.state = 'view')} ?disabled=${this.isLoading}>
                <md-icon>cancel</md-icon>
              </md-icon-button>
              <md-icon-button
                save
                slot="trailing-icon"
                ?disabled=${this.folderName === this.folder?.Name || !this.folderName || this.isLoading}
                @click=${() => this.#saveFolderName()}
              >
                <md-icon>save</md-icon>
              </md-icon-button>
            </md-filled-text-field>`}
        <main slot="content">
          <data-row force-stacked>
            <h5>Files</h5>
            <p>${this.folder?.FilesCount}</p>
          </data-row>
          <data-row force-stacked>
            <h5>Folders</h5>
            <p>${this.folder?.FoldersCount}</p>
          </data-row>
          <data-row force-stacked>
            <h5>Created</h5>
            <p>${dayjs(this.folder?.CreatedDate).format('MMM D, YYYY h:mm:ss a')}</p>
          </data-row>
          ${!this.folder?.CreatorId
            ? nothing
            : html`<data-row force-stacked>
                <h5>Created by</h5>
                <p image>
                  <profile-picture size="24" .fileName=${this.folder.CreatorProfilePictureCndFileName}></profile-picture> ${this.folder?.CreatorFullName}
                </p>
              </data-row>`}
        </main>
        <div slot="actions">
          <md-text-button @click=${() => this.dialog.close()}> Close </md-text-button>
        </div>
      </md-dialog>
    `;
  }
}

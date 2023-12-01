import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import '@material/web/dialog/dialog';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/button/text-button';
import '@material/web/textfield/filled-text-field';
import '../profile-picture/profile-picture';

import dayjs from 'dayjs/esm';
import { FileExplorerAttachment, FileExplorerFileDto } from '@leavittsoftware/lg-core-typescript';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { getCdnDownloadUrl } from '../../titanium/helpers/get-cdn-download-url';
import { a, dataRow, ellipsis, h1, h5, p } from '../../titanium/styles/styles';
import { getCdnInlineUrl } from '../../titanium/helpers/get-cdn-Inline-url';
import { middleEllipsis } from '../../titanium/helpers/middle-ellipsis';
import fileExplorerEvents from './events/file-explorer-events';
import { MdDialog } from '@material/web/dialog/dialog';
import { DOMEvent } from '../../titanium/types/dom-event';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import ApiService from '../api-service/api-service';
import { TitaniumSnackbarSingleton } from '../../titanium/snackbar/snackbar';
import { LoadWhile } from '../../titanium/helpers/helpers';

@customElement('leavitt-file-modal')
export class LeavittFileModal extends LoadWhile(LitElement) {
  @property({ attribute: false }) accessor apiService: ApiService | null;
  @property({ type: Boolean }) accessor enableEditing: boolean = false;

  @state() private accessor state: 'view' | 'edit' = 'view';
  @state() private accessor file: FileExplorerFileDto | null = null;
  @state() private accessor isCopying: boolean = false;
  @state() private accessor hasClipboard: boolean = false;
  @state() private accessor fileName: string;
  @query('md-dialog') private accessor dialog!: MdDialog;

  firstUpdated() {
    fileExplorerEvents.subscribe<FileExplorerFileDto>('FileExplorerFileDto', 'Update', (o) => {
      if (o.Id === this.file?.Id) {
        this.file = { ...this.file, ...o };
      }
    });

    if (navigator.clipboard) {
      this.hasClipboard = true;
    }
  }

  async #saveFileName() {
    if (!this.apiService || this.fileName === this.file?.Name || !this.fileName) {
      return;
    }

    const dto: Partial<FileExplorerAttachment> = {
      Name: this.fileName,
    };

    try {
      const patch = this.apiService.patchAsync(`FileExplorerAttachments(${this.file?.Id})`, dto);
      this.loadWhile(patch);
      await patch;
      fileExplorerEvents.dispatch('FileExplorerFileDto', 'Update', { ...this.file, Name: this.fileName });
      this.state = 'view';
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
    }
  }

  async open(file: FileExplorerFileDto) {
    this.file = file;
    this.state = 'view';
    return await this.dialog.show();
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
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 48px);
      }

      header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        gap: 8px;
      }

      header h1 {
        margin: 4px 0 0 0;
        word-break: break-all;
        text-align: center;
      }

      header mwc-icon-button {
        align-self: center;
      }

      header md-filled-text-field {
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

      a[download-link] {
        cursor: pointer;
      }

      img[preview] {
        height: auto;
        width: auto;
        place-self: center;
      }

      main[ext='pdf'] img[preview] {
        border: 1px solid var(--md-sys-color-outline-variant);
      }

      no-preview {
        display: flex;
        flex-direction: column;
        height: 320px;
        width: 430px;
        place-self: center;
        place-content: center;
        text-align: center;
        border: 1px dashed var(--md-sys-color-outline-variant);
        border-radius: 8px;
      }

      data-row {
        margin: 0;
        border: none;
        padding: 8px 24px 8px 0px;
      }

      data-row p {
        max-width: 450px;
      }

      p[alert] {
        transition: 0.3s ease;
        opacity: 1;
        color: var(--md-sys-color-primary);
        font-size: 12px;
        font-weight: 500;
      }

      @media (max-width: 480px) {
        header {
          gap: 12px;
          align-items: center;
        }

        img[preview] {
          place-self: initial;
        }

        header {
          flex-direction: column;
        }

        no-preview {
          height: 120px;
          width: 230px;
        }
      }

      p[alert][invisible] {
        opacity: 0;
      }

      [hidden] {
        display: none;
      }
    `,
  ];

  render() {
    return html`
      <md-dialog>
        <header slot="headline">
          ${this.state === 'view'
            ? html`<h1 title="${this.file?.Name ?? ''}.${this.file?.Extension ?? ''}">
                ${middleEllipsis(`${this.file?.Name ?? ''}.${this.file?.Extension ?? ''}`)}
              </h1>`
            : html`<md-filled-text-field
                label="File name"
                value=${this.fileName ?? ''}
                @input=${(event: DOMEvent<MdOutlinedTextField>) => (this.fileName = event.target.value)}
              >
                <md-icon-button slot="trailing-icon" @click=${() => (this.state = 'view')} ?disabled=${this.isLoading}>
                  <md-icon>cancel</md-icon>
                </md-icon-button>
                <md-icon-button
                  slot="trailing-icon"
                  ?disabled=${this.fileName === this.file?.Name || !this.fileName || this.isLoading}
                  @click=${() => this.#saveFileName()}
                >
                  <md-icon>save</md-icon>
                </md-icon-button>
              </md-filled-text-field>`}

          <md-icon-button
            ?hidden=${!this.enableEditing || this.state === 'edit'}
            @click=${() => {
              this.state = 'edit';
              this.fileName = this.file?.Name ?? '';
            }}
          >
            <md-icon>${this.state === 'edit' ? 'cancel' : 'create'}</md-icon>
          </md-icon-button>
        </header>
        <main ext="${this.file?.Extension ?? ''}" slot="content">
          ${this.file?.PreviewSizes?.includes('512')
            ? html` <img preview loading="lazy" src=${ifDefined(getCdnInlineUrl(this.file, 512))} />`
            : html`<no-preview><p>No preview currently available</p> </no-preview> `}

          <data-row force-stacked>
            <h5>Uploaded</h5>
            <p>${dayjs(this.file?.CreatedDate).format('MMM D, YYYY h:mm:ss a')}</p>
          </data-row>
          ${!this.file?.CreatorId
            ? nothing
            : html`<data-row force-stacked>
                <h5>Uploaded by</h5>
                <p image><profile-picture size="24" .fileName=${this.file.CreatorProfilePictureCndFileName}></profile-picture> ${this.file?.CreatorFullName}</p>
              </data-row>`}
          <data-row force-stacked>
            <h5>Copy download link</h5>
            <p ellipsis>
              ${this.hasClipboard
                ? html`
                    <a
                      download-link
                      title="Copy direct download link to clipboard"
                      @click=${() => {
                        const link = getCdnDownloadUrl(this.file);
                        if (link) {
                          navigator.clipboard.writeText(link);
                          this.isCopying = true;
                          setTimeout(() => {
                            this.isCopying = false;
                          }, 2000);
                        }
                      }}
                    >
                      ${getCdnDownloadUrl(this.file)}
                    </a>
                  `
                : html` ${getCdnDownloadUrl(this.file)} `}
            </p>
            <p alert ?invisible=${!this.isCopying}>Copied to clipboard</p>
          </data-row>
        </main>
        <div slot="actions">
          <md-text-button
            @click=${() => {
              const link = getCdnDownloadUrl(this.file);
              window.open(link);
            }}
            >Download</md-text-button
          >
          <md-text-button @click=${() => this.dialog.close()}> Close </md-text-button>
        </div>
      </md-dialog>
    `;
  }
}

import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import '@material/web/dialog/dialog';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/button/text-button';
import '@material/web/textfield/filled-text-field';
import '../profile-picture/profile-picture';

import dayjs from 'dayjs/esm';
import { FileExplorerFileDto } from '@leavittsoftware/lg-core-typescript';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { getCdnDownloadUrl } from '../../titanium/helpers/get-cdn-download-url';
import { a, ellipsis, h1, h2, h5, p } from '../../titanium/styles/styles';
import { getCdnInlineUrl } from '../../titanium/helpers/get-cdn-Inline-url';
import { middleEllipsis } from '../../titanium/helpers/middle-ellipsis';
import fileExplorerEvents from './events/file-explorer-events';
import { MdDialog } from '@material/web/dialog/dialog';

@customElement('leavitt-file-modal')
export class LeavittFileModal extends LitElement {
  @property({ type: Boolean }) enableEditing: boolean = false;

  @state() protected state: 'view' | 'edit' = 'view';
  @state() protected file: FileExplorerFileDto | null = null;
  @state() protected isCopying: boolean = false;
  @state() protected hasClipboard: boolean = false;

  @query('md-dialog') protected dialog!: MdDialog;

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

  #createDownloadLinkClick(file: FileExplorerFileDto | null) {
    const link = getCdnDownloadUrl(file);
    if (link) {
      navigator.clipboard.writeText(link);
      this.isCopying = true;
      setTimeout(() => {
        this.isCopying = false;
      }, 2000);
    }
  }

  async open(file: FileExplorerFileDto) {
    this.file = file;
    this.state = 'view';
    return await this.dialog.show();
  }

  static styles = [
    h1,
    h2,
    h5,
    p,
    a,
    ellipsis,
    css`
      :host {
        display: block;
      }

      md-dialog {
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 48px);
      }

      main {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 24px 24px;
        overflow: auto;
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

      file-name {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
      }

      file-name h1 {
        margin: 4px 0 0 0;
        word-break: break-all;
        text-align: center;
      }

      file-name mwc-icon-button {
        align-self: center;
      }

      data-item {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 12px;
      }

      data-item:first-of-type {
        margin-top: 4px;
      }

      p {
        max-width: 450px;
        transition: 0.3s ease;
        opacity: 1;
      }

      div[user] {
        display: flex;
        align-content: center;
        gap: 6px;
      }

      img[profile] {
        border-radius: 50%;
        height: 18px;
        image-rendering: crisp-edges;
      }

      md-filled-text-field {
        width: 100%;
      }

      @media (max-width: 480px) {
        header {
          gap: 12px;
          align-items: center;
        }

        p {
          max-width: 250px;
        }

        img[preview] {
          place-self: initial;
        }

        file-name {
          flex-direction: column;
        }

        no-preview {
          height: 120px;
          width: 230px;
        }
      }

      [invisible] {
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
        <main ext="${this.file?.Extension ?? ''}" slot="content">
          ${this.file?.PreviewSizes?.includes('512')
            ? html` <img preview loading="lazy" src=${ifDefined(getCdnInlineUrl(this.file, 512))} />`
            : html`<no-preview><p>No preview currently available</p> </no-preview> `}
          <file-name>
            ${this.state === 'view'
              ? html`<h1 title="${this.file?.Name ?? ''}.${this.file?.Extension ?? ''}">
                  ${middleEllipsis(`${this.file?.Name ?? ''}.${this.file?.Extension ?? ''}`)}
                </h1>`
              : html`<md-filled-text-field label="File name" value=${this.file?.Name ?? ''}></md-filled-text-field>`}

            <md-icon-button ?hidden=${!this.enableEditing} title="Edit filename" @click=${() => (this.state = this.state === 'edit' ? 'view' : 'edit')}>
              <md-icon>${this.state === 'edit' ? 'cancel' : 'create'}</md-icon>
            </md-icon-button>
          </file-name>
          <h2>File details</h2>
          <data-item>
            <h5>Uploaded</h5>
            <p>${dayjs(this.file?.CreatedDate).format('MMM D, YYYY h:mm:ss a')}</p>
          </data-item>
          ${!this.file?.CreatorId
            ? nothing
            : html`<data-item>
                <h5>Uploaded By</h5>
                <div user>
                  <img profile onerror="this.src='https://cdn.leavitt.com/user-0-32.jpeg'" src="https://cdn.leavitt.com/user-${this.file?.CreatorId}-32.jpeg" />
                  <p>${this.file?.CreatorFirstName} ${this.file?.CreatorLastName}</p>
                </div>
              </data-item>`}
          <data-item>
            <h5>Direct Download link</h5>
            <p ellipsis>
              ${this.hasClipboard
                ? html`
                    <a download-link title="Copy direct download link to clipboard" @click=${() => this.#createDownloadLinkClick(this.file)}>
                      ${getCdnDownloadUrl(this.file)}
                    </a>
                  `
                : html` ${getCdnDownloadUrl(this.file)} `}
            </p>
          </data-item>
        </main>
        <div slot="actions">
          <md-text-button
            @click=${() => {
              const link = getCdnDownloadUrl(this.file);
              window.open(link);
              this.dispatchEvent(new CustomEvent('close-click'));
            }}
            >Download</md-text-button
          >
          <md-text-button @click=${() => this.dispatchEvent(new CustomEvent('close-click'))}> Close </md-text-button>
        </div>
      </md-dialog>
    `;
  }
}

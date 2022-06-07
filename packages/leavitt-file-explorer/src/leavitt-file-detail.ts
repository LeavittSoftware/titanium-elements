import '@material/mwc-icon-button';
import '@material/mwc-button';

import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { h1, h2, h5, p, a, ellipsis } from '@leavittsoftware/titanium-styles';

import dayjs from 'dayjs/esm';
import { FileExplorerFileDto } from '@leavittsoftware/lg-core-typescript/api3.leavitt.com';
import { getCdnDownloadUrl, getCdnInlineUrl } from '@leavittsoftware/titanium-helpers/lib/leavitt-cdn';
import { middleEllipsis } from './text-helpers';
import { ifDefined } from 'lit-html/directives/if-defined.js';

@customElement('leavitt-file-detail')
export class LeavittFileDetailElement extends LitElement {
  @property({ type: Object }) file: FileExplorerFileDto | null = null;
  @property({ type: Boolean }) enableEditing: boolean = false;

  @state() private isCopying: boolean = false;
  @state() private hasClipboard: boolean = false;

  firstUpdated() {
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

  static styles = [
    h1,
    h2,
    h5,
    p,
    a,
    ellipsis,
    css`
      :host {
        display: grid;
        grid:
          'body' 1fr
          'footer';
        overflow: hidden;
      }

      mwc-icon-button {
        color: var(--app-text-color, #5f6368);
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
        border: 1px solid var(--app-border-color, #dadce0);
      }

      no-preview {
        display: flex;
        flex-direction: column;
        height: 320px;
        width: 430px;
        place-self: center;
        place-content: center;
        text-align: center;
        border: 1px dashed var(--app-border-color, #dadce0);
        border-radius: 8px;
      }

      file-name {
        display: flex;
        justify-content: center;
        gap: 8px;
      }

      file-name h1 {
        margin: 12px 0 0 0;
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
        color: var(--app-text-color, #5f6368);
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

      footer {
        display: grid;
        grid: 'alert button button' / 1fr auto auto;
        align-items: center;
        gap: 12px;

        padding: 12px 12px 12px 24px;
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
      <main ext="${this.file?.Extension ?? ''}">
        ${this.file?.PreviewSizes?.includes('512')
          ? html` <img preview loading="lazy" src=${ifDefined(getCdnInlineUrl(this.file, 512))} />`
          : html`<no-preview><p>No preview currently available</p> </no-preview> `}
        <file-name>
          <h1 title="${this.file?.Name ?? ''}.${this.file?.Extension ?? ''}">${middleEllipsis(`${this.file?.Name ?? ''}.${this.file?.Extension ?? ''}`)}</h1>
          <mwc-icon-button
            ?hidden=${!this.enableEditing}
            title="Edit filename"
            @click=${() => this.dispatchEvent(new CustomEvent('edit-click'))}
            icon="create"
          ></mwc-icon-button>
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
      <footer>
        <p ?invisible=${!this.isCopying}>Copied to clipboard</p>
        <mwc-button
          @click=${() => {
            const link = getCdnDownloadUrl(this.file);
            window.open(link);
            this.dispatchEvent(new CustomEvent('close-click'));
          }}
          label="DOWNLOAD"
        ></mwc-button>
        <mwc-button label="DONE" @click=${() => this.dispatchEvent(new CustomEvent('close-click'))}></mwc-button>
      </footer>
    `;
  }
}

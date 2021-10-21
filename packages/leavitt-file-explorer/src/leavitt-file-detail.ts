import '@material/mwc-icon-button';
import '@material/mwc-button';
import './leavitt-file-explorer-image';

import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { h1, h2, h5, p, a, ellipsis } from '@leavittsoftware/titanium-styles';

import dayjs from 'dayjs/esm';
import { FileExplorerFileDto } from '@leavittsoftware/lg-core-typescript/api2.leavitt.com';
import { getCdnDownloadUrl } from '@leavittsoftware/titanium-helpers/lib/leavitt-cdn';
import { Attachment } from '@leavittsoftware/lg-core-typescript/lg.core';
import { middleEllipsis } from './text-helpers';

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
        display: block;
      }

      header {
        display: flex;
        flex-direction: row;
        gap: 24px;
        padding: 12px 12px 12px 24px;
        border-bottom: 1px solid var(--app-border-color, #dadce0);
      }

      header h1 {
        flex: 1 1 auto;
      }

      header leavitt-file-explorer-image {
        flex-shrink: 0;
        height: 80px;
        width: 80px;
        margin-top: 10px;
      }

      header h1 {
        margin: 12px 0 0 0;
        word-break: break-all;
      }

      mwc-icon-button {
        color: var(--app-text-color, #5f6368);
      }

      main {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 12px 24px;
      }

      data-item {
        display: flex;
        flex-direction: column;
        gap: 6px;
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

      img {
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

        header leavitt-file-explorer-image {
          height: 40px;
          width: 40px;
        }

        p {
          max-width: 250px;
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
      <header>
        <leavitt-file-explorer-image shape="rounded" .attachment=${this.file as Partial<Attachment>}></leavitt-file-explorer-image>
        <h1 title="${this.file?.Name ?? ''}.${this.file?.Extension ?? ''}">${middleEllipsis(`${this.file?.Name ?? ''}.${this.file?.Extension ?? ''}`)}</h1>
        <header-actions>
          <mwc-icon-button
            ?hidden=${!this.enableEditing}
            title="Edit filename"
            @click=${() => this.dispatchEvent(new CustomEvent('edit-click'))}
            icon="create"
          ></mwc-icon-button>
        </header-actions>
      </header>
      <main>
        <h2>File details</h2>
        <data-item>
          <h5>Uploaded</h5>
          <p>${dayjs(this.file?.CreatedDate).format('MMM D, YYYY h:mm:ss a')}</p>
        </data-item>
        <data-item>
          <h5>Uploaded By</h5>
          <div user>
            <img onerror="this.src='https://cdn.leavitt.com/user-0-32.jpeg'" src="https://cdn.leavitt.com/user-${this.file?.CreatorId}-32.jpeg" />
            <p>${this.file?.CreatorFirstName} ${this.file?.CreatorLastName}</p>
          </div>
        </data-item>
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

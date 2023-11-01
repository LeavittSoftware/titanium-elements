import '@material/mwc-icon-button';
import '@material/mwc-button';
import '@material/mwc-icon';

import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { h1, h2, h5, p, a, ellipsis } from '@leavittsoftware/titanium-styles';

import dayjs from 'dayjs/esm';
import { FileExplorerFolderDto } from '@leavittsoftware/lg-core-typescript/api3.leavitt.com';

@customElement('leavitt-folder-detail')
export class LeavittFolderDetailElement extends LitElement {
  @property({ type: Object }) folder: FileExplorerFolderDto | null = null;
  @property({ type: Boolean }) enableEditing: boolean = false;

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
        gap: 12px;
        padding: 12px 12px 12px 24px;
        border-bottom: 1px solid var(--app-border-color, #dadce0);
      }

      header h1 {
        flex: 1 1 auto;
      }

      header mwc-icon {
        flex-shrink: 0;
        --mdc-icon-size: 32px;
        color: var(--app-accent-color-blue, #4285f4);
        margin-top: 8px;
      }

      header h1 {
        margin: 12px 0 0 0;
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
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 12px 12px 12px 24px;
      }

      @media (max-width: 480px) {
        header {
          gap: 12px;
          align-items: center;
        }

        header mwc-icon {
          --mdc-icon-size: 24px;
        }

        p {
          max-width: 250px;
        }
      }

      [hidden] {
        display: none;
      }
    `,
  ];

  render() {
    return html`
      <header>
        <mwc-icon>folder_open</mwc-icon>
        <h1>${this.folder?.Name}</h1>
        <header-actions>
          <mwc-icon-button
            ?hidden=${!this.enableEditing}
            title="Edit folder"
            @click=${() => this.dispatchEvent(new CustomEvent('edit-click'))}
            icon="create"
          ></mwc-icon-button>
        </header-actions>
      </header>
      <main>
        <h2>Folder details</h2>
        <data-item>
          <h5>Created</h5>
          <p>${dayjs(this.folder?.CreatedDate).format('MMM D, YYYY h:mm:ss a')}</p>
        </data-item>
        ${!this.folder?.CreatorId
          ? nothing
          : html`<data-item>
              <h5>Created By</h5>
              <div user>
                <img onerror="this.src='https://cdn.leavitt.com/user-0-32.jpeg'" src="https://cdn.leavitt.com/user-${this.folder?.CreatorId}-32.jpeg" />
                <p>${this.folder?.CreatorFirstName} ${this.folder?.CreatorLastName}</p>
              </div>
            </data-item>`}
      </main>
      <footer>
        <mwc-button label="DONE" @click=${() => this.dispatchEvent(new CustomEvent('close-click'))}></mwc-button>
      </footer>
    `;
  }
}

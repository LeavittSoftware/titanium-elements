import '@leavittsoftware/titanium-dialog/lib/titanium-native-dialog-base';

import { h1, p } from '@leavittsoftware/titanium-styles';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { TitaniumNativeDialogBaseElement } from '@leavittsoftware/titanium-dialog/lib/titanium-native-dialog-base';
import { middleEllipsis } from '@leavittsoftware/titanium-helpers';

/**
 * Image preview dialog
 *
 * @element image-preview-dialog
 *
 */
@customElement('image-preview-dialog')
export class ImagePreviewDialog extends LitElement {
  @state() protected imageUrl: string | undefined;
  @state() protected downloadSrc: string | undefined;
  @state() protected filename: string | undefined;

  @query('titanium-native-dialog-base ') protected dialog!: TitaniumNativeDialogBaseElement;

  async open(imageUrl: string, downloadSrc?: string, filename?: string) {
    this.imageUrl = undefined; //prevent ghost images
    this.filename = filename;
    await this.updateComplete;
    this.downloadSrc = downloadSrc;
    this.imageUrl = imageUrl;
    return await this.dialog.open();
  }

  static styles = [
    h1,
    p,
    css`
      main {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      h1 {
        word-break: break-all;
        padding: 18px 24px 12px 24px;
        pointer-events: none;
      }

      section {
        display: flex;
        flex: 1 1 auto;
        overflow-y: auto;
        overflow-x: auto;
        margin: 0 24px;
      }

      img {
        height: 100%;
      }

      footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 12px 16px 8px 16px;
        gap: 8px;
      }

      titanium-native-dialog-base {
        --titanium-dialog-min-width: 30vw;
      }

      @media (max-width: 920px) {
        titanium-native-dialog-base {
          --titanium-dialog-max-height: 90vh;
        }
      }
    `,
  ];

  render() {
    return html`
      <titanium-native-dialog-base>
        <main>
          <h1>${middleEllipsis(this.filename || 'Image preview', 60)}</h1>
          <section>
            <img draggable="false" src=${ifDefined(this.imageUrl)} />
          </section>
          <footer>
            ${this.downloadSrc
              ? html`<mwc-button
                  icon="file_download"
                  slot="secondaryAction"
                  @click=${(e: MouseEvent) => {
                    e.stopPropagation();
                    window.open(this.downloadSrc);
                  }}
                  label="DOWNLOAD"
                ></mwc-button>`
              : html`<div></div>`}

            <mwc-button
              close
              slot="primaryAction"
              @click=${(e: MouseEvent) => {
                e.stopPropagation();
                this.dialog.close('close');
              }}
              label="CLOSE"
            ></mwc-button>
          </footer>
        </main>
      </titanium-native-dialog-base>
    `;
  }
}

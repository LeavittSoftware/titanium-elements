import '@material/web/dialog/dialog';
import '@material/web/icon/icon';
import '@material/web/button/text-button';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { middleEllipsis } from '../../titanium/helpers/middle-ellipsis';
import { MdDialog } from '@material/web/dialog/dialog';

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

  @query('md-dialog') protected accessor dialog: MdDialog;

  async open(imageUrl: string, downloadSrc?: string, filename?: string) {
    this.imageUrl = undefined; //prevent ghost images
    this.filename = filename;
    this.downloadSrc = downloadSrc;
    this.imageUrl = imageUrl;
    return this.dialog.show();
  }

  static styles = [
    css`
      div[header] {
        word-break: break-all;
      }

      md-dialog {
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 48px);
      }

      img {
        width: 100%;
      }
    `,
  ];

  render() {
    return html`
      <md-dialog>
        <div header slot="headline">${middleEllipsis(this.filename || 'Image preview', 60)}</div>
        <img slot="content" draggable="false" src=${ifDefined(this.imageUrl)} />
        <div slot="actions">
          ${this.downloadSrc
            ? html`<md-text-button
                @click=${(e: MouseEvent) => {
                  e.stopPropagation();
                  window.open(this.downloadSrc);
                }}
                ><md-icon slot="icon">file_download</md-icon>Download</md-text-button
              >`
            : html`<div></div>`}

          <md-text-button
            @click=${(e: MouseEvent) => {
              e.stopPropagation();
              this.dialog.close('close');
            }}
            >Close</md-text-button
          >
        </div>
      </md-dialog>
    `;
  }
}

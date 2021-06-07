import '@leavittsoftware/titanium-dialog/lib/titanium-dialog-base';
import '@material/mwc-button';
import '@material/mwc-icon-button';

import { css, customElement, html, LitElement, query, property } from 'lit-element';
import { TitaniumDialogBaseElement } from '@leavittsoftware/titanium-dialog/lib/titanium-dialog-base';
import Cropper from 'cropperjs';
import { cropperCSS } from './cropper-styles';
import { h1 } from '@leavittsoftware/titanium-styles';

@customElement('image-cropper-dialog')
export class ImageCropperDialogElement extends LitElement {
  @query('titanium-dialog-base') dialog: TitaniumDialogBaseElement;
  @query('cropper-container > img') img: HTMLImageElement;

  @property({ type: Object }) options: Cropper.Options = { aspectRatio: 1 };
  @property({ type: Object }) file: File | null = null;
  @property({ type: String }) fileName: string = '';
  @property({ type: String }) previewDataUrl: string | null = null;

  private cropper: null | Cropper;

  static styles = [
    h1,
    cropperCSS,
    css`
      :host {
        display: block;
      }

      h1 {
        margin: 24px 24px 12px 24px;
      }

      main {
        display: flex;
        position: relative;
        width: 800px;
        height: 400px;
        padding: 12px 24px 24px 24px;
        align-self: center;
      }

      section[crop] {
        display: grid;
        grid-template-columns: 1fr 58px;
        grid-template-areas: 'cropper buttons';
      }

      cropper-container {
        display: block;
        grid-area: cropper;
        height: 400px;
      }

      cropper-container img {
        display: block;
        /* This rule is very important, please don't ignore this */
        max-width: 100%;
      }

      crop-buttons {
        grid-area: buttons;

        display: grid;
        align-content: start;
        grid-auto-flow: row;

        padding: 0 8px;
        gap: 8px;
      }

      dialog-actions {
        display: grid;
        grid-auto-flow: column;
        justify-content: end;

        padding: 8px;
        gap: 8px;
      }

      hr {
        width: 100%;
        border: 0;
        border-top: 1px solid var(--app-border-color, #dadce0);
        margin: 23px 0 0 0;
        height: 1px;
      }

      @media (max-width: 1000px) {
        main {
          width: 450px;
          height: 250px;
        }

        cropper-container {
          height: 250px;
        }
      }

      @media (max-width: 600px) {
        main {
          height: 360px;
          width: 330px;
        }

        section[crop] {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 58px;
          grid-template-areas:
            'cropper'
            'buttons';
        }

        crop-buttons {
          justify-content: end;
          grid-auto-flow: column;
          padding: 8px 0;
        }

        cropper-container {
          height: 320px;
        }

        button[select-image] h5 {
          font-size: 28px;
        }
      }

      @media (max-width: 360px) {
        main {
          height: auto;
          width: 250px;
        }

        cropper-container {
          height: 320px;
        }

        button[select-image] h5 {
          font-size: 28px;
        }
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  async open(url: string, filename: string) {
    this.reset();
    this.fileName = filename;
    this._setCropperImage(url);
    return await this.dialog.open();
  }

  reset() {
    this.cropper?.destroy();
  }

  private _setCropperImage(url: string) {
    this.img.src = url;

    this.cropper = new Cropper(this.img, {
      viewMode: 2,
      ...this.options,
    });
  }

  public blobToFile = (blob: Blob, fileName: string): File => {
    const file = blob as Blob & { lastModified: Date; name: string };
    file.lastModified = new Date();
    file.name = fileName;
    return blob as File;
  };

  render() {
    return html`
      <titanium-dialog-base>
        <h1 select>Crop photo</h1>
        <main>
          <section crop>
            <cropper-container>
              <img />
            </cropper-container>
            <crop-buttons>
              <mwc-icon-button label="Rotate right" title="Rotate right" icon="rotate_right" @click=${() => this.cropper?.rotate(90)}></mwc-icon-button>
              <mwc-icon-button label="Rotate left" title="Rotate left" icon="rotate_left" @click=${() => this.cropper?.rotate(-90)}></mwc-icon-button>
            </crop-buttons>
          </section>
        </main>
        <dialog-actions>
          <mwc-button
            label="CANCEL"
            @click=${() => {
              this.reset();
              this.dialog.close('cancel');
            }}
          ></mwc-button>
          <mwc-button
            label="DONE"
            @click=${() => {
              const canvas = this.cropper?.getCroppedCanvas();
              if (canvas) {
                this.previewDataUrl = canvas.toDataURL();
                canvas.toBlob(async blob => {
                  if (blob) {
                    this.blobToFile(blob, this.fileName);
                    this.file = blob as File;
                  }
                  this.dialog.close('cropped');
                });
              }
            }}
          ></mwc-button>
        </dialog-actions>
      </titanium-dialog-base>
    `;
  }
}

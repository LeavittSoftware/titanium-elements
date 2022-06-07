import '@leavittsoftware/titanium-dialog/lib/titanium-native-dialog-base';
import '@material/mwc-button';
import '@material/mwc-icon-button';

import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { TitaniumNativeDialogBaseElement } from '@leavittsoftware/titanium-dialog/lib/titanium-native-dialog-base';
import Cropper from 'cropperjs';
import { cropperCSS } from './cropper-styles';
import { h1 } from '@leavittsoftware/titanium-styles';
import { TitaniumImageInputOptions } from './titanium-image-input';

@customElement('image-cropper-dialog')
export class ImageCropperDialogElement extends LitElement {
  @query('titanium-native-dialog-base') dialog: TitaniumNativeDialogBaseElement;
  @query('cropper-container > img') img: HTMLImageElement;

  @property({ type: Object }) options: TitaniumImageInputOptions = { aspectRatio: 1 };
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
    this.img.src = '';
    this.cropper?.destroy();
  }

  private _setCropperImage(url: string) {
    this.img.src = url;

    this.cropper = new Cropper(this.img, {
      viewMode: 2,
      ...this.options,
      aspectRatio: this.options.shape === 'circle' ? 1 : this.options.aspectRatio,
    });
  }

  public blobToFile = (blob: Blob, fileName: string): File => {
    const file = blob as Blob & { lastModified: Date; name: string };
    file.lastModified = new Date();
    file.name = fileName.slice(0, fileName.lastIndexOf('.')) + '.png';
    return blob as File;
  };

  private async applyCircleMask(dataUrl: string) {
    const canvas = document.createElement('canvas');
    const image = new Image();

    const imagePromise = new Promise<string>(resolve => {
      image.onload = () => {
        // use min size so we get a square
        const size = Math.min(image.naturalWidth, image.naturalHeight);

        // let's update the canvas size
        canvas.width = size;
        canvas.height = size;

        // draw image to canvas
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.drawImage(image, 0, 0);

        // only draw image where mask is
        ctx.globalCompositeOperation = 'destination-in';

        // draw our circle mask
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(
          size * 0.5, // x
          size * 0.5, // y
          size * 0.5, // radius
          0, // start angle
          2 * Math.PI // end angle
        );
        ctx.fill();

        // restore to default composite operation (is draw over current image)
        ctx.globalCompositeOperation = 'source-over';
        resolve(canvas.toDataURL());
      };
    });
    image.src = dataUrl;

    return await imagePromise;
  }

  render() {
    return html`
      <titanium-native-dialog-base>
        <h1 select>Crop photo</h1>
        <main>
          <section crop>
            <cropper-container ?circle=${this.options.shape === 'circle'}>
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
            @click=${async () => {
              const canvas = this.cropper?.getCroppedCanvas();
              if (!canvas) {
                return;
              }
              this.previewDataUrl = this.options.shape === 'circle' ? await this.applyCircleMask(canvas.toDataURL()) : canvas.toDataURL();
              const response = await fetch(this.previewDataUrl);
              const blob = await response.blob();
              this.blobToFile(blob, this.fileName);
              this.file = blob as File;
              this.dialog.close('cropped');
            }}
          ></mwc-button>
        </dialog-actions>
      </titanium-native-dialog-base>
    `;
  }
}

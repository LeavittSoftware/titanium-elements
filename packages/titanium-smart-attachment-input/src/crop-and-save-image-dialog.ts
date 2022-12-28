import { readAndCompressImage } from 'browser-image-resizer/src';
import '@leavittsoftware/titanium-dialog/lib/titanium-native-dialog-base';
import '@material/mwc-button';
import '@material/mwc-icon-button';

export declare type CropperOptions = Cropper.Options & {
  shape?: 'square' | 'circle';
};

import { css, html, LitElement } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import { TitaniumNativeDialogBaseElement } from '@leavittsoftware/titanium-dialog/lib/titanium-native-dialog-base';
import Cropper from 'cropperjs';
import { cropperCSS } from './cropper-styles';
import { h1, p } from '@leavittsoftware/titanium-styles';
import { LoadWhile } from '@leavittsoftware/titanium-helpers';
import Bowser from 'bowser';

const LoaderGif = new URL('../images/duck-loader.gif', import.meta.url).href;

/**
 * Crop and save image dialog
 *
 * @element crop-and-save-image-dialog
 *
 */
@customElement('crop-and-save-image-dialog')
export class CropAndSaveImageDialog extends LoadWhile(LitElement) {
  @query('titanium-native-dialog-base') dialog: TitaniumNativeDialogBaseElement;
  @query('cropper-container > img') img: HTMLImageElement;

  /**
   *  Configurable CropperJs options.
   */
  @property({ type: Object }) options: CropperOptions = {};
  @state() protected fileName: string = '';

  #cropper: null | Cropper;
  #mimeType = '';
  #extension = '';

  firstUpdated() {
    const bowser = Bowser.getParser(window.navigator.userAgent);
    this.#mimeType = bowser.getBrowserName(true) === 'safari' ? 'image/png' : 'image/webp';
    this.#extension = bowser.getBrowserName(true) === 'safari' ? 'png' : 'webp';
  }

  static styles = [
    h1,
    p,
    cropperCSS,
    css`
      :host {
        display: block;
      }

      h1 {
        padding: 24px 24px 12px 24px;
      }

      main {
        display: flex;
        position: relative;
        width: 800px;
        height: 400px;
        padding: 12px 24px 24px 24px;
        align-self: center;
        overflow-y: auto;
      }

      loading-animation {
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;
        width: 100%;
      }

      loading-animation img {
        height: 300px;
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

  #saveCroppedImageFunc: ((file: File, previewDataUrl: string) => Promise<void>) | undefined;

  async open(url: string, filename: string, saveCroppedImageFunc?: (file: File, previewDataUrl: string) => Promise<void>) {
    this.#saveCroppedImageFunc = saveCroppedImageFunc;
    this.reset();
    this.fileName = filename;
    this.#setCropperImage(url);
    return await this.dialog.open();
  }

  reset() {
    this.img.src = '';
    this.#cropper?.destroy();
  }

  blobToFile(blob: Blob, fileName: string): File {
    return new File([blob], fileName, { lastModified: new Date().getTime() });
  }

  #setCropperImage(url: string) {
    this.img.src = url;
    this.#cropper = new Cropper(this.img, {
      viewMode: 2,
      aspectRatio: this.options.shape === 'circle' ? 1 : this.options.aspectRatio,
      ...this.options,
    });
  }

  #changeFileExtension(fileName: string, ext: string) {
    return fileName.slice(0, fileName.lastIndexOf('.')) + `.${ext}`;
  }

  async #applyCircleMask(dataUrl: string) {
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
      <titanium-native-dialog-base focus-trap>
        <h1 select>Crop and save image</h1>
        <main>
          <loading-animation ?hidden=${!this.isLoading}>
            <img src=${LoaderGif} />
            <p>Uploading image...</p>
          </loading-animation>
          <section crop ?hidden=${this.isLoading}>
            <cropper-container ?circle=${this.options.shape === 'circle'}>
              <img />
            </cropper-container>
            <crop-buttons>
              <mwc-icon-button label="Rotate right" title="Rotate right" icon="rotate_right" @click=${() => this.#cropper?.rotate(90)}></mwc-icon-button>
              <mwc-icon-button label="Rotate left" title="Rotate left" icon="rotate_left" @click=${() => this.#cropper?.rotate(-90)}></mwc-icon-button>
            </crop-buttons>
          </section>
        </main>
        <dialog-actions>
          <mwc-button
            label="CANCEL"
            ?disabled=${this.isLoading}
            @click=${() => {
              this.reset();
              this.dialog.close('cancel');
            }}
          ></mwc-button>
          <mwc-button
            label="SAVE"
            ?disabled=${this.isLoading}
            @click=${async () => {
              this.isLoading = true;
              await this.updateComplete;
              const canvas = this.#cropper?.getCroppedCanvas();
              if (!canvas) {
                return;
              }
              const previewDataUrl =
                this.options.shape === 'circle' ? await this.#applyCircleMask(canvas.toDataURL(this.#mimeType)) : canvas.toDataURL(this.#mimeType);
              const response = await fetch(previewDataUrl);
              const blob = await response.blob();
              const file = this.blobToFile(blob, this.#changeFileExtension(this.fileName, this.#extension));
              const config = {
                quality: 0.9,
                maxWidth: 1200,
                maxHeight: 1080,
                mimeType: this.#mimeType,
              };

              const newFile = this.blobToFile(await readAndCompressImage(file, config), this.#changeFileExtension(this.fileName, this.#extension));
              const save = this.#saveCroppedImageFunc?.(newFile, previewDataUrl) || Promise.resolve();
              this.loadWhile(save);
              await save;
              this.isLoading = false;
              this.dialog.close('cropped');
            }}
          ></mwc-button>
        </dialog-actions>
      </titanium-native-dialog-base>
    `;
  }
}

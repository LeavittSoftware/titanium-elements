import '@material/web/dialog/dialog';
import '@material/web/icon/icon';
import '@material/web/button/text-button';
import '@material/web/iconbutton/icon-button';

export declare type CropperOptions = Cropper.Options & {
  shape?: 'square' | 'circle';
};

import { css, html, LitElement } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import Cropper from 'cropperjs';
import { cropperCSS } from './cropper-styles';
import { h1, p } from '../../titanium/styles/styles';
import { LoadWhile } from '../../titanium/helpers/load-while';
import Bowser from 'bowser';
import { MdDialog } from '@material/web/dialog/dialog';
import { DOMEvent } from '../types/dom-event';

const LoaderGif = new URL('./images/duck-loader.gif', import.meta.url).href;

/**
 * Crop and save image dialog
 *
 * @element crop-and-save-image-dialog
 *
 */
@customElement('crop-and-save-image-dialog')
export class CropAndSaveImageDialog extends LoadWhile(LitElement) {
  @query('md-dialog') accessor dialog: MdDialog;
  @query('cropper-container > img') accessor img: HTMLImageElement;

  /**
   *  Configurable CropperJs options.
   */
  @property({ type: Object }) accessor options: CropperOptions = {};
  @state() protected accessor fileName: string = '';

  #cropper: null | Cropper;
  #mimeType = '';
  #extension = '';

  firstUpdated() {
    const bowser = Bowser.getParser(window.navigator.userAgent);
    const os = bowser?.getOS?.()?.name ?? '';
    this.#mimeType = os === 'iOS' || os === 'macOS' ? 'image/png' : 'image/webp';
    this.#extension = os === 'iOS' || os === 'macOS' ? 'png' : 'webp';
  }

  static styles = [
    h1,
    p,
    cropperCSS,
    css`
      :host {
        display: block;
      }

      md-dialog {
        max-width: calc(100vw - 24px);
        max-height: calc(100vh - 24px);
      }

      main {
        display: flex;
        position: relative;
        align-self: center;
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
        width: 100%;
        grid: 'cropper buttons' / 1fr 58px;
      }

      cropper-container {
        grid-area: cropper;

        display: block;
        max-width: 800px;
        max-height: 600px;
        overflow: hidden;
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

      @media (max-width: 600px) {
        section[crop] {
          grid:
            'cropper'
            'buttons';
        }

        crop-buttons {
          justify-content: end;
          grid-auto-flow: column;
          padding: 8px 0;
        }
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  #saveCroppedImageFunc: ((file: File, previewDataUrl: string) => Promise<void>) | undefined;
  #resolve: (value: 'cropped' | 'cancel') => void;
  async open(url: string, filename: string, saveCroppedImageFunc?: (file: File, previewDataUrl: string) => Promise<void>) {
    this.#saveCroppedImageFunc = saveCroppedImageFunc;
    this.dialog.returnValue = '';
    this.reset();
    this.fileName = filename;
    this.#setCropperImage(url);
    this.dialog.show();
    return await new Promise<'cropped' | 'cancel'>((resolve) => {
      this.#resolve = resolve;
    });
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

    const imagePromise = new Promise<string>((resolve) => {
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
      <md-dialog
        focus-trap
        @close=${(e: DOMEvent<MdDialog>) => {
          if (e.target.returnValue === 'cancel' || e.target.returnValue === 'cropped') {
            return this.#resolve(e.target.returnValue as 'cancel' | 'cropped');
          }
          e.preventDefault();
        }}
      >
        <div slot="headline">Crop and save image</div>
        <main slot="content">
          <loading-animation ?hidden=${!this.isLoading}>
            <img src=${LoaderGif} />
            <p>Uploading image...</p>
          </loading-animation>
          <section crop ?hidden=${this.isLoading}>
            <cropper-container ?circle=${this.options.shape === 'circle'}>
              <img />
            </cropper-container>
            <crop-buttons>
              <md-icon-button label="Rotate right" title="Rotate right" @click=${() => this.#cropper?.rotate(90)}
                ><md-icon>rotate_right</md-icon></md-icon-button
              >
              <md-icon-button label="Rotate left" title="Rotate left" @click=${() => this.#cropper?.rotate(-90)}>
                <md-icon>rotate_left</md-icon>
              </md-icon-button>
            </crop-buttons>
          </section>
        </main>
        <div slot="actions">
          <md-text-button
            ?disabled=${this.isLoading}
            @click=${() => {
              this.reset();
              this.dialog.close('cancel');
            }}
            >Cancel</md-text-button
          >
          <md-text-button
            ?disabled=${this.isLoading}
            @click=${async () => {
              this.isLoading = true;
              await this.updateComplete;

              //WORKAROUND: The first call to this func can result in a corrupt image, esp seen in Android when picture comes from camera
              this.#cropper?.getCroppedCanvas();

              const canvas = this.#cropper?.getCroppedCanvas({ maxWidth: 1200, maxHeight: 1080 });
              if (!canvas) {
                return;
              }
              const previewDataUrl =
                this.options.shape === 'circle' ? await this.#applyCircleMask(canvas.toDataURL(this.#mimeType)) : canvas.toDataURL(this.#mimeType);
              const response = await fetch(previewDataUrl);
              const file = this.blobToFile(await response.blob(), this.#changeFileExtension(this.fileName, this.#extension));
              const save = this.#saveCroppedImageFunc?.(file, previewDataUrl) || Promise.resolve();
              this.loadWhile(save);
              await save;
              this.isLoading = false;
              this.dialog.close('cropped');
            }}
            >Save</md-text-button
          >
        </div>
      </md-dialog>
    `;
  }
}

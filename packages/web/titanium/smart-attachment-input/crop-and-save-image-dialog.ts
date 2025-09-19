import '@material/web/dialog/dialog';
import '@material/web/icon/icon';
import '@material/web/button/text-button';
import '@material/web/iconbutton/icon-button';
import 'cropperjs';

import { dialogZIndexHack } from '../../titanium/hacks/dialog-zindex-hack';
import { css, html, LitElement } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import { CropperCanvas, CropperImage, CropperSelection, CropperShade } from 'cropperjs';
import { cropperCSS } from './cropper-styles';
import { h1, p } from '../../titanium/styles/styles';
import { LoadWhile } from '../../titanium/helpers/load-while';
import { MdDialog } from '@material/web/dialog/dialog';
import { DOMEvent } from '../types/dom-event';
import { ifDefined } from 'lit/directives/if-defined.js';

import Bowser from 'bowser';
const LoaderGif = new URL('./images/duck-loader.gif', import.meta.url).href;

export declare type CropperOptions = {
  shape?: 'square' | 'circle';
  canvasHideBackground?: boolean;
  selectionHideGrid?: boolean;
  selectionAspectRatio?: number | null | undefined;
  constrainSelectionTo?: 'image' | 'canvas' | null;
  maximizeSelection?: boolean;
  outputMaxWidth?: number;
  outputMaxHeight?: number;
};

export declare type SelectionData = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/**
 * Crop and save image dialog
 *
 * @element crop-and-save-image-dialog
 *
 */
@customElement('crop-and-save-image-dialog')
export class CropAndSaveImageDialog extends LoadWhile(LitElement) {
  @query('md-dialog') accessor dialog: MdDialog;
  @query('main') accessor main: HTMLElement;
  @query('cropper-canvas') accessor cropperCanvas: CropperCanvas;
  @query('cropper-selection') accessor cropperSelection: CropperSelection;
  @query('cropper-image') accessor cropperImage: CropperImage;
  @query('cropper-shade') accessor cropperShade: CropperShade;

  /**
   *  Forces cropper to output PNG's
   */
  @property({ type: Boolean, reflect: true, attribute: 'force-png' }) accessor forcePNGOutput: boolean;

  @property({ type: Object }) accessor options: CropperOptions;

  @state() protected accessor fileName: string = '';
  @state() protected accessor src: string = '';

  #mimeType = '';
  #extension = '';
  #isReady = false;

  firstUpdated() {
    const bowser = Bowser.getParser(window.navigator.userAgent);
    const os = bowser?.getOS?.()?.name ?? '';
    this.#mimeType = os === 'iOS' || os === 'macOS' || this.forcePNGOutput ? 'image/png' : 'image/webp';
    this.#extension = os === 'iOS' || os === 'macOS' || this.forcePNGOutput ? 'png' : 'webp';
    this.#setUpResizeObserver();
  }

  #resizeObserver: ResizeObserver;

  #setUpResizeObserver() {
    this.#resizeObserver = new ResizeObserver(() => {
      if (this.#isReady) {
        this.cropperImage.$center('cover');
      }
    });

    this.#resizeObserver.observe(this.main);
  }

  #saveCroppedImageFunc: ((file: File, previewDataUrl: string) => Promise<void>) | undefined;
  #resolve: (value: 'cropped' | 'cancel') => void;
  async open(url: string, filename: string, saveCroppedImageFunc?: (file: File, previewDataUrl: string) => Promise<void>) {
    this.#isReady = false;
    this.#saveCroppedImageFunc = saveCroppedImageFunc;
    this.dialog.returnValue = '';
    this.reset();
    this.fileName = filename;
    this.src = url;
    await this.updateComplete;
    this.dialog.show();

    this.cropperImage.$ready(async (image) => {
      this.cropperCanvas.style.width = `${image.naturalWidth}px`;
      this.cropperCanvas.style.aspectRatio = `${image.naturalWidth} / ${image.naturalHeight}`;

      const rect = this.cropperCanvas.getBoundingClientRect();
      const canvasRatio = rect.width / rect.height;
      const selectionRatio = this.options?.selectionAspectRatio ?? canvasRatio;

      // Temporarily disable selection constraint to prevent issues while image and
      // and selection are being setup. Prevent off-center and 1px default selections.
      if (!this.options) {
        this.options = {};
      }
      const constrain = this.options.constrainSelectionTo;
      this.options.constrainSelectionTo = null;

      if (this.options?.maximizeSelection) {
        this.cropperSelection.width = canvasRatio > selectionRatio ? rect.height * selectionRatio : rect.width;
        this.cropperSelection.height = canvasRatio < selectionRatio ? rect.width / selectionRatio : rect.height;
      } else {
        this.cropperSelection.width = rect.width / 2;
        this.cropperSelection.height = rect.height / 2;
      }
      this.cropperImage.$center('cover');
      this.cropperSelection.$center();
      this.options.constrainSelectionTo = constrain;
      this.#isReady = true;
    });

    return await new Promise<'cropped' | 'cancel'>((resolve) => {
      this.#resolve = resolve;
    });
  }

  reset() {
    this.cropperImage.$resetTransform();
  }

  blobToFile(blob: Blob, fileName: string): File {
    return new File([blob], fileName, { lastModified: new Date().getTime() });
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

  // adapted from https://fengyuanchen.github.io/cropperjs/v2/api/cropper-selection.html#limit-boundaries
  #inSelection(selection: SelectionData, maxSelection: SelectionData) {
    return (
      selection.x >= maxSelection.x &&
      selection.y >= maxSelection.y &&
      selection.x + selection.width <= maxSelection.x + maxSelection.width &&
      selection.y + selection.height <= maxSelection.y + maxSelection.height
    );
  }
  #onCropperImageTransform(event: CustomEvent) {
    if (!this.cropperCanvas || this.options?.constrainSelectionTo !== 'image') {
      return;
    }

    const cropperImage = this.cropperImage as CropperImage;
    const cropperSelection = this.cropperSelection as SelectionData;
    const cropperCanvasRect = this.cropperCanvas.getBoundingClientRect();

    // 1. Clone the cropper image.
    const cropperImageClone = cropperImage.cloneNode() as CropperImage;

    // 2. Apply the new matrix to the cropper image clone.
    cropperImageClone.style.transform = `matrix(${event.detail.matrix.join(', ')})`;

    // 3. Make the cropper image clone invisible.
    cropperImageClone.style.opacity = '0';

    // 4. Append the cropper image clone to the cropper canvas.
    this.cropperCanvas.appendChild(cropperImageClone);

    // 5. Compute the boundaries of the cropper image clone.
    const cropperImageRect = cropperImageClone.getBoundingClientRect();

    // 6. Remove the cropper image clone.
    this.cropperCanvas.removeChild(cropperImageClone);

    const selection = cropperSelection as SelectionData;
    const maxSelection: SelectionData = {
      x: cropperImageRect.left - cropperCanvasRect.left,
      y: cropperImageRect.top - cropperCanvasRect.top,
      width: cropperImageRect.width,
      height: cropperImageRect.height,
    };

    if (!this.#inSelection(selection, maxSelection)) {
      event.preventDefault();
    }
  }

  #onCropperSelectionChange(event: CustomEvent) {
    if (!this.cropperCanvas || !this.options?.constrainSelectionTo) {
      return;
    }

    const cropperCanvasRect = this.cropperCanvas.getBoundingClientRect();
    // event likes to report width and height at 1px higher than they actually are
    // which causes movement to be blocked when select is at max width or height.
    const selection = {
      x: event.detail.x,
      y: event.detail.y,
      width: event.detail.width - 1,
      height: event.detail.height - 1,
    } as SelectionData;

    switch (this.options?.constrainSelectionTo) {
      case 'canvas': {
        const maxSelection: SelectionData = {
          x: 0,
          y: 0,
          width: cropperCanvasRect.width,
          height: cropperCanvasRect.height,
        };

        if (!this.#inSelection(selection, maxSelection)) {
          event.preventDefault();
          this.#mitigateShadeJitter();
        }
        break;
      }

      case 'image': {
        if (!this.#isReady) {
          return;
        }

        const cropperImage = this.cropperImage as CropperImage;
        const cropperImageRect = cropperImage.getBoundingClientRect();
        const maxSelection: SelectionData = {
          x: cropperImageRect.left - cropperCanvasRect.left,
          y: cropperImageRect.top - cropperCanvasRect.top,
          width: cropperImageRect.width,
          height: cropperImageRect.height,
        };

        if (!this.#inSelection(selection, maxSelection)) {
          event.preventDefault();
          this.#mitigateShadeJitter();
        }
        break;
      }

      default:
    }
  }

  #mitigateShadeJitter() {
    setTimeout(() => this.cropperShade.$change(this.cropperSelection.x, this.cropperSelection.y, this.cropperSelection.width, this.cropperSelection.height), 0);
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

        padding: 18px 24px 0px 24px;
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

      cropper-container {
        display: grid;
        grid-template-areas:
          'cropper'
          'buttons';
        gap: 8px 0;
      }

      cropper-canvas {
        max-width: min(800px, calc(100vw - 115px));
        max-height: calc(100vh - 250px);
      }

      crop-buttons {
        grid-area: buttons;
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 8px;
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <md-dialog
        @open=${(e: DOMEvent<MdDialog>) => dialogZIndexHack(e.target)}
        @close=${(e: DOMEvent<MdDialog>) => {
          if (e.target.returnValue === 'cancel' || e.target.returnValue === 'cropped') {
            return this.#resolve(e.target.returnValue as 'cancel' | 'cropped');
          }
          e.preventDefault();
        }}
      >
        <div slot="headline">Crop image</div>
        <main slot="content">
          <loading-animation ?hidden=${!this.isLoading}>
            <img src=${LoaderGif} />
            <p>Uploading image...</p>
          </loading-animation>
          <cropper-container
            ?hidden=${this.isLoading}
            @change=${(e: Event) => {
              //STOP CROPPER JS FROM TRIGGERING CHANGE EVENT
              e.stopPropagation();
            }}
          >
            <cropper-canvas ?background=${!this.options?.canvasHideBackground}>
              <cropper-image
                initial-center-size="cover"
                .src=${this.src}
                alt="Picture"
                rotatable
                scalable
                skewable
                translatable
                @transform=${this.#onCropperImageTransform}
              ></cropper-image>
              <cropper-shade hidden></cropper-shade>
              <cropper-handle action="select" plain></cropper-handle>
              <cropper-selection
                movable
                resizable
                precise
                aspect-ratio=${this.options?.shape === 'circle' ? 1 : ifDefined(this.options?.selectionAspectRatio)}
                @change=${this.#onCropperSelectionChange}
              >
                <cropper-grid role="grid" covered ?hidden=${this.options?.selectionHideGrid}></cropper-grid>
                <cropper-crosshair centered></cropper-crosshair>
                <cropper-handle theme-color="rgba(255, 255, 255, 0.35)" action="move"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="n-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="e-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="s-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="w-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="ne-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="nw-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="se-resize"></cropper-handle>
                <cropper-handle theme-color="var(--md-sys-color-primary)" action="sw-resize"></cropper-handle>
              </cropper-selection>
            </cropper-canvas>
            <crop-buttons>
              <md-icon-button label="Rotate right" title="Rotate right" @click=${() => this.cropperImage?.$rotate('90deg')}>
                <md-icon>rotate_right</md-icon>
              </md-icon-button>
              <md-icon-button label="Rotate left" title="Rotate left" @click=${() => this.cropperImage.$rotate('-90deg')}>
                <md-icon>rotate_left</md-icon>
              </md-icon-button>
            </crop-buttons>
          </cropper-container>
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
              await this.cropperCanvas?.$toCanvas();
              const canvasRect = this.cropperCanvas?.getBoundingClientRect();
              const img = (this.cropperImage as unknown as { $image?: HTMLImageElement })?.$image;
              const scaleX = img && canvasRect?.width ? img.naturalWidth / canvasRect.width : 1;
              const scaleY = img && canvasRect?.height ? img.naturalHeight / canvasRect.height : scaleX;
              let targetWidth = Math.max(1, Math.round(this.cropperSelection.width * scaleX));
              let targetHeight = Math.max(1, Math.round(this.cropperSelection.height * scaleY));

              if (this.options?.outputMaxWidth && targetWidth > this.options.outputMaxWidth) {
                const r = this.options.outputMaxWidth / targetWidth;
                targetWidth = this.options.outputMaxWidth;
                targetHeight = Math.max(1, Math.round(targetHeight * r));
              }
              if (this.options?.outputMaxHeight && targetHeight > this.options.outputMaxHeight) {
                const r = this.options.outputMaxHeight / targetHeight;
                targetHeight = this.options.outputMaxHeight;
                targetWidth = Math.max(1, Math.round(targetWidth * r));
              }

              const canvas = await this.cropperSelection?.$toCanvas({ width: targetWidth, height: targetHeight });

              this.isLoading = true;
              await this.updateComplete;

              if (!canvas) {
                return;
              }
              const previewDataUrl =
                this.options?.shape === 'circle' ? await this.#applyCircleMask(canvas.toDataURL(this.#mimeType)) : canvas.toDataURL(this.#mimeType);
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

import '@material/mwc-icon-button';
import './image-cropper-dialog';

import { css, customElement, html, LitElement, property, query } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { ImageCropperDialogElement } from './image-cropper-dialog';

export type TitaniumImageInputOptions = Cropper.Options & { shape?: ' square'|'circle'};

/**
 * Material outline image input with cropper
 *
 * @element titanium-image-input
 *
 * @cssprop {Color} --app-border-color - Border color.
 * @cssprop {Color} --app-primary-color - Focused border color.
 * @cssprop {Color} --titanium-input-error-color - Error color, text and outline.
 * @cssprop {Color} --titanium-input-placeholder-color - Color of icon button and placeholder text.
 *
 */
@customElement('titanium-image-input')
export class TitaniumImageInputElement extends LitElement {

  @property({ type: Boolean, reflect: true, attribute: 'is-over' }) protected isOver: boolean = false;
  @property({ type: Boolean, reflect: true }) protected isUiValid: boolean = true;
  @property({ type: String }) protected previewSrc: string | undefined = undefined;
  @property({ type: Object }) protected file: File | null = null;

  @query('input') protected input: HTMLInputElement;
  @query('image-cropper-dialog') protected cropperDialog: ImageCropperDialogElement;

  private _originalSrc: null | string = null;
  private allowedFileType = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'];

  /**
   *  Displays error state if no image is empty and input is blurred.
   */
  @property({ type: Boolean }) required: boolean = false;

  /**
   *  Whether or not the input should be disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = 'Image';

  /**
   *  Sets placeholder text value.
   */
  @property({ type: String }) placeholder: string = 'Select a file';

  /**
   *  	Message to show in the error color when the element is invalid.
   */
  @property({ type: String }) validationMessage: string | null = null;

  /**
   *  Configurable CropperJs options.
   */
  @property({ type: Object }) options: TitaniumImageInputOptions  = { aspectRatio: 1 };

  /**
   *  Data url of cropped image preview.
   */
  getPreview() {
    return this.previewSrc;
  }

  /**
   *  File object of cropped image.
   */
  getFile() {
    return this.file;
  }

  /**
   *  Use to preset input to existing image.
   */
  setImage(url: string) {
    this._originalSrc = url;
    this.previewSrc = url;
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    if (!this.required) {
      return true;
    }

    if (this._originalSrc) {
      if (this.hasChanges()) {
        //Original was replaced or removed, make sure user set an image.  OK
        return !!this.file;
      }

      //Original image is still there with no changes.  OK
      return true;
    }

    return !!this.file;
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    this.isUiValid = this.checkValidity();
    return this.isUiValid;
  }

  /**
   *  Returns true if the input's image has changed from empty or since the last call to setImage().
   */
  hasChanges() {
    if (this._originalSrc) {
      return this._originalSrc !== this.previewSrc;
    }
    return !!this.previewSrc;
  }

  /**
   *  Resets the inputs state.
   */
  reset() {
    this.previewSrc = undefined;
    this.file = null;
    this.isOver = false;
    this.isUiValid = true;
  }

  private _handleNewFile(files: FileList) {
    if (files && files.length > 0) {
      const file = files[0];
      if (this.allowedFileType.includes(file.type)) {
        if (URL) {
          this.openCropper(URL.createObjectURL(file), file.name);
        } else if (FileReader) {
          const reader = new FileReader();
          reader.onload = () => this.openCropper(reader.result as string, file.name);
          reader.readAsDataURL(file);
        }
      } else {
        alert('File type not supported.');
      }
    }
  }

  private _notifyChange() {
    this.dispatchEvent(new Event('change'));
  }

  private async openCropper(file: string, filename: string) {
    this.input.value = '';
    const result = await this.cropperDialog.open(file, filename);
    if (result == 'cropped') {
      this.previewSrc = this.cropperDialog.previewDataUrl ?? undefined;
      this.file = this.cropperDialog.file;
      this.reportValidity();
      this._notifyChange();
    }
  }

  static styles = [
    css`
      :host {
        display: inline-block;
        min-width: 200px;
        font-family: Roboto, sans-serif;
      }

      image-input {
        display: grid;
        background: #fff;
        position: relative;
        gap: 8px;
        max-height: 48px;
        grid-template-columns: 1fr auto;
        align-items: center;
        border: 1px solid var(--app-border-color, rgba(0, 0, 0, 0.38));
        border-radius: 4px;
        padding: 3px 16px;
      }

      :host([disabled]) mwc-icon-button,
      :host([disabled]) image-input {
        border-color: rgba(0, 0, 0, 0.06);
        color: rgba(0, 0, 0, 0.06);
      }

      :host(:not([disabled])) image-input:hover {
        border-color: rgba(0, 0, 0, 0.87);
        cursor: pointer;
      }

      :host([disabled]) span[label],
      :host([disabled]) span[placeholder] {
        color: rgba(0, 0, 0, 0.4);
      }

      :host(:focus-within:not([disabled])[isUiValid]) image-input,
      :host(:not([disabled])[is-over]) image-input {
        border: 2px solid var(--app-primary-color, #3b95ff) !important;
        padding: 2px 15px;
      }

      :host(:focus-within:not([disabled])[isUiValid]) span[label],
      :host(:not([disabled])[is-over]) span[label] {
        left: 11px;
        color: var(--app-primary-color, #3b95ff);
      }

      :host(:not([disabled]):not([isUiValid])) span[placeholder],
      :host(:not([disabled]):not([isUiValid])) span[label],
      :host(:not([disabled]):not([isUiValid])) image-input {
        border-color: var(--titanium-input-error-color, #b00020);
        color: var(--titanium-input-error-color, #b00020);
        cursor: pointer;
      }

      :host(:not([disabled]):not([isUiValid])) span[helper-text] {
        opacity: 1;
      }

      img {
        max-height: 35px;
        width: 100%;
        object-fit: contain;
        object-position: left;
        pointer-events: none;
      }

      mwc-icon-button {
        justify-self: right;
        margin-right: -12px;
        color: var(--titanium-input-placeholder-color, #7d7d7d);
      }

      span[placeholder] {
        color: var(--titanium-input-placeholder-color, #7d7d7d);
        pointer-events: none;
        font-size: 16px;
        letter-spacing: 0.15px;
      }

      span[helper-text] {
        display: flex;
        height: 19px;
        justify-content: space-between;
        box-sizing: border-box;
        color: var(--titanium-input-error-color, #b00020);
        -webkit-font-smoothing: antialiased;
        font-size: 0.75rem;
        font-weight: 400;
        letter-spacing: 0.0333333em;
        text-transform: inherit;
        line-height: normal;
        padding: 3px 16px 0 16px;
        opacity: 0;
        will-change: opacity;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }

      span[label] {
        position: absolute;
        pointer-events: none;
        top: 50%;
        left: 12px;

        padding: 0 4px;

        background: #fff;
        color: rgba(0, 0, 0, 0.6);
        transform: translateY(-37.25px) scale(1);

        display: inline-block;
        font-family: Roboto, sans-serif;
        font-size: 12px;
        font-weight: 400;
        height: 16px;
        -webkit-font-smoothing: antialiased;
        letter-spacing: 0.009375em;
        position: absolute;
        transform-origin: left top;
        line-height: 1.15rem;
        text-align: left;
        text-overflow: clip;
        white-space: nowrap;
        will-change: transform;
        overflow: hidden;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
    `,
  ];
  render() {
    return html`
      <image-input
        @click=${() => (!this.disabled ? this.input.click() : '')}
        @drop=${e => {
          const files = e.dataTransfer.files;
          this._handleNewFile(files);
          e.preventDefault();
          this.isOver = false;
        }}
        @dragover=${e => {
          e.preventDefault();
        }}
        @dragenter=${e => {
          this.isOver = e.dataTransfer?.types?.[0] === 'Files';
          e.preventDefault();
        }}
        @dragleave=${() => {
          this.isOver = false;
        }}
      >
        ${this.previewSrc ? html` <img src=${ifDefined(this.previewSrc)} /> ` : html`<span placeholder>${this.placeholder}</span>`}
        ${this.previewSrc
          ? html` <mwc-icon-button
              draggable="false"
              title="Remove photo"
              label="Remove photo"
              icon="delete"
              @click=${e => {
                e.stopPropagation();
                this.reset();
                this.reportValidity();
                this._notifyChange();
              }}
              .disabled=${this.disabled}
            ></mwc-icon-button>`
          : html` <mwc-icon-button
              draggable="false"
              label="Choose photo"
              title="Choose photo"
              icon="cloud_upload"
              .disabled=${this.disabled}
            ></mwc-icon-button>`}

        <span label>${this.label}${this.required ? ' *' : ''}</span>

        <label hidden for="upload">
          <input
            hidden
            type="file"
            id="input"
            name="image"
            accept="image/*"
            @change=${e => {
              const files = e.target.files;
              this._handleNewFile(files);
            }}
          />
        </label>
      </image-input>
      ${this.validationMessage ? html`<span helper-text>${!this.isUiValid ? this.validationMessage : ''}</span>` : ''}
      <image-cropper-dialog .options=${this.options}></image-cropper-dialog>
    `;
  }
}

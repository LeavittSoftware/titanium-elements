import '@material/mwc-icon-button';

import { css, html, LitElement } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import { IDatabaseAttachment } from '@leavittsoftware/lg-core-typescript/lg.net.core';

/**
 * Material design inspired file input.
 *
 * @element titanium-attachment input
 *
 * @fires file-type-error - Fired when the user tries to select files with the wrong allowedFileType
 * @fires change - Fired when files are selected or unselected
 *
 * @cssprop {Color} [--app-primary-color=#3b95ff] - Input border and label color when a file is dragged over
 * @cssprop {Color} [--material-error-text-color=#da3227] - Input border, label color, and error message color when input value is invalid
 * @cssprop {Color} [--app-text-color=#5f6368] - Placeholder color
 * @cssprop {Color} [--titanium-input-placeholder-color=#7d7d7d] - Color of icon button and placeholder text.
 */
@customElement('titanium-attachment-input')
export class TitaniumAttachmentInputElement extends LitElement {
  /**
   *  Whether a file is currently being dragged over the input
   */
  @property({ type: Boolean, reflect: true, attribute: 'is-over' }) protected isOver: boolean = false;

  /**
   *  Whether the current state of the input is valid
   */
  @property({ type: Boolean, reflect: true }) protected isUiValid: boolean = true;

  /**
   *  Whether a selected file is required when reporting validity
   */
  @property({ type: Boolean }) required: boolean = false;

  /**
   *  Whether to allow selection of multiple files
   */
  @property({ type: Boolean }) multiple: boolean = false;

  /**
   * Disables the input
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = 'Attachment';

  /**
   *  Sets placeholder text value.
   */
  @property({ type: String }) placeholder: string = 'Select a file';

  /**
   *  Message to show in the error color when the element is invalid.
   */
  @property({ type: String }) validationMessage: string | null = null;

  /**
   *  What file types to allow or empty array to all all files. This will be bound to the accept attribute of the native input and used to fire @file-type-error if selected file does not match
   */
  @property({ type: String }) allowedExtensions = 'png,svg,bmp,jpeg,jpg,exe,webp,iso,sv';

  /**
   *  All selected files, empty if no file is selected
   */
  @property({ type: Array }) protected files: Array<File> = [];

  /**
   *  Optional: a preselected attachment used to populate the label and allow clearing
   */
  @property({ type: Object }) attachment: null | Partial<IDatabaseAttachment> = null;

  @state() protected originalAttachment: null | Partial<IDatabaseAttachment> = null;

  @query('input') protected input: HTMLInputElement;

  /**
   *  selected File object.
   */
  getFiles() {
    return this.files;
  }

  /**
   *  Use to preset input to existing attachment.
   */
  setAttachment(attachment: Partial<IDatabaseAttachment>) {
    this.originalAttachment = attachment;
    this.attachment = this._clone(this.originalAttachment);
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    if (!this.required) {
      return true;
    }

    if (this.originalAttachment) {
      if (this.hasChanges()) {
        //Original was replaced or removed, make sure user set an attachment.  OK
        return !!this.files.length;
      }

      //Original is still there with no changes.  OK
      return true;
    }

    return !!this.files.length;
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    this.isUiValid = this.checkValidity();
    return this.isUiValid;
  }

  /**
   *  Returns true if the input's image has changed from empty or since the last call to setAttachment().
   */
  hasChanges() {
    return !!this.files.length || JSON.stringify(this.attachment) !== JSON.stringify(this.originalAttachment);
  }

  /**
   *  Resets the inputs state.
   */
  reset() {
    this.attachment = null;
    this.files = [];
    this.isOver = false;
    this.input.value = '';
  }

  private addFiles(files: FileList) {
    const extensions = this.allowedExtensions?.toLowerCase()?.split(',');

    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      if (!extensions.some(ext => file.name?.toLowerCase()?.endsWith(ext))) {
        this.dispatchEvent(new Event('file-type-error', { bubbles: true, composed: true }));
      } else {
        this.files = [...this.files, file];
        this._notifyChange();
        this.reportValidity();
      }
    }
  }

  private _notifyChange() {
    this.dispatchEvent(new Event('change'));
  }

  private _clone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  static styles = [
    css`
      :host {
        display: inline-block;
      }

      attachment-input {
        display: grid;
        background: #fff;
        position: relative;
        gap: 8px;
        max-height: 48px;
        grid-template-columns: 1fr auto;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.38);
        border-radius: 4px;
        padding: 3px 16px;
      }

      :host([disabled]) mwc-icon-button,
      :host([disabled]) attachment-input {
        border-color: rgba(0, 0, 0, 0.06);
        color: rgba(0, 0, 0, 0.06);
      }

      :host(:not([disabled])) attachment-input:hover {
        border-color: rgba(0, 0, 0, 0.87);
        cursor: pointer;
      }

      :host(:not([disabled])[is-over]) attachment-input {
        border: 2px solid var(--app-primary-color, #3b95ff) !important;
        padding: 2px 15px;
      }

      :host(:not([disabled])[is-over]) span[label] {
        left: 11px;
        color: var(--app-primary-color, #3b95ff);
      }

      :host([disabled]) span[label],
      :host([disabled]) span[placeholder] {
        color: rgba(0, 0, 0, 0.4);
      }

      :host(:not([disabled]):not([isUiValid])) span[placeholder],
      :host(:not([disabled]):not([isUiValid])) span[label],
      :host(:not([disabled]):not([isUiValid])) attachment-input {
        border-color: var(--material-error-text-color, #da3227);
        color: var(--material-error-text-color, #da3227);
        cursor: pointer;
      }

      :host(:not([disabled]):not([isUiValid])) span[helper-text] {
        opacity: 1;
      }

      img {
        width: 100%;
        max-height: 35px;
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
        color: var(--app-text-color, #5f6368);
        pointer-events: none;
        font-size: 16px;
        letter-spacing: 0.15px;
      }

      span[helper-text] {
        display: flex;
        height: 19px;
        justify-content: space-between;
        box-sizing: border-box;
        color: var(--material-error-text-color, #da3227);
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

      attachment-name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    `,
  ];
  render() {
    return html`
      <attachment-input
        @click=${() => (!this.disabled ? this.input.click() : '')}
        @drop=${(e: DragEvent) => {
          const files = e.dataTransfer?.files || new FileList();
          this.addFiles(files);
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
        <attachment-name>
          ${this.files.length
            ? html`${this.files.length > 1 ? `(${this.files.length}) ` : ''}${this.files.map(o => o.name).join(', ')}`
            : this.attachment
            ? html`${this.attachment?.Name + '.' + this.attachment?.Extension}`
            : html`<span placeholder>${this.placeholder}</span>`}
        </attachment-name>
        ${this.files.length || this.attachment
          ? html` <mwc-icon-button
              draggable="false"
              title="Remove attachment"
              label="Remove attachment"
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
              label="Choose attachment"
              title="Choose attachment"
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
            ?multiple=${this.multiple}
            accept=${this.allowedExtensions
              .split(',')
              .map(o => `.${o.trim()}`)
              .join(',')}
            @change=${e => {
              this.addFiles(e.target.files);
            }}
          />
        </label>
      </attachment-input>
      ${this.validationMessage ? html`<span helper-text>${!this.isUiValid ? this.validationMessage : ''}</span>` : ''}
    `;
  }
}

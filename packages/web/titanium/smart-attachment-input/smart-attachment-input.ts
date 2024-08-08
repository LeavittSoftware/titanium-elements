import '../chip-multi-select/chip-multi-select';
import './crop-and-save-image-dialog';
import './image-preview-dialog';

import '@material/web/dialog/dialog';
import '@material/web/icon/icon';
import '@material/web/button/text-button';
import '@material/web/button/outlined-button';
import '@material/web/chips/input-chip';

import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { CropAndSaveImageDialog, CropperOptions } from './crop-and-save-image-dialog';
import { repeat } from 'lit/directives/repeat.js';
import { SmartAttachment } from './type/smart-attachment';
import { getExtension, getFileIcon, imageFormats } from './image-formats';
import { ImagePreviewDialog } from './image-preview-dialog';
import { delay, middleEllipsis } from '../../titanium/helpers/helpers';
import { IDatabaseAttachment } from '@leavittsoftware/lg-core-typescript/lg.net.system';
import { getCdnDownloadUrl } from '../helpers/get-cdn-download-url';

import { TitaniumChipMultiSelect } from '../../titanium/chip-multi-select/chip-multi-select';
import { MdDialog } from '@material/web/dialog/dialog';
import { getCdnInlineUrl } from '../helpers/get-cdn-Inline-url';
import { p } from '../styles/p';

export type TitaniumSmartInputOptions = Cropper.Options & { shape?: ' square' | 'circle' };

/**
 * Material outline image input with cropper
 *
 * @element titanium-smart-attachment-input
 *
 * @fires change - Fired when image is attached or removed from input.
 *
 *
 */
@customElement('titanium-smart-attachment-input')
export class TitaniumSmartAttachmentInput extends LitElement {
  @property({ type: Array }) protected accessor files: SmartAttachment[] = [];
  @property({ type: Boolean, reflect: true, attribute: 'is-over' }) protected accessor isOver: boolean = false;
  @property({ type: String }) protected accessor previewSrc: string | undefined = undefined;

  @query('input') protected accessor input: HTMLInputElement;
  @query('image-preview-dialog') protected accessor imagePreviewDialog!: ImagePreviewDialog;
  @query('crop-and-save-image-dialog') protected accessor cropperDialog!: CropAndSaveImageDialog;
  @query('md-dialog[confirm-delete]') private accessor confirmDeleteDialog: MdDialog;
  @query('titanium-chip-multi-select') private accessor chipMultiSelect: TitaniumChipMultiSelect;

  #originalFiles: SmartAttachment[] = [];

  /**
   *  File types to accept ex. "image/*,.pdf"
   */
  @property({ type: String }) accessor accept = 'image/*,.pdf';

  /**
   *  Allow multiple attachments
   */
  @property({ type: Boolean }) accessor multiple: boolean = false;

  /**
   *  Requires at least one attachment on validate
   */
  @property({ type: Boolean }) accessor required: boolean = false;

  /**
   *  Whether or not the input should be disabled
   */
  @property({ type: Boolean, reflect: true }) accessor disabled: boolean = false;

  /**
   *  Requires user to confirm when delete of an attachment is requested
   */
  @property({ type: Boolean }) accessor confirmDelete: boolean = false;

  /**
   *  Delete confirmation header text
   */
  @property({ type: String }) accessor confirmDeleteHeader: string = 'Confirm delete';

  /**
   *  Delete confirmation paragraph text
   */
  @property({ type: String }) accessor confirmDeleteText: string = 'Are you sure you would like to delete this attachment?';

  /**
   *  Add button label text
   */
  @property({ type: String }) accessor addButtonLabel: string = 'Add attachment';

  /**
   *  Label of input
   */
  @property({ type: String }) accessor label: string = 'Attachments';

  /**
   *  Sets supporting text
   */
  @property({ type: String }) accessor supportingText: string;

  /**
   *  Text to show when there are no attachments
   */
  @property({ type: String }) accessor noItemsText: string = 'No attachments';

  /**
   *  Configurable CropperJs options.
   */
  @property({ type: Object }) accessor options: CropperOptions = {};

  /**
   *  Image formats here are sent to the cropper
   */
  @property({ type: Array }) accessor croppableImageFormats: Array<string> = [
    'tiff',
    'pjp',
    'jfif',
    'bmp',
    'gif',
    'svg',
    'png',
    'xbm',
    'dib',
    'jxl',
    'jpeg',
    'svgz',
    'jpg',
    'webp',
    'ico',
    'tif',
    'pjpeg',
    'avif',
  ];

  /**
   *  File object of cropped image.
   */
  getFiles() {
    return this.files;
  }

  /**
   *  Use to preset input to existing image.
   */
  setFiles(...files: { fileName: string; previewSrc?: string; downloadSrc?: string; id?: number }[]) {
    this.files = [...files].map((o) => ({ file: new File([''], o.fileName), previewSrc: o.previewSrc, downloadSrc: o.downloadSrc, id: o.id }));
    this.#originalFiles = structuredClone(this.files);
  }

  /**
   *  Use to preset input to existing image.
   */
  setFilesFromDatabaseAttachments(...attachments: Partial<IDatabaseAttachment>[]) {
    this.files = [...attachments]
      .filter((o) => o.Name && o.Extension)
      .map((o) => ({
        id: o.Id,
        file: new File([''], `${o?.Name}.${o?.Extension}`),
        previewSrc: getCdnInlineUrl(o, 512),
        downloadSrc: getCdnDownloadUrl(o),
      }));
    this.#originalFiles = structuredClone(this.files);
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    return this.chipMultiSelect.checkValidity();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    return this.chipMultiSelect.reportValidity();
  }

  /**
   *  Returns true if the images have been added, removed or edited.
   */
  hasChanges() {
    return JSON.stringify(this.#originalFiles) !== JSON.stringify(this.files);
  }

  /**
   *  Resets the inputs state.
   */
  async reset() {
    this.#originalFiles = [];
    this.previewSrc = undefined;
    this.files = [];
    this.isOver = false;
    await this.updateComplete;
    this.chipMultiSelect.reset();
  }

  async handleNewFile(files: FileList) {
    let shouldNotify = false;
    for (let i = 0; i < (files?.length ?? 0); i++) {
      const file = files?.item(i);
      if (file) {
        const shouldCrop = this.croppableImageFormats.some((o) => file.name.endsWith(o));
        if (shouldCrop) {
          const cropResult = await this.cropperDialog.open(URL.createObjectURL(file), file.name, async (croppedImage, previewDataUrl) => {
            const croppedFile = { file: croppedImage, previewSrc: previewDataUrl ?? undefined };
            if (this.multiple) {
              this.files = [...this.files, croppedFile];
            } else {
              this.files = [croppedFile];
            }
          });
          if (cropResult === 'cropped') {
            this.reportValidity();
            shouldNotify = true;
          }
          await delay(500);
        } else {
          const _file: SmartAttachment = { file: file };
          const isImage = imageFormats.some((o) => file.name.endsWith(o));
          if (isImage) {
            try {
              const fileAsBase64 = await this.toBase64(file);
              if (typeof fileAsBase64 === 'string') {
                _file.previewSrc = fileAsBase64 ?? undefined;
              }
            } catch {
              // Do nothing
            }
          }
          if (this.multiple) {
            this.files = [...this.files, _file];
          } else {
            this.files = [_file];
          }
          this.reportValidity();
          shouldNotify = true;
        }
      }
    }
    if (shouldNotify) {
      this.#notifyChange();
    }
  }

  #fileToDelete: SmartAttachment | null = null;
  #deleteFile(file: SmartAttachment) {
    const i = this.files.findIndex((o) => o === file);
    this.files.splice(i, 1);
    this.requestUpdate('files');
    this.reportValidity();
    this.#notifyChange();
  }

  toBase64(file: File) {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  #notifyChange() {
    this.dispatchEvent(new Event('change'));
  }

  static styles = [
    p,
    css`
      :host {
        display: block;
      }

      :host([is-over]:not([disabled])) drop-scrim {
        background-color: var(--md-sys-color-outline-variant);
        opacity: 0.08;
      }

      titanium-chip-multi-select {
        position: relative;
      }

      drop-scrim {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <titanium-chip-multi-select
        .supportingText=${this.supportingText}
        .required=${this.required}
        ?disabled=${this.disabled}
        @drop=${(e: DragEvent) => {
          if (this.disabled) {
            return;
          }

          const files = e.dataTransfer?.files ?? new FileList();
          this.handleNewFile(files);
          e.preventDefault();
          this.isOver = false;
        }}
        @dragover=${(e: DragEvent) => {
          e.preventDefault();
        }}
        @dragenter=${(e: DragEvent) => {
          this.isOver = e.dataTransfer?.types?.[0] === 'Files';
          e.preventDefault();
        }}
        @dragleave=${() => {
          this.isOver = false;
        }}
        label="${this.label} ${this.files.length ? ` (${this.files.length})` : ''}"
        noItemsText=${this.noItemsText}
        .hasItems=${!!this.files.length}
      >
        <drop-scrim></drop-scrim>
        <md-outlined-button
          ?hidden=${!this.multiple && !!this.files.length}
          .disabled=${this.disabled}
          @click=${() => {
            if (!this.disabled) {
              this.input.value = '';
              this.input.click();
            }
          }}
          >${this.addButtonLabel} <md-icon slot="icon">add</md-icon></md-outlined-button
        >
        ${repeat(
          this.files,
          (o) => o.file.name,
          (o) =>
            html`<md-input-chip
              label=${middleEllipsis(o.file.name)}
              ?closeable=${!this.disabled}
              @remove=${async (e: Event) => {
                e.preventDefault();
                if (this.confirmDelete) {
                  this.#fileToDelete = o;
                  this.confirmDeleteDialog?.show();
                } else {
                  this.#deleteFile(o);
                }
              }}
              @click=${() => {
                if (o.previewSrc || o.downloadSrc) {
                  this.imagePreviewDialog.open(o.previewSrc || getFileIcon(getExtension(o.file.name)), o.downloadSrc, o.file.name);
                }
              }}
            >
              <img draggable="false" slot="icon" src="${o.previewSrc || getFileIcon(getExtension(o.file.name))}" />
            </md-input-chip>`
        )}
      </titanium-chip-multi-select>

      <label hidden for="upload">
        <input
          hidden
          type="file"
          id="input"
          name="image"
          ?multiple=${this.multiple}
          accept="${this.accept}"
          @change=${(e) => {
            const files = e.target.files;
            this.handleNewFile(files);
          }}
        />
      </label>
      <crop-and-save-image-dialog .options=${this.options}></crop-and-save-image-dialog>
      <image-preview-dialog></image-preview-dialog>

      <md-dialog confirm-delete>
        <div slot="headline">${this.confirmDeleteHeader}</div>
        <div slot="content"><p>${this.confirmDeleteText}</p></div>
        <div slot="actions">
          <md-text-button @click=${() => this.confirmDeleteDialog.close()}>Cancel</md-text-button>
          <md-text-button
            @click=${() => {
              if (this.#fileToDelete) {
                this.#deleteFile(this.#fileToDelete);
              }

              this.confirmDeleteDialog.close();
            }}
            >Confirm</md-text-button
          >
        </div>
      </md-dialog>
    `;
  }
}

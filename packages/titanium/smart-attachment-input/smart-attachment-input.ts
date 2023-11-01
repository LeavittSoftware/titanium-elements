import '@leavittsoftware/titanium-chip-multi-select/lib/chip-multi-select';
import '@leavittsoftware/titanium-chip';
import '@leavittsoftware/titanium-dialog';
import '@material/mwc-button';
import './crop-and-save-image-dialog';
import './image-preview-dialog';

import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { button } from '@leavittsoftware/titanium-styles';
import { CropAndSaveImageDialog, CropperOptions } from './crop-and-save-image-dialog';
import { repeat } from 'lit/directives/repeat.js';
import { SmartAttachment } from './smart-attachment';
import { getExtension, getFileIcon, imageFormats } from './image-formats';
import { ImagePreviewDialog } from './image-preview-dialog';
import { delay, middleEllipsis } from '@leavittsoftware/titanium-helpers';
import { IDatabaseAttachment } from '@leavittsoftware/lg-core-typescript/lg.net.system';
import { getCdnDownloadUrl, getCdnInlineUrl } from '@leavittsoftware/titanium-helpers/lib/leavitt-cdn';
import { TitaniumDialogElement } from '@leavittsoftware/titanium-dialog';
import { TitaniumChipMultiSelectElement } from '@leavittsoftware/titanium-chip-multi-select/lib/chip-multi-select';

export type TitaniumSmartInputOptions = Cropper.Options & { shape?: ' square' | 'circle' };

/**
 * Material outline image input with cropper
 *
 * @element titanium-smart-attachment-input
 *
 * @fires change - Fired when image is attached or removed from input.
 *
 * @cssprop {Color} [--mdc-text-field-outlined-idle-border-color=rgba(0, 0, 0, 0.38)] - Container border color
 * @cssprop {Color} [--app-light-text-color=#80868b] - No items text color
 * @cssprop {Color} [--app-primary-color=#1a73e8] - Focused outline color
 * @cssprop {Color} [--mdc-theme-error=#b00020] - Text and outline color in invalid state
 * @cssprop {Color} [--mdc-text-field-disabled-ink-color=rgba(0, 0, 0, 0.38)] - Disabled helper text color
 * @cssprop {Color} [--mdc-text-field-label-ink-color=rgba(0, 0, 0, 0.6)] - Helper text color
 * @cssprop [--mdc-typography-caption-font-family=var(--mdc-typography-font-family, Roboto, sans-serif)] - Helper font-family
 * @cssprop [--mdc-typography-caption-font-size=0.75rem] - Helper font-size
 * @cssprop [--mdc-typography-caption-font-weight=400] - Helper font-weight
 * @cssprop [--mdc-typography-caption-letter-spacing=0.0333333em] - Helper letter-spacing
 * @cssprop [--mdc-typography-caption-text-decoration=inherit] - Helper text-decoration
 * @cssprop [--mdc-typography-caption-text-transform=inherit] - Helper text-transform
 *
 */
@customElement('titanium-smart-attachment-input')
export class TitaniumSmartAttachmentInputElement extends LitElement {
  @property({ type: Array }) protected files: SmartAttachment[] = [];
  @property({ type: Boolean, reflect: true, attribute: 'is-over' }) protected isOver: boolean = false;
  @property({ type: String }) protected previewSrc: string | undefined = undefined;

  @query('input') protected input: HTMLInputElement;
  @query('image-preview-dialog') protected imagePreviewDialog!: ImagePreviewDialog;
  @query('crop-and-save-image-dialog') protected cropperDialog!: CropAndSaveImageDialog;
  @query('titanium-dialog[confirm-delete]') private confirmDeleteDialog: TitaniumDialogElement;
  @query('titanium-chip-multi-select') private chipMultiSelect: TitaniumChipMultiSelectElement;

  #originalFiles: SmartAttachment[] = [];

  /**
   *  File types to accept ex. "image/*,.pdf"
   */
  @property({ type: String }) accept = 'image/*,.pdf';

  /**
   *  Allow multiple attachments
   */
  @property({ type: Boolean }) multiple: boolean = false;

  /**
   *  Requires at least one attachment on validate
   */
  @property({ type: Boolean }) required: boolean = false;

  /**
   *  Whether or not the input should be disabled
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   *  Requires user to confirm when delete of an attachment is requested
   */
  @property({ type: Boolean }) confirmDelete: boolean = false;

  /**
   *  Delete confirmation header text
   */
  @property({ type: String }) confirmDeleteHeader: string = 'Confirm delete';

  /**
   *  Delete confirmation paragraph text
   */
  @property({ type: String }) confirmDeleteText: string = 'Are you sure you would like to delete this attachment?';

  /**
   *  Add button label text
   */
  @property({ type: String }) addButtonLabel: string = 'Add attachment';

  /**
   *  Label of input
   */
  @property({ type: String }) label: string = 'Attachments';

  /**
   *  Text to show when there are no attachments
   */
  @property({ type: String }) noItemsText: string = 'No attachments';

  /**
   *  Configurable CropperJs options.
   */
  @property({ type: Object }) options: CropperOptions = {};

  /**
   *  Setting this to true will add a cache busting query string to the image url.
   */
  @property({ type: Boolean }) disableCache: boolean = false;

  /**
   *  Image formats here are sent to the cropper
   */
  @property({ type: Array }) croppableImageFormats: Array<string> = [
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
    this.files = [...files].map(o => ({ file: new File([''], o.fileName), previewSrc: o.previewSrc, downloadSrc: o.downloadSrc, id: o.id }));
    this.#originalFiles = structuredClone(this.files);
  }

  /**
   *  Use to preset input to existing image.
   */
  setFilesFromDatabaseAttachments(...attachments: Partial<IDatabaseAttachment>[]) {
    this.files = [...attachments]
      .filter(o => o.Name && o.Extension)
      .map(o => ({
        id: o.Id,
        file: new File([''], `${o?.Name}.${o?.Extension}`),
        previewSrc: `${getCdnInlineUrl(o, 512)}${this.disableCache ? `?c=${window?.crypto?.randomUUID()}` : ''}`,
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
        const shouldCrop = this.croppableImageFormats.some(o => file.name.endsWith(o));
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
          const isImage = imageFormats.some(o => file.name.endsWith(o));
          if (isImage) {
            try {
              const fileAsBase64 = await this.toBase64(file);
              if (typeof fileAsBase64 === 'string') {
                _file.previewSrc = fileAsBase64 ?? undefined;
              }
            } catch (error) {}
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

  toBase64(file: File) {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  #notifyChange() {
    this.dispatchEvent(new Event('change'));
  }

  static styles = [
    button,
    css`
      :host {
        display: block;
      }

      :host([is-over]) {
        background-color: var(--app-hover-color);
      }

      titanium-chip img {
        margin-left: 8px;
      }

      titanium-dialog {
        --titanium-dialog-max-width: 550px;
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <titanium-chip-multi-select
        .required=${this.required}
        ?disabled=${this.disabled}
        @drop=${(e: DragEvent) => {
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
        <mwc-button
          ?hidden=${!this.multiple && !!this.files.length}
          .disabled=${this.disabled}
          lowercase
          slot="button"
          label=${this.addButtonLabel}
          icon="add"
          outlined
          @click=${() => {
            if (!this.disabled) {
              this.input.value = '';
              this.input.click();
            }
          }}
        ></mwc-button>
        ${repeat(
          this.files,
          o => o.file.name,
          (o, i) =>
            html`<titanium-chip
              label=${middleEllipsis(o.file.name)}
              ?closeable=${!this.disabled}
              ?readonly=${!o.previewSrc && !o.downloadSrc}
              @titanium-chip-close=${async () => {
                if (this.confirmDelete) {
                  const result = await this.confirmDeleteDialog.open();
                  if (result !== 'confirmed') {
                    return;
                  }
                }
                this.files.splice(i, 1);
                this.requestUpdate('files');
                this.reportValidity();
                this.#notifyChange();
              }}
              @click=${() => {
                if (o.previewSrc || o.downloadSrc) {
                  this.imagePreviewDialog.open(o.previewSrc || getFileIcon(getExtension(o.file.name)), o.downloadSrc, o.file.name);
                }
              }}
            >
              <img draggable="false" slot="chip-icon" src="${o.previewSrc || getFileIcon(getExtension(o.file.name))}" />
            </titanium-chip>`
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
          @change=${e => {
            const files = e.target.files;
            this.handleNewFile(files);
          }}
        />
      </label>
      <crop-and-save-image-dialog .options=${this.options}></crop-and-save-image-dialog>
      <image-preview-dialog></image-preview-dialog>
      <titanium-dialog confirm-delete full-width focus-trap header=${this.confirmDeleteHeader}>
        <p>${this.confirmDeleteText}</p>
        <mwc-button
          slot="secondaryAction"
          @click=${() => {
            this.confirmDeleteDialog.close('cancel');
          }}
          label="CANCEL"
        ></mwc-button>
        <mwc-button
          slot="primaryAction"
          @click=${() => {
            this.confirmDeleteDialog.close('confirmed');
          }}
          label="CONFIRM"
        ></mwc-button>
      </titanium-dialog>
    `;
  }
}

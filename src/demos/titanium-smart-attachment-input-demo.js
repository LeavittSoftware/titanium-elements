import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@leavittsoftware/web/titanium/chip/chip';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/text-button';
import '@material/web/dialog/dialog';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/smart-attachment-input/smart-attachment-input';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '@leavittsoftware/web/titanium/hacks/dialog-navigation-hack';
import { dialogZIndexHack } from '@leavittsoftware/web/titanium/hacks/dialog-zindex-hack';
import { ShowSnackbarEvent } from '@leavittsoftware/web/titanium/snackbar/show-snackbar-event';
import StoryStyles from '../styles/story-styles';
let TitaniumSmartAttachmentInputDemo = class TitaniumSmartAttachmentInputDemo extends LitElement {
    #files_accessor_storage = [];
    get files() { return this.#files_accessor_storage; }
    set files(value) { this.#files_accessor_storage = value; }
    #selectedCroppableFormats_accessor_storage = [
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
    get selectedCroppableFormats() { return this.#selectedCroppableFormats_accessor_storage; }
    set selectedCroppableFormats(value) { this.#selectedCroppableFormats_accessor_storage = value; }
    #allImageFormats_accessor_storage = [
        'avif',
        'bmp',
        'dib',
        'gif',
        'ico',
        'jfif',
        'jxl',
        'jpeg',
        'jpg',
        'pjp',
        'pjpeg',
        'png',
        'svg',
        'svgz',
        'tif',
        'tiff',
        'webp',
        'xbm',
    ];
    get allImageFormats() { return this.#allImageFormats_accessor_storage; }
    set allImageFormats(value) { this.#allImageFormats_accessor_storage = value; }
    #smartAttachment_accessor_storage;
    get smartAttachment() { return this.#smartAttachment_accessor_storage; }
    set smartAttachment(value) { this.#smartAttachment_accessor_storage = value; }
    #dialog_accessor_storage;
    get dialog() { return this.#dialog_accessor_storage; }
    set dialog(value) { this.#dialog_accessor_storage = value; }
    static { this.styles = [
        StoryStyles,
        css `
      md-dialog {
        --md-dialog-container-shape: 28px;
      }

      chip-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 16px 0;
      }

      input-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin: 16px 0;
      }
    `,
    ]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium smart attachment input" level1Href="/titanium-smart-attachment-input" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium smart attachment input" className="TitaniumSmartAttachmentInput"></story-header>

            <div>
              <h1>Default</h1>
              <titanium-smart-attachment-input label="Upload files"></titanium-smart-attachment-input>
            </div>

            <div>
              <h1>Filled</h1>
              <titanium-smart-attachment-input
                filled
                .croppableImageFormats=${this.selectedCroppableFormats}
                .files=${this.files}
                label="Upload files"
              ></titanium-smart-attachment-input>

              <br />

              <section buttons>
                <md-filled-tonal-button
                  @click=${() => (this.smartAttachment.supportingText = this.smartAttachment.supportingText ? '' : 'This is a supporting text')}
                  >Toggle supporting text</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
            this.smartAttachment.reset();
            this.files = [];
        }}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${() => (this.smartAttachment.disabled = !this.smartAttachment.disabled)}
                  >Toggle disabled</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${() => (this.smartAttachment.required = !this.smartAttachment.required)}
                  >Toggle required</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${() => this.smartAttachment.reportValidity()}>Report validity</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => (this.smartAttachment.multiple = !this.smartAttachment.multiple)}
                  >Toggle multiple</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${() => (this.smartAttachment.confirmDelete = !this.smartAttachment.confirmDelete)}
                  >Toggle confirm delete</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${() => this.dialog?.show()}
                  >Configure croppable formats (${this.selectedCroppableFormats.length} selected)</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => this.dispatchEvent(new ShowSnackbarEvent(this.smartAttachment.getFiles().length ? `${this.smartAttachment.getFiles().length} files selected` : 'No files selected'))}
                  >Get files</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => (this.files = [
            {
                file: new File([''], 'sample.svg'),
                previewSrc: 'https://cdn.leavitt.com/icons/icon-app-broker-key.svg',
            },
        ])}
                  >Pre-select file</md-filled-tonal-button
                >
              </section>
            </div>

            <div>
              <h1>Crop and save dialog options</h1>
              <input-grid>
                <titanium-smart-attachment-input
                  label="Circle crop"
                  supporting-text="Forces an aspect ratio of 1:1"
                  .options=${{
            shape: 'circle',
        }}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Custom aspect ratio"
                  .options=${{
            selectionAspectRatio: 16 / 9,
        }}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="No aspect ratio, no grid, no background"
                  .options=${{
            selectionHideGrid: true,
            canvasHideBackground: true,
        }}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Constrain select to canvas"
                  .options=${{
            constrainSelectionTo: 'canvas',
        }}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Constrain select to image"
                  .options=${{
            constrainSelectionTo: 'image',
        }}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Maximize selection"
                  .options=${{
            maximizeSelection: true,
        }}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Maximize selection with aspect"
                  .options=${{
            maximizeSelection: true,
            selectionAspectRatio: 16 / 9,
        }}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Maximize with wide aspect and image constrain"
                  .options=${{
            maximizeSelection: true,
            selectionAspectRatio: 16 / 9,
            constrainSelectionTo: 'image',
        }}
                ></titanium-smart-attachment-input>
                <titanium-smart-attachment-input
                  label="Maximize with tall aspect and image constrain"
                  .options=${{
            maximizeSelection: true,
            selectionAspectRatio: 9 / 16,
            constrainSelectionTo: 'image',
        }}
                ></titanium-smart-attachment-input
              ></input-grid>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-smart-attachment-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <md-dialog
        @open=${(e) => {
            dialogOpenNavigationHack(e.target);
            dialogZIndexHack(e.target);
        }}
        @close=${(e) => {
            if (e.target.returnValue === 'cancel' || e.target.returnValue === 'save' || e.target.returnValue === 'navigation-close') {
                dialogCloseNavigationHack(e.target);
            }
        }}
      >
        <div slot="headline">Configure Croppable Image Formats</div>
        <form slot="content" id="format-form" method="dialog">
          <p>Select which image formats should be croppable. Selected formats will show crop options when uploading images.</p>
          <chip-container>
            ${this.allImageFormats.map((format) => html `
                <titanium-chip
                  label=${format.toUpperCase()}
                  ?selected=${this.selectedCroppableFormats.includes(format)}
                  @click=${() => {
            if (this.selectedCroppableFormats.includes(format)) {
                this.selectedCroppableFormats = this.selectedCroppableFormats.filter((f) => f !== format);
            }
            else {
                this.selectedCroppableFormats = [...this.selectedCroppableFormats, format];
            }
        }}
                >
                </titanium-chip>
              `)}
          </chip-container>
        </form>
        <div slot="actions">
          <md-text-button @click=${() => (this.selectedCroppableFormats = [...this.allImageFormats])}>Select All</md-text-button>
          <md-text-button @click=${() => (this.selectedCroppableFormats = [])}>Clear All</md-text-button>
          <md-filled-tonal-button @click=${() => this.dialog?.close()}>Close</md-filled-tonal-button>
        </div>
      </md-dialog>
    `;
    }
};
__decorate([
    state()
], TitaniumSmartAttachmentInputDemo.prototype, "files", null);
__decorate([
    state()
], TitaniumSmartAttachmentInputDemo.prototype, "selectedCroppableFormats", null);
__decorate([
    state()
], TitaniumSmartAttachmentInputDemo.prototype, "allImageFormats", null);
__decorate([
    query('titanium-smart-attachment-input[filled]')
], TitaniumSmartAttachmentInputDemo.prototype, "smartAttachment", null);
__decorate([
    query('md-dialog')
], TitaniumSmartAttachmentInputDemo.prototype, "dialog", null);
TitaniumSmartAttachmentInputDemo = __decorate([
    customElement('titanium-smart-attachment-input-demo')
], TitaniumSmartAttachmentInputDemo);
export { TitaniumSmartAttachmentInputDemo };
//# sourceMappingURL=titanium-smart-attachment-input-demo.js.map
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
import { TitaniumSmartAttachmentInput } from '@leavittsoftware/web/titanium/smart-attachment-input/smart-attachment-input';
import { MdDialog } from '@material/web/dialog/dialog';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '@leavittsoftware/web/titanium/hacks/dialog-navigation-hack';
import { dialogZIndexHack } from '@leavittsoftware/web/titanium/hacks/dialog-zindex-hack';
import { SmartAttachment } from '@leavittsoftware/web/titanium/smart-attachment-input/type/smart-attachment';
import { ShowSnackbarEvent } from '@leavittsoftware/web/titanium/snackbar/show-snackbar-event';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-smart-attachment-input-demo')
export class TitaniumSmartAttachmentInputDemo extends LitElement {
  @state() private accessor files: SmartAttachment[] = [];
  @state() private accessor selectedCroppableFormats: string[] = [
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

  @state() private accessor allImageFormats = [
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

  @query('titanium-smart-attachment-input[filled]') private accessor smartAttachment!: TitaniumSmartAttachmentInput;
  @query('md-dialog') private accessor dialog!: any;

  static styles = [
    StoryStyles,
    css`
      md-dialog {
        --md-dialog-container-shape: 28px;
      }

      chip-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 16px 0;
      }
    `,
  ];

  render() {
    return html`
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
                  @click=${() =>
                    this.dispatchEvent(
                      new ShowSnackbarEvent(
                        this.smartAttachment.getFiles().length ? `${this.smartAttachment.getFiles().length} files selected` : 'No files selected'
                      )
                    )}
                  >Get files</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() =>
                    (this.files = [
                      {
                        file: new File([''], 'sample.svg'),
                        previewSrc: 'https://cdn.leavitt.com/icons/icon-app-broker-key.svg',
                      },
                    ])}
                  >Pre-select file</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-smart-attachment-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <md-dialog
        @open=${(e: DOMEvent<MdDialog>) => {
          dialogOpenNavigationHack(e.target);
          dialogZIndexHack(e.target);
        }}
        @close=${(e: DOMEvent<MdDialog>) => {
          if (e.target.returnValue === 'cancel' || e.target.returnValue === 'save' || e.target.returnValue === 'navigation-close') {
            dialogCloseNavigationHack(e.target);
          }
        }}
      >
        <div slot="headline">Configure Croppable Image Formats</div>
        <form slot="content" id="format-form" method="dialog">
          <p>Select which image formats should be croppable. Selected formats will show crop options when uploading images.</p>
          <chip-container>
            ${this.allImageFormats.map(
              (format) => html`
                <titanium-chip
                  label=${format.toUpperCase()}
                  ?selected=${this.selectedCroppableFormats.includes(format)}
                  @click=${() => {
                    if (this.selectedCroppableFormats.includes(format)) {
                      this.selectedCroppableFormats = this.selectedCroppableFormats.filter((f) => f !== format);
                    } else {
                      this.selectedCroppableFormats = [...this.selectedCroppableFormats, format];
                    }
                  }}
                >
                </titanium-chip>
              `
            )}
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
}

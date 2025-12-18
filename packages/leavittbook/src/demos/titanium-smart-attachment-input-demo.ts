import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/button/text-button';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/smart-attachment-input/smart-attachment-input';
import { TitaniumSmartAttachmentInput } from '@leavittsoftware/web/titanium/smart-attachment-input/smart-attachment-input';
import { CropperOptions } from '@leavittsoftware/web/titanium/smart-attachment-input/crop-and-save-image-dialog';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-smart-attachment-input-demo')
export class TitaniumSmartAttachmentInputDemo extends LitElement {
  @state() protected getFilesResult: string | null = null;
  @state() protected hasChanges: boolean = false;
  @query('titanium-smart-attachment-input[get-files]') protected accessor getFilesInput!: TitaniumSmartAttachmentInput;
  @query('titanium-smart-attachment-input[preselect]') protected accessor preselectFilesInput!: TitaniumSmartAttachmentInput;
  @query('titanium-smart-attachment-input[preselect-disabled]') protected accessor preselectDisabledFilesInput!: TitaniumSmartAttachmentInput;
  @query('titanium-smart-attachment-input[reset]') protected accessor resetInput!: TitaniumSmartAttachmentInput;

  static styles = [
    StoryStyles,
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      div[vertical] {
        flex-direction: column;
      }

      div[vertical] p {
        margin-bottom: 12px;
      }

      div[vertical] p > span {
        font-weight: 500;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium smart attachment input" className="TitaniumSmartAttachmentInput"></story-header>
      <h1>Basic smart attachment input</h1>
      <p>Smart attachment input with file upload, cropping, and validation</p>

      <div vertical>
        <p>Get Files Result: <span>${this.getFilesResult || 'No files'}</span></p>
        <titanium-smart-attachment-input
          get-files
          label="Upload files"
          @files-changed=${(e: CustomEvent) => {
            this.getFilesResult = e.detail?.length ? `${e.detail.length} files selected` : null;
          }}
        ></titanium-smart-attachment-input>
      </div>

      <div>
        <h2>With pre-selected files</h2>
        <titanium-smart-attachment-input
          preselect
          label="Pre-selected files"
          .files=${[
            {
              name: 'sample-image.jpg',
              size: 1024000,
              type: 'image/jpeg',
              lastModified: Date.now(),
            },
          ]}
        ></titanium-smart-attachment-input>
      </div>

      <div>
        <h2>Disabled state</h2>
        <titanium-smart-attachment-input
          preselect-disabled
          disabled
          label="Disabled input"
          .files=${[
            {
              name: 'sample.pdf',
              size: 2048000,
              type: 'application/pdf',
              lastModified: Date.now(),
            },
          ]}
        ></titanium-smart-attachment-input>
      </div>

      <div vertical>
        <titanium-smart-attachment-input reset label="With reset functionality"></titanium-smart-attachment-input>
        <section buttons>
          <md-text-button @click=${() => this.resetInput.reset()}>Reset Files</md-text-button>
        </section>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-smart-attachment-input"></api-docs>
    `;
  }
}

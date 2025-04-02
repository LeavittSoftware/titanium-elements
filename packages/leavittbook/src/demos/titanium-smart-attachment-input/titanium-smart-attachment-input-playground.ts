/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@material/web/button/text-button';
/* playground-fold-end */

import '@leavittsoftware/web/titanium/smart-attachment-input/smart-attachment-input';
import { TitaniumSmartAttachmentInput } from '@leavittsoftware/web/titanium/smart-attachment-input/smart-attachment-input';
import { CropperOptions } from '@leavittsoftware/web/titanium/smart-attachment-input/crop-and-save-image-dialog';

/* playground-fold */
@customElement('titanium-smart-attachment-input-playground')
export class TitaniumSmartAttachmentInputPlayground extends LitElement {
  @state() protected getFilesResult: string | null = null;
  @state() protected hasChanges: boolean = false;
  @query('titanium-smart-attachment-input[get-files]') protected accessor getFilesInput!: TitaniumSmartAttachmentInput;
  @query('titanium-smart-attachment-input[preselect]') protected accessor preselectFilesInput!: TitaniumSmartAttachmentInput;
  @query('titanium-smart-attachment-input[preselect-disabled]') protected accessor preselectDisabledFilesInput!: TitaniumSmartAttachmentInput;
  @query('titanium-smart-attachment-input[reset]') protected accessor resetInput!: TitaniumSmartAttachmentInput;

  static styles = [
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
        color: #666;
        font-size: 11px;
      }
    `,
  ];

  firstUpdated() {
    this.preselectFilesInput.setFiles({
      fileName: 'chrome.png',
      previewSrc:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAB+FBMVEUAAAA/mUPidDHiLi5Cn0XkNTPmeUrkdUg/m0Q0pEfcpSbwaVdKskg+lUP4zA/iLi3msSHkOjVAmETdJSjtYFE/lkPnRj3sWUs8kkLeqCVIq0fxvhXqUkbVmSjwa1n1yBLepyX1xxP0xRXqUkboST9KukpHpUbuvRrzrhF/ljbwaljuZFM4jELaoSdLtElJrUj1xxP6zwzfqSU4i0HYnydMtUlIqUfywxb60AxZqEXaoifgMCXptR9MtklHpEY2iUHWnSjvvRr70QujkC+pUC/90glMuEnlOjVMt0j70QriLS1LtEnnRj3qUUXfIidOjsxAhcZFo0bjNDH0xxNLr0dIrUdmntVTkMoyfL8jcLBRuErhJyrgKyb4zA/5zg3tYFBBmUTmQTnhMinruBzvvhnxwxZ/st+Ktt5zp9hqota2vtK6y9FemNBblc9HiMiTtMbFtsM6gcPV2r6dwroseLrMrbQrdLGdyKoobKbo3Zh+ynrgVllZulTsXE3rV0pIqUf42UVUo0JyjEHoS0HmsiHRGR/lmRz/1hjqnxjvpRWfwtOhusaz0LRGf7FEfbDVmqHXlJeW0pbXq5bec3fX0nTnzmuJuWvhoFFhm0FtrziBsjaAaDCYWC+uSi6jQS3FsSfLJiTirCOkuCG1KiG+wSC+GBvgyhTszQ64Z77KAAAARXRSTlMAIQRDLyUgCwsE6ebm5ubg2dLR0byXl4FDQzU1NDEuLSUgC+vr6urq6ubb29vb2tra2tG8vLu7u7uXl5eXgYGBgYGBLiUALabIAAABsElEQVQoz12S9VPjQBxHt8VaOA6HE+AOzv1wd7pJk5I2adpCC7RUcHd3d3fXf5PvLkxheD++z+yb7GSRlwD/+Hj/APQCZWxM5M+goF+RMbHK594v+tPoiN1uHxkt+xzt9+R9wnRTZZQpXQ0T5uP1IQxToyOAZiQu5HEpjeA4SWIoksRxNiGC1tRZJ4LNxgHgnU5nJZBDvuDdl8lzQRBsQ+s9PZt7s7Pz8wsL39/DkIfZ4xlB2Gqsq62ta9oxVlVrNZpihFRpGO9fzQw1ms0NDWZz07iGkJmIFH8xxkc3a/WWlubmFkv9AB2SEpDvKxbjidN2faseaNV3zoHXvv7wMODJdkOHAegweAfFPx4G67KluxzottCU9n8CUqXzcIQdXOytAHqXxomvykhEKN9EFutG22p//0rbNvHVxiJywa8yS2KDfV1dfbu31H8jF1RHiTKtWYeHxUvq3bn0pyjCRaiRU6aDO+gb3aEfEeVNsDgm8zzLy9egPa7Qt8TSJdwhjplk06HH43ZNJ3s91KKCHQ5x4sw1fRGYDZ0n1L4FKb9/BP5JLYxToheoFCVxz57PPS8UhhEpLBVeAAAAAElFTkSuQmCC',
    });

    this.preselectDisabledFilesInput.setFiles({
      fileName: 'chrome.png',
      previewSrc:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAB+FBMVEUAAAA/mUPidDHiLi5Cn0XkNTPmeUrkdUg/m0Q0pEfcpSbwaVdKskg+lUP4zA/iLi3msSHkOjVAmETdJSjtYFE/lkPnRj3sWUs8kkLeqCVIq0fxvhXqUkbVmSjwa1n1yBLepyX1xxP0xRXqUkboST9KukpHpUbuvRrzrhF/ljbwaljuZFM4jELaoSdLtElJrUj1xxP6zwzfqSU4i0HYnydMtUlIqUfywxb60AxZqEXaoifgMCXptR9MtklHpEY2iUHWnSjvvRr70QujkC+pUC/90glMuEnlOjVMt0j70QriLS1LtEnnRj3qUUXfIidOjsxAhcZFo0bjNDH0xxNLr0dIrUdmntVTkMoyfL8jcLBRuErhJyrgKyb4zA/5zg3tYFBBmUTmQTnhMinruBzvvhnxwxZ/st+Ktt5zp9hqota2vtK6y9FemNBblc9HiMiTtMbFtsM6gcPV2r6dwroseLrMrbQrdLGdyKoobKbo3Zh+ynrgVllZulTsXE3rV0pIqUf42UVUo0JyjEHoS0HmsiHRGR/lmRz/1hjqnxjvpRWfwtOhusaz0LRGf7FEfbDVmqHXlJeW0pbXq5bec3fX0nTnzmuJuWvhoFFhm0FtrziBsjaAaDCYWC+uSi6jQS3FsSfLJiTirCOkuCG1KiG+wSC+GBvgyhTszQ64Z77KAAAARXRSTlMAIQRDLyUgCwsE6ebm5ubg2dLR0byXl4FDQzU1NDEuLSUgC+vr6urq6ubb29vb2tra2tG8vLu7u7uXl5eXgYGBgYGBLiUALabIAAABsElEQVQoz12S9VPjQBxHt8VaOA6HE+AOzv1wd7pJk5I2adpCC7RUcHd3d3fXf5PvLkxheD++z+yb7GSRlwD/+Hj/APQCZWxM5M+goF+RMbHK594v+tPoiN1uHxkt+xzt9+R9wnRTZZQpXQ0T5uP1IQxToyOAZiQu5HEpjeA4SWIoksRxNiGC1tRZJ4LNxgHgnU5nJZBDvuDdl8lzQRBsQ+s9PZt7s7Pz8wsL39/DkIfZ4xlB2Gqsq62ta9oxVlVrNZpihFRpGO9fzQw1ms0NDWZz07iGkJmIFH8xxkc3a/WWlubmFkv9AB2SEpDvKxbjidN2faseaNV3zoHXvv7wMODJdkOHAegweAfFPx4G67KluxzottCU9n8CUqXzcIQdXOytAHqXxomvykhEKN9EFutG22p//0rbNvHVxiJywa8yS2KDfV1dfbu31H8jF1RHiTKtWYeHxUvq3bn0pyjCRaiRU6aDO+gb3aEfEeVNsDgm8zzLy9egPa7Qt8TSJdwhjplk06HH43ZNJ3s91KKCHQ5x4sw1fRGYDZ0n1L4FKb9/BP5JLYxToheoFCVxz57PPS8UhhEpLBVeAAAAAElFTkSuQmCC',
    });
  }

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Attribute examples</p>
      <div>
        <titanium-smart-attachment-input></titanium-smart-attachment-input>
        <titanium-smart-attachment-input label="Multiple" multiple placeholder="Select Files"></titanium-smart-attachment-input>
        <titanium-smart-attachment-input label="Required" required></titanium-smart-attachment-input>
        <titanium-smart-attachment-input label="Disabled" disabled></titanium-smart-attachment-input>
        <titanium-smart-attachment-input label=".pdf or .svg only" accept=".pdf,.svg"></titanium-smart-attachment-input>
        <titanium-smart-attachment-input
          label="Configure text"
          noItemsText="No certificate"
          addButtonLabel="Add certificate"
          accept=".pdf"
        ></titanium-smart-attachment-input>
        <titanium-smart-attachment-input
          label="Prevent cropping SVG or GIFs"
          .croppableImageFormats=${['png']}
          accept=".svg,.png,.gif"
          multiple
        ></titanium-smart-attachment-input>
        <titanium-smart-attachment-input label="supporting text" supportingText="Click the add button to get started"></titanium-smart-attachment-input>
      </div>

      <h1>Get files</h1>
      <p>Demonstrates results of calling getFiles()</p>
      <div>
        <titanium-smart-attachment-input get-files multiple placeholder="Select Files"></titanium-smart-attachment-input>
        <md-text-button @click=${() => (this.getFilesResult = JSON.stringify(this.getFilesInput.getFiles()))}>GetFiles()</md-text-button>
        <span style="overflow-y: auto">${this.getFilesResult}</span>
      </div>

      <h1>Pre-select</h1>
      <p>Populate input with pre selected attachments (using setFiles() in firstUpdated)</p>
      <div>
        <titanium-smart-attachment-input multiple placeholder="Select Files" preselect></titanium-smart-attachment-input>
        <titanium-smart-attachment-input multiple placeholder="Select Files" preselect-disabled disabled></titanium-smart-attachment-input>
      </div>

      <h1>Has changes</h1>
      <p>Currently ${this.hasChanges ? 'has changes' : 'has no changes'}</p>
      <div>
        <titanium-smart-attachment-input @change=${(e) => (this.hasChanges = e.target.hasChanges())}></titanium-smart-attachment-input>
      </div>

      <h1>Validate and Reset</h1>
      <p>Reset the input</p>
      <div>
        <titanium-smart-attachment-input required reset></titanium-smart-attachment-input>
        <md-text-button @click=${() => this.resetInput.reportValidity()}>reportValidity()</md-text-button>
        <md-text-button @click=${() => alert(this.resetInput.checkValidity())}>checkValidity()</md-text-button>
        <md-text-button @click=${() => this.resetInput.reset()}>Reset()</md-text-button>
      </div>

      <h1>Confirm delete</h1>
      <p>Confirmation modal on delete request</p>
      <div>
        <titanium-smart-attachment-input
          label="Ducks"
          confirmDelete
          confirmDeleteHeader="Confirm delete"
          confirmDeleteText="Are you sure you would like to delete this duck?"
        ></titanium-smart-attachment-input>
      </div>

      <h1>Crop and save dialog options</h1>
      <p>Configure options to modify how the cropper behaves</p>
      <div>
        <titanium-smart-attachment-input
          label="Crop it"
          .options=${{
            canvasShowBackground: false,
            selectionAspectRatio: 1,
            showGrid: false,
            shape: 'circle',
          } as CropperOptions}
        ></titanium-smart-attachment-input>
      </div>
    `;
  }
}

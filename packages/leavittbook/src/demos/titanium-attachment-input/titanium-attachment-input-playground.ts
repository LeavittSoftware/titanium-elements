/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-icon';
import '@material/mwc-button';
/* playground-fold-end */

import '@leavittsoftware/titanium-attachment-input';
import { TitaniumAttachmentInputElement } from '@leavittsoftware/titanium-attachment-input';

/* playground-fold */
@customElement('titanium-attachment-input-playground')
export class TitaniumAttachmentInputPlayground extends LitElement {
  @state() private getFilesResult: string | null = null;
  @state() private hasChanges: boolean = false;
  @query('titanium-attachment-input[get-files]') private getFilesInput!: TitaniumAttachmentInputElement;
  @query('titanium-attachment-input[preselect]') private preselectFilesInput!: TitaniumAttachmentInputElement;
  @query('titanium-attachment-input[preselect-disabled]') private preselectDisabledFileInput!: TitaniumAttachmentInputElement;
  @query('titanium-attachment-input[reset]') private resetInput!: TitaniumAttachmentInputElement;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }
    `,
  ];

  firstUpdated() {
    this.preselectFilesInput.setAttachment({ Id: 3, Name: 'preselected', Extension: 'png' });
    this.preselectDisabledFileInput.setAttachment({ Id: 3, Name: 'preselected', Extension: 'png' });
  }

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Examples using attachment,multiple,required,disabled,placeholder, and allowedExtensions</p>
      <div>
        <titanium-attachment-input></titanium-attachment-input>
        <titanium-attachment-input label="multiple" multiple placeholder="Select Files"></titanium-attachment-input>
        <titanium-attachment-input label="required" required validationMessage="This is required"></titanium-attachment-input>
        <titanium-attachment-input label="disabled" disabled></titanium-attachment-input>
        <titanium-attachment-input label="placeholder" placeholder="my placeholder"></titanium-attachment-input>
        <titanium-attachment-input label="allowedExtensions" allowedExtensions="png,xls"></titanium-attachment-input>
      </div>

      <h1>GetFiles()</h1>
      <p>Demonstrates results of calling getFiles</p>
      <div>
        <titanium-attachment-input get-files multiple placeholder="Select Files"></titanium-attachment-input>
        <mwc-button outlined @click=${() => (this.getFilesResult = JSON.stringify(this.getFilesInput.getFiles()))}>Get Files</mwc-button>
        <span>${this.getFilesResult}</span>
      </div>

      <h1>Pre Select</h1>
      <p>populate input with pre selected attachments (using setAttachment in firstUpdated)</p>
      <div>
        <titanium-attachment-input multiple placeholder="Select Files" preselect></titanium-attachment-input>
        <titanium-attachment-input multiple placeholder="Select Files" preselect-disabled disabled></titanium-attachment-input>
      </div>

      <h1>Has Changes</h1>
      <p>Currently ${this.hasChanges ? 'has changes' : 'has no changes'}</p>
      <div>
        <titanium-attachment-input
          @change=${e => {
            this.hasChanges = e.target.hasChanges();
          }}
        ></titanium-attachment-input>
      </div>

      <h1>Reset</h1>
      <p>Reset the input</p>
      <div>
        <titanium-attachment-input reset></titanium-attachment-input>
        <mwc-button outlined @click=${() => this.resetInput.reset()}>Reset</mwc-button>
      </div>
    `;
  }
}

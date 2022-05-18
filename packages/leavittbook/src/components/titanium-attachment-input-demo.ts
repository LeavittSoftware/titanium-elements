import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';

import StoryStyles from '../styles/story-styles';

import '@leavittsoftware/titanium-card';
import '@material/mwc-icon';
import '@leavittsoftware/titanium-attachment-input';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';
import '@leavittsoftware/titanium-button';
import { TitaniumAttachmentInputElement } from '@leavittsoftware/titanium-attachment-input';

@customElement('titanium-attachment-input-demo')
export class TitaniumAttachmentInputDemoElement extends LitElement {
  @state() private getFilesResult: string | null = null;
  @state() private hasChanges: boolean = false;
  @query('titanium-attachment-input[get-files]') private getFilesInput!: TitaniumAttachmentInputElement;
  @query('titanium-attachment-input[preselect]') private preselectFilesInput!: TitaniumAttachmentInputElement;
  @query('titanium-attachment-input[reset]') private resetInput!: TitaniumAttachmentInputElement;
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  firstUpdated() {
    this.preselectFilesInput.setAttachment({ Id: 3, Name: 'preselected', Extension: 'png' });
  }

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Examples using attachment,multiple,required,disabled,placeholder, and allowedExtensions</p>
        <titanium-attachment-input></titanium-attachment-input>
        <titanium-attachment-input label="multiple" multiple placeholder="Select Files"></titanium-attachment-input>
        <titanium-attachment-input label="required" required validationMessage="This is required"></titanium-attachment-input>
        <titanium-attachment-input label="disabled" disabled></titanium-attachment-input>
        <titanium-attachment-input label="placeholder" placeholder="my placeholder"></titanium-attachment-input>
        <titanium-attachment-input label="allowedExtensions" allowedExtensions="png,xls"></titanium-attachment-input>
      </div>
    `;
  }

  #getFilesStory() {
    return html`
      <div>
        <h1>GetFiles()</h1>
        <p>Demonstrates results of calling getFiles</p>
        <titanium-attachment-input get-files multiple placeholder="Select Files"></titanium-attachment-input>
        <titanium-button @click=${() => (this.getFilesResult = JSON.stringify(this.getFilesInput.getFiles()))} raised>Get Files</titanium-button>
        <div>${this.getFilesResult}</div>
      </div>
    `;
  }

  #getPreselectedStory() {
    return html`
      <div>
        <h1>Pre Select</h1>
        <p>populate input with pre selected attachments (using setAttachment in firstUpdated)</p>
        <titanium-attachment-input multiple placeholder="Select Files" preselect></titanium-attachment-input>
      </div>
    `;
  }

  #getHasChangesStory() {
    return html`
      <div>
        <h1>Has Changes</h1>
        <p>Currently ${this.hasChanges ? 'has changes' : 'has no changes'}</p>
        <titanium-attachment-input
          @change=${e => {
            this.hasChanges = e.target.hasChanges();
          }}
        ></titanium-attachment-input>
      </div>
    `;
  }

  #getResetStory() {
    return html`
      <div>
        <h1>Reset</h1>
        <p>Reset the input</p>
        <titanium-attachment-input reset></titanium-attachment-input>
        <titanium-button @click=${() => this.resetInput.reset()} raised>Reset</titanium-button>
      </div>
    `;
  }

  render() {
    return html`
      <story-header
        name="Titanium Attachment Input"
        packageName="titanium-attachment-input"
        tagName="titanium-attachment-input"
        klass="TitaniumAttachmentInputElement"
      ></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#getFilesStory()}
        <code-block .snippet=${this.#getFilesStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#getPreselectedStory()}
        <code-block .snippet=${this.#getPreselectedStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#getResetStory()}
        <code-block .snippet=${this.#getResetStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#getHasChangesStory()}
        <code-block .snippet=${this.#getHasChangesStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="titanium-attachment-input"></api-docs>
    `;
  }
}

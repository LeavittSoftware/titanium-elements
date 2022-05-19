import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-dialog/lib/confirm-dialog';
import '@material/mwc-button';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';
import { ConfirmDialogOpenEvent } from '@leavittsoftware/titanium-dialog/lib/confirm-dialog-open-event';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';

@customElement('confirm-dialog-demo')
export class ConfirmDialogDemoElement extends LitElement {
  @query('confirm-dialog') dialog;

  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  firstUpdated() {
    this.addEventListener(ConfirmDialogOpenEvent.eventType, async (e: ConfirmDialogOpenEvent) => {
      this.dialog.handleEvent(e);
    });
  }

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default example of confirm-dialog</p>
        <mwc-button
          outlined
          @click=${async () => {
            const confirmationDialogEvent = new ConfirmDialogOpenEvent('Delete the universe?', 'Are you sure you would like to delete the universe?');
            this.dispatchEvent(confirmationDialogEvent);
            if (!(await confirmationDialogEvent.dialogResult)) {
              TitaniumSnackbarSingleton.open('Universe deletion failed');
              return;
            }
            TitaniumSnackbarSingleton.open('Universe deletion successful');
          }}
          label="Do Not Push"
        ></mwc-button>

        <confirm-dialog> </confirm-dialog>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Confirm Dialog" tagName="confirm-dialog" klass="ConfirmDialogElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="confirm-dialog"></api-docs>
    `;
  }
}

import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/button/outlined-button';

import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog';
import { ConfirmDialogOpenEvent } from '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog-open-event';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-confirm-dialog-demo')
export class TitaniumConfirmDialogDemo extends LitElement {
  @state() private accessor confirmed = false;

  async #open() {
    const confirmationDialogEvent = new ConfirmDialogOpenEvent(
      'Confirm delete?',
      'Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.'
    );
    this.dispatchEvent(confirmationDialogEvent);
    this.confirmed = await confirmationDialogEvent.dialogResult;
  }

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
      <story-header name="Titanium confirm dialog" className="TitaniumConfirmDialog"></story-header>
      <h1>Default</h1>
      <p>Confirmation dialog with custom title and message</p>
      <div>
        <p>Confirmed: ${this.confirmed}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${this.#open}>Open</md-outlined-button>
        </section>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-confirm-dialog"></api-docs>
    `;
  }
}

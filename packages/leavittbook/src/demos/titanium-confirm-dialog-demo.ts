import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';

import '@material/web/button/filled-tonal-button';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog';
import { ConfirmDialogOpenEvent } from '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog-open-event';
import { heroStyles } from '../styles/hero-styles';

import StoryStyles from '../styles/story-styles';
import TitaniumConfirmDialog from '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog';

@customElement('titanium-confirm-dialog-demo')
export class TitaniumConfirmDialogDemo extends LitElement {
  @state() private accessor confirmed = false;
  @query('titanium-confirm-dialog') private accessor confirmDialog!: TitaniumConfirmDialog;

  async #open() {
    const confirmationDialogEvent = new ConfirmDialogOpenEvent(
      'Confirm delete?',
      'Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.'
    );
    this.dispatchEvent(confirmationDialogEvent);
    this.confirmed = await confirmationDialogEvent.dialogResult;
  }

  firstUpdated() {
    this.addEventListener(ConfirmDialogOpenEvent.eventType, async (e: ConfirmDialogOpenEvent) => {
      await import('@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog');
      this.confirmDialog.handleEvent(e);
    });
  }

  static styles = [
    StoryStyles,
    heroStyles,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;
      }

      h1,
      h3 {
        margin-bottom: 12px;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium confirm dialog" level1Href="/titanium-confirm-dialog" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium confirm dialog" className="TitaniumConfirmDialog"></story-header>
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-confirm-dialog</kbd> is deprecated. Use <kbd>titanium-confirmation-dialog</kbd> instead.</p>
            </deprecation-notice>
            <div>
              <h1>Default</h1>
              <h3>Confirmed: ${this.confirmed}</h3>
              <md-filled-tonal-button @click=${this.#open}>Open</md-filled-tonal-button>
            </div>
            <api-docs src="./custom-elements.json" selected="titanium-confirm-dialog"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
      <titanium-confirm-dialog></titanium-confirm-dialog>
    `;
  }
}

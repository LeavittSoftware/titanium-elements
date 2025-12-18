import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/dialog/dialog';
import '@material/web/button/outlined-button';

import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import { HttpError } from '@leavittsoftware/web/leavitt/api-service/HttpError';
import { SnackbarStack } from '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import { ShowSnackbarEvent } from '@leavittsoftware/web/titanium/snackbar/show-snackbar-event';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { dialogZIndexHack } from '@leavittsoftware/web/titanium/hacks/dialog-zindex-hack';
import { MdDialog } from '@material/web/dialog/dialog';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-snackbar-demo')
export class TitaniumSnackbarDemo extends LitElement {
  @query('md-dialog') dialog: MdDialog;
  @query('titanium-snackbar-stack') snackbar: SnackbarStack;

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
      <story-header name="Titanium snackbar" className="TitaniumSnackbar"></story-header>
      <h1>Snackbar stack</h1>
      <p>Snackbar notifications with different types and actions</p>

      <div>
        <section buttons>
          <md-outlined-button
            @click=${() => {
              this.dispatchEvent(new ShowSnackbarEvent('Simple message'));
            }}
            >Simple message</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.dispatchEvent(new ShowSnackbarEvent('Message with action', { actionText: 'Undo' }));
            }}
            >With action</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.dispatchEvent(new ShowSnackbarEvent('Success message', { leadingIcon: 'check_circle' }));
            }}
            >With leading icon</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.dispatchEvent(new ShowSnackbarEvent('Long message that should wrap to multiple lines and show more content', { autoHide: false }));
            }}
            >Long message (no auto-hide)</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.dispatchEvent(new ShowSnackbarEvent('Custom duration', { autoHide: 10000 }));
            }}
            >Custom duration (10s)</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.dispatchEvent(new ShowSnackbarEvent('Error message', { leadingIcon: 'error', noAction: true }));
            }}
            >Error style</md-outlined-button
          >
        </section>
      </div>

      <titanium-snackbar-stack></titanium-snackbar-stack>

      <api-docs src="./custom-elements.json" selected="titanium-snackbar"></api-docs>
    `;
  }
}

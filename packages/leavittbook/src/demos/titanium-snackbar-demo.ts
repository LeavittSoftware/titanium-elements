import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@material/web/dialog/dialog';
import '@material/web/button/filled-tonal-button';
import '@api-viewer/docs';

import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';

import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { SnackbarStack } from '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import { ShowSnackbarEvent } from '@leavittsoftware/web/titanium/snackbar/show-snackbar-event';
import { MdDialog } from '@material/web/dialog/dialog';
import { heroStyles } from '../styles/hero-styles';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { dialogZIndexHack } from '@leavittsoftware/web/titanium/hacks/dialog-zindex-hack';
import { HttpError } from '@leavittsoftware/web/leavitt/api-service/HttpError';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-snackbar-demo')
export class TitaniumSnackbarDemo extends LitElement {
  @query('md-dialog') dialog: MdDialog;
  @query('titanium-snackbar-stack') snackbar: SnackbarStack;

  static styles = [
    StoryStyles,
    heroStyles,
    h1,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      leavitt-app-width-limiter div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;

        &:not(:first-of-type) {
          margin-top: 24px;
        }
      }

      p {
        margin-bottom: 12px;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `,
  ];

  #counter = 0;

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium snackbar" level1Href="/titanium-snackbar" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium snackbar" className="TitaniumSnackbar"></story-header>

            <div>
              <h1>Snackbar stack</h1>
              <p>Snackbar notifications with different types and actions</p>

              <section buttons>
                <md-filled-tonal-button
                  @click=${() => {
                    this.#counter++;
                    this.dispatchEvent(new ShowSnackbarEvent(`Default snackbar #${this.#counter}`));
                  }}
                  >Default</md-filled-tonal-button
                >

                <md-filled-tonal-button @click=${() => this.dispatchEvent(new ShowSnackbarEvent('Auto-hide snackbar', { autoHide: 2000 }))}
                  >Auto-hide</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${() =>
                    this.dispatchEvent(
                      new ShowSnackbarEvent({
                        action: 'GET',
                        message: 'Network error. Check your connection and try again.',
                        statusCode: undefined,
                        type: 'HttpError',
                      } satisfies Partial<HttpError>)
                    )}
                  >HTTP error</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${() =>
                    this.dispatchEvent(
                      new ShowSnackbarEvent({
                        action: 'GET',
                        message: 'Network error. Check your connection and try again.',
                        statusCode: 404,
                        type: 'HttpError',
                        detail: 'Major Outage. This was probably caused by a network outage in your area. Please contact your ISP for further assistance.',
                      } satisfies Partial<HttpError>)
                    )}
                  >HTTP error with detail</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${() => this.dispatchEvent(new ShowSnackbarEvent('', { overrideTemplate: html`<h1 style="color:red">ALERT!</h1>` }))}
                  >Template literal</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-snackbar"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <md-dialog @open=${(e: DOMEvent<MdDialog>) => dialogZIndexHack(e.target)} @close=${() => this.snackbar.dismissAll()}>
        <span slot="headline">Snackbar from a dialog</span>
        <main slot="content">
          <titanium-snackbar-stack></titanium-snackbar-stack>
          <md-outlined-button
            @click=${(e: MouseEvent) =>
              e.target?.dispatchEvent(
                new ShowSnackbarEvent({
                  action: 'GET',
                  message: 'Network error. Check your connection and try again.',
                  statusCode: undefined,
                  type: 'HttpError',
                } satisfies Partial<HttpError>)
              )}
            >Open snackbar
          </md-outlined-button>
        </main>
      </md-dialog>
    `;
  }
}

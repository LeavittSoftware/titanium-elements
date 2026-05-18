import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';

import '@material/web/button/filled-button';
import '@material/web/button/filled-tonal-button';
import '@material/web/progress/linear-progress';

import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { delay } from '@leavittsoftware/web/titanium/helpers/delay';
import { promiseTracking } from '@leavittsoftware/web/titanium/helpers/promise-tracking';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-promise-tracking-demo')
export class TitaniumPromiseTrackingDemo extends LitElement {
  @promiseTracking('trackLoadingPromise')
  @state()
  accessor isLoading = false;
  declare trackLoadingPromise: (promise: Promise<unknown>) => Promise<void>;

  @promiseTracking('trackDeletingPromise')
  @state()
  accessor isDeleting = false;
  declare trackDeletingPromise: (promise: Promise<unknown>) => Promise<void>;

  #onLoad() {
    this.trackLoadingPromise(delay(2000));
  }

  #onDelete() {
    this.trackDeletingPromise(delay(3000));
  }

  #onBoth() {
    this.trackLoadingPromise(delay(2000));
    this.trackDeletingPromise(delay(3000));
  }

  static styles = [
    StoryStyles,
    css`
      section {
        display: grid;
        gap: 16px;
        padding: 16px 0;
      }

      .flags {
        display: flex;
        gap: 24px;
        font-family: 'Roboto Mono', monospace;
      }

      .progress-stack {
        display: grid;
        gap: 8px;
        max-width: 400px;
      }

      .actions {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Promise tracking" level1Href="/titanium-promise-tracking" sticky-top></leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Promise tracking" className="promiseTracking"></story-header>

            <section>
              <h1>Two independent tracked promises</h1>
              <p>
                A single component uses <code>@promiseTracking</code> twice to drive two independent reactive boolean flags. Each decorated accessor gets its
                own counter, so concurrent calls don't interfere with each other.
              </p>

              <div class="flags">
                <span>isLoading: <strong>${this.isLoading}</strong></span>
                <span>isDeleting: <strong>${this.isDeleting}</strong></span>
              </div>

              <div class="progress-stack">
                <md-linear-progress aria-label="loading" ?indeterminate=${this.isLoading}></md-linear-progress>
                <md-linear-progress aria-label="deleting" ?indeterminate=${this.isDeleting}></md-linear-progress>
              </div>

              <div class="actions">
                <md-filled-button ?disabled=${this.isLoading} @click=${this.#onLoad}>Start load (2s)</md-filled-button>
                <md-filled-tonal-button ?disabled=${this.isDeleting} @click=${this.#onDelete}>Start delete (3s)</md-filled-tonal-button>
                <md-filled-button @click=${this.#onBoth}>Start both concurrently</md-filled-button>
              </div>
            </section>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}

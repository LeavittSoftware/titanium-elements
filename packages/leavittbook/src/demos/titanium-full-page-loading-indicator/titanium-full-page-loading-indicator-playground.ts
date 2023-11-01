/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@material/mwc-button';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/full-page-loading-indicator/full-page-loading-indicator';

/* playground-fold */
@customElement('titanium-full-page-loading-indicator-playground')
export class TitaniumFullPageLoadingIndicatorPlayground extends LitElement {
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

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Default titanium full page loading indicator</p>
      <div>
        <titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
        <mwc-button
          @click=${(e) => {
            e.preventDefault();
            const work = new Promise((r) => setTimeout(r, 50));
            const work2 = new Promise((r) => setTimeout(r, 3000));
            window.dispatchEvent(
              new CustomEvent('pending-state', {
                composed: true,
                bubbles: true,
                detail: { promise: work.then(() => console.log('Done 1')) },
              })
            );
            window.dispatchEvent(
              new CustomEvent('pending-state', {
                composed: true,
                bubbles: true,
                detail: { promise: work2.then(() => console.log('Done 2')) },
              })
            );
          }}
          label="Open loading veil for 2 seconds"
        >
        </mwc-button>
      </div>
    `;
  }
}

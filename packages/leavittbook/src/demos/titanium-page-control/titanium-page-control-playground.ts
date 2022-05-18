/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-icon';
import '@material/mwc-button';
/* playground-fold-end */

import '@leavittsoftware/titanium-data-table/lib/titanium-page-control';
import { TitaniumPageControlElement } from '@leavittsoftware/titanium-data-table/lib/titanium-page-control';

/* playground-fold */
@customElement('titanium-page-control-playground')
export class TitaniumPageControlPlayground extends LitElement {
  @query('titanium-page-control[main]') pageControl: TitaniumPageControlElement;
  @state() private count: number = 25;
  @state() private data;
  @state() private filteredData;

  firstUpdated() {
    this.data = Array(25)
      .fill(null)
      .map((_, idx) => ({
        id: idx + 1,
        name: 'Bob',
      }));
    this.#reload();
  }

  #reload() {
    const start = this.pageControl.take * this.pageControl.page;
    this.filteredData = this.data.slice(start, start + this.pageControl.take);
  }

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

      p[example-item] {
        padding: 4px;
        background: #f5f5f5;
        border-radius: 4px;
        border: 1px solid #eee;
        margin: 8px 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <div>
        <titanium-page-control></titanium-page-control>
      </div>

      <h1>Disabled</h1>
      <div>
        <titanium-page-control disabled></titanium-page-control>
      </div>

      <h1>Full example</h1>
      ${this.filteredData?.map(item => html` <p example-item>${item?.name}, ${item?.id}</p> `)}
      <div>
        <titanium-page-control
          main
          .pageSizes=${[2, 4, 6, 8]}
          .count=${this.count}
          @action=${() => {
            this.#reload();
          }}
        ></titanium-page-control>
      </div>
    `;
  }
}

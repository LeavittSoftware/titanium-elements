import '../shared/story-header';

import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/data-table/page-control';
import '@material/web/chips/suggestion-chip';
import { TitaniumPageControl } from '@leavittsoftware/web/titanium/data-table/page-control';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-page-control-demo')
export class TitaniumPageControlDemo extends LitElement {
  @query('titanium-page-control[main]') private accessor pageControl: TitaniumPageControl;
  @state() protected accessor count: number = 25;
  @state() protected accessor data;
  @state() protected accessor filteredData;

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
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium page control" className="TitaniumPageControl"></story-header>
      <h1>Default</h1>
      <p>Basic page control with local storage</p>
      <div>
        <h1>Default</h1>
        <titanium-page-control localStorageKey="demoPageTake1"></titanium-page-control>
      </div>

      <h1>Disabled</h1>
      <p>Disabled page control</p>
      <div>
        <h1>Disabled</h1>
        <titanium-page-control disabled></titanium-page-control>
      </div>

      <h1>Filled</h1>
      <p>Filled page control variant</p>
      <div>
        <h1>Filled</h1>
        <titanium-page-control filled></titanium-page-control>
      </div>

      <h1>Full example</h1>
      <p>Complete page control with data pagination</p>
      <div>
        <h1>Full example</h1>
        ${this.filteredData?.map((item) => html` <md-suggestion-chip label="${item?.name} #${item?.id}"></md-suggestion-chip> `)}
        <titanium-page-control
          main
          .pageSizes=${[2, 4, 6, 8]}
          .count=${this.count}
          localStorageKey="demoPageTake2"
          @action=${() => {
            this.#reload();
          }}
        ></titanium-page-control>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-page-control"></api-docs>
    `;
  }
}

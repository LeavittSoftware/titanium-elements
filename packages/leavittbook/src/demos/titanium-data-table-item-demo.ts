import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';

import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/data-table/data-table-item';
import { TitaniumDataTableItem } from '@leavittsoftware/web/titanium/data-table/data-table-item';
import { heroStyles } from '../styles/hero-styles';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-data-table-item-demo')
export class TitaniumDataTableItemDemo extends LitElement {
  @query('titanium-data-table-item[select-demo]') protected accessor selectItem!: TitaniumDataTableItem;

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

      section {
        display: flex;
        margin-top: 12px;
        gap: 12px;
      }

      p {
        margin-bottom: 12px;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium data table item" level1Href="/titanium-data-table-item" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium data table item" className="TitaniumDataTableItem"></story-header>

            <div>
              <h1>Default</h1>
              <p>Examples using disabled, closeable, and readonly attribute</p>
              <div vertical>
                <titanium-data-table-item>Default</titanium-data-table-item>
                <titanium-data-table-item selected>Selected</titanium-data-table-item>
                <titanium-data-table-item disable-select>Select disabled</titanium-data-table-item>
                <titanium-data-table-item enable-dragging><row-item></row-item></titanium-data-table-item>
              </div>
            </div>

            <div>
              <h1>Methods</h1>
              <p>Select, Deselect, Toggle</p>
              <div methods-demo>
                <titanium-data-table-item select-demo>Item</titanium-data-table-item>
                <section>
                  <md-filled-tonal-button raised @click=${() => this.selectItem.select()}>select()</md-filled-tonal-button>
                  <md-filled-tonal-button raised @click=${() => this.selectItem.deselect()}>deselect()</md-filled-tonal-button>
                  <md-filled-tonal-button raised @click=${() => this.selectItem.toggleSelected()}>toggleSelected()</md-filled-tonal-button>
                </section>
              </div>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-data-table-item"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}

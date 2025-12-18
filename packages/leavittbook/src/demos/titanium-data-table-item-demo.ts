import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/button/text-button';

import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/data-table/data-table-item';
import { TitaniumDataTableItem } from '@leavittsoftware/web/titanium/data-table/data-table-item';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-data-table-item-demo')
export class TitaniumDataTableItemDemo extends LitElement {
  @query('titanium-data-table-item[select-demo]') protected accessor selectItem!: TitaniumDataTableItem;

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

      div[vertical] {
        display: flex;
        gap: 0;
        flex-direction: column;
      }

      div[methods-demo] {
        display: flex;
        gap: 24px;
        flex-direction: column;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium data table item" className="TitaniumDataTableItem"></story-header>
      <h1>Default</h1>
      <p>Examples using disabled, closeable, and readonly attribute</p>
      <div vertical>
        <titanium-data-table-item>Default</titanium-data-table-item>
        <titanium-data-table-item selected>Selected</titanium-data-table-item>
        <titanium-data-table-item disable-select>Select disabled</titanium-data-table-item>
        <titanium-data-table-item enable-dragging><row-item></row-item></titanium-data-table-item>
      </div>

      <h1>Methods</h1>
      <p>Select, Deselect, Toggle</p>
      <div methods-demo>
        <titanium-data-table-item select-demo>Item</titanium-data-table-item>
        <section>
          <md-text-button raised @click=${() => this.selectItem.select()}>select()</md-text-button>
          <md-text-button raised @click=${() => this.selectItem.deselect()}>deselect()</md-text-button>
          <md-text-button raised @click=${() => this.selectItem.toggleSelected()}>toggleSelected()</md-text-button>
        </section>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-data-table-item"></api-docs>
    `;
  }
}

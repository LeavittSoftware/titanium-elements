/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/titanium-button';

/* playground-fold-end */
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';
import { TitaniumDataTableItemElement } from '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';

/* playground-fold */
@customElement('titanium-data-table-item-playground')
export class TitaniumDataTableItemPlayground extends LitElement {
  @query('titanium-data-table-item[select-demo]') protected selectItem!: TitaniumDataTableItemElement;

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
    /* playground-fold-end */
    return html`
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
          <titanium-button raised @click=${() => this.selectItem.select()}>select()</titanium-button>
          <titanium-button raised @click=${() => this.selectItem.deselect()}>deselect()</titanium-button>
          <titanium-button raised @click=${() => this.selectItem.toggleSelected()}>toggleSelected()</titanium-button>
        </section>
      </div>
    `;
  }
}

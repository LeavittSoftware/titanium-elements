import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';
import '@leavittsoftware/titanium-button';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';
import '@material/mwc-icon';
import { TitaniumDataTableItemElement } from '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';

@customElement('titanium-data-table-item-demo')
export class TitaniumDateTableItemDemoElement extends LitElement {
  static styles = [
    h1,
    h2,
    h3,
    h5,
    p,
    StoryStyles,
    css`
      titanium-button {
        margin: 8px;
      }
    `,
  ];
  @query('titanium-data-table-item[select-demo]') private selectItem!: TitaniumDataTableItemElement;

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Examples using disabled, closeable, and readonly attribute</p>
        <titanium-data-table-item>Default</titanium-data-table-item>
        <titanium-data-table-item selected>Selected</titanium-data-table-item>
        <titanium-data-table-item disable-select>Select disabled</titanium-data-table-item>
        <titanium-data-table-item enable-dragging><row-item></row-item></titanium-data-table-item>
      </div>
    `;
  }

  #selectStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Select, Deselect, Toggle</p>
        <titanium-data-table-item select-demo>Item</titanium-data-table-item>
        <titanium-button raised @click=${() => this.selectItem.select()}>select()</titanium-button>
        <titanium-button raised @click=${() => this.selectItem.deselect()}>deselect()</titanium-button>
        <titanium-button raised @click=${() => this.selectItem.toggleSelected()}>toggleSelected()</titanium-button>
      </div>
    `;
  }

  render() {
    return html`
      <story-header
        name="Titanium data table item"
        tagName="titanium-data-table-item"
        packageName="titanium-data-table"
        klass="TitaniumDataTableItemElement"
      ></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#selectStory()}
        <code-block .snippet=${this.#selectStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-item"></api-docs>
    `;
  }
}

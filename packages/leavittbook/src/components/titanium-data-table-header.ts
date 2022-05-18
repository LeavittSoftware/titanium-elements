import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-header';
import '@leavittsoftware/titanium-card';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';

@customElement('titanium-data-table-header-demo')
export class TitaniumDateTableHeaderDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Examples using left, center, right, large, no-sort, desktop, and width attributes</p>
        <titanium-data-table-header left column-name="Left" title="Left"></titanium-data-table-header>
        <titanium-data-table-header center column-name="Center" title="Center"></titanium-data-table-header>
        <titanium-data-table-header right column-name="Right" title="Right"></titanium-data-table-header>
        <titanium-data-table-header large column-name="Large" title="Large"></titanium-data-table-header>
        <titanium-data-table-header no-sort column-name="NoSort" title="No sort"></titanium-data-table-header>
        <titanium-data-table-header desktop column-name="Desktop" title="Desktop"></titanium-data-table-header>
        <titanium-data-table-header width="200px" column-name="Width" title="Width"></titanium-data-table-header>
      </div>
    `;
  }

  render() {
    return html`
      <story-header
        name="Titanium data table header"
        tagName="titanium-data-table-header"
        packageName="titanium-data-table"
        klass="TitaniumDataTableHeaderElement"
      ></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-data-table-header"></api-docs>
    `;
  }
}

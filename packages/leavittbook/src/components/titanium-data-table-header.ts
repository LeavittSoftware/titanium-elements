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
        <p>Examples using large, right, no-sort, and width attributes</p>
        <titanium-data-table-header large column-name="Name" large title="Name"></titanium-data-table-header>
        <titanium-data-table-header column-name="SName" desktop title="Short Name"></titanium-data-table-header>
        <titanium-data-table-header column-name="person_type" right desktop title="Type"></titanium-data-table-header>
        <titanium-data-table-header no-sort desktop center width="105px" title="Phone Number"></titanium-data-table-header>
        <titanium-data-table-header no-sort width="75px" right title="Locations"></titanium-data-table-header>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium data table header" tagName="titanium-data-table-header" klass="TitaniumDataTableHeaderElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-data-table-header"></api-docs>
    `;
  }
}

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-date-range-selector-playground';

@customElement('titanium-date-range-selector-demo')
export class TitaniumDateRangeSelectorDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium date range selector" packageName="titanium-date-range-selector" className="TitaniumDateRangeSelector"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-date-range-selector/project.json"
        ><titanium-date-range-selector-playground></titanium-date-range-selector-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-date-range-selector"></api-docs>
    `;
  }
}

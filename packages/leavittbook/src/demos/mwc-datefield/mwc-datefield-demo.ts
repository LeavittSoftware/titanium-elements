import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './mwc-datefield-playground';

@customElement('mwc-datefield-demo')
export class DatefieldDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Datefield" packageName="leavitt-elements" className="DateField"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/mwc-datefield/project.json"
        ><mwc-datefield-playground></mwc-datefield-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="mwc-datefield"></api-docs>
    `;
  }
}

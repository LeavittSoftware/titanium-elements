import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-chip';
import '../shared/story-header';
import '@api-viewer/docs';
import '@material/mwc-icon';
import 'playground-elements/playground-ide';

@customElement('titanium-chip-demo')
export class TitaniumChipDemoElement extends LitElement {
  static styles = [StoryStyles];

  render() {
    return html`
      <story-header name="Titanium chip" packageName="titanium-chip" tagName="titanium-chip" klass="TitaniumChipElement"></story-header>

      <playground-ide line-numbers resizable project-src="../src/demos/simple/project.json"> </playground-ide>

      <api-docs src="./custom-elements.json" selected="titanium-chip"></api-docs>
    `;
  }
}

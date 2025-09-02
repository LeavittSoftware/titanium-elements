import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-chip-playground';
let TitaniumChipDemo = class TitaniumChipDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium chip" className="TitaniumChip"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-chip/project.json"
        ><titanium-chip-playground></titanium-chip-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-chip"></api-docs>
    `;
    }
};
TitaniumChipDemo = __decorate([
    customElement('titanium-chip-demo')
], TitaniumChipDemo);
export { TitaniumChipDemo };
//# sourceMappingURL=titanium-chip-demo.js.map
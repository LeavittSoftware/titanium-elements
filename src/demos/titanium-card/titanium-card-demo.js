import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-card-playground';
let TitaniumChipDemo = class TitaniumChipDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium card" className="TitaniumCard"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-card/project.json"
        ><titanium-card-playground></titanium-card-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-card"></api-docs>
    `;
    }
};
TitaniumChipDemo = __decorate([
    customElement('titanium-card-demo')
], TitaniumChipDemo);
export { TitaniumChipDemo };
//# sourceMappingURL=titanium-card-demo.js.map
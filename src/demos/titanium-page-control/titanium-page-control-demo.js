import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-page-control-playground';
let TitaniumPageControlDemo = class TitaniumPageControlDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium Page Control" className="TitaniumPageControl"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-page-control/project.json"
        ><titanium-page-control-playground></titanium-page-control-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-page-control"></api-docs>
    `;
    }
};
TitaniumPageControlDemo = __decorate([
    customElement('titanium-page-control-demo')
], TitaniumPageControlDemo);
export { TitaniumPageControlDemo };
//# sourceMappingURL=titanium-page-control-demo.js.map
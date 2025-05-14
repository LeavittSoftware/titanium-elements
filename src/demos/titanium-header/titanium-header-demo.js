import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-header-playground';
let TitaniumHeaderItemDemo = class TitaniumHeaderItemDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium Header" className="TitaniumHeaderItem"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-header/project.json"
        ><titanium-header-playground></titanium-header-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-header"></api-docs>
    `;
    }
};
TitaniumHeaderItemDemo = __decorate([
    customElement('titanium-header-demo')
], TitaniumHeaderItemDemo);
export { TitaniumHeaderItemDemo };
//# sourceMappingURL=titanium-header-demo.js.map
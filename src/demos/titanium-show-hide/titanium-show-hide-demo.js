import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-show-hide-playground';
let TitaniumShowHideDemo = class TitaniumShowHideDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium show hide" className="TitaniumShowHide"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-show-hide/project.json"
        ><titanium-show-hide-playground></titanium-show-hide-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-show-hide"></api-docs>
    `;
    }
};
TitaniumShowHideDemo = __decorate([
    customElement('titanium-show-hide-demo')
], TitaniumShowHideDemo);
export { TitaniumShowHideDemo };
//# sourceMappingURL=titanium-show-hide-demo.js.map
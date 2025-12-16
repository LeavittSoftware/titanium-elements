import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-error-page-playground';
let TitaniumErrorDemo = class TitaniumErrorDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium error page" className="TitaniumErrorPage"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-error-page/project.json"
        ><titanium-error-page-playground></titanium-error-page-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-error-page"></api-docs>
    `;
    }
};
TitaniumErrorDemo = __decorate([
    customElement('titanium-error-page-demo')
], TitaniumErrorDemo);
export { TitaniumErrorDemo };
//# sourceMappingURL=titanium-error-page-demo.js.map
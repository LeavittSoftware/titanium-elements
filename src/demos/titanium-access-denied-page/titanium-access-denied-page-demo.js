import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-access-denied-page-playground';
let TitaniumAccessDeniedDemo = class TitaniumAccessDeniedDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium access denied page" className="TitaniumAccessDeniedPage"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-access-denied-page/project.json"
        ><titanium-access-denied-page-playground></titanium-access-denied-page-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-access-denied-page"></api-docs>
    `;
    }
};
TitaniumAccessDeniedDemo = __decorate([
    customElement('titanium-access-denied-page-demo')
], TitaniumAccessDeniedDemo);
export { TitaniumAccessDeniedDemo };
//# sourceMappingURL=titanium-access-denied-page-demo.js.map
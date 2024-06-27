import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-full-page-loading-indicator-playground';
let TitaniumFullPageLoadingIndicatorDemo = class TitaniumFullPageLoadingIndicatorDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium full page loading indicator" className="TitaniumFullPageLoadingIndicator"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-full-page-loading-indicator/project.json"
        ><titanium-full-page-loading-indicator-playground></titanium-full-page-loading-indicator-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-full-page-loading-indicator"></api-docs>
    `;
    }
};
TitaniumFullPageLoadingIndicatorDemo = __decorate([
    customElement('titanium-full-page-loading-indicator-demo')
], TitaniumFullPageLoadingIndicatorDemo);
export { TitaniumFullPageLoadingIndicatorDemo };
//# sourceMappingURL=titanium-full-page-loading-indicator-demo.js.map
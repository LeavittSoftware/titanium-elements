import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './available-cdn-icons-playground';
let AvailableCdnIconsDemo = class AvailableCdnIconsDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Available CDN icons"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/available-cdn-icons/project.json"
        ><available-cdn-icons-playground></available-cdn-icons-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="available-cdn-icons"></api-docs>
    `;
    }
};
AvailableCdnIconsDemo = __decorate([
    customElement('available-cdn-icons-demo')
], AvailableCdnIconsDemo);
export { AvailableCdnIconsDemo };
//# sourceMappingURL=available-cdn-icons-demo.js.map
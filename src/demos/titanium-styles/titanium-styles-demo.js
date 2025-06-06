import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-styles-playground';
let TitaniumStylesDemo = class TitaniumStylesDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium styles"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-styles/project.json"
        ><titanium-styles-playground></titanium-styles-playground>
      </smart-demo>
    `;
    }
};
TitaniumStylesDemo = __decorate([
    customElement('titanium-styles-demo')
], TitaniumStylesDemo);
export { TitaniumStylesDemo };
//# sourceMappingURL=titanium-styles-demo.js.map
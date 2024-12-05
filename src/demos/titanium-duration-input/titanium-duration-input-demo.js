import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '../../shared/smart-demo';
import './titanium-duration-input-playground';
import '@api-viewer/docs';
let TitaniumDurationInputDemo = class TitaniumDurationInputDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium Duration Input" className="TitaniumDurationInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-duration-input/project.json"
        ><titanium-duration-input-playground></titanium-duration-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-duration-input"></api-docs>
    `;
    }
};
TitaniumDurationInputDemo = __decorate([
    customElement('titanium-duration-input-demo')
], TitaniumDurationInputDemo);
export { TitaniumDurationInputDemo };
//# sourceMappingURL=titanium-duration-input-demo.js.map
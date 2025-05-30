import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-address-input-playground';
let TitaniumAddressInputDemo = class TitaniumAddressInputDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium Address Input" className="TitaniumAddressInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-address-input/project.json"
        ><titanium-address-input-playground></titanium-address-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-address-input"></api-docs>
    `;
    }
};
TitaniumAddressInputDemo = __decorate([
    customElement('titanium-address-input-demo')
], TitaniumAddressInputDemo);
export { TitaniumAddressInputDemo };
//# sourceMappingURL=titanium-address-input-demo.js.map
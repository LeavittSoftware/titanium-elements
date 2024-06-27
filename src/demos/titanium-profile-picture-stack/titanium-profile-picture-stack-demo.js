import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-profile-picture-stack-playground';
let TitaniumProfilePictureStackDemo = class TitaniumProfilePictureStackDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium profile picture stack" className="TitaniumProfilePictureStack"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-profile-picture-stack/project.json"
        ><titanium-profile-picture-stack-playground></titanium-profile-picture-stack-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-profile-picture-stack"></api-docs>
    `;
    }
};
TitaniumProfilePictureStackDemo = __decorate([
    customElement('titanium-profile-picture-stack-demo')
], TitaniumProfilePictureStackDemo);
export { TitaniumProfilePictureStackDemo };
//# sourceMappingURL=titanium-profile-picture-stack-demo.js.map
import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './profile-picture-playground';
let ProfilePictureDemo = class ProfilePictureDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Profile picture" className="ProfilePicture"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/profile-picture/project.json"
        ><profile-picture-playground></profile-picture-playground>
      </smart-demo>

      <api-docs src="./custom-elements.json" selected="profile-picture"></api-docs>
    `;
    }
};
ProfilePictureDemo = __decorate([
    customElement('profile-picture-demo')
], ProfilePictureDemo);
export { ProfilePictureDemo };
//# sourceMappingURL=profile-picture-demo.js.map
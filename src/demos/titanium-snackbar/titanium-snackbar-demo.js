import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-snackbar-playground';
let TitaniumSnackbarDemo = class TitaniumSnackbarDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium Snackbar" className="TitaniumSnackbarStack"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-snackbar/project.json"
        ><titanium-snackbar-playground></titanium-snackbar-playground>
      </smart-demo>
    `;
    }
};
TitaniumSnackbarDemo = __decorate([
    customElement('titanium-snackbar-demo')
], TitaniumSnackbarDemo);
export { TitaniumSnackbarDemo };
//# sourceMappingURL=titanium-snackbar-demo.js.map
import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '../../shared/smart-demo';
import './titanium-confirmation-dialog-playground';
import '@api-viewer/docs';
let TitaniumConfirmationDialogDemo = class TitaniumConfirmationDialogDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium confirmation dialog" className="TitaniumConfirmationDialog"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-confirmation-dialog/project.json"
        ><titanium-confirmation-dialog-playground></titanium-confirmation-dialog-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-confirmation-dialog"></api-docs>
    `;
    }
};
TitaniumConfirmationDialogDemo = __decorate([
    customElement('titanium-confirmation-dialog-demo')
], TitaniumConfirmationDialogDemo);
export { TitaniumConfirmationDialogDemo };
//# sourceMappingURL=titanium-confirmation-dialog-demo.js.map
import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '../../shared/smart-demo';
import './titanium-confirm-dialog-playground';
import '@api-viewer/docs';
let TitaniumConfirmDialogDemo = class TitaniumConfirmDialogDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium confirm dialog" className="TitaniumConfirmDialog"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-confirm-dialog/project.json"
        ><titanium-confirm-dialog-playground></titanium-confirm-dialog-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-confirm-dialog"></api-docs>
    `;
    }
};
TitaniumConfirmDialogDemo = __decorate([
    customElement('titanium-confirm-dialog-demo')
], TitaniumConfirmDialogDemo);
export { TitaniumConfirmDialogDemo };
//# sourceMappingURL=titanium-confirm-dialog-demo.js.map
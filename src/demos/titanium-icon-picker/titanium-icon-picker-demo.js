import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-icon-picker-playground';
let TitaniumIconPickerDemo = class TitaniumIconPickerDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium icon picker" className="TitaniumIconPicker"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-icon-picker/project.json"
        ><titanium-icon-picker-playground></titanium-icon-picker-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-icon-picker"></api-docs>
    `;
    }
};
TitaniumIconPickerDemo = __decorate([
    customElement('titanium-icon-picker-demo')
], TitaniumIconPickerDemo);
export { TitaniumIconPickerDemo };
//# sourceMappingURL=titanium-icon-picker-demo.js.map
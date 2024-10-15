import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-data-table-item-playground';
let TitaniumDataTableItemDemo = class TitaniumDataTableItemDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium data table item" className="TitaniumDataTableItem"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table-item/project.json"
        ><titanium-data-table-item-playground></titanium-data-table-item-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-item"></api-docs>
    `;
    }
};
TitaniumDataTableItemDemo = __decorate([
    customElement('titanium-data-table-item-demo')
], TitaniumDataTableItemDemo);
export { TitaniumDataTableItemDemo };
//# sourceMappingURL=titanium-data-table-item-demo.js.map
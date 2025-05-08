import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-data-table-header-playground';
let TitaniumDataTableHeaderDemo = class TitaniumDataTableHeaderDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium data table header" className="TitaniumDataTableHeader"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table-header/project.json"
        ><titanium-data-table-header-playground></titanium-data-table-header-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-header"></api-docs>
    `;
    }
};
TitaniumDataTableHeaderDemo = __decorate([
    customElement('titanium-data-table-header-demo')
], TitaniumDataTableHeaderDemo);
export { TitaniumDataTableHeaderDemo };
//# sourceMappingURL=titanium-data-table-header-demo.js.map
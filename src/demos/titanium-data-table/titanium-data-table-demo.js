import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './draggable';
import './full-working-example';
let TitaniumDataTableDemo = class TitaniumDataTableDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium data table" className="TitaniumDataTable"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table/project.json">
        <titanium-data-table-full-playground></titanium-data-table-full-playground>
        <hr />
        <draggable-playground></draggable-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table"></api-docs>
    `;
    }
};
TitaniumDataTableDemo = __decorate([
    customElement('titanium-data-table-demo')
], TitaniumDataTableDemo);
export { TitaniumDataTableDemo };
//# sourceMappingURL=titanium-data-table-demo.js.map
import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './data-table-core-playground';
let TitaniumDataTableCoreDemo = class TitaniumDataTableCoreDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium data table core" className="TitaniumDataTableCoreDemo"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table-core/project.json">
        <data-table-core-playground></data-table-core-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-core"></api-docs>
    `;
    }
};
TitaniumDataTableCoreDemo = __decorate([
    customElement('titanium-data-table-core-demo')
], TitaniumDataTableCoreDemo);
export { TitaniumDataTableCoreDemo };
//# sourceMappingURL=titanium-data-table-core-demo.js.map
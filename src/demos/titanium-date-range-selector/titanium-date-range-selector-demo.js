import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-date-range-selector-playground';
let TitaniumDateRangeSelectorDemo = class TitaniumDateRangeSelectorDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium date range selector" className="TitaniumDateRangeSelector"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-date-range-selector/project.json"
        ><titanium-date-range-selector-playground></titanium-date-range-selector-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-date-range-selector"></api-docs>
    `;
    }
};
TitaniumDateRangeSelectorDemo = __decorate([
    customElement('titanium-date-range-selector-demo')
], TitaniumDateRangeSelectorDemo);
export { TitaniumDateRangeSelectorDemo };
//# sourceMappingURL=titanium-date-range-selector-demo.js.map
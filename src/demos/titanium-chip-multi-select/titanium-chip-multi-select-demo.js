import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-chip-multi-select-playground';
let TitaniumChipMultiSelectDemo = class TitaniumChipMultiSelectDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium chip multi-select" className="TitaniumChipMultiSelect"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-chip-multi-select/project.json"
        ><titanium-chip-multi-select-playground></titanium-chip-multi-select-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-chip-multi-select"></api-docs>
    `;
    }
};
TitaniumChipMultiSelectDemo = __decorate([
    customElement('titanium-chip-multi-select-demo')
], TitaniumChipMultiSelectDemo);
export { TitaniumChipMultiSelectDemo };
//# sourceMappingURL=titanium-chip-multi-select-demo.js.map
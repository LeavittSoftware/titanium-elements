import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-person-select-playground';
let LeavittPersonSelectDemo = class LeavittPersonSelectDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Leavitt Person Select" className="LeavittPersonSelect"></story-header>
      <leavitt-person-select-playground></leavitt-person-select-playground>
      <api-docs src="./custom-elements.json" selected="leavitt-person-select"></api-docs>
    `;
    }
};
LeavittPersonSelectDemo = __decorate([
    customElement('leavitt-person-select-demo')
], LeavittPersonSelectDemo);
export { LeavittPersonSelectDemo };
//# sourceMappingURL=leavitt-person-select-demo.js.map
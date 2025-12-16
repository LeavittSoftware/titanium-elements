import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '@api-viewer/docs';
import '../../shared/story-header';
import '../../shared/smart-demo';
import './leavitt-user-feedback-playground';
let LeavittUserFeedbackDemo = class LeavittUserFeedbackDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Leavitt user feedback" className="LeavittUserFeedback"></story-header>
      <leavitt-user-feedback-playground></leavitt-user-feedback-playground>
      <api-docs src="./custom-elements.json" selected="leavitt-user-feedback"></api-docs>
    `;
    }
};
LeavittUserFeedbackDemo = __decorate([
    customElement('leavitt-user-feedback-demo')
], LeavittUserFeedbackDemo);
export { LeavittUserFeedbackDemo };
//# sourceMappingURL=leavitt-user-feedback-demo.js.map
import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-email-history-viewer-playground';
let LeavittEmailHistoryViewerDemo = class LeavittEmailHistoryViewerDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Leavitt Email History Viewer" className="LeavittEmailHistoryViewer"></story-header>
      <leavitt-email-history-viewer-playground></leavitt-email-history-viewer-playground>
      <api-docs src="./custom-elements.json" selected="leavitt-email-history-viewer"></api-docs>
    `;
    }
};
LeavittEmailHistoryViewerDemo = __decorate([
    customElement('leavitt-email-history-viewer-demo')
], LeavittEmailHistoryViewerDemo);
export { LeavittEmailHistoryViewerDemo };
//# sourceMappingURL=leavitt-email-history-viewer-demo.js.map
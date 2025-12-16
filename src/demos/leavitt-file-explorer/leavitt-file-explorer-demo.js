import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '../../shared/smart-demo';
import './leavitt-file-explorer-playground';
let LeavittUserFileExplorerDemo = class LeavittUserFileExplorerDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Leavitt file explorer" className="LeavittUserFileExplorer"></story-header>
      <leavitt-file-explorer-playground></leavitt-file-explorer-playground>
    `;
    }
};
LeavittUserFileExplorerDemo = __decorate([
    customElement('leavitt-file-explorer-demo')
], LeavittUserFileExplorerDemo);
export { LeavittUserFileExplorerDemo };
//# sourceMappingURL=leavitt-file-explorer-demo.js.map
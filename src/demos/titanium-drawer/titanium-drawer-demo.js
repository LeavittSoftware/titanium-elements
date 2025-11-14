import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-drawer-playground';
let TitaniumDrawerDemo = class TitaniumDrawerDemo extends LitElement {
    static { this.styles = [StoryStyles, css ``]; }
    render() {
        return html `
      <story-header name="Titanium Drawer" className="TitaniumDrawer"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-drawer/project.json"
        ><titanium-drawer-playground></titanium-drawer-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-drawer"></api-docs>
    `;
    }
};
TitaniumDrawerDemo = __decorate([
    customElement('titanium-drawer-demo')
], TitaniumDrawerDemo);
export { TitaniumDrawerDemo };
//# sourceMappingURL=titanium-drawer-demo.js.map
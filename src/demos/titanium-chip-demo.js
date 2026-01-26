import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import '@material/web/icon/icon';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/chip/chip';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../styles/story-styles';
let TitaniumChipDemo = class TitaniumChipDemo extends LitElement {
    static { this.styles = [
        StoryStyles,
        css `
      chip-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
      }

      titanium-chip[short] {
        width: 140px;
      }
    `,
    ]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium chip" level1Href="/titanium-chip" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium chip" className="TitaniumChip"></story-header>
            <h1>Default</h1>
            <p>Various chip examples demonstrating different states and configurations</p>
            <chip-container>
              <titanium-chip label="Jon Stewart"> </titanium-chip>
              <titanium-chip filled label="Jon Stewart"> </titanium-chip>
              <titanium-chip label="Stephen Colbert" input-chip @click=${() => alert('click!')}> </titanium-chip>

              <titanium-chip label="Jimmy Kimmel" @click=${() => alert('click!')}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip filled label="Jimmy Kimmel" @click=${() => alert('click!')}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip label="All late shows" input-chip @remove=${() => alert('remove!')} @click=${() => alert('click!')}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip short label="I'm a little long" input-chip @remove=${() => alert('remove!')} @click=${() => alert('click!')}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip label="Informational" inert> </titanium-chip>

              <titanium-chip selected label="Selected" @click=${(e) => (e.target.selected = !e.target.selected)}>
                <md-icon slot="icon">money</md-icon>
              </titanium-chip>

              <titanium-chip selected label="Selected" @click=${(e) => (e.target.selected = !e.target.selected)}>
                <profile-picture slot="icon" inert size="24"></profile-picture>
              </titanium-chip>

              <titanium-chip selected filled label="Selected" @click=${(e) => (e.target.selected = !e.target.selected)}>
                <profile-picture slot="icon" inert size="24"></profile-picture>
              </titanium-chip>

              <titanium-chip non-interactive label="Non-interactive" title="This is a non-interactive chip"> </titanium-chip>

              <titanium-chip disabled label="Disabled"> </titanium-chip>

              <titanium-chip disabled label="Disabled with remove button" input-chip @remove=${() => alert('remove!')} @click=${() => alert('click!')}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip disabled filled label="Disabled with remove button" input-chip @remove=${() => alert('remove!')} @click=${() => alert('click!')}>
                <md-icon slot="icon">task_alt</md-icon>
              </titanium-chip>

              <titanium-chip href="https://google.com" target="_blank" download="google.xls" label="Href demo"> </titanium-chip>

              <titanium-chip filled label="Filled custom color" style="--titanium-chip-filled-background-color: bisque; --titanium-chip-filled-color: black">
              </titanium-chip>
            </chip-container>
            <api-docs src="./custom-elements.json" selected="titanium-chip"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
TitaniumChipDemo = __decorate([
    customElement('titanium-chip-demo')
], TitaniumChipDemo);
export { TitaniumChipDemo };
//# sourceMappingURL=titanium-chip-demo.js.map
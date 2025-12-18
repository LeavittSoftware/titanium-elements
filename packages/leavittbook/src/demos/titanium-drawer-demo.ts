import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/icon/icon';
import '@material/web/button/outlined-button';
import '@material/web/list/list';
import '@material/web/list/list-item';

import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { myAppStyles } from '../styles/my-app-styles';
import '@leavittsoftware/web/titanium/drawer/drawer';
import { TitaniumDrawer } from '@leavittsoftware/web/titanium/drawer/drawer';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-drawer-demo')
export class TitaniumDrawerDemo extends LitElement {
  @query('titanium-drawer[one]') private accessor drawerOne: TitaniumDrawer;
  @query('titanium-drawer[two]') private accessor drawerTwo: TitaniumDrawer;

  static styles = [
    StoryStyles,
    h1,
    p,
    myAppStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      div {
        margin: 24px 0 12px 0;
        width: 280px;
      }

      md-outlined-button {
        margin-bottom: 12px;
      }

      md-icon {
        height: 16px;
        width: 16px;
        font-size: 16px;
      }

      md-list-item {
        height: 26px;
        --md-list-item-one-line-container-height: 26px;
        --md-list-item-label-text-size: 14px;
        --md-list-item-label-text-weight: 400;
      }

      titanium-drawer[two]::part(dialog) {
        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: 8px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium drawer" className="TitaniumDrawer"></story-header>
      <h1>Basic drawer</h1>
      <p>Basic drawer with simple navigation items</p>
      <div>
        <md-outlined-button @click=${() => this.drawerOne.open()}><span>Open</span></md-outlined-button>
        <titanium-drawer one>
          <md-list-item href="/titanium-drawer/#default" type="link">Default</md-list-item>
          <md-list-item type="button" disabled>Disabled</md-list-item>
          <md-list-item href="/titanium-drawer/#selected" type="link" selected>Selected</md-list-item>
        </titanium-drawer>
      </div>

      <h1>Always show slotted content</h1>
      <p>Drawer that shows content when closed with RTL direction</p>

      <div>
        <md-outlined-button @click=${() => this.drawerTwo.open()}><span>Open</span></md-outlined-button>
        <titanium-drawer direction="rtl" two always-show-content>
          <h3 slot="header">Fruits</h3>
          <md-list-item href="/titanium-drawer" type="link"> <md-icon slot="start">restaurant</md-icon><span>Fruits</span> </md-list-item>
          <h4 sub>Walnut</h4>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Edit fruit</span>
          </md-list-item>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Edit fruit</span>
          </md-list-item>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Edit fruit</span>
          </md-list-item>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Edit fruit</span>
          </md-list-item>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Edit fruit</span>
          </md-list-item>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Edit fruit</span>
          </md-list-item>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Edit fruit</span>
          </md-list-item>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Edit fruit</span>
          </md-list-item>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Edit fruit</span>
          </md-list-item>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Edit fruit</span>
          </md-list-item>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Edit fruit</span>
          </md-list-item>
          <md-list-item sub href="/titanium-drawer" type="link">
            <span>Assign farmers</span>
          </md-list-item>

          <h4>Administration</h4>
          <md-list-item href="/titanium-drawer" type="link"> <md-icon slot="start">home</md-icon><span>Rules</span> </md-list-item>
          <menu-divider></menu-divider>
          <md-list-item href="/titanium-drawer" type="link"> <md-icon slot="start">question_answer</md-icon><span>Feedback</span> </md-list-item>
          <md-list-item href="/titanium-drawer" type="link">
            <md-icon slot="start">apps</md-icon><span>Back to my apps</span><md-icon slot="end">exit_to_app</md-icon>
          </md-list-item>

          <a slot="footer" href="#legal">Legal</a>
        </titanium-drawer>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-drawer"></api-docs>
    `;
  }
}

import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/icon/icon';
import '@material/web/button/filled-tonal-button';
import '@material/web/iconbutton/icon-button';
import '@material/web/select/filled-select';
import '@material/web/select/select-option';
import '@material/web/list/list';
import '@material/web/list/list-item';
import '@api-viewer/docs';

import '@leavittsoftware/web/titanium/drawer/drawer';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { TitaniumDrawer } from '@leavittsoftware/web/titanium/drawer/drawer';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-drawer-demo')
export class TitaniumDrawerDemo extends LitElement {
  @query('titanium-drawer[one]') private accessor drawerOne: TitaniumDrawer;
  @query('titanium-drawer[two]') private accessor drawerTwo: TitaniumDrawer;

  @state() private accessor drawerTwoMode: 'inline' | 'flyover' = 'flyover';
  @state() private accessor drawerTwoOpen: boolean = false;

  static styles = [
    StoryStyles,
    css`
      md-filled-tonal-button,
      md-filled-select,
      h1 {
        margin-bottom: 12px;
      }

      demo-controls {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 16px;

        span {
          font-size: 14px;
          color: var(--md-sys-color-on-surface-variant, #49454f);
        }
      }

      [slot='header'] {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;

        h3 {
          margin: 0;
          flex: 1;
          font-family: Metropolis, Roboto, Noto, sans-serif;
          font-weight: 400;
          padding: 12px 0 4px 16px;
        }
      }

      md-icon {
        --md-icon-size: 16px;
      }

      md-list-item {
        height: 26px;
        --md-list-item-one-line-container-height: 26px;
        --md-list-item-label-text-size: 14px;
        --md-list-item-label-text-weight: 400;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium drawer" level1Href="/titanium-drawer" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium drawer" className="TitaniumDrawer"></story-header>

            <div>
              <h1>Basic drawer</h1>
              <md-filled-tonal-button @click=${() => this.drawerOne.open()}><span>Open</span></md-filled-tonal-button>
              <titanium-drawer one>
                <md-list-item href="/titanium-drawer/#default" type="link">Default</md-list-item>
                <md-list-item type="button" disabled>Disabled</md-list-item>
                <md-list-item href="/titanium-drawer/#selected" type="link" selected>Selected</md-list-item>
              </titanium-drawer>
            </div>

            <div>
              <h1>Mode demo</h1>
              <demo-controls>
                <md-filled-select
                  label="Mode"
                  .value=${this.drawerTwoMode}
                  @change=${(e: Event) => {
                    this.drawerTwoMode = (e.target as HTMLSelectElement).value as 'inline' | 'flyover';
                  }}
                >
                  <md-select-option value="flyover"><span>Flyover</span></md-select-option>
                  <md-select-option value="inline"><span>Inline</span></md-select-option>
                </md-filled-select>
                <md-filled-tonal-button @click=${() => this.drawerTwo.open()}><span>Open</span></md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.drawerTwo.close()}><span>Close</span></md-filled-tonal-button>
                <span>State: ${this.drawerTwoOpen ? 'Open' : 'Closed'}</span>
              </demo-controls>
              <titanium-drawer
                style="width: 280px;"
                two
                .mode=${this.drawerTwoMode}
                @open-change=${(e: Event) => {
                  this.drawerTwoOpen = (e.target as TitaniumDrawer).isOpen;
                }}
              >
                <section slot="header">
                  <h3>Drawer title</h3>
                  <md-icon-button @click=${() => this.drawerTwo.close()} aria-label="Close"><md-icon>close</md-icon></md-icon-button>
                </section>
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
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}

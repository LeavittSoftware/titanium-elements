/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-icon';
import '@material/mwc-button';

/* playground-fold-end */

import '@leavittsoftware/titanium-drawer';
import '@leavittsoftware/titanium-side-menu';
import { TitaniumDrawer } from '@leavittsoftware/titanium-drawer';

/* playground-fold */
@customElement('titanium-drawer-playground')
export class TitaniumDrawerPlayground extends LitElement {
  @query('titanium-drawer[one]') drawerOne: TitaniumDrawer;
  @query('titanium-drawer[two]') drawerTwo: TitaniumDrawer;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        margin: 24px 0 36px 0;
        width: 280px;
      }

      titanium-drawer[two]::part(dialog) {
        border: 1px solid grey;
        border-radius: 8px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Basic drawer</h1>
      <p>Basic </p>
      <div>
        <mwc-button label="Open" @click=${() => this.drawerOne.open()}></titanium-drawer></mwc-button>
        <titanium-drawer one>
          <titanium-side-menu-item href="#default">Home</titanium-side-menu-item>
          <titanium-side-menu-item href="#disabled" disabled>Fruits</titanium-side-menu-item>
          <titanium-side-menu-item href="#selected" selected>Vegetables</titanium-side-menu-item>
        </titanium-drawer>


    
      </div>
      <h1>Always show slotted content</h1>
      <p>Show drawer content when closed</p>
      <div>
        <mwc-button label="Open" @click=${() => this.drawerTwo.open()} ></titanium-drawer></mwc-button>
        <titanium-drawer two always-show-content >
          <h3>Fruits</h3>
          <titanium-side-menu-item href="/titanium-drawer" >
            <mwc-icon>restaurant</mwc-icon>
            <span>Fruits</span>
          </titanium-side-menu-item>
            <h4 sub>Walnut</h4>
            <titanium-side-menu-item sub  href="/titanium-drawer">
              <span>Edit fruit</span>
            </titanium-side-menu-item>
            <titanium-side-menu-item sub  href="/titanium-drawer">
              <span>Assign farmers</span>
            </titanium-side-menu-item>
        

          <h4>Administration</h4>
          <titanium-side-menu-item href="/titanium-drawer">
            <mwc-icon>home</mwc-icon>
            <span>Rules</span>
          </titanium-side-menu-item>
          <menu-divider></menu-divider>
          <titanium-side-menu-item href="/titanium-drawer">
            <mwc-icon>question_answer</mwc-icon>
            <span>Feedback</span>
          </titanium-side-menu-item>
          <titanium-side-menu-item href="/titanium-drawer">
            <mwc-icon>apps</mwc-icon>
            <span>Back to my apps</span>
            <mwc-icon ext>exit_to_app</mwc-icon>
          </titanium-side-menu-item>
        </titanium-drawer>


    
      </div>
    `;
  }
}

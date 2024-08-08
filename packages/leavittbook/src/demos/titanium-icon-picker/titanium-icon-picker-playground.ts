/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

import '@material/web/button/outlined-button';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/icon-picker/icon-picker';
import { TitaniumIconPicker } from '@leavittsoftware/web/titanium/icon-picker/icon-picker';

/* playground-fold */
@customElement('titanium-icon-picker-playground')
export class TitaniumIconPickerPlayground extends LitElement {
  @query('titanium-icon-picker[demo2]') private accessor requiredInput: TitaniumIconPicker;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Icon picker example</p>
      <div>
        <titanium-icon-picker></titanium-icon-picker>
      </div>

      
      <h1>Favorite icons</h1>
      <p></p>
      <div>
        <titanium-icon-picker favorites=${'restaurant,cake,liquor,local_pizza,ramen_dining,icecream,egg,rice_bowl,skillet,oven'}></titanium-icon-picker>
      </div></div>

          
      <h1>Whitelist icons</h1>
      <p></p>
      <div>
        <titanium-icon-picker whitelist="restaurant,cake,liquor,local_pizza,ramen_dining,icecream,egg,rice_bowl,skillet,oven" favorites="restaurant"></titanium-icon-picker>
      </div></div>

                
      <h1>Pre-populated</h1>
      <p>Icon picker example (pre-populated)</p>
      <div>
        <titanium-icon-picker .selected=${{ icon: 'add' } as any}></titanium-icon-picker>
      </div>

      <h1>Required</h1>
      <p>Icon picker required example</p>
      <div>
        <titanium-icon-picker demo2 required label="Must pick an icon"></titanium-icon-picker>
        <section buttons>
          <md-outlined-button @click=${() => this.requiredInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.requiredInput.reportValidity()}>Report validity</md-outlined-button>
        </section>
      </div>
    `;
  }
}

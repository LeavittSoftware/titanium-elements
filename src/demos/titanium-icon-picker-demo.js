import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/icon-picker/icon-picker';
import StoryStyles from '../styles/story-styles';
let TitaniumIconPickerDemo = class TitaniumIconPickerDemo extends LitElement {
    #requiredInput_accessor_storage;
    get requiredInput() { return this.#requiredInput_accessor_storage; }
    set requiredInput(value) { this.#requiredInput_accessor_storage = value; }
    static { this.styles = [StoryStyles]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium icon picker" level1Href="/titanium-icon-picker" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium icon picker" className="TitaniumIconPicker"></story-header>

            <div>
              <h1>Default</h1>
              <p>Icon picker example</p>
              <titanium-icon-picker></titanium-icon-picker>
            </div>

            <div>
              <h1>Filled</h1>
              <p>Filled icon picker example</p>
              <titanium-icon-picker filled></titanium-icon-picker>
            </div>

            <div>
              <h1>Favorite icons</h1>
              <p>Icon picker with favorite icons pre-selected</p>
              <titanium-icon-picker favorites=${'restaurant,cake,liquor,local_pizza,ramen_dining,icecream,egg,rice_bowl,skillet,oven'}></titanium-icon-picker>
            </div>

            <div>
              <h1>Whitelist icons</h1>
              <p>Icon picker restricted to whitelisted icons</p>
              <titanium-icon-picker
                whitelist="restaurant,cake,liquor,local_pizza,ramen_dining,icecream,egg,rice_bowl,skillet,oven"
                favorites="restaurant"
              ></titanium-icon-picker>
            </div>

            <div>
              <h1>Pre-populated</h1>
              <p>Icon picker example (pre-populated)</p>
              <titanium-icon-picker .selected=${{ icon: 'add' }}></titanium-icon-picker>
            </div>

            <div>
              <h1>Required</h1>
              <p>Icon picker required example</p>
              <titanium-icon-picker demo2 required label="Must pick an icon"></titanium-icon-picker>
              <section buttons>
                <md-filled-tonal-button @click=${() => this.requiredInput.reset()}>Reset</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.requiredInput.reportValidity()}>Report validity</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-icon-picker"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
__decorate([
    query('titanium-icon-picker[demo2]')
], TitaniumIconPickerDemo.prototype, "requiredInput", null);
TitaniumIconPickerDemo = __decorate([
    customElement('titanium-icon-picker-demo')
], TitaniumIconPickerDemo);
export { TitaniumIconPickerDemo };
//# sourceMappingURL=titanium-icon-picker-demo.js.map
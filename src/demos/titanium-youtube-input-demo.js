import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import { html, LitElement } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/youtube-input/youtube-input';
import StoryStyles from '../styles/story-styles';
let TitaniumYoutubeInputDemo = class TitaniumYoutubeInputDemo extends LitElement {
    #inputs_accessor_storage;
    get inputs() { return this.#inputs_accessor_storage; }
    set inputs(value) { this.#inputs_accessor_storage = value; }
    #requiredInput_accessor_storage;
    get requiredInput() { return this.#requiredInput_accessor_storage; }
    set requiredInput(value) { this.#requiredInput_accessor_storage = value; }
    static { this.styles = [StoryStyles]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium youtube input" level1Href="/titanium-youtube-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium youtube input" className="TitaniumYoutubeInput"></story-header>

            <div>
              <h1>Default</h1>
              <p>YouTube video input with URL validation</p>
              <titanium-youtube-input label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
            </div>

            <div>
              <h1>Disabled</h1>
              <p>Disabled YouTube input</p>
              <titanium-youtube-input disabled label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
            </div>

            <div>
              <h1>Methods</h1>
              <p>Demonstrates public methods like reset and reportValidity</p>
              <titanium-youtube-input
                required
                label="Video"
                @input=${(e) => console.log(e.target.value)}
              ></titanium-youtube-input>
              <br />
              <section buttons>
                <md-filled-tonal-button @click=${() => this.requiredInput.reset()}>Reset</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.requiredInput.reportValidity()}>Report validity</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-youtube-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
__decorate([
    queryAll('titanium-youtube-input')
], TitaniumYoutubeInputDemo.prototype, "inputs", null);
__decorate([
    query('titanium-youtube-input[required]')
], TitaniumYoutubeInputDemo.prototype, "requiredInput", null);
TitaniumYoutubeInputDemo = __decorate([
    customElement('titanium-youtube-input-demo')
], TitaniumYoutubeInputDemo);
export { TitaniumYoutubeInputDemo };
//# sourceMappingURL=titanium-youtube-input-demo.js.map
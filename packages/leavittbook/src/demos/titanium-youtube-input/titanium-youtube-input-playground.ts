/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { TitaniumYouTubeInput } from '@leavittsoftware/web/titanium/youtube-input/youtube-input';

import '@material/web/button/outlined-button';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/youtube-input/youtube-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';

/* playground-fold */
@customElement('titanium-youtube-input-playground')
export class TitaniumYoutubeInputPlayground extends LitElement {
  @queryAll('titanium-youtube-input') protected accessor inputs!: NodeListOf<TitaniumYouTubeInput>;
  @query('titanium-youtube-input[required]') protected accessor requiredInput: TitaniumYouTubeInput;

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
      <div>
        <titanium-youtube-input label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
      </div>

      <h1>Disabled</h1>
      <div>
        <titanium-youtube-input disabled label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
      </div>

      <h1>Methods</h1>
      <div>
        <titanium-youtube-input required label="Video" @input=${(e: DOMEvent<TitaniumYouTubeInput>) => console.log(e.target.value)}></titanium-youtube-input>
        <br />
        <section buttons>
          <md-outlined-button @click=${() => this.requiredInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.requiredInput.reportValidity()}>Report validity</md-outlined-button>
        </section>
      </div>
    `;
  }
}

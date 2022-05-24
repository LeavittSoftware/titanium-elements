/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';
import { h1, p, button } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/mwc-button';
import { TitaniumYouTubeInputElement } from '@leavittsoftware/titanium-youtube-input';

/* playground-fold-end */
import '@leavittsoftware/titanium-youtube-input';

/* playground-fold */
@customElement('titanium-youtube-input-playground')
export class TitaniumYoutubeInputPlayground extends LitElement {
  @queryAll('titanium-youtube-input') private inputs!: NodeListOf<TitaniumYouTubeInputElement>;
  @query('titanium-youtube-input[required]') requiredInput: TitaniumYouTubeInputElement;

  async firstUpdated() {
    // Fix MWC floating label problem
    requestAnimationFrame(() => {
      Array.from(this.inputs).forEach(() => {
        //TODO: add method to input
        //   o.layout();
      });
    });
  }

  static styles = [
    h1,
    p,
    button,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
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
        <titanium-youtube-input label="Video" youtube-video-key="OmJ-4B-mS-Y"></titanium-youtube-input>
      </div>

      <h1>Disabled</h1>
      <div>
        <titanium-youtube-input disabled label="Video" youtube-video-key="OmJ-4B-mS-Y"></titanium-youtube-input>
      </div>

      <h1>Methods</h1>
      <div>
        <titanium-youtube-input required validationMessage="This video is required" label="Video"></titanium-youtube-input>
        <br />
        <section buttons>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.requiredInput.reset();
            }}
            label="reset()"
          ></mwc-button>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.requiredInput.reportValidity();
            }}
            label="reportValidity()"
          ></mwc-button>
        </section>
      </div>
    `;
  }
}

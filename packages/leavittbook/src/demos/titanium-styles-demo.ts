import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { dataRow, a, ellipsis, h1, h2, h3, h4, h5, p } from '@leavittsoftware/web/titanium/styles/styles';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-styles-demo')
export class TitaniumStylesDemo extends LitElement {
  static styles = [
    StoryStyles,
    dataRow,
    a,
    ellipsis,
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      leavitt-app-width-limiter > div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;

        &[no-padding-right] {
          padding-right: 0;
        }

        &:not(:first-of-type) {
          margin-top: 24px;
        }
      }

      leavitt-app-width-limiter > p {
        margin-bottom: 12px;
      }

      typography-grid {
        display: grid;
        gap: 12px;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium styles" level1Href="/titanium-styles" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium styles" className="TitaniumStyles"></story-header>

            <div>
              <typography-grid>
                <h1>Heading one</h1>
                <h2>Heading two</h2>
                <h3>Heading three</h3>
                <h4>Heading four</h4>
                <h5>Heading five</h5>
                <a href="#">Anchor tag</a>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus, felis mollis aliquet eleifend, sem nunc volutpat risus, eget cursus odio
                  eros vel sapien. Phasellus sit amet mi a tellus commodo molestie eu nec tellus. In hac habitasse platea dictumst.
                </p>
                <h2 ellipsis="" style="max-width: 130px">Ellipsis text sit amet, consectetur adipiscing elit. Duis</h2>
              </typography-grid>
            </div>

            <div no-padding-right>
              <div data-row-container>
                <data-row>
                  <h5>First name</h5>
                  <p image><img src="https://cdn.leavitt.com/user-0-32.jpeg" />Bob</p>
                </data-row>

                <data-row>
                  <h5>Last name</h5>
                  <p>Alice</p>
                </data-row>

                <data-row>
                  <h5>Bio</h5>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                    source.
                  </p>
                </data-row>
              </div>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-styles"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}

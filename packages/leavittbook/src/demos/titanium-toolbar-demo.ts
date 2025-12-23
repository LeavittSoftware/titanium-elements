import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture-menu';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/toolbar/toolbar';
import UserManager from '../services/user-manager-service';
import { heroStyles } from '../styles/hero-styles';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-toolbar-demo')
export class TitaniumToolbarDemo extends LitElement {
  static styles = [
    StoryStyles,
    heroStyles,
    h1,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      leavitt-app-width-limiter div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;

        &:not(:first-of-type) {
          margin-top: 24px;
        }
      }

      h1 {
        margin-bottom: 12px;
      }

      demo-toolbar {
        display: flex;
        position: relative;
        background-color: aliceblue;
        justify-content: space-between;
        padding: 12px 24px;
        border-radius: 24px;
        margin-bottom: 24px;
      }

      demo-toolbar a[logo],
      demo-toolbar img {
        height: 26px;
        /* Prevent shifting on load */
        min-width: 26px;
        cursor: pointer;
      }

      demo-toolbar a[logo] {
        margin-right: 12px;
      }

      [main-title] {
        margin: 0;
        font-weight: 400;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium toolbar" level1Href="/titanium-toolbar" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium toolbar" className="TitaniumToolbar"></story-header>

            <div>
              <h1>Toolbar</h1>
              <demo-toolbar>
                <a logo title="Back to home">
                  <img src="https://www.leavitt.com/application/themes/lg/img/logo/leavitt-group-logo.svg" alt="Company logo" />
                </a>
                <h3 title="boilerplate toolbar" main-title>Boilerplate Toolbar</h3>
                <profile-picture-menu size="36" .userManager=${UserManager}></profile-picture-menu>
              </demo-toolbar>
            </div>

            <div>
              <h1>Content area</h1>
              <p>The toolbar is typically positioned at the top of the page with content below</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex quo illud efficitur, qui bene cenent omnis libenter cenare, qui libenter, non continuo
                bene. Quos nisi redarguimus, omnis virtus, omne decus, omnis vera laus deserenda est. Cur fortior sit, si illud, quod tute concedis, asperum et vix
                ferendum putabit? Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.
              </p>
              <p>
                Semper enim ex eo, quod maximas partes continet latissimeque funditur, tota res appellatur. Quod autem ratione actum est, id officium appellamus. Num
                igitur eum postea censes anxio animo aut sollicito fuisse? Possumusne hic scire qualis sit, nisi contulerimus inter nos, cum finem bonorum dixerimus,
                quid finis, quid etiam sit ipsum bonum?
              </p>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-toolbar"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}

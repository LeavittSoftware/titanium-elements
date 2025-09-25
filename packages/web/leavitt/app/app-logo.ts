import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ThemePreference } from '@leavittsoftware/web/leavitt/theme/theme-preference';

@customElement('leavitt-app-logo')
export class LeavittAppLogo extends ThemePreference(LitElement) {
  @property({ type: String }) accessor href: string = '/';
  @property({ type: String }) accessor title: string = 'Back to home';
  @property({ type: String, attribute: 'app-name' }) accessor appName: string | null;

  static styles = [
    css`
      :host {
        display: grid;
      }

      :host(:hover) {
        span[lg-logo] {
          opacity: 1;
        }

        span[app-name] {
          opacity: 0;
        }
      }

      a {
        display: grid;
        grid: 'logo text' / auto 1fr;
        align-items: center;

        font-family: zurchlc, Metropolis;
        font-size: 26px;
        line-height: 26px;
        word-spacing: -4px;
        font-weight: 300;
        color: var(--md-sys-color-on-surface);
        text-decoration: none;

        overflow: hidden;

        img {
          grid-area: logo;
          height: 22px;
          width: 22px;
          margin-right: 4px;
        }

        span {
          transition: opacity 0.4s ease-in-out 0.3s;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span[lg-logo],
        span[app-name] {
          grid-area: text;
        }

        span[lg-logo] {
          opacity: 0;
        }

        span[app-name] {
          opacity: 1;
        }

        span[app-name],
        span[lg-leavitt] {
          color: #15467b;
        }

        span[lg-group] {
          color: #919294;
        }
      }

      :host([theme-preference='dark']) {
        span[app-name],
        span[lg-leavitt],
        span[lg-group] {
          color: #fff;
        }
      }

      @media (max-width: 920px) {
        span[lg-logo],
        span[app-name] {
          font-size: 20px;
        }
        a {
          img {
            width: 18px;
            height: 18px;
          }
        }
      }
    `,
  ];

  renderLGLogoText() {
    return html`<span lg-logo><span lg-leavitt>Leavitt</span> <span lg-group>Group</span></span>`;
  }

  render() {
    return html`<a mark href=${this.href} title=${this.title}>
      <img src=${this.themePreference === 'dark' ? 'https://cdn.leavitt.com/company-mark-57-dark.svg' : 'https://cdn.leavitt.com/company-mark-57.svg'} />
      <span app-name>${this.appName}</span>${this.renderLGLogoText()}
    </a>`;
  }
}

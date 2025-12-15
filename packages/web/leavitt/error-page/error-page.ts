import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';

import '../app/app-main-content-container';
import '../app/app-width-limiter';

import { Container, OptionsColor, tsParticles } from '@tsparticles/engine';
import { loadStarsPreset } from '@tsparticles/preset-stars';
import { ThemePreference, ThemePreferenceOption } from '../theme/theme-preference';
import themePreferenceEvent from '../theme/theme-preference-event';

/**
 * A pre-styled error page
 *
 * @element leavitt-error-page
 *
 */

@customElement('leavitt-error-page')
export class LeavittErrorPage extends ThemePreference(LitElement) {
  /**
   * Reason text for the error
   */
  @property({ type: String }) accessor heading: string = 'Hmm...';
  @property({ type: String }) accessor message: string = "It looks like that page doesn't exist.";

  @query('div[particles]') private accessor particlesContainer: HTMLDivElement;

  #mdSysColorBackground: string;
  #mdSysColorOnBackground: string;
  #particles: Container | undefined;

  async firstUpdated() {
    this.#setColors(this.themePreference);
    themePreferenceEvent.subscribe('theme-preference', 'change', (themePreference: ThemePreferenceOption) => {
      this.#setColors(themePreference);

      if (this.#particles) {
        this.#particles.options.background.color = this.#mdSysColorBackground as unknown as OptionsColor;
        this.#particles.options.particles.color.value = this.#mdSysColorOnBackground;
        this.#particles.refresh();
      }
    });

    await loadStarsPreset(tsParticles);

    if (this.particlesContainer) {
      this.#particles = await tsParticles.load({
        element: this.particlesContainer,
        options: {
          preset: 'stars',
          background: {
            color: this.#mdSysColorBackground,
          },
          particles: {
            color: {
              value: this.#mdSysColorOnBackground,
            },
          },
          fullScreen: {
            enable: false,
          },
        },
      });
    }
  }

  #setColors(themePreference: ThemePreferenceOption) {
    this.#mdSysColorBackground =
      themePreference === 'dark'
        ? getComputedStyle(document.body).getPropertyValue('--md-sys-color-surface-container-lowest')
        : getComputedStyle(document.body).getPropertyValue('--md-sys-color-surface-container-highest');
    this.#mdSysColorOnBackground = this.themePreference === 'dark' ? '#5c5959' : '#bfbbbb';
  }

  static styles = css`
    :host {
      display: grid;
    }

    h1 {
      font-family: var(Metropolis, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;
      font-size: 48px;
      line-height: 52px;
      font-weight: 700;
      letter-spacing: -1px;

      margin: 48px 0 24px 0;
      padding: 0;

      text-align: center;

      z-index: 1;
    }

    h2 {
      font-family: Roboto;
      -webkit-font-smoothing: antialiased;
      font-size: 20px;
      line-height: 22px;
      font-weight: 300;
      letter-spacing: 0.3px;

      margin: 0;
      padding: 0;

      text-align: center;

      z-index: 1;
    }

    image-container {
      display: grid;
      max-width: 390px;
      min-width: 200px;
      justify-self: center;
      position: relative;
      z-index: 1;
      margin-top: 24px;

      div[icon-container] {
        display: grid;
        position: absolute;
        --md-icon-size: 30px;
        width: 30px;
        top: 12%;
        right: 12%;
        z-index: 1;
        opacity: 0.5;
        animation: spin 4.5s infinite linear;
        color: var(--md-sys-color-primary);
      }

      img[planet] {
        z-index: 1;
        width: 100%;
        height: auto;
        object-fit: contain;
        object-position: center;
      }
    }

    div[particles] {
      position: absolute;
      inset: 0;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  render() {
    return html`
      <leavitt-app-main-content-container>
        <leavitt-app-width-limiter>
          <div particles></div>
          <h1>${this.heading}</h1>
          <h2>${this.message}</h2>
          <image-container>
            <div icon-container>
              <slot name="icon">
                <img mark src="https://cdn.leavitt.com/icons/lg-mark.svg" />
              </slot>
            </div>
            <img planet src="https://cdn.leavitt.com/icons/lg-planet.svg" />
          </image-container>
        </leavitt-app-width-limiter>
      </leavitt-app-main-content-container>
    `;
  }
}

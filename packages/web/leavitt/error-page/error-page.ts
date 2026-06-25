import { css, html, LitElement, TemplateResult } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';

import '../app/app-main-content-container';
import '../app/app-width-limiter';

import { ThemePreference, ThemePreferenceOption } from '../theme/theme-preference';
import themePreferenceEvent from '../theme/theme-preference-event';

type Star = { x: number; y: number; r: number; baseOpacity: number; phase: number; twinkleSpeed: number; vx: number; vy: number };

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
  @property() accessor heading: string | TemplateResult<1> = 'Hmm...';
  @property() accessor message: string | TemplateResult<1> = "It looks like that page doesn't exist.";

  @query('canvas[particles]') private accessor canvas!: HTMLCanvasElement;
  @query('leavitt-app-main-content-container') private accessor container!: HTMLElement;

  #mdSysColorBackground!: string;
  #mdSysColorOnBackground!: string;
  #ctx: CanvasRenderingContext2D | null = null;
  #stars: Star[] = [];
  #rafId = 0;
  #resizeObserver?: ResizeObserver;
  #reduceMotion = false;

  #onThemeChange = (themePreference: ThemePreferenceOption) => {
    this.#setColors(themePreference);
    this.#applyBackground();
    if (this.#reduceMotion) {
      this.#draw();
    }
  };

  #applyBackground() {
    if (this.container) {
      this.container.style.backgroundColor = this.#mdSysColorBackground;
    }
  }

  firstUpdated() {
    this.#setColors(this.themePreference);
    this.#applyBackground();
    themePreferenceEvent.subscribe('theme-preference', 'change', this.#onThemeChange);

    this.#reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    if (!this.canvas) {
      return;
    }
    this.#ctx = this.canvas.getContext('2d');

    this.#resizeObserver = new ResizeObserver(() => this.#resize());
    this.#resizeObserver.observe(this.canvas);
    this.#resize();

    this.#startLoop();
  }

  connectedCallback() {
    super.connectedCallback();
    this.#startLoop();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    cancelAnimationFrame(this.#rafId);
    this.#rafId = 0;
    this.#resizeObserver?.disconnect();
    // EventBus.unsubscribe types the callback as EventCallback<entityType>, not the dispatched arg type.
    themePreferenceEvent.unsubscribe('theme-preference', 'change', this.#onThemeChange as never);
  }

  #startLoop() {
    if (!this.#ctx || this.#reduceMotion || this.#rafId) {
      return;
    }
    this.#rafId = requestAnimationFrame(this.#tick);
  }

  #resize() {
    if (!this.canvas) {
      return;
    }
    const dpr = window.devicePixelRatio || 1;
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    if (width === 0 || height === 0) {
      return;
    }
    this.canvas.width = Math.round(width * dpr);
    this.canvas.height = Math.round(height * dpr);
    this.#ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.#initStars(width, height);
    if (this.#reduceMotion) {
      this.#draw();
    }
  }

  #initStars(width: number, height: number) {
    const count = Math.min(160, Math.max(24, Math.round((width * height) / 9000)));
    const stars: Star[] = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.7,
        baseOpacity: Math.random() * 0.5 + 0.5,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.012 + 0.004,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
      });
    }
    this.#stars = stars;
  }

  #tick = () => {
    if (!this.canvas) {
      return;
    }
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    for (const star of this.#stars) {
      star.phase += star.twinkleSpeed;
      star.x += star.vx;
      star.y += star.vy;
      if (star.x < 0) {
        star.x += width;
      } else if (star.x > width) {
        star.x -= width;
      }
      if (star.y < 0) {
        star.y += height;
      } else if (star.y > height) {
        star.y -= height;
      }
    }
    this.#draw();
    this.#rafId = requestAnimationFrame(this.#tick);
  };

  #draw() {
    if (!this.#ctx || !this.canvas) {
      return;
    }
    this.#ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    this.#ctx.fillStyle = this.#mdSysColorOnBackground;
    for (const star of this.#stars) {
      const opacity = this.#reduceMotion ? star.baseOpacity : star.baseOpacity * (0.55 + 0.45 * Math.sin(star.phase));
      this.#ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
      this.#ctx.beginPath();
      this.#ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      this.#ctx.fill();
    }
    this.#ctx.globalAlpha = 1;
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

    canvas[particles] {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
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
          <canvas particles></canvas>
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

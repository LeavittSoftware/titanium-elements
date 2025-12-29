import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { CountUp } from 'countup.js';

@customElement('npm-stats')
export default class NpmStats extends LitElement {
  @property({ type: Boolean, reflect: true, attribute: 'hide-downloads' }) accessor hideDownloads: boolean = false;

  @query('span.major') protected accessor major: HTMLDivElement;
  @query('span.minor') protected accessor minor: HTMLDivElement;
  @query('span.rev') protected accessor rev: HTMLDivElement;
  @query('span.downloads') protected accessor downloads: HTMLDivElement;

  #package = '@leavittsoftware%2Fweb';

  async firstUpdated() {
    const stats = await this.#getStats(this.#package);
    if (stats) {
      const [major, minor, rev] = stats.version?.split('.')?.map((o) => Number(o)) ?? [];
      const countUp = new CountUp(this.major, major, { suffix: '.', duration: 1 });
      const countUp2 = new CountUp(this.minor, minor, { suffix: '.', duration: 1 });
      const countUp3 = new CountUp(this.rev, rev, { duration: 1 });
      countUp.start();
      setTimeout(() => {
        countUp2.start();
      }, 500);
      setTimeout(() => {
        countUp3.start();
      }, 1000);

      const downloadsCountUp = new CountUp(this.downloads, stats.downloads ?? 0, { useGrouping: true, suffix: ' weekly downloads' });
      downloadsCountUp.start();
    }
  }

  async #getStats(packageName: string) {
    try {
      const response = await fetch(`https://api.npmjs.org/versions/${packageName}/last-week`, {
        method: 'GET',
      });
      const text = await response.text();
      const json = text.length ? JSON.parse(text) : {};

      const versions = Object.entries(json.downloads)
        .map((a) => ({
          version: a?.[0]
            ?.split('.')
            .map((n) => +n + 100000)
            .join('.') as string,
          downloads: a?.[1] as number,
        }))
        .sort((a, b) => a.version.localeCompare(b.version))
        .map((a) => ({
          ...a,
          version: a.version
            ?.split('.')
            .map((n) => +n - 100000)
            .join('.'),
        }));

      return versions?.pop();
    } catch (error) {
      console.warn(error);
    }
    return null;
  }

  static styles = [
    css`
      :host {
        display: block;
      }

      stats-container {
        display: flex;
        gap: 6px;
      }

      [tertiary] {
        background-color: var(--md-sys-color-tertiary);
        color: var(--md-sys-color-on-tertiary);
      }

      info-chip {
        height: 24px;
        padding: 0px 6px;
        border-radius: 28px;
        font-size: 13px;
        align-content: center;
      }

      .downloads {
        opacity: 0.8;
      }

      [hidden] {
        display: none;
      }
    `,
  ];
  render() {
    return html`
      <stats-container>
        <info-chip tertiary>
          <span>v<span class="major"></span><span class="minor"></span><span class="rev"></span></span
        ></info-chip>

        <info-chip ?hidden=${this.hideDownloads}>
          <span slot="label"><span class="downloads"></span></span
        ></info-chip>
      </stats-container>
    `;
  }
}

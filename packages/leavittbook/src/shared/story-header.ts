import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@material/web/chips/suggestion-chip';
import { CountUp } from 'countup.js';

type CustomElementDeclaration = {
  name?: string;
  description?: string;
  tagName?: string;
  kind?: string;
};

@customElement('story-header')
export default class StoryHeaderElement extends LitElement {
  @property({ type: String }) name: string;
  @property({ type: String }) packageName: string;
  @property({ type: String }) className: string;
  @property({ type: String }) deprecatedReason: string;

  @query('span.major') protected major: HTMLDivElement;
  @query('span.minor') protected minor: HTMLDivElement;
  @query('span.rev') protected rev: HTMLDivElement;
  @query('span.downloads') protected downloads: HTMLDivElement;

  @state()
  customElementsJSON: { modules: [{ declarations: Array<CustomElementDeclaration> }] } | null = null;

  @state()
  customElementDeclaration: CustomElementDeclaration | null = null;

  async firstUpdated() {
    this.customElementsJSON = await this.#readCustomElementsJson('/custom-elements.json');
  }

  async updated(changedProps: PropertyValues<this>) {
    if ((changedProps.has('className') || changedProps.has('customElementsJSON')) && this.className && this.customElementsJSON) {
      this.customElementDeclaration = this.customElementsJSON?.modules.flatMap((o) => o.declarations).find((o) => o.name === this.className) ?? null;
    }

    if (changedProps.has('packageName') && this.packageName) {
      const [version, downloadCount] = (await this.#getVersion(this.packageName)) ?? [];

      if (version) {
        const [major, minor, rev] = version.split('.').map((o) => Number(o));

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

        const downloadsCountUp = new CountUp(this.downloads, downloadCount ?? 0, { useGrouping: true, suffix: ' downloads' });
        downloadsCountUp.start();
      }
    }
  }

  async #readCustomElementsJson(path: string) {
    try {
      const response = await fetch(path, {
        method: 'GET',
      });
      const text = await response.text();
      return text.length ? JSON.parse(text) : {};
    } catch (error) {
      console.warn(error);
    }
    return null;
  }

  async #getVersion(packageName: string): Promise<[string, number] | null> {
    try {
      const response = await fetch(`https://api.npms.io/v2/package/@leavittsoftware%2F${packageName}`, {
        method: 'GET',
      });
      const text = await response.text();
      const json = text.length ? JSON.parse(text) : {};
      return [
        json.collected.metadata.version as string,
        json.collected.npm.downloads.reduce((previousValue, currentValue) => currentValue.count + previousValue, 0) as number,
      ];
    } catch (error) {
      console.warn(error);
    }
    return null;
  }

  static styles = [
    h1,

    p,
    css`
      :host {
        display: block;
        padding-bottom: 48px;
      }

      h1 {
        padding: 0;
        margin: 0;
      }

      [code] {
        font-family: Consolas, monospace;
        font-size: 18px;
      }

      p[desc] {
        margin-top: 12px;
      }

      h1 {
        font-size: 36px;
        line-height: 44px;
        font-weight: 400;
        padding: 0;
        margin: 0;
      }

      info-container {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      chip-container {
        display: flex;
        margin-top: 12px;
        gap: 6px;
      }

      [tertiary] {
        background-color: var(--md-sys-color-tertiary);
        color: var(--md-sys-color-on-tertiary);
      }

      info-chip {
        height: 24px;
        padding: 0px 6px;
        border: 1px var(--md-sys-color-outline-variant) solid;
        border-radius: 12px;
      }
    `,
  ];
  render() {
    return html`
      <h1>${this.name}</h1>
      <info-container>
        ${this.customElementDeclaration?.tagName
          ? html`<p code>${'<'}${this.customElementDeclaration?.tagName}${'>'}</p>
              <p>|</p>`
          : ''}
        <p code>${this.className}</p>
      </info-container>
      <p desc>${this.customElementDeclaration?.description}</p>
      <chip-container>
        ${this.packageName
          ? html`
              <info-chip tertiary>
                <span>v<span class="major"></span><span class="minor"></span><span class="rev"></span></span
              ></info-chip>

              <info-chip>
                <span slot="label"><span class="downloads"></span></span
              ></info-chip>
            `
          : nothing}
        ${this.deprecatedReason ? html`<titanium-chip readonly deprecated label="Deprecated (${this.deprecatedReason})"></titanium-chip>` : nothing}
      </chip-container>
    `;
  }
}

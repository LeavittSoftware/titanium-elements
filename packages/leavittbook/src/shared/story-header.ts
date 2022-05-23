import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/titanium-chip';
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

  @query('span.major') private major: HTMLDivElement;
  @query('span.minor') private minor: HTMLDivElement;
  @query('span.rev') private rev: HTMLDivElement;
  @query('span.downloads') private downloads: HTMLDivElement;

  @state()
  customElementsJSON: { modules: [{ declarations: Array<CustomElementDeclaration> }] } | null = null;

  @state()
  customElementDeclaration: CustomElementDeclaration | null = null;

  async firstUpdated() {
    this.customElementsJSON = await this.readCustomElementsJson('/custom-elements.json');
  }

  async updated(changedProps: PropertyValues<this>) {
    if ((changedProps.has('className') || changedProps.has('customElementsJSON')) && this.className && this.customElementsJSON) {
      this.customElementDeclaration = this.customElementsJSON?.modules.flatMap(o => o.declarations).find(o => o.name === this.className) ?? null;
    }

    if (changedProps.has('packageName') && this.packageName) {
      const [version, downloadCount] = (await this.getVersion(this.packageName)) ?? [];

      if (version) {
        const [major, minor, rev] = version.split('.').map(o => Number(o));

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

  private async readCustomElementsJson(path: string) {
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

  private async getVersion(packageName: string): Promise<[string, number] | null> {
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
        color: var(--app-light-text-color);
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

      titanium-chip {
        height: 24px;
        padding: 0px 6px;
        --app-text-color: #f5f5f5;
      }

      titanium-chip[black] {
        --titanium-chip-label-background-color: #212121;
      }

      titanium-chip[blue] {
        --titanium-chip-label-background-color: var(--app-primary-color);
      }

      titanium-chip[deprecated] {
        --titanium-chip-label-background-color: var(--app-accent-color-red);
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
              <titanium-chip readonly black>
                <span slot="label"><span class="major"></span><span class="minor"></span><span class="rev"></span></span>
              </titanium-chip>
              <titanium-chip readonly blue>
                <span slot="label"><span class="downloads"></span></span>
              </titanium-chip>
            `
          : nothing}
        ${this.deprecatedReason ? html`<titanium-chip readonly deprecated label="Deprecated (${this.deprecatedReason})"></titanium-chip>` : nothing}
      </chip-container>
    `;
  }
}

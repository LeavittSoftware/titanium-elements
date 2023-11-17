import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

import '@material/web/chips/suggestion-chip';

type CustomElementDeclaration = {
  name?: string;
  description?: string;
  tagName?: string;
  kind?: string;
};

@customElement('story-header')
export default class StoryHeaderElement extends LitElement {
  @property({ type: String }) accessor name: string;
  @property({ type: String }) accessor packageName: string;
  @property({ type: String }) accessor className: string;
  @property({ type: String }) accessor deprecatedReason: string;

  @state()
  private accessor customElementsJSON: { modules: [{ declarations: Array<CustomElementDeclaration> }] } | null = null;

  @state()
  private accessor customElementDeclaration: CustomElementDeclaration | null = null;

  async firstUpdated() {
    this.customElementsJSON = await this.#readCustomElementsJson('/custom-elements.json');
  }

  async updated(changedProps: PropertyValues<this>) {
    if ((changedProps.has('className') || changedProps.has('customElementsJSON')) && this.className && this.customElementsJSON) {
      this.customElementDeclaration = this.customElementsJSON?.modules.flatMap((o) => o.declarations).find((o) => o.name === this.className) ?? null;
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
        ${
          this.customElementDeclaration?.tagName
            ? html`<p code>${'<'}${this.customElementDeclaration?.tagName}${'>'}</p>
                <p>|</p>`
            : ''
        }
        <p code>${this.className}</p>
      </info-container>
      <p desc>${this.customElementDeclaration?.description}</p>
      
        ${this.deprecatedReason ? html`<md-suggestion-chip disabled label="Deprecated (${this.deprecatedReason})"></md-suggestion-chip>` : nothing}
      </chip-container>
    `;
  }
}

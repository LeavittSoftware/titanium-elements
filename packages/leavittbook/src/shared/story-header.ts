import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

import '@material/web/chips/suggestion-chip';
import { heroStyles } from '../styles/hero-styles';

type CustomElementDeclaration = {
  name?: string;
  description?: string;
  tagName?: string;
  kind?: string;
};

let customElementsJSON: { modules: [{ declarations: Array<CustomElementDeclaration> }] } | null = null;

const getCustomElementsJSON = async () => {
  if (!customElementsJSON) {
    customElementsJSON = await readCustomElementsJson('/custom-elements.json');
  }

  return customElementsJSON;
};

const readCustomElementsJson = async (path: string) => {
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
};

@customElement('story-header')
export default class StoryHeader extends LitElement {
  @property({ type: String }) accessor name: string;
  @property({ type: String }) accessor className: string;
  @property({ type: String }) accessor deprecatedReason: string;
  @state() private accessor customElementDeclaration: CustomElementDeclaration | null = null;

  @state() private accessor customElementsJSON: { modules: [{ declarations: Array<CustomElementDeclaration> }] } | null = null;

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('className') && this.className) {
      this.customElementsJSON = await getCustomElementsJSON();
      this.customElementDeclaration = this.customElementsJSON?.modules.flatMap((o) => o.declarations).find((o) => o.name === this.className) ?? null;
    }
  }

  static styles = [
    heroStyles,
    p,
    css`
      :host {
        display: block;
        padding-bottom: 24px;
      }

      [code] {
        font-family: Consolas, monospace;
        font-size: 16px;
      }

      p[desc] {
        margin-top: 12px;
      }

      info-container {
        display: flex;
        gap: 6px;
      }

      chip-container {
        display: flex;
        margin-top: 12px;
        gap: 6px;
      }

      @media (max-width: 1150px) {
        info-container {
          flex-direction: column;
        }
      }
    `,
  ];
  render() {
    return html`
      <h1>${this.name}</h1>
      <info-container>
        <p code>${this.className}</p>
        ${this.customElementDeclaration?.tagName ? html`<p code>${'<'}${this.customElementDeclaration?.tagName}${'>'}</p>` : ''}
      </info-container>
      <p desc>${this.customElementDeclaration?.description}</p>
      <chip-container>
        ${this.deprecatedReason ? html`<md-suggestion-chip disabled label="Deprecated (${this.deprecatedReason})"></md-suggestion-chip>` : nothing}
      </chip-container>
    `;
  }
}

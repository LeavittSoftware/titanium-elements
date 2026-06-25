import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { p } from '@leavittsoftware/web/titanium/styles/styles';

import '@leavittsoftware/web/titanium/chip/chip';
import '@material/web/button/filled-tonal-button';
import { heroStyles } from '../styles/hero-styles';
import UserManager from '../services/user-manager-service';
import { AuthIdentityController } from '../services/auth-identity-controller';

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
  @property({ type: String }) accessor name: string = '';
  @property({ type: String }) accessor className: string = '';
  @property({ type: String }) accessor deprecatedReason: string = '';
  @property({ type: Boolean, attribute: 'requires-auth' }) accessor requiresAuth: boolean = false;
  @state() private accessor customElementDeclaration: CustomElementDeclaration | null = null;

  @state() private accessor customElementsJSON: { modules: [{ declarations: Array<CustomElementDeclaration> }] } | null = null;

  #auth = new AuthIdentityController(this);

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
      <chip-container>
        ${this.requiresAuth && !this.#auth.identity
          ? html`<md-filled-tonal-button @click=${() => void UserManager.authenticate()}>Authentication is required for this demo</md-filled-tonal-button>`
          : nothing}
        ${this.deprecatedReason ? html`<titanium-chip non-interactive label="Deprecated (${this.deprecatedReason})"></titanium-chip>` : nothing}
      </chip-container>
    `;
  }
}

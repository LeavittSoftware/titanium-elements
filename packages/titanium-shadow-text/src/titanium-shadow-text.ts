import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

/**
 * Titanium Shadow Text - encapsulates text in shadow DOM to prevent text from showing as selected text when used in an mwc-select/mwc-list item
 *
 * @element titanium-shadow-text
 * @example
 * <mwc-list-item graphic="avatar" twoline value="100">
 *  <titanium-icon category slot="graphic" icon="category"></titanium-icon>
 *  <span>${o.Name}</span>
 *  <span slot="secondary"><titanium-shadow-text text="Special Category Text"></titanium-shadow-text></span>
 * </mwc-list-item>
 */
@customElement('titanium-shadow-text')
export class TitaniumShadowTextElement extends LitElement {
  /**
   * Text that will be rendered in the shadow dom
   */
  @property({ type: String }) text: string | null | undefined = '';
  static styles = css`
    :host {
      display: inline;
    }
  `;
  render = () => html`${this.text}`;
}

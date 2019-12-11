﻿import { customElement, html, property, css } from 'lit-element';
import { TitaniumCardElement } from './titanium-card';
import '@leavittsoftware/titanium-button';

/**
 * A card with built-in primary and secondary buttons
 *
 * @element titanium-edit-card
 *
 * @fires primary-action-click - Fired when the primary action button is clicked
 * @fires secondary-action-click - Fired when the secondary action button is clicked

 *
 * @cssprop {Color} --app-border-color - Card border color
 */

@customElement('titanium-edit-card')
export class TitaniumEditCardElement extends TitaniumCardElement {
  @property({ type: String }) primaryButtonTitle: string = 'SAVE';
  @property({ type: String }) secondaryButtonTitle: string = 'CANCEL';

  /**
   * Disables the primary action button on the card.
   */
  @property({ type: Boolean, attribute: 'disable-primary-button' }) disablePrimaryButton: boolean = false;

  /**
   * Disables the secondary action button on the card.
   */
  @property({ type: Boolean, attribute: 'disable-secondary-button' }) disableSecondaryButton: boolean = false;

  static styles = css`
    ${TitaniumCardElement.styles}
    action-container {
      display: grid;
      grid-auto-flow: column;
      justify-content: end;
      margin: 12px 8px 8px 8px;
      gap: 8px;
    }
  `;

  render() {
    return html`
      <slot></slot>
      <action-container>
        <titanium-button
          ?disabled=${this.disableSecondaryButton}
          @click=${(e: Event) => {
            e.preventDefault();
            this.dispatchEvent(new Event('secondary-action-click'));
          }}
        >
          ${this.secondaryButtonTitle}
        </titanium-button>
        <titanium-button
          ?disabled=${this.disablePrimaryButton}
          @click=${(e: Event) => {
            e.preventDefault();
            this.dispatchEvent(new Event('primary-action-click'));
          }}
        >
          ${this.primaryButtonTitle}
        </titanium-button>
      </action-container>
    `;
  }
}
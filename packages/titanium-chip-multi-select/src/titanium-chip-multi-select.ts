import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 *  Multi select outlined themed input that styles
 *  slotted in chips and add button
 *
 *  @element titanium-chip-multi-select
 *
 * @slot default - Main slot (intended to be a list of &lt;titanium-chip&gt;)
 * @slot button - Optional slot shown before the chips (typically used as an add chip button)
 *
 * @cssprop {Color} [--mdc-text-field-outlined-idle-border-color=rgba(0, 0, 0, 0.38)] - Container border color
 * @cssprop {Color} [--app-light-text-color=#80868b] - No items text color
 * @cssprop {Color} [--mdc-text-field-disabled-ink-color=rgba(0, 0, 0, 0.38)] - Disabled helper text color
 * @cssprop {Color} [--mdc-text-field-label-ink-color=rgba(0, 0, 0, 0.6)] - Helper text color
 * @cssprop [--mdc-typography-caption-font-family=var(--mdc-typography-font-family, Roboto, sans-serif)] - Helper font-family
 * @cssprop [--mdc-typography-caption-font-size=0.75rem] - Helper font-size
 * @cssprop [--mdc-typography-caption-font-weight=400] - Helper font-weight
 * @cssprop [--mdc-typography-caption-letter-spacing=0.0333333em] - Helper letter-spacing
 * @cssprop [--mdc-typography-caption-text-decoration=inherit] - Helper text-decoration
 * @cssprop [--mdc-typography-caption-text-transform=inherit] - Helper text-transform
 */

@customElement('titanium-chip-multi-select')
export class TitaniumChipMultiSelectElement extends LitElement {
  /**
   *  Label of input to display to users
   */
  @property({ type: String }) label: string;

  /**
   *  Text to show when there are no items
   */
  @property({ type: String }) noItemsText: string = 'No items';

  /**
   *  Indicates whether or not to show the no items text
   */
  @property({ type: Boolean }) hasItems: boolean;

  /**
   *  Sets helper text
   */
  @property({ type: String }) helper: string;

  /**
   *  Whether or not the input should appear disabled (chips, buttons and anything else slotted will still have to be disabled individually).
   */
  @property({ type: Boolean }) disabled: boolean;

  static styles = [
    css`
      :host {
        display: block;
      }

      main {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px;
        border: 1px solid var(--mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38));
        border-radius: 4px;
        position: relative;
        padding: 16px 12px 12px 12px;
      }

      div[chips] {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        overflow: hidden;
      }

      div[button] {
        grid-area: button;
        --mdc-shape-small: 24px;
      }

      div[empty-text] {
        font-size: 12px;
        color: var(--app-light-text-color);
        align-self: center;
      }

      label {
        position: absolute;
        pointer-events: none;
        top: 0;
        left: 12px;

        padding: 0 4px;

        background: #fff;
        color: rgba(0, 0, 0, 0.6);
        transform: translateY(-9.25px) scale(1);

        display: inline-block;
        font-family: Roboto, sans-serif;
        font-size: 12px;
        font-weight: 400;
        height: 16px;
        -webkit-font-smoothing: antialiased;
        letter-spacing: 0.009375em;
        position: absolute;
        transform-origin: left top;
        line-height: 1.15rem;
        text-align: left;
        text-overflow: clip;
        white-space: nowrap;
        will-change: transform;
        overflow: hidden;
      }

      :host([disabled]) label,
      :host([disabled]) div[empty-text],
      :host([disabled]) div[helper] {
        color: var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38));
      }

      div[helper] {
        color: var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6));
        -webkit-font-smoothing: antialiased;
        font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
        font-size: var(--mdc-typography-caption-font-size, 0.75rem);
        font-weight: var(--mdc-typography-caption-font-weight, 400);
        letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333em);
        text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
        text-transform: var(--mdc-typography-caption-text-transform, inherit);
        display: block;
        line-height: 24px;
        margin: 0px;
        padding-right: 16px;
        padding-left: 16px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
      }
    `,
  ];

  protected render() {
    return html`
      <main>
        <div button><slot name="button"></slot></div>
        <div chips><slot></slot></div>
        ${!this.hasItems ? html` <div empty-text>${this.noItemsText}</div>` : ''}
        <label>${this.label}</label>
      </main>
      <div helper>${this.helper}</div>
    `;
  }
}

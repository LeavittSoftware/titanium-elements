import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';

import '@material/web/ripple/ripple';
import '@material/web/focus/md-focus-ring';

import { css, html, LitElement } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { ellipsis } from '@leavittsoftware/web/titanium/styles/ellipsis';

@customElement('titanium-chip')
export class TitaniumChip extends LitElement {
  /**
   *  Label / text of the chip
   */
  @property({ type: String }) accessor label: string;

  /**
   *  When true, the chip is selected
   */
  @property({ type: Boolean, reflect: true }) accessor selected: boolean;

  /**
   *  When true, trailing slot is replaced with a remove icon button
   */
  @property({ type: Boolean, reflect: true, attribute: 'input-chip' }) accessor inputChip: boolean;

  /**
   *  Prevents mouse events and disables the ripple effect
   */
  @property({ type: Boolean, reflect: true, attribute: 'non-interactive' }) accessor nonInteractive: boolean;

  /**
   *  Icon name of the remove icon chip
   */
  @property({ type: String }) accessor inputChipRemoveIcon: string = 'close';

  /**
   *  Whether or not the input should be disabled
   */
  @property({ type: Boolean, reflect: true }) accessor disabled: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'has-leading-items' }) private accessor hasLeadingItems = false;
  @property({ type: Boolean, reflect: true, attribute: 'has-trailing-items' }) private accessor hasTrailingItems = false;

  @queryAssignedElements({ slot: 'icon' }) private readonly leadingSlotElements!: Element[];
  @queryAssignedElements({ slot: 'trailing' }) private readonly trailingSlotElements!: Element[];

  static styles = [
    ellipsis,
    css`
      :host {
        display: grid;
        height: 32px;
        width: auto;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;

        text-align: left;
      }

      button {
        display: grid;
        align-items: center;
        align-content: center;

        position: relative;

        -webkit-appearance: button;
        cursor: pointer;

        font: inherit;
        margin: 0;
        border: 0;

        box-sizing: border-box;
        height: inherit;
        text-align: inherit;

        border: 1px solid var(--titanium-chip-outline-color, var(--md-sys-color-outline));
        border-radius: 8px;
        --md-focus-ring-shape: 8px;

        color: inherit;
        background: inherit;
        width: inherit;

        outline: none;

        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        letter-spacing: inherit;

        padding: 0 12px;
      }

      :host([selected]) button,
      :host([has-leading-items]) button {
        grid: 'icon label' / auto 1fr;
        padding-left: 8px;
      }

      :host([input-chip]) button,
      :host([has-trailing-items]) butt on {
        grid: 'label trailing' / 1fr auto;
        padding-right: 4px;
      }

      :host([selected][input-chip]) button,
      :host([selected][has-leading-items]) button,
      :host([has-leading-items][input-chip]) button,
      :host([has-trailing-items][has-leading-items]) button {
        grid: 'icon label trailing' / auto 1fr auto;
      }

      main[label] {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        letter-spacing: inherit;
        text-align: inherit;

        padding: 6px 0;
      }

      md-icon[selected-check] {
        padding-right: var(--titanium-chip-selected-with-leading-icon-leading-space, 8px);
        --md-icon-size: 18px;
      }

      [name='icon']::slotted(md-icon) {
        color: var(--md-sys-color-primary);
        --md-icon-size: 18px;
        padding-right: var(--titanium-chip-with-leading-icon-leading-space, 8px);
      }

      [name='icon']::slotted(profile-picture) {
        padding-right: var(--titanium-chip-with-leading-icon-leading-space, 8px);
      }

      md-icon-button {
        --md-icon-button-icon-size: 18px;
        --md-icon-button-state-layer-height: 24px;
        --md-icon-button-state-layer-width: 24px;
        margin-left: 4px;
      }

      :host([selected]) button {
        background: var(--titanium-chip-selected-container-color, var(--md-sys-color-secondary-container));
        color: var(--titanium-chip-selected-text-color, var(--md-sys-color-on-secondary-container));
        border-color: var(--titanium-chip-selected-outline-color, var(--md-sys-color-secondary-container));
      }
    `,
  ];

  render() {
    return html`<button part="button" ?inert=${this.nonInteractive}>
      <md-ripple ?disabled=${this.disabled}></md-ripple>
      <md-focus-ring ></md-focus-ring>
      ${this.selected ? html`<md-icon selected-check>check</md-icon>` : html`<slot name="icon" @slotchange=${() => (this.hasLeadingItems = this.leadingSlotElements.length > 0)}></slot>`}
      
      <main label ellipsis><slot name="label">${this.label}</slot></main>
      
        ${
          this.inputChip
            ? html`<md-icon-button
                @click=${(e: MouseEvent) => {
                  e.stopPropagation();
                  this.dispatchEvent(new Event('remove'));
                }}
                ><md-icon>${this.inputChipRemoveIcon}</md-icon></md-icon-button
              >`
            : html`<slot name="trailing" @slotchange=${() => (this.hasTrailingItems = this.trailingSlotElements.length > 0)}></slot>`
        }
      </slot>
    </button>`;
  }
}

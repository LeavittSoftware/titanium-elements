import { ellipsis } from '@leavittsoftware/web/titanium/styles/ellipsis';
import { h2 } from '@leavittsoftware/web/titanium/styles/h2';

import { LitElement, PropertyValues, css, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

@customElement('titanium-data-table-action-bar')
export class TitaniumDataTableActionBar<T extends object> extends LitElement {
  @property({ type: Array }) accessor selected: Array<Partial<T>> = [];

  @property({ type: Boolean, reflect: true, attribute: 'has-selected' }) private accessor hasSelected: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'has-add-button' }) private accessor hasAddButton: boolean;

  @queryAssignedElements({ slot: 'add-button' }) private accessor addButtonElements!: Element[];

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('selected')) {
      this.hasSelected = this.selected.length > 0;
    }
  }

  static styles = [
    h2,
    ellipsis,
    css`
      :host {
        display: grid;
        padding: 12px 16px;
        background-color: var(--md-sys-color-surface-container-lowest);
        box-sizing: border-box;
      }

      main {
        display: grid;
        grid: 'filters  add-button' / 1fr auto;

        opacity: 1;
        transition-behavior: allow-discrete;
        animation: fade-in-down 0.25s ease;

        div[add-button] {
          grid-area: add-button;
          align-self: end;
        }

        div[filters] {
          grid-area: filters;
          align-self: end;
        }
      }

      :host([has-search][has-add-button]) div[add-button] {
        margin: 0 0 0 12px;
      }

      selected-action-veil {
        display: none;
        grid: 'text buttons' / minmax(min-content, 1fr) auto;
        min-height: 40px;
        align-items: end;

        gap: 6px 12px;

        background-color: inherit;
        opacity: 0;

        animation: fade-in-up 0.25s ease;
        transition-behavior: allow-discrete;

        margin: 0;

        action-container {
          grid-area: buttons;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
          justify-content: flex-end;

          ::slotted(md-filled-button) {
            --md-filled-button-container-height: 32px;
          }
        }
      }

      @starting-style {
        selected-action-veil[style*='display: grid'] {
          opacity: 0;
        }

        main[style*='display: grid'] {
          opacity: 1;
        }
      }

      :host([has-selected]) selected-action-veil {
        display: grid;
        opacity: 1;
        animation: fade-in-up 0.25s ease;
      }

      :host([has-selected]) main {
        animation: fade-out-down 0.25s ease;
        opacity: 0;
        height: 0;
        display: none;
      }

      @media (max-width: 920px) {
        h2 {
          font-size: 14px;
          line-height: 16px;
        }
      }

      @media (max-width: 500px) {
        main {
          grid:
            'filters'
            'add-button';
          gap: 12px;
        }

        selected-action-veil {
          grid:
            'text'
            'buttons';

          gap: 4px;
        }

        div[add-button] {
          justify-self: end;
        }
      }

      @keyframes fade-out-down {
        0% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(-20px);
        }
      }

      @keyframes fade-in-down {
        0% {
          opacity: 0;
          transform: translateY(-20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fade-out-up {
        0% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(20px);
        }
      }

      @keyframes fade-in-up {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ];

  render() {
    return html`
      <main part="main">
        <div add-button part="add-button-container">
          <slot name="add-button" @slotchange=${() => (this.hasAddButton = this.addButtonElements.length > 0)}></slot>
        </div>
        <div filters part="filters-container"><slot name="filters"></slot></div>
      </main>
      <selected-action-veil part="selected-action-veil">
        <h2 ellipsis part="selected-action-title">${this.selected.length} selected</h2>
        <action-container part="action-container"><slot name="selected-actions"></slot></action-container>
      </selected-action-veil>
    `;
  }
}

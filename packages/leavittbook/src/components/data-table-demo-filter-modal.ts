import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-button';
import '@material/mwc-dialog';
import '@leavittsoftware/titanium-chip';

import { LoadWhile } from '@leavittsoftware/titanium-helpers';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { FilterController } from '@leavittsoftware/titanium-data-table/lib/filter-controller';
import { Select } from '@material/mwc-select';
import { formStyles } from '../styles/form-styles';
import { Dialog } from '@material/mwc-dialog';
import { DOMEvent } from '@leavittsoftware/leavitt-elements/lib/dom-event';

export type FilterKeys = 'Appearance';

@customElement('data-table-demo-filter-modal')
export class DataTableDemoFilterModalElement extends LoadWhile(LitElement) {
  @state() private filterController: FilterController<FilterKeys>;
  @state() private appearance: string;

  @query('mwc-dialog') private dialog!: Dialog;

  async firstUpdated() {
    this.filterController.onFilterValueUpdated = () => {
      this.requestUpdate('filterController');
    };
  }

  public async open() {
    this.dialog.show();
  }

  static styles = [
    formStyles,
    css`
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        color: var(--app-text-color, #5f6368);
      }

      mwc-dialog {
        --mdc-dialog-min-width: 450px;
      }

      @media (max-width: 600px) {
        mwc-dialog {
          --mdc-dialog-min-width: inherit;
        }
      }

      mwc-select {
        --mdc-menu-min-width: calc(var(--mdc-dialog-min-width) - 50px);
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <titanium-chip
        ?hidden=${!this.filterController.getValue('Appearance') || this.isLoading}
        label="${this.filterController.getValue('Appearance') ?? ''}"
        closeable
        @titanium-chip-close=${() => {
          this.filterController.setValue('Appearance', null);
          this.requestUpdate('filterController');
        }}
      ></titanium-chip>

      <mwc-dialog heading="Filter items by">
        <main>
          <form>
            <mwc-select
              fixedMenuPosition
              .value=${this.filterController.getValue('Appearance') ?? ''}
              @selected=${(e: DOMEvent<Select>) => {
                this.appearance = e.target.value;
              }}
              label="Appearance"
              outlined
            >
              <mwc-list-item></mwc-list-item>
              <mwc-list-item value="ugly" ?selected=${this.filterController.getValue('Appearance') === 'ugly'}>ugly</mwc-list-item>
              <mwc-list-item value="plaid" ?selected=${this.filterController.getValue('Appearance') === 'plaid'}>plaid</mwc-list-item>
              <mwc-list-item value="slick" ?selected=${this.filterController.getValue('Appearance') === 'slick'}>slick</mwc-list-item>
            </mwc-select>
          </form>
        </main>
        <mwc-button slot="secondaryAction" label="Close" @click=${() => this.dialog.close()}></mwc-button>
        <mwc-button
          slot="primaryAction"
          label="Apply"
          @click=${() => {
            this.filterController.setValue('Appearance', this.appearance || null);
            this.requestUpdate('filterController');
            this.dialog.close();
          }}
        ></mwc-button>
      </mwc-dialog>
    `;
  }
}

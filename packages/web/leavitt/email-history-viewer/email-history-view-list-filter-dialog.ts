import '../../titanium/date-range-selector/date-range-selector';

import '@material/web/dialog/dialog';
import '@material/web/button/text-button';
import '@material/web/icon/icon';
import '@material/web/chips/input-chip';

import { dialogZIndexHack } from '../../titanium/hacks/dialog-zindex-hack';
import { LitElement, PropertyValues, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { MdDialog } from '@material/web/dialog/dialog';
import { LoadWhile } from '../../titanium/helpers/load-while';
import { FilterController } from '../../titanium/data-table/filter-controller';
import { rangeLabel } from '../../titanium/date-range-selector/types/range-label';
import { TitaniumDateRangeSelector } from '../../titanium/date-range-selector/date-range-selector';
import { DateRangeKey } from '../../titanium/date-range-selector/types/date-range-key';
import { DateRanges } from '../../titanium/date-range-selector/types/date-ranges';
import { DOMEvent } from '../../titanium/types/dom-event';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '../../titanium/hacks/dialog-navigation-hack';
import ApiService from '../api-service/api-service';
import { EmailTemplate } from '@leavittsoftware/lg-core-typescript';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { MdOutlinedSelect } from '@material/web/select/outlined-select';

export type FilterKeys = 'template' | 'startDate' | 'endDate' | 'dateRange';

@customElement('leavitt-email-history-view-list-filter-dialog')
export class LeavittEmailHistoryViewListFilterDialog extends LoadWhile(LitElement) {
  @property({ type: Boolean }) accessor isActive: boolean;
  @property({ type: Object }) accessor apiService: ApiService | null;

  @state() private accessor filterController: FilterController<FilterKeys>;
  @state() private accessor template: Partial<EmailTemplate>[] = [];
  @state() private accessor templateId: string;

  #templatesAreDirty = true;

  //Date range props
  @state() private accessor startDate: string;
  @state() private accessor endDate: string;

  @query('md-dialog') private accessor dialog!: MdDialog;
  @query('titanium-date-range-selector') private accessor dateRangeSelect!: TitaniumDateRangeSelector;

  async firstUpdated() {
    this.filterController.subscribeToFilterChange(async () => {
      this.#preloadChipData();
      this.requestUpdate('filterController');
    });
  }

  async updated(changedProps: PropertyValues<this>) {
    if (this.isActive && changedProps.has('isActive')) {
      this.#preloadChipData();
    }
  }

  async #preloadChipData() {
    //Preload for chips
    if (this.filterController.getValue('template') && this.#templatesAreDirty) {
      this.template = await this.#getTemplatesAsync();
    }
  }

  async #getTemplatesAsync() {
    if (!this.apiService) {
      console.warn('No api service provided');
      return [];
    }

    const odataParts = ['select=Id,Name', 'orderby=Name'];

    try {
      const get = this.apiService.getAsync<EmailTemplate>(`EmailTemplates?${odataParts.join('&')}`);
      this.loadWhile(get);
      const entities = (await get).toList();
      this.#templatesAreDirty = false;
      return entities;
    } catch (error) {
      this.dispatchEvent(new ShowSnackbarEvent(error));
    }
    return [];
  }

  public async open() {
    if (this.#templatesAreDirty) {
      this.template = await this.#getTemplatesAsync();
    }

    this.templateId = this.filterController.getValue('template') ?? '';

    //populate date range
    const dateRange = this.filterController.getValue('dateRange') as DateRangeKey;
    this.startDate = (dateRange === 'custom' ? this.filterController.getValue('startDate') : DateRanges.get(dateRange)?.startDate()) || '';
    this.endDate = (dateRange === 'custom' ? this.filterController.getValue('endDate') : DateRanges.get(dateRange)?.endDate()) || '';

    this.dialog.show();
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
      }

      md-dialog {
        max-width: 550px;
        width: calc(100vw - 24px);

        md-outlined-select {
          width: 100%;
          margin-top: 24px;
        }
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <md-input-chip
        remove-only
        ?hidden=${!this.filterController.getValue('template') || this.isLoading}
        label="${this.template.find((o) => o.Id === Number(this.filterController.getValue('template')))?.Name ?? ''} template"
        @remove=${(e: Event) => {
          e.preventDefault();
          this.filterController.setValue('template', null);
        }}
      >
        <md-icon slot="icon">content_copy</md-icon>
      </md-input-chip>

      <md-input-chip
        remove-only
        ?hidden=${!(this.filterController.getValue('dateRange') as DateRangeKey) || (this.filterController.getValue('dateRange') as DateRangeKey) === 'allTime'}
        label=${rangeLabel(
          this.filterController.getValue('dateRange') as DateRangeKey,
          this.filterController.getValue('startDate') ?? null,
          this.filterController.getValue('endDate') ?? null,
          'Sent'
        )}
        @remove=${(e: Event) => {
          e.preventDefault();
          this.filterController.setValue('dateRange', null);
          this.filterController.setValue('startDate', null);
          this.filterController.setValue('endDate', null);
        }}
      >
        <md-icon slot="icon">date_range</md-icon>
      </md-input-chip>

      <md-dialog
        @open=${(e: DOMEvent<MdDialog>) => {
          dialogZIndexHack(e.target);
          dialogOpenNavigationHack(e.target);
        }}
        @close=${(e: DOMEvent<MdDialog>) => {
          dialogCloseNavigationHack(e.target);
        }}
      >
        <div slot="headline">Filter logs by</div>
        <form slot="content" method="dialog">
          <titanium-date-range-selector
            label="Sent"
            .startDate=${this.startDate}
            .endDate=${this.endDate}
            @change=${(event: DOMEvent<TitaniumDateRangeSelector>) => {
              this.startDate = event.target.startDate || '';
              this.endDate = event.target.endDate || '';
            }}
          ></titanium-date-range-selector>

          <md-outlined-select
            label="Templates"
            .value=${this.templateId ?? ''}
            @change=${(e: DOMEvent<MdOutlinedSelect>) => (this.templateId = e.target.value)}
          >
            <md-icon slot="leading-icon">content_copy</md-icon>
            <md-select-option></md-select-option>
            ${this.template.map(
              (o) =>
                html`<md-select-option ?selected=${o.Id === Number(this.templateId)} value=${o.Id ?? ''}>
                  <div slot="headline">${o.Name}</div>
                  <md-icon slot="start">content_copy</md-icon>
                </md-select-option>`
            )}
          </md-outlined-select>
        </form>
        <div slot="actions">
          <md-text-button @click=${() => this.dialog.close('cancel')}> Close </md-text-button>
          <md-text-button
            @click=${() => {
              this.filterController.setValue('template', this.templateId || null);

              //set date range
              this.filterController.setValue('dateRange', this.dateRangeSelect.range === 'allTime' ? null : this.dateRangeSelect.range);
              this.filterController.setValue('startDate', this.dateRangeSelect.range === 'custom' ? this.startDate || null : null);
              this.filterController.setValue('endDate', this.dateRangeSelect.range === 'custom' ? this.endDate || null : null);

              this.dialog.close('apply');
            }}
            >Apply</md-text-button
          >
        </div>
      </md-dialog>
    `;
  }
}

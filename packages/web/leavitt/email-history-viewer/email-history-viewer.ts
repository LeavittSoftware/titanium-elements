import '../../titanium/data-table/data-table';
import '../../titanium/data-table/data-table-item';
import '../../titanium/data-table/data-table-header';
import '../../titanium/header/header';
import '../../titanium/search-input/search-input';

import './email-history-view-list-filter-dialog';
import './view-sent-email-dialog';

import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';

import '@material/web/iconbutton/filled-tonal-icon-button';
import '@material/web/menu/menu';
import '@material/web/menu/menu-item';

import dayjs from 'dayjs/esm';
import { customElement, property, query, state } from 'lit/decorators.js';
import { EmailTemplateLog } from '@leavittsoftware/lg-core-typescript';
import { TitaniumDataTable } from '../../titanium/data-table/data-table';
import { FilterController } from '../../titanium/data-table/filter-controller';
import { DateRangeKey } from '../../titanium/date-range-selector/types/date-range-key';
import { DateRanges } from '../../titanium/date-range-selector/types/date-ranges';
import { Debouncer } from '../../titanium/helpers/debouncer';
import { getSearchTokens } from '../../titanium/helpers/get-search-token';
import { LoadWhile } from '../../titanium/helpers/load-while';
import { TitaniumSearchInput } from '../../titanium/search-input/search-input';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { a } from '../../titanium/styles/a';
import { ellipsis } from '../../titanium/styles/ellipsis';
import { DOMEvent } from '../../titanium/types/dom-event';
import { MdIconButton } from '@material/web/iconbutton/icon-button';
import { MdMenu, CloseMenuEvent, MenuItem } from '@material/web/menu/menu';
import { LitElement, PropertyValues, css, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { FilterKeys, LeavittEmailHistoryViewListFilterDialog } from './email-history-view-list-filter-dialog';
import { LeavittViewSentEmailDialog } from './view-sent-email-dialog';
import ApiService from '../api-service/api-service';

/**
 * @element leavitt-email-history-viewer

 * @description A component that displays a list of email history for embedding in Leavitt's specific applications.
 * @property isActive - Whether the component is active / in view
 * @property apiService - The API service to use. This is required to fetch the email history.
 * @property path - the route that this component will be available at
 */

@customElement('leavitt-email-history-viewer')
export default class LeavittEmailHistoryViewer extends LoadWhile(LitElement) {
  @property({ type: Boolean }) accessor isActive: boolean;
  @property({ type: Object }) accessor apiService: ApiService | null;
  @property({ type: String }) accessor path: string;

  // Data table props
  @state() private accessor logs: Array<Partial<EmailTemplateLog>> = [];
  @state() private accessor selected: Array<Partial<EmailTemplateLog>> = [];
  @state() private accessor searchTerm: string = '';
  @state() private accessor resultTotal: number = 0;
  @state() private accessor sortDirection: '' | 'asc' | 'desc' = 'desc';
  @state() private accessor sortBy: string = 'SentDate';
  @state() private accessor filterController: FilterController<FilterKeys>;

  @query('titanium-data-table') private accessor dataTable!: TitaniumDataTable;
  @query('leavitt-view-sent-email-dialog') private accessor viewDialog!: LeavittViewSentEmailDialog;
  @query('leavitt-email-history-view-list-filter-dialog') private accessor filterModal: LeavittEmailHistoryViewListFilterDialog;

  #isDirty: boolean = true;

  constructor() {
    super();
    this.filterController = new FilterController('');
    this.filterController.setFilter('dateRange', () => '');
    this.filterController.setFilter('startDate', () => '');
    this.filterController.setFilter('endDate', () => '');
    this.filterController.setFilter('template', (val) => `EmailTemplateId eq ${val}`);

    this.filterController.subscribeToFilterChange(async () => {
      if (this.isActive) {
        this.dataTable.resetPage();
        this.#reload();
      } else {
        this.#isDirty = true;
      }
    });
    this.filterController.loadFromQueryString();
  }

  updated(changedProps: PropertyValues<this>) {
    if (this.isActive && changedProps.has('isActive') && this.#isDirty) {
      this.#reload();
    }

    if (changedProps.has('path')) {
      this.filterController.path = this.path;
    }
  }

  #reload() {
    this.#getLogsAsync(this.searchTerm);
  }

  #onSortDirectionChange(e: CustomEvent<'' | 'asc' | 'desc'>) {
    this.sortDirection = e.detail;
    this.dataTable.resetPage();
    this.#reload();
  }

  #onSortByChange(e: CustomEvent<string>) {
    this.sortBy = e.detail;
    this.dataTable.resetPage();
    this.#reload();
  }

  #doSearchDebouncer = new Debouncer((searchTerm: string) => this.#getLogsAsync(searchTerm));

  renderRecipients(recipients: string | null, maxRecipients: number = 1) {
    const recipientsList =
      recipients
        ?.split(',')
        .filter((o) => !!o)
        .map((o) => o.trim())
        .reverse() ?? [];

    if (recipientsList?.length > maxRecipients) {
      return html`${repeat(
          recipientsList.slice(0, maxRecipients),
          (o) => o,
          (o) => html`${o} <br />`
        )} <span more> ${recipientsList.length - maxRecipients} more... </span>`;
    }
    return repeat(
      recipientsList,
      (o) => o,
      (o) => html`${o} <br />`
    );
  }

  async #getLogsAsync(searchTerm: string) {
    if (!this.apiService) {
      console.warn('No api service provided');
      return;
    }

    let filterParts: string[] = [];
    const searchTokens = getSearchTokens(searchTerm);
    const searchFilter = searchTokens.map((token: string) => `(contains(Subject, '${token}') or contains(Recipients, '${token}'))`).join(' and ');
    if (searchTokens.length > 0) {
      filterParts.push(`${searchFilter}`);
    }

    //Date filters
    const dateRange = this.filterController.getValue('dateRange') as DateRangeKey;
    const startDate = dateRange === 'custom' ? this.filterController.getValue('startDate') : DateRanges.get(dateRange)?.startDate();
    const endDate = dateRange === 'custom' ? this.filterController.getValue('endDate') : DateRanges.get(dateRange)?.endDate();
    if (startDate) {
      filterParts.push(`SentDate ge ${dayjs(startDate).format('YYYY-MM-DD')}`);
    }
    if (endDate) {
      filterParts.push(`SentDate le ${dayjs(endDate).format('YYYY-MM-DD')}`);
    }

    filterParts = [...filterParts, ...this.filterController.getActiveFilterOdata()];

    const odataParts = [
      'select=Id,Recipients,SentDate,Subject',
      'expand=EmailTemplate(select=Id,Name,IsExpired)',
      `top=${await this.dataTable.getTake()}`,
      `orderby=${this.sortBy} ${this.sortDirection}`,
      `skip=${(await this.dataTable.getTake()) * (await this.dataTable.getPage())}`,
      'count=true',
    ];
    if (filterParts.length > 0) {
      odataParts.push(`filter=${filterParts.join(' and ')}`);
    }
    try {
      const get = this.apiService.getAsync<Partial<EmailTemplateLog>>(`EmailTemplateLogs/?${odataParts.join('&')}`);
      this.dataTable.loadWhile(get);
      this.loadWhile(get);
      const result = await get;
      this.resultTotal = result.odataCount;
      this.logs = result.toList();
      this.#isDirty = false;
    } catch (error) {
      this.dispatchEvent(new ShowSnackbarEvent(error));
    }
  }

  static styles = [
    ellipsis,
    a,
    css`
      :host {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 24px;
      }

      [inactive],
      span[time],
      span[more] {
        font-size: 12px;
        line-height: 14px;
        opacity: 0.8;
      }

      md-filled-tonal-icon-button {
        --md-filled-tonal-icon-button-container-height: 32px;
        --md-filled-tonal-icon-button-icon-size: 21px;
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <titanium-header header="Email history" subHeader="A comprehensive record of email correspondence originating from this tool." no-nav></titanium-header>
      <titanium-data-table
        header="Emails"
        disable-select
        @selected-changed=${(e: CustomEvent<Array<Partial<EmailTemplateLog>>>) => {
          this.selected = [...e.detail];
        }}
        @paging-changed=${() => this.#reload()}
        .count=${this.resultTotal}
        .items=${this.logs}
        .searchTerm=${this.searchTerm}
      >
        <titanium-search-input
          slot="search-button"
          title="Search by recipients or subject"
          placeholder="Recipients or subject"
          .value=${this.searchTerm}
          @input=${(e: DOMEvent<TitaniumSearchInput>) => {
            this.searchTerm = e.target.value;
            this.dataTable.resetPage();
            this.#doSearchDebouncer.debounce(this.searchTerm);
          }}
        ></titanium-search-input>

        <div slot="table-actions" style="position:relative;">
          <md-icon-button
            id="menu-anchor"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded="false"
            @click=${(e: DOMEvent<MdIconButton>) => {
              const root = (e.target as HTMLElement).getRootNode() as ShadowRoot;
              const menu = root.querySelector('#menu') as MdMenu;
              menu.open = !menu.open;
            }}
          >
            <md-icon>more_vert</md-icon>
          </md-icon-button>

          <md-menu
            id="menu"
            anchor="menu-anchor"
            @close-menu=${(e: CloseMenuEvent) => {
              (e.detail.itemPath?.[0] as MenuItem & { action?: () => void })?.action?.();
            }}
          >
            <md-menu-item .action=${() => this.#reload()}>
              <md-icon slot="start">refresh</md-icon>
              Refresh
            </md-menu-item>
          </md-menu>
        </div>

        <leavitt-email-history-view-list-filter-dialog
          .isActive=${this.isActive}
          slot="filters"
          .filterController=${this.filterController}
          .apiService=${this.apiService}
        ></leavitt-email-history-view-list-filter-dialog>

        <md-icon-button slot="filter-button" @click=${async () => this.filterModal.open()}>
          <md-icon>filter_list</md-icon>
        </md-icon-button>

        <titanium-data-table-header
          width="150px"
          slot="table-headers"
          title="Sent"
          column-name="SentDate"
          @sort-by-changed=${this.#onSortByChange}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#onSortDirectionChange}
        ></titanium-data-table-header>

        <titanium-data-table-header
          large
          slot="table-headers"
          column-name="Subject"
          title="Subject"
          @sort-by-changed=${this.#onSortByChange}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#onSortDirectionChange}
        ></titanium-data-table-header>

        <titanium-data-table-header
          desktop
          slot="table-headers"
          column-name="Recipients"
          title="Recipients"
          @sort-by-changed=${this.#onSortByChange}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#onSortDirectionChange}
        ></titanium-data-table-header>

        <titanium-data-table-header
          desktop
          slot="table-headers"
          column-name="EmailTemplate/Name"
          title="Template name"
          @sort-by-changed=${this.#onSortByChange}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#onSortDirectionChange}
        ></titanium-data-table-header>
        <titanium-data-table-header width="50px" no-sort slot="table-headers"></titanium-data-table-header>
        ${repeat(
          this.logs ?? [],
          (item) => item.Id,
          (item) => html`
            <titanium-data-table-item disable-select .item=${item} slot="items">
              <row-item width="150px" ellipsis date
                >${item.SentDate
                  ? html`${dayjs(item.SentDate).format('MMM DD, YY')}<br /><span time>${dayjs(item.SentDate).format('h:mm A')}</span>`
                  : '-'}</row-item
              >
              <row-item large>${item.Subject ?? '-'} </row-item>
              <row-item desktop title=${item.Recipients ?? ''}>${this.renderRecipients(item.Recipients ?? null)}</row-item>
              <row-item desktop>
                <div>${item.EmailTemplate?.Name}</div>
                ${item.EmailTemplate?.IsExpired ? html`<div inactive>Inactive</div>` : ''}</row-item
              >
              <row-item width="50px"
                ><md-filled-tonal-icon-button @click=${() => this.viewDialog.open(item.Id ?? 0)}><md-icon>pageview</md-icon></md-filled-tonal-icon-button>
              </row-item>
            </titanium-data-table-item>
          `
        )}
      </titanium-data-table>
      <leavitt-view-sent-email-dialog .apiService=${this.apiService}></leavitt-view-sent-email-dialog>
    `;
  }
}

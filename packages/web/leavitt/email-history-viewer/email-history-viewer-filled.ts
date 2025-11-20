import '../../titanium/data-table/data-table-core';
import '../../titanium/data-table/data-table-action-bar';
import '../../leavitt/app/app-main-content-container';
import '../../leavitt/app/app-navigation-header';
import '../../leavitt/app/app-navigation-footer';

import '../../titanium/data-table/page-control';
import './email-history-viewer-filled-filter-dialog';
import './view-email-template-info-dialog';

import '@material/web/button/filled-tonal-button';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';

import { LitElement, PropertyValues, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { a, ellipsis } from '../../titanium/styles/styles';
import { getSearchTokens } from '../../titanium/helpers/get-search-token';
import { DOMEvent } from '../../titanium/types/dom-event';
import { LoadWhile } from '../../titanium/helpers/load-while';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { TitaniumPageControl } from '../../titanium/data-table/page-control';
import { PendingStateEvent } from '../../titanium/types/pending-state-event';
import { niceBadgeStyles } from '../../titanium/styles/nice-badge';
import { TitaniumDataTableCore, TitaniumDataTableCoreMetaData } from '../../titanium/data-table/data-table-core';
import { LeavittAppContentContainer } from '../../leavitt/app/app-main-content-container';
import { EmailTemplateLog } from '@leavittsoftware/lg-core-typescript';
import { FilterController } from '../../titanium/data-table/filter-controller';
import { FilterKeys } from './email-history-viewer-filled-filter-dialog';
import { DateRangeKey } from '../../titanium/date-range-selector/types/date-range-key';
import { DateRanges } from '../../titanium/date-range-selector/types/date-ranges';
import dayjs from 'dayjs/esm';
import ApiService from '../api-service/api-service';
import { repeat } from 'lit/directives/repeat.js';
import { LeavittEmailHistoryViewerFilledFilterDialog } from './email-history-viewer-filled-filter-dialog';
import { LeavittViewSentEmailDialog } from './view-sent-email-dialog';
import { Debouncer } from '@leavittsoftware/web/titanium/helpers/debouncer';
import { LeavittViewEmailTemplateInfoDialog } from './view-email-template-info-dialog';

type ItemType = Partial<EmailTemplateLog>;

@customElement('leavitt-email-history-viewer-filled')
export default class LeavittEmailHistoryViewerFilled extends LoadWhile(LitElement) {
  @property({ type: Boolean }) public accessor isActive: boolean;
  @property({ type: Object }) public accessor apiService: ApiService | null;
  @property({ type: String }) public accessor path: string;
  @property({ type: String }) public accessor toolbarSearchTerm: string = '';

  @state() public accessor searchTerm: string = '';

  // Data table props
  @state() private accessor items: Array<ItemType> = [];
  @state() private accessor selected: Array<ItemType> = [];
  @state() private accessor tableMetaData: TitaniumDataTableCoreMetaData<ItemType> = {
    uniqueKey: (item) => item.Id?.toString() ?? '',
    itemMetaData: [
      {
        key: 'SentDate',
        friendlyName: 'Sent',
        render: (item) =>
          html`<div>
            ${item.SentDate ? html`${dayjs(item.SentDate).format('MMM DD, YY')}<br /><span time>${dayjs(item.SentDate).format('h:mm A')}</span>` : '-'}
          </div>`,
        width: '150px',
        defaultSort: {
          direction: 'desc',
          position: 1,
        },
      },
      {
        key: 'Subject',
        friendlyName: 'Subject',
        render: (item) => html`${item.Subject ?? '-'}`,
        width: '200px',
      },
      {
        key: 'Recipients',
        friendlyName: 'Recipients',
        render: (item) => html`${this.renderRecipients(item.Recipients ?? null)}`,
        csvValue: (item) => item.Recipients ?? '',
        width: '150px',
      },

      {
        key: 'EmailTemplate',
        friendlyName: 'Email template',
        sortExpression: 'EmailTemplate/Name',
        render: (item) =>
          html`<div>${item.EmailTemplate?.Name}</div>
            ${item.EmailTemplate?.IsExpired ? html`<div inactive>Inactive</div>` : ''}`,
        csvValue: (item) => item.EmailTemplate?.Name ?? '',
        width: '200px',
      },
      {
        key: 'Bool1',
        friendlyName: '',
        disableSort: true,
        render: (item) =>
          html`<md-filled-tonal-icon-button @click=${() => this.viewDialog?.open(item.Id ?? 0)}><md-icon>pageview</md-icon></md-filled-tonal-icon-button>`,
        csvValue: () => '',
        width: '60px',
      },
    ],
  };

  @state() private accessor resultTotal: number = 0;
  @state() private accessor filterController: FilterController<FilterKeys>;

  @query('titanium-data-table-core') private accessor dataTable!: TitaniumDataTableCore<ItemType>;
  @query('leavitt-email-history-viewer-filled-filter-dialog') private accessor filterDialog!: LeavittEmailHistoryViewerFilledFilterDialog;
  @query('titanium-page-control') private accessor pageControl: TitaniumPageControl | null;
  @query('leavitt-app-main-content-container') private accessor mainContentContainer: LeavittAppContentContainer | null;
  @query('leavitt-view-sent-email-dialog') private accessor viewDialog: LeavittViewSentEmailDialog | null;
  @query('leavitt-view-email-template-info-dialog') private accessor viewEmailTemplateInfoDialog: LeavittViewEmailTemplateInfoDialog | null;

  constructor() {
    super();

    this.filterController = new FilterController('');
    this.filterController.setFilter('dateRange', () => '');
    this.filterController.setFilter('startDate', () => '');
    this.filterController.setFilter('endDate', () => '');
    this.filterController.setFilter('template', (val) => `EmailTemplateId eq ${val}`);

    this.filterController.subscribeToFilterChange(async () => {
      if (this.isActive) {
        if (this.pageControl) {
          this.pageControl.page = 0;
        }
        this.#reload();
      }
    });
    this.filterController.loadFromQueryString();
  }

  async updated(changedProps: PropertyValues<this>) {
    if (this.isActive && changedProps.has('isActive')) {
      await this.mainContentContainer?.updateComplete;
      this.#reload();
    }

    if (this.isActive && changedProps.has('toolbarSearchTerm') && this.searchTerm !== this.toolbarSearchTerm) {
      this.searchTerm = this.toolbarSearchTerm;
      if (this.pageControl) {
        this.pageControl.page = 0;
      }
      this.#doSearchDebouncer.debounce();
    }

    if (changedProps.has('path')) {
      this.filterController.path = this.path;
    }
  }

  async #reload() {
    const { items, odataCount } = await this.#getItemsAsync(this.searchTerm);
    this.items = items;
    this.resultTotal = odataCount;
  }

  #doSearchDebouncer = new Debouncer(() => this.#reload());

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

  async #getItemsAsync(searchTerm: string | null) {
    let filterParts: string[] = [];
    const searchTokens = getSearchTokens(searchTerm || '');
    const searchFilter = searchTokens.map((token: string) => `contains(Name, '${token}')`).join(' and ');
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
      `top=${this.pageControl?.take}`,
      `skip=${(this.pageControl?.take ?? 0) * (this.pageControl?.page ?? 0)}`,
      'count=true',
    ];

    const orderby = this.dataTable.sort
      .map((s) => `${this.tableMetaData.itemMetaData.find((m) => m.key === s.key)?.sortExpression ?? s.key} ${s.direction}`)
      .join(', ');
    if (orderby) {
      odataParts.push(`orderby=${orderby}`);
    }

    if (filterParts.length > 0) {
      odataParts.push(`filter=${filterParts.join(' and ')}`);
    }
    try {
      if (!this.apiService) {
        throw new Error('No api service provided');
      }

      const get = this.apiService?.getAsync<ItemType>(`EmailTemplateLogs/?${odataParts.join('&')}`);
      this.loadWhile(get);
      this.dataTable.loadWhile(get);
      this.dispatchEvent(new PendingStateEvent(get));
      const result = await get;
      return { items: result.toList(), odataCount: result.odataCount };
    } catch (error) {
      this.dispatchEvent(new ShowSnackbarEvent(error, { autoHide: 7500 }));
    }
    return { items: [], odataCount: 0 };
  }

  static styles = [
    niceBadgeStyles,
    ellipsis,
    a,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        grid:
          'header'
          'table' 1fr
          'footer';

        overflow: hidden;
      }

      md-text-button {
        text-wrap: auto;
      }

      titanium-data-table-core {
        grid-area: table;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Email history">
            <md-icon-button slot="trailing" @click=${async () => this.filterDialog.open()}>
              <md-icon>filter_list</md-icon>
            </md-icon-button>

            <md-icon-button slot="trailing" @click=${async () => this.#reload()}>
              <md-icon>refresh</md-icon>
            </md-icon-button>

            <titanium-data-table-action-bar slot="footer" .selected=${this.selected}>
              <leavitt-email-history-viewer-filled-filter-dialog
                .apiService=${this.apiService}
                .isActive=${this.isActive}
                slot="filters"
                .filterController=${this.filterController}
              ></leavitt-email-history-viewer-filled-filter-dialog>
            </titanium-data-table-action-bar>
          </leavitt-app-navigation-header>

          <titanium-data-table-core
            selection-mode="none"
            sticky-header
            .items=${this.items}
            .tableMetaData=${this.tableMetaData}
            .selected=${this.selected}
            @selected-changed=${(e: DOMEvent<TitaniumDataTableCore<ItemType>>) => (this.selected = [...e.target.selected])}
            @sort-changed=${() => {
              if (this.pageControl) {
                this.pageControl.page = 0;
              }
              this.#reload();
            }}
            local-storage-key="email-history-list-preferences"
            .supplementalItemStyles=${css`
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
            `}
          >
          </titanium-data-table-core>
          <leavitt-app-navigation-footer max-width="initial" .scrollableParent=${this.dataTable}>
            <titanium-page-control
              filled
              slot="leading"
              ?disabled=${this.isLoading}
              .count=${this.resultTotal}
              .pageSizes=${[25, 50, 100, 200]}
              local-storage-key="email-history-list-user-take"
              @action=${() => this.#reload()}
            ></titanium-page-control>

            <md-text-button slot="trailing" @click=${() => this.viewEmailTemplateInfoDialog?.open()}>
              <md-icon slot="icon">chat_info</md-icon>
              <span>What emails can I expect?</span>
            </md-text-button>
          </leavitt-app-navigation-footer>
        </main>
      </leavitt-app-main-content-container>
      <leavitt-view-sent-email-filled-dialog .apiService=${this.apiService}></leavitt-view-sent-email-filled-dialog>
      <leavitt-view-sent-email-dialog .apiService=${this.apiService}></leavitt-view-sent-email-dialog>
      <leavitt-view-email-template-info-dialog .apiService=${this.apiService}></leavitt-view-email-template-info-dialog>
    `;
  }
}

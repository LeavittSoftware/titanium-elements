import '@leavittsoftware/web/leavitt/service-worker-notifier/service-worker-notifier';
import '@leavittsoftware/web/leavitt/app/app-logo';
import '@leavittsoftware/web/titanium/search-input/filled-search-input';
import '@leavittsoftware/web/titanium/toolbar/toolbar';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import '@leavittsoftware/web/titanium/drawer/drawer';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture-menu';
import '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';
import '@leavittsoftware/web/leavitt/error-page/error-page';

import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/list/list';
import '@material/web/list/list-item';
import '@material/web/progress/circular-progress';

import './shared/npm-stats';

import { ChangePathEvent, RedirectPathEvent, SiteErrorEvent } from './events';
import { LitElement, css, html, nothing } from 'lit';
import { PendingStateEvent } from '@leavittsoftware/web/titanium/types/pending-state-event';
import { customElement, property, query, state } from 'lit/decorators.js';
import { myAppStyles } from './styles/my-app-styles';
import { TitaniumDrawer } from '@leavittsoftware/web/titanium/drawer/drawer';
import { h4, p } from '@leavittsoftware/web/titanium/styles/styles';
import { ReportAProblemDialog } from '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import { ProvideFeedbackDialog } from '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';

import page from 'page';
import themePreferenceEvent from '@leavittsoftware/web/leavitt/theme/theme-preference-event';
import UserManager from './services/user-manager-service';
import { PendingStateCatcher } from '@leavittsoftware/web/titanium/helpers/pending-state-catcher';
import { mainMenuPositionContext } from '@leavittsoftware/web/leavitt/app/contexts/main-menu-position-context';
import { provide } from '@lit/context';
import { siteSearchTextFieldContext } from './contexts/site-search-text-field-context';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';
import { PageElement } from '@leavittsoftware/web/titanium/site-search-text-field-controller/site-search-text-field-controller';

@customElement('my-app')
export class MyApp extends PendingStateCatcher(LitElement) {
  @state() private accessor page: string | undefined;
  @state() private accessor fatalErrorMessage: string | null = null;
  @state() private accessor fatalErrorHeading: string | null = null;
  @state() private accessor showSearch: boolean = false;

  @provide({ context: mainMenuPositionContext })
  @property({ type: String, reflect: true, attribute: 'main-menu-position' })
  private mainMenuPosition: 'slim' | 'full' | 'drawer' = 'full';

  @query('titanium-drawer') private accessor drawer!: TitaniumDrawer;

  #resizeObserver: ResizeObserver | null = null;

  async connectedCallback() {
    super.connectedCallback();
    try {
      UserManager.initialize();
    } catch (error) {
      console.error(error);
      this.fatalErrorMessage = error instanceof Error ? error.message : String(error);
      this.#changePage('error');
      return;
    }
  }

  get themePreference() {
    return (localStorage.getItem('theme-preference') as 'light' | 'dark') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  @state()
  set themePreference(val: 'light' | 'dark') {
    localStorage.setItem('theme-preference', val);
    this.#applyTheme();
  }
  get prefersCollapsedMenu() {
    return JSON.parse(localStorage.getItem('prefers-collapsed-menu') || 'false');
  }

  @state()
  set prefersCollapsedMenu(val: boolean) {
    localStorage.setItem('prefers-collapsed-menu', val.toString());
  }

  #applyTheme() {
    document.firstElementChild?.setAttribute('data-theme', this.themePreference);
    themePreferenceEvent.dispatch('theme-preference', 'change', this.themePreference);
  }

  @provide({ context: siteSearchTextFieldContext })
  @state()
  protected searchTextField: MdFilledTextField | null = null;

  public async firstUpdated() {
    this.#applyTheme();

    this.searchTextField = this.shadowRoot?.querySelector<MdFilledTextField>('titanium-filled-search-input') ?? null;

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
      this.themePreference = isDark ? 'dark' : 'light';
      this.#applyTheme();
    });

    this.#resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        if (width < 600) {
          this.drawer.mode = 'flyover';
          this.mainMenuPosition = 'drawer';
        } else if (width >= 600 && width < 920) {
          this.drawer.mode = 'inline';
          this.drawer.open();
          this.mainMenuPosition = 'slim';
        } else {
          this.drawer.mode = 'inline';
          this.drawer.open();
          this.mainMenuPosition = this.prefersCollapsedMenu ? 'slim' : 'full';
        }
      }
    });

    this.#resizeObserver.observe(this);

    this.addEventListener(ChangePathEvent.eventName, ((event: ChangePathEvent) => {
      page.show(event.detail.path);
    }) as EventListener);

    this.addEventListener(RedirectPathEvent.eventName, ((event: RedirectPathEvent) => {
      page.redirect(event.detail.path);
    }) as EventListener);

    this.addEventListener(SiteErrorEvent.eventName, ((event: SiteErrorEvent) => {
      this.fatalErrorMessage = event.detail;
      this.#changePage('error');
    }) as EventListener);

    page('*', (_ctx, next) => {
      if (this.drawer?.mode === 'flyover') {
        this.drawer.close();
      }
      next();
    });

    page('/', async () => {
      page.show('/getting-started');
    });
    page('/getting-started', () => this.#changePage('getting-started', () => import('./getting-started.js')));
    page('/available-cdn-icons', () => this.#changePage('available-cdn-icons', () => import('./demos/available-cdn-icons-demo.js')));

    page('/leavitt-company-select', () => this.#changePage('leavitt-company-select', () => import('./demos/leavitt-company-select-demo.js')));
    page('/leavitt-file-explorer', () => this.#changePage('leavitt-file-explorer', () => import('./demos/leavitt-file-explorer-demo.js')));

    page('/titanium-date-range-selector', () => this.#changePage('titanium-date-range-selector', () => import('./demos/titanium-date-range-selector-demo.js')));

    page('/leavitt-person-select', () => this.#changePage('leavitt-person-select', () => import('./demos/leavitt-person-select-demo.js')));
    page('/leavitt-person-company-select', () =>
      this.#changePage('leavitt-person-company-select', () => import('./demos/leavitt-person-company-select-demo.js'))
    );
    page('/leavitt-person-group-select', () => this.#changePage('leavitt-person-group-select', () => import('./demos/leavitt-person-group-select-demo.js')));

    page('/leavitt-email-history-viewer', () => this.#changePage('leavitt-email-history-viewer', () => import('./demos/leavitt-email-history-viewer-demo.js')));

    page('/leavitt-error-page', () => this.#changePage('leavitt-error-page', () => import('./demos/leavitt-error-page-demo.js')));
    page('/profile-picture', () => this.#changePage('profile-picture', () => import('./demos/profile-picture-demo.js')));
    page('/profile-picture-menu', () => this.#changePage('profile-picture-menu', () => import('./demos/profile-picture-menu-demo.js')));

    page('/titanium-data-table-core', () => this.#changePage('titanium-data-table-core', () => import('./demos/titanium-data-table-core-demo.js')));
    page('/titanium-drawer', () => this.#changePage('titanium-drawer', () => import('./demos/titanium-drawer-demo.js')));
    page('/titanium-address-input', () => this.#changePage('titanium-address-input', () => import('./demos/titanium-address-input-demo.js')));
    page('/titanium-icon-picker', () => this.#changePage('titanium-icon-picker', () => import('./demos/titanium-icon-picker-demo.js')));

    page('/titanium-chip-multi-select', () => this.#changePage('titanium-chip-multi-select', () => import('./demos/titanium-chip-multi-select-demo.js')));
    page('/titanium-input-validator', () => this.#changePage('titanium-input-validator', () => import('./demos/titanium-input-validator-demo.js')));
    page('/titanium-promise-tracking', () => this.#changePage('titanium-promise-tracking', () => import('./demos/titanium-promise-tracking-demo.js')));

    page('/titanium-page-control', () => this.#changePage('titanium-page-control', () => import('./demos/titanium-page-control-demo.js')));

    page('/titanium-smart-attachment-input', () =>
      this.#changePage('titanium-smart-attachment-input', () => import('./demos/titanium-smart-attachment-input-demo.js'))
    );
    page('/titanium-date-input', () => this.#changePage('titanium-date-input', () => import('./demos/titanium-date-input-demo.js')));

    page('/titanium-search-input', () => this.#changePage('titanium-search-input', () => import('./demos/titanium-search-input-demo.js')));

    page('/titanium-toolbar', () => this.#changePage('titanium-toolbar', () => import('./demos/titanium-toolbar-demo.js')));

    page('/titanium-styles', () => this.#changePage('titanium-styles', () => import('./demos/titanium-styles-demo.js')));
    page('/titanium-snackbar', () => this.#changePage('titanium-snackbar', () => import('./demos/titanium-snackbar-demo.js')));
    page('/titanium-chip', () => this.#changePage('titanium-chip', () => import('./demos/titanium-chip-demo.js')));
    page('/titanium-youtube-input', () => this.#changePage('titanium-youtube-input', () => import('./demos/titanium-youtube-input-demo.js')));
    page('/titanium-show-hide', () => this.#changePage('titanium-show-hide', () => import('./demos/titanium-show-hide-demo.js')));
    page('/titanium-duration-input', () => this.#changePage('titanium-duration-input', () => import('./demos/titanium-duration-input-demo.js')));
    page('/titanium-profile-picture-stack', () =>
      this.#changePage('titanium-profile-picture-stack', () => import('./demos/titanium-profile-picture-stack-demo.js'))
    );

    page('/titanium-confirmation-dialog', () => this.#changePage('titanium-confirmation-dialog', () => import('./demos/titanium-confirmation-dialog-demo.js')));

    page('*', () => {
      this.#showErrorPage();
    });

    page.start();
  }

  async disconnectedCallback() {
    await super.disconnectedCallback();
    this.#resizeObserver?.disconnect();
  }

  #getActivePageElement(mainPage: string): PageElement | null {
    return this.shadowRoot?.querySelector<PageElement>(`${mainPage}-demo`) ?? this.shadowRoot?.querySelector<PageElement>(mainPage) ?? null;
  }

  async #changePage(mainPage: string, importFunction?: () => Promise<unknown>) {
    this.page = mainPage;
    try {
      const importElements = importFunction?.();
      if (importElements) {
        this.dispatchEvent(new PendingStateEvent(importElements));
      }
      await importElements;
      await this.updateComplete;

      this.showSearch = !!this.#getActivePageElement(mainPage)?.searchController;
    } catch (error) {
      console.warn(error);
      this.#showErrorPage(error instanceof Error ? error.message : String(error));
    }
  }

  #showErrorPage(message?: string, heading?: string) {
    this.fatalErrorHeading = heading || null;
    this.fatalErrorMessage = message || null;
    this.#changePage('error');
  }

  static styles = [
    myAppStyles,
    p,
    h4,
    css`
      titanium-drawer {
        --titanium-drawer-width: 310px;

        npm-stats {
          margin: 0 12px 12px 24px;
          gap: 12px;
        }

        md-icon {
          height: 16px;
          width: 16px;
          font-size: 16px;
        }
      }

      titanium-drawer[main-menu] {
        md-list-item {
          --md-list-item-one-line-container-height: 36px;
          --md-list-item-top-space: 2px;
          --md-list-item-bottom-space: 2px;
        }

        & h4[menu-category] {
          padding: 12px 16px 5px 24px;
        }
      }

      titanium-drawer details {
        user-select: none;
      }

      :host([main-menu-position='slim']) titanium-drawer[main-menu] {
        md-list-item {
          width: 36px;
        }

        npm-stats {
          margin-left: 0;
          margin-right: 0;
          place-self: center;

          stats-container {
            display: none;
          }
        }
      }

      summary:hover {
        background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08);
      }
    `,
  ];

  render() {
    return html`<titanium-toolbar>
        <md-circular-progress ?hidden=${!this.stateIsPending} root-loading ?indeterminate=${this.stateIsPending}></md-circular-progress>
        <md-icon-button
          hamburger
          title="Main menu"
          ?hidden=${this.stateIsPending}
          @click=${() => {
            const currentPosition = this.mainMenuPosition;
            if (this.mainMenuPosition === 'drawer') {
              this.drawer?.open();
            } else {
              this.mainMenuPosition = currentPosition === 'slim' ? 'full' : 'slim';
              this.prefersCollapsedMenu = this.mainMenuPosition === 'slim';
            }
          }}
        >
          <md-icon>menu</md-icon>
        </md-icon-button>

        <leavitt-app-logo app-name="Titanium Elements"></leavitt-app-logo>

        <titanium-filled-search-input ?hidden=${!this.showSearch}></titanium-filled-search-input>

        <page-actions>
          <md-icon-button
            title="Switch to ${this.themePreference === 'light' ? 'dark' : 'light'} theme "
            themePref
            @click=${() => (this.themePreference = this.themePreference === 'light' ? 'dark' : 'light')}
          >
            <md-icon>${this.themePreference === 'light' ? 'dark_mode' : 'light_mode'}</md-icon>
          </md-icon-button>
          <profile-picture-menu size="36" .userManager=${UserManager}></profile-picture-menu>
        </page-actions>
      </titanium-toolbar>

      <titanium-drawer main-menu ?always-show-content=${this.mainMenuPosition !== 'drawer'}>
        <header slot="header">
          <leavitt-app-logo app-name="Titanium Elements"></leavitt-app-logo>
          <page-actions>
            <md-icon-button
              title="Switch to ${this.themePreference === 'light' ? 'dark' : 'light'} theme "
              themePref
              @click=${() => (this.themePreference = this.themePreference === 'light' ? 'dark' : 'light')}
            >
              <md-icon>${this.themePreference === 'light' ? 'dark_mode' : 'light_mode'}</md-icon>
            </md-icon-button>
            <profile-picture-menu size="36" .userManager=${UserManager}></profile-picture-menu>
          </page-actions>
        </header>
        <npm-stats ?hide-downloads=${this.mainMenuPosition === 'slim'}></npm-stats>

        <md-list-item ?selected=${!!this.page?.includes('getting-started')} href="/getting-started" type="link">
          <md-icon slot="start">home</md-icon> <span>Getting started</span>
        </md-list-item>

        <md-list-item ?selected=${!!this.page?.includes('available-cdn-icons')} href="/available-cdn-icons" type="link">
          <md-icon slot="start">interests</md-icon> <span>Icons</span>
        </md-list-item>

        <section>
          <h4 menu-category>Titanium</h4>

          <md-list-item ?selected=${this.page === 'titanium-address-input'} href="/titanium-address-input" type="link">
            <md-icon slot="start">location_on</md-icon> <span>Address input</span>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'titanium-chip'} href="/titanium-chip" type="link">
            <md-icon slot="start">label</md-icon> <span>Chip</span>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'titanium-chip-multi-select'} href="/titanium-chip-multi-select" type="link">
            <md-icon slot="start">checklist</md-icon> <span>Chip multi select</span>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'titanium-confirmation-dialog'} href="/titanium-confirmation-dialog" type="link">
            <md-icon slot="start">check_circle</md-icon> <span>Confirmation dialog</span>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'titanium-data-table-core'} href="/titanium-data-table-core" type="link">
            <md-icon slot="start">table_rows</md-icon> <span>Data table core</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-date-input')} href="/titanium-date-input" type="link">
            <md-icon slot="start">calendar_today</md-icon> <span>Date input </span>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'titanium-date-range-selector'} href="/titanium-date-range-selector" type="link">
            <md-icon slot="start">date_range</md-icon> <span>Date range selector</span>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'titanium-drawer'} href="/titanium-drawer" type="link">
            <md-icon slot="start">menu_open</md-icon> <span>Drawer</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-duration-input')} href="/titanium-duration-input" type="link">
            <md-icon slot="start">timer</md-icon> <span>Duration input</span>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'titanium-icon-picker'} href="/titanium-icon-picker" type="link">
            <md-icon slot="start">emoji_symbols</md-icon> <span>Icon picker</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-input-validator')} href="/titanium-input-validator" type="link">
            <md-icon slot="start">fact_check</md-icon> <span>Input validator</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-page-control')} href="/titanium-page-control" type="link">
            <md-icon slot="start">tune</md-icon> <span>Page control</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-profile-picture-stack')} href="/titanium-profile-picture-stack" type="link">
            <md-icon slot="start">groups</md-icon> <span>Profile picture stack</span>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'titanium-promise-tracking'} href="/titanium-promise-tracking" type="link">
            <md-icon slot="start">hourglass_top</md-icon> <span>Promise tracking</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-search-input')} href="/titanium-search-input" type="link">
            <md-icon slot="start">search</md-icon> <span>Search input </span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-show-hide')} href="/titanium-show-hide" type="link">
            <md-icon slot="start">visibility</md-icon> <span>Show hide </span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-smart-attachment-input')} href="/titanium-smart-attachment-input" type="link">
            <md-icon slot="start">attach_file</md-icon> <span>Smart attachment input</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-snackbar')} href="/titanium-snackbar" type="link">
            <md-icon slot="start">chat_bubble</md-icon> <span>Snackbar</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-styles')} href="/titanium-styles" type="link">
            <md-icon slot="start">palette</md-icon> <span>Styles</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-toolbar')} href="/titanium-toolbar" type="link">
            <md-icon slot="start">build</md-icon> <span>Toolbar</span>
          </md-list-item>

          <md-list-item ?selected=${!!this.page?.includes('titanium-youtube-input')} href="/titanium-youtube-input" type="link">
            <md-icon slot="start">smart_display</md-icon> <span>Youtube input</span>
          </md-list-item>
        </section>

        <section>
          <h4 menu-category>Leavitt</h4>
          <md-list-item ?selected=${this.page === 'leavitt-company-select'} href="/leavitt-company-select" type="link">
            <md-icon slot="start">business</md-icon> <span>Company select</span>
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'leavitt-email-history-viewer'} href="/leavitt-email-history-viewer" type="link">
            <md-icon slot="start">mail</md-icon> <span>Email history viewer</span>
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'leavitt-error-page'} href="/leavitt-error-page" type="link">
            <md-icon slot="start">error_outline</md-icon> <span>Error page</span>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'leavitt-file-explorer'} href="/leavitt-file-explorer" type="link">
            <md-icon slot="start">folder_open</md-icon> <span>File explorer</span>
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'leavitt-person-company-select'} href="/leavitt-person-company-select" type="link">
            <md-icon slot="start">badge</md-icon> <span>Person company select</span>
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'leavitt-person-group-select'} href="/leavitt-person-group-select" type="link">
            <md-icon slot="start">diversity_3</md-icon> <span>Person group select</span>
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'leavitt-person-select'} href="/leavitt-person-select" type="link">
            <md-icon slot="start">person_search</md-icon> <span>Person select</span>
            <md-icon slot="end">passkey</md-icon>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'profile-picture'} href="/profile-picture" type="link">
            <md-icon slot="start">account_circle</md-icon> <span>Profile picture</span>
          </md-list-item>

          <md-list-item ?selected=${this.page === 'profile-picture-menu'} href="/profile-picture-menu" type="link">
            <md-icon slot="start">account_box</md-icon> <span>Profile picture menu</span>
          </md-list-item>
        </section>
        <a
          slot="footer"
          href="#report-a-bug"
          @click=${(e: MouseEvent) => {
            e.preventDefault();
            this.shadowRoot?.querySelector<ReportAProblemDialog>('report-a-problem-dialog')?.show();
          }}
          >Report a bug</a
        >
        <a
          slot="footer"
          href="#provide-feedback"
          @click=${(e: MouseEvent) => {
            e.preventDefault();
            this.shadowRoot?.querySelector<ProvideFeedbackDialog>('provide-feedback-dialog')?.show();
          }}
          >Feedback</a
        >
      </titanium-drawer>

      <main-content>
        ${this.page === 'getting-started' ? html`<getting-started></getting-started>` : nothing}
        ${this.page === 'error' ? html`<div>Oops, something went wrong.</div>` : nothing}

        <!-- Stories -->
        ${this.page === 'available-cdn-icons' ? html`<available-cdn-icons-demo large></available-cdn-icons-demo>` : nothing}
        ${this.page === 'titanium-date-range-selector' ? html`<titanium-date-range-selector-demo large></titanium-date-range-selector-demo>` : nothing}
        ${this.page === 'leavitt-person-select' ? html`<leavitt-person-select-demo large></leavitt-person-select-demo>` : nothing}
        ${this.page === 'leavitt-company-select' ? html`<leavitt-company-select-demo large></leavitt-company-select-demo>` : nothing}
        ${this.page === 'leavitt-email-history-viewer' ? html`<leavitt-email-history-viewer-demo large></leavitt-email-history-viewer-demo>` : nothing}
        ${this.page === 'leavitt-file-explorer' ? html`<leavitt-file-explorer-demo large></leavitt-file-explorer-demo>` : nothing}
        ${this.page === 'leavitt-error-page' ? html`<leavitt-error-page-demo large></leavitt-error-page-demo>` : nothing}
        ${this.page === 'leavitt-person-company-select' ? html`<leavitt-person-company-select-demo large></leavitt-person-company-select-demo>` : nothing}
        ${this.page === 'leavitt-person-group-select' ? html`<leavitt-person-group-select-demo large></leavitt-person-group-select-demo>` : nothing}
        ${this.page === 'titanium-drawer' ? html`<titanium-drawer-demo></titanium-drawer-demo>` : nothing}
        ${this.page === 'profile-picture' ? html`<profile-picture-demo></profile-picture-demo>` : nothing}
        ${this.page === 'profile-picture-menu' ? html`<profile-picture-menu-demo large></profile-picture-menu-demo>` : nothing}
        ${this.page === 'titanium-input-validator' ? html`<titanium-input-validator-demo large></titanium-input-validator-demo>` : nothing}
        ${this.page === 'titanium-data-table-core' ? html`<titanium-data-table-core-demo large></titanium-data-table-core-demo>` : nothing}
        ${this.page === 'titanium-promise-tracking' ? html`<titanium-promise-tracking-demo large></titanium-promise-tracking-demo>` : nothing}
        ${this.page === 'titanium-address-input' ? html`<titanium-address-input-demo large></titanium-address-input-demo>` : nothing}
        ${this.page === 'titanium-icon-picker' ? html`<titanium-icon-picker-demo large></titanium-icon-picker-demo>` : nothing}
        ${this.page === 'titanium-page-control' ? html`<titanium-page-control-demo large></titanium-page-control-demo>` : nothing}
        ${this.page === 'titanium-date-input' ? html`<titanium-date-input-demo large></titanium-date-input-demo>` : nothing}
        ${this.page === 'titanium-search-input' ? html`<titanium-search-input-demo large></titanium-search-input-demo>` : nothing}
        ${this.page === 'titanium-toolbar' ? html`<titanium-toolbar-demo large></titanium-toolbar-demo>` : nothing}
        ${this.page === 'titanium-chip-multi-select' ? html`<titanium-chip-multi-select-demo large></titanium-chip-multi-select-demo>` : nothing}
        ${this.page === 'titanium-styles' ? html`<titanium-styles-demo large></titanium-styles-demo>` : nothing}
        ${this.page === 'titanium-snackbar' ? html`<titanium-snackbar-demo large></titanium-snackbar-demo>` : nothing}
        ${this.page === 'titanium-smart-attachment-input' ? html`<titanium-smart-attachment-input-demo large></titanium-smart-attachment-input-demo>` : nothing}
        ${this.page === 'titanium-chip' ? html`<titanium-chip-demo large></titanium-chip-demo>` : nothing}
        ${this.page === 'titanium-youtube-input' ? html`<titanium-youtube-input-demo large></titanium-youtube-input-demo>` : nothing}
        ${this.page === 'titanium-show-hide' ? html`<titanium-show-hide-demo large></titanium-show-hide-demo>` : nothing}
        ${this.page === 'titanium-duration-input' ? html`<titanium-duration-input-demo large></titanium-duration-input-demo>` : nothing}
        ${this.page === 'titanium-confirmation-dialog' ? html`<titanium-confirmation-dialog-demo large></titanium-confirmation-dialog-demo>` : nothing}
        ${this.page === 'titanium-profile-picture-stack' ? html`<titanium-profile-picture-stack-demo large></titanium-profile-picture-stack-demo>` : nothing}

        <leavitt-error-page
          ?hidden=${this.page !== 'error'}
          .message=${this.fatalErrorMessage || "It looks like that page doesn't exist."}
          .heading=${this.fatalErrorHeading || 'Hmm...'}
        >
          ${this.fatalErrorHeading === 'Sorry' ? html`<md-icon slot="icon">lock</md-icon>` : nothing}
        </leavitt-error-page>
      </main-content>

      <report-a-problem-dialog .userManager=${UserManager}></report-a-problem-dialog>
      <provide-feedback-dialog .userManager=${UserManager}></provide-feedback-dialog>

      <titanium-snackbar-stack .eventListenerTarget=${document}></titanium-snackbar-stack> `;
  }
}

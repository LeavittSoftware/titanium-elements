import '@leavittsoftware/web/titanium/toolbar/toolbar';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import '@leavittsoftware/web/titanium/full-page-loading-indicator/full-page-loading-indicator';
import '@leavittsoftware/web/titanium/error-page/error-page';
import '@leavittsoftware/web/titanium/service-worker-notifier/service-worker-notifier';
import '@leavittsoftware/web/titanium/drawer/drawer';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture-menu';

import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/iconbutton/outlined-icon-button';
import '@material/web/list/list';
import '@material/web/list/list-item';
import './shared/npm-stats';

import { ChangePathEvent, RedirectPathEvent, SiteErrorEvent } from './events';
import { LitElement, css, html, nothing } from 'lit';
import { TitaniumFullPageLoadingIndicator } from '@leavittsoftware/web/titanium/full-page-loading-indicator/full-page-loading-indicator';
import { PendingStateEvent } from '@leavittsoftware/web/titanium/types/pending-state-event';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ConfirmDialogOpenEvent } from '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog-open-event';
import { installMediaQueryWatcher } from '@leavittsoftware/web/titanium/helpers/helpers';
import { myAppStyles } from './styles/my-app-styles';
import { TitaniumDrawer } from '@leavittsoftware/web/titanium/drawer/drawer';
import { p } from '@leavittsoftware/web/titanium/styles/styles';

import TitaniumConfirmDialog from '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog';
import page from 'page';

const LGLogo = new URL('../images/lg-logo.svg', import.meta.url).href;
const LGLogoWhite = new URL('../images/lg-logo-white.svg', import.meta.url).href;

@customElement('my-app')
export class MyApp extends LitElement {
  @state() private accessor page: string | undefined;
  @state() private accessor fatalErrorMessage: string = '';
  @state() private accessor isWideViewPort: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'collapse-main-menu' }) private accessor collapseMainMenu: boolean = false;

  @query('titanium-confirm-dialog') private accessor confirmDialog: TitaniumConfirmDialog;
  @query('titanium-full-page-loading-indicator') private accessor loadingIndicator: TitaniumFullPageLoadingIndicator;
  @query('titanium-drawer') private accessor drawer: TitaniumDrawer;

  @state()
  get themePreference() {
    return (localStorage.getItem('theme-preference') as 'light' | 'dark') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  set themePreference(val: 'light' | 'dark') {
    localStorage.setItem('theme-preference', val);
    this.#applyTheme();
  }

  #applyTheme() {
    document.firstElementChild?.setAttribute('data-theme', this.themePreference);
  }

  public async firstUpdated() {
    this.#applyTheme();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
      this.themePreference = isDark ? 'dark' : 'light';
      this.#applyTheme();
    });

    installMediaQueryWatcher('(max-width: 920px)', async (matches) => {
      this.isWideViewPort = !matches;
      if (this.isWideViewPort) {
        this.drawer.closeQuick();
        this.collapseMainMenu = false;
      }
    });

    await this.loadingIndicator.updateComplete;

    this.addEventListener(ConfirmDialogOpenEvent.eventType, async (e: ConfirmDialogOpenEvent) => {
      await import('@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog');
      this.confirmDialog.handleEvent(e);
    });

    this.addEventListener(ChangePathEvent.eventName, (event: ChangePathEvent) => {
      page.show(event.detail.path);
    });

    this.addEventListener(RedirectPathEvent.eventName, (event: RedirectPathEvent) => {
      page.redirect(event.detail.path);
    });

    this.addEventListener(SiteErrorEvent.eventName, (event: SiteErrorEvent) => {
      this.fatalErrorMessage = event.detail;
      this.#changePage('error');
    });

    page('*', (_ctx, next) => {
      this.drawer?.close();
      next();
    });

    page('/', async () => {
      page.show('/getting-started');
    });
    page('/getting-started', () => this.#changePage('getting-started', () => import('./getting-started.js')));
    page('/titanium-full-page-loading-indicator', () =>
      this.#changePage(
        'titanium-full-page-loading-indicator',
        () => import('./demos/titanium-full-page-loading-indicator/titanium-full-page-loading-indicator-demo.js')
      )
    );
    page('/available-cdn-icons', () => this.#changePage('available-cdn-icons', () => import('./demos/available-cdn-icons/available-cdn-icons-demo.js')));

    page('/leavitt-company-select', () =>
      this.#changePage('leavitt-company-select', () => import('./demos/leavitt-company-select/leavitt-company-select-demo.js'))
    );
    page('/leavitt-file-explorer', () =>
      this.#changePage('leavitt-file-explorer', () => import('./demos/leavitt-file-explorer/leavitt-file-explorer-demo.js'))
    );

    page('/titanium-date-range-selector', () =>
      this.#changePage('titanium-date-range-selector', () => import('./demos/titanium-date-range-selector/titanium-date-range-selector-demo.js'))
    );
    page('/titanium-data-table-item', () =>
      this.#changePage('titanium-data-table-item', () => import('./demos/titanium-data-table-item/titanium-data-table-item-demo.js'))
    );

    page('/leavitt-person-select', () =>
      this.#changePage('leavitt-person-select', () => import('./demos/leavitt-person-select/leavitt-person-select-demo.js'))
    );
    page('/leavitt-person-company-select', () =>
      this.#changePage('leavitt-person-company-select', () => import('./demos/leavitt-person-company-select/leavitt-person-company-select-demo.js'))
    );
    page('/leavitt-person-group-select', () =>
      this.#changePage('leavitt-person-group-select', () => import('./demos/leavitt-person-group-select/leavitt-person-group-select-demo.js'))
    );

    page('/leavitt-user-feedback', () =>
      this.#changePage('leavitt-user-feedback', () => import('./demos/leavitt-user-feedback/leavitt-user-feedback-demo.js'))
    );
    page('/profile-picture', () => this.#changePage('profile-picture', () => import('./demos/profile-picture/profile-picture-demo.js')));
    page('/profile-picture-menu', () => this.#changePage('profile-picture-menu', () => import('./demos/profile-picture-menu/profile-picture-menu-demo.js')));
    page('/titanium-access-denied-page', () =>
      this.#changePage('titanium-access-denied-page', () => import('./demos/titanium-access-denied-page/titanium-access-denied-page-demo.js'))
    );

    page('/titanium-data-table', () => this.#changePage('titanium-data-table', () => import('./demos/titanium-data-table/titanium-data-table-demo.js')));
    page('/titanium-data-table-item', () =>
      this.#changePage('titanium-data-table-item', () => import('./demos/titanium-data-table-item/titanium-data-table-item-demo.js'))
    );
    page('/titanium-drawer', () => this.#changePage('titanium-drawer', () => import('./demos/titanium-drawer/titanium-drawer-demo.js')));
    page('/titanium-error-page', () => this.#changePage('titanium-error-page', () => import('./demos/titanium-error-page/titanium-error-page-demo.js')));
    page('/titanium-address-input', () =>
      this.#changePage('titanium-address-input', () => import('./demos/titanium-address-input/titanium-address-input-demo.js'))
    );
    page('/titanium-header', () => this.#changePage('titanium-header', () => import('./demos/titanium-header/titanium-header-demo.js')));
    page('/titanium-icon-picker', () => this.#changePage('titanium-icon-picker', () => import('./demos/titanium-icon-picker/titanium-icon-picker-demo.js')));
    page('/titanium-header', () => this.#changePage('titanium-header', () => import('./demos/titanium-header/titanium-header-demo.js')));

    page('/titanium-chip-multi-select', () =>
      this.#changePage('titanium-chip-multi-select', () => import('./demos/titanium-chip-multi-select/titanium-chip-multi-select-demo.js'))
    );
    page('/titanium-input-validator', () =>
      this.#changePage('titanium-input-validator', () => import('./demos/titanium-input-validator/titanium-input-validator-demo.js'))
    );
    page('/titanium-data-table-header', () =>
      this.#changePage('titanium-data-table-header', () => import('./demos/titanium-data-table-header/titanium-data-table-header-demo.js'))
    );

    page('/titanium-full-page-loading-indicator', () =>
      this.#changePage(
        'titanium-full-page-loading-indicator',
        () => import('./demos/titanium-full-page-loading-indicator/titanium-full-page-loading-indicator-demo.js')
      )
    );

    page('/titanium-page-control', () =>
      this.#changePage('titanium-page-control', () => import('./demos/titanium-page-control/titanium-page-control-demo.js'))
    );

    page('/titanium-smart-attachment-input', () =>
      this.#changePage('titanium-smart-attachment-input', () => import('./demos/titanium-smart-attachment-input/titanium-smart-attachment-input-demo.js'))
    );
    page('/titanium-date-input', () => this.#changePage('titanium-date-input', () => import('./demos/titanium-date-input/titanium-date-input-demo.js')));

    page('/titanium-search-input', () =>
      this.#changePage('titanium-search-input', () => import('./demos/titanium-search-input/titanium-search-input-demo.js'))
    );

    page('/titanium-toolbar', () => this.#changePage('titanium-toolbar', () => import('./demos/titanium-toolbar/titanium-toolbar-demo.js')));

    page('/titanium-styles', () => this.#changePage('titanium-styles', () => import('./demos/titanium-styles/titanium-styles-demo.js')));
    page('/titanium-snackbar', () => this.#changePage('titanium-snackbar', () => import('./demos/titanium-snackbar/titanium-snackbar-demo.js')));
    page('/titanium-card', () => this.#changePage('titanium-card', () => import('./demos/titanium-card/titanium-card-demo.js')));
    page('/titanium-youtube-input', () =>
      this.#changePage('titanium-youtube-input', () => import('./demos/titanium-youtube-input/titanium-youtube-input-demo.js'))
    );
    page('/titanium-show-hide', () => this.#changePage('titanium-show-hide', () => import('./demos/titanium-show-hide/titanium-show-hide-demo.js')));
    page('/titanium-duration-input', () =>
      this.#changePage('titanium-duration-input', () => import('./demos/titanium-duration-input/titanium-duration-input-demo.js'))
    );

    page('/titanium-confirm-dialog', () =>
      this.#changePage('titanium-confirm-dialog', () => import('./demos/titanium-confirm-dialog/titanium-confirm-dialog-demo.js'))
    );

    page('*', () => {
      this.fatalErrorMessage = 'We were unable to find the page you are looking for';
      this.#changePage('error');
    });

    page.start();
  }

  #changePage(mainPage: string, importFunction?: () => Promise<unknown>) {
    const handlePageChange = new Promise<void>(async (res) => {
      this.page = mainPage;
      try {
        await importFunction?.();
      } catch (error) {
        console.warn(error);
        this.fatalErrorMessage = error;
        this.page = 'error';
      }
      res();
    });
    this.dispatchEvent(new PendingStateEvent(handlePageChange));
  }

  static styles = [
    myAppStyles,
    p,
    css`
      titanium-drawer npm-stats {
        margin: 0 12px 12px 24px;
        gap: 12px;
      }

      titanium-drawer md-list-item {
        height: 26px;
        --md-list-item-one-line-container-height: 26px;
        --md-list-item-label-text-size: 14px;
        --md-list-item-label-text-weight: 400;
      }

      titanium-drawer md-icon {
        height: 16px;
        width: 16px;
        font-size: 16px;
      }

      titanium-drawer summary {
        padding-left: 24px;
        font-size: 13px;
        padding: 2px 20px;
        border-radius: 0px 50px 50px 0px;
        cursor: pointer;
        font-weight: 500;
        margin-top: 12px;
      }
      titanium-drawer summary::marker {
        margin-right: 12px;
      }

      titanium-drawer details {
        user-select: none;
      }

      summary:hover {
        background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08);
      }
    `,
  ];

  render() {
    return html`<titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
      <user-manager disableAutoload></user-manager>

      <titanium-toolbar>
        <md-icon-button
          title="Main menu"
          @click=${() => {
            if (this.isWideViewPort) {
              this.collapseMainMenu = !this.collapseMainMenu;
            } else {
              this.drawer?.open();
            }
          }}
        >
          <md-icon>menu</md-icon>
        </md-icon-button>
        <a logo href="/" title="Back to home"><img src=${this.themePreference === 'dark' ? LGLogoWhite : LGLogo} /></a>
        <h3 title="Leavitt book" @click=${() => page.show('/')} main-title>Leavitt book</h3>
        <right-panel>
          <md-outlined-icon-button
            title="Switch to ${this.themePreference === 'light' ? 'dark' : 'light'} theme "
            themePref
            @click=${() => (this.themePreference = this.themePreference === 'light' ? 'dark' : 'light')}
          >
            <md-icon>${this.themePreference === 'light' ? 'dark_mode' : 'light_mode'}</md-icon>
          </md-outlined-icon-button>
          <profile-picture-menu size="36"></profile-picture-menu>
        </right-panel>
      </titanium-toolbar>

      <titanium-drawer ?always-show-content=${this.isWideViewPort && !this.collapseMainMenu}>
        <a logo href="/" title="Back to home"><img src=${this.themePreference === 'dark' ? LGLogoWhite : LGLogo} /></a>
        <h3>Titanium elements</h3>
        <p>Leavitt group custom elements</p>

        <npm-stats></npm-stats>

        <md-list-item ?selected=${!!this.page?.includes('getting-started')} href="/getting-started" type="link">
          <md-icon slot="start">home</md-icon> <span>Getting started</span>
        </md-list-item>

        <md-list-item ?selected=${!!this.page?.includes('available-cdn-icons')} href="/available-cdn-icons" type="link">
          <md-icon slot="start">photo_camera</md-icon> <span>Icons</span>
        </md-list-item>

        <section>
          <details open>
            <summary>Titanium</summary>
            <!-- Titanium menu -->

            <md-list-item ?selected=${this.page === 'titanium-access-denied-page'} href="/titanium-access-denied-page" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Access denied page</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-address-input'} href="/titanium-address-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Address input</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-card'} href="/titanium-card" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Card</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-chip-multi-select'} href="/titanium-chip-multi-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Chip multi select</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-confirm-dialog'} href="/titanium-confirm-dialog" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Confirm dialog</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-data-table'} href="/titanium-data-table" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Data table</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-data-table-header'} href="/titanium-data-table-header" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Data table header</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-data-table-item'} href="/titanium-data-table-item" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Data table item</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-date-input')} href="/titanium-date-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Date input </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-date-range-selector'} href="/titanium-date-range-selector" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Date range selector</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-drawer'} href="/titanium-drawer" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Drawer</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-duration-input')} href="/titanium-duration-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Duration input</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-error-page')} href="/titanium-error-page" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Error page</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-full-page-loading-indicator')} href="/titanium-full-page-loading-indicator" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Full page loading indicator</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-header'} href="/titanium-header" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Header</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-icon-picker'} href="/titanium-icon-picker" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Icon picker</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-input-validator')} href="/titanium-input-validator" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Input validator</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-page-control')} href="/titanium-page-control" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Page control</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-search-input')} href="/titanium-search-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Search input </span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-show-hide')} href="/titanium-show-hide" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Show hide </span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-smart-attachment-input')} href="/titanium-smart-attachment-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Smart attachment input</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-snackbar')} href="/titanium-snackbar" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Snackbar</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-styles')} href="/titanium-styles" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Styles</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-toolbar')} href="/titanium-toolbar" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Toolbar</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-youtube-input')} href="/titanium-youtube-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Youtube input</span>
            </md-list-item>
          </details>
        </section>

        <section>
          <details open>
            <summary>Leavitt</summary>
            <!-- Leavitt menu -->
            <md-list-item ?selected=${this.page === 'leavitt-company-select'} href="/leavitt-company-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Company select</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'leavitt-file-explorer'} href="/leavitt-file-explorer" type="link">
              <md-icon slot="start">library_books</md-icon> <span>File explorer</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'leavitt-person-company-select'} href="/leavitt-person-company-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Person company select</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'leavitt-person-group-select'} href="/leavitt-person-group-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Person group select</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'leavitt-person-select'} href="/leavitt-person-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Person select</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'profile-picture'} href="/profile-picture" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Profile picture</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'profile-picture-menu'} href="/profile-picture-menu" type="link">
              <md-icon slot="start">library_books</md-icon> <span>Profile picture menu</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'leavitt-user-feedback'} href="/leavitt-user-feedback" type="link">
              <md-icon slot="start">library_books</md-icon> <span>User feedback</span>
            </md-list-item>
          </details>
        </section>
      </titanium-drawer>

      <main-content>
        ${this.page === 'getting-started' ? html`<getting-started></getting-started>` : nothing}
        ${this.page === 'error' ? html`<div>Oops, something went wrong.</div>` : nothing}

        <!-- Stories -->
        ${this.page === 'available-cdn-icons'
          ? html` <available-cdn-icons-demo large ?isActive=${this.page === 'available-cdn-icons'}></available-cdn-icons-demo> `
          : nothing}
        ${this.page === 'titanium-date-range-selector'
          ? html` <titanium-date-range-selector-demo large ?isActive=${this.page === 'titanium-date-range-selector'}></titanium-date-range-selector-demo> `
          : nothing}
        ${this.page === 'leavitt-person-select'
          ? html` <leavitt-person-select-demo large ?isActive=${this.page === 'leavitt-person-select'}></leavitt-person-select-demo> `
          : nothing}
        ${this.page === 'leavitt-company-select'
          ? html` <leavitt-company-select-demo large ?isActive=${this.page === 'leavitt-company-select'}></leavitt-company-select-demo> `
          : nothing}
        ${this.page === 'leavitt-file-explorer'
          ? html` <leavitt-file-explorer-demo large ?isActive=${this.page === 'leavitt-file-explorer'}></leavitt-file-explorer-demo> `
          : nothing}
        ${this.page === 'leavitt-user-feedback'
          ? html` <leavitt-user-feedback-demo large ?isActive=${this.page === 'leavitt-user-feedback'}></leavitt-user-feedback-demo> `
          : nothing}
        ${this.page === 'leavitt-person-company-select'
          ? html` <leavitt-person-company-select-demo large ?isActive=${this.page === 'leavitt-person-company-select'}></leavitt-person-company-select-demo> `
          : nothing}
        ${this.page === 'leavitt-person-group-select'
          ? html` <leavitt-person-group-select-demo large ?isActive=${this.page === 'leavitt-person-group-select'}></leavitt-person-group-select-demo> `
          : nothing}
        ${this.page === 'titanium-drawer' ? html` <titanium-drawer-demo ?isActive=${this.page === 'titanium-drawer'}></titanium-drawer-demo> ` : nothing}
        ${this.page === 'profile-picture' ? html` <profile-picture-demo ?isActive=${this.page === 'profile-picture'}></profile-picture-demo> ` : nothing}
        ${this.page === 'profile-picture-menu'
          ? html` <profile-picture-menu-demo large ?isActive=${this.page === 'profile-picture-menu'}></profile-picture-menu-demo> `
          : nothing}
        ${this.page === 'titanium-input-validator'
          ? html` <titanium-input-validator-demo large ?isActive=${this.page === 'titanium-input-validator'}></titanium-input-validator-demo> `
          : nothing}
        ${this.page === 'titanium-data-table'
          ? html` <titanium-data-table-demo large ?isActive=${this.page === 'titanium-data-table'}></titanium-data-table-demo> `
          : nothing}
        ${this.page === 'titanium-data-table-header'
          ? html` <titanium-data-table-header-demo large ?isActive=${this.page === 'titanium-data-table-header'}></titanium-data-table-header-demo> `
          : nothing}
        ${this.page === 'titanium-data-table-item'
          ? html` <titanium-data-table-item-demo large ?isActive=${this.page === 'titanium-data-table-item'}></titanium-data-table-item-demo> `
          : nothing}
        ${this.page === 'titanium-access-denied-page'
          ? html` <titanium-access-denied-page-demo large ?isActive=${this.page === 'titanium-access-denied-page'}></titanium-access-denied-page-demo> `
          : nothing}
        ${this.page === 'titanium-address-input'
          ? html` <titanium-address-input-demo large ?isActive=${this.page === 'titanium-address-input'}></titanium-address-input-demo> `
          : nothing}
        ${this.page === 'titanium-error-page'
          ? html` <titanium-error-page-demo large ?isActive=${this.page === 'titanium-error-page'}></titanium-error-page-demo> `
          : nothing}
        ${this.page === 'titanium-header' ? html` <titanium-header-demo ?isActive=${this.page === 'titanium-header'}></titanium-header-demo> ` : nothing}
        ${this.page === 'titanium-icon' ? html` <titanium-icon-demo ?isActive=${this.page === 'titanium-icon'}></titanium-icon-demo> ` : nothing}
        ${this.page === 'titanium-icon-picker'
          ? html` <titanium-icon-picker-demo large ?isActive=${this.page === 'titanium-icon-picker'}></titanium-icon-picker-demo> `
          : nothing}
        ${this.page === 'titanium-page-control'
          ? html` <titanium-page-control-demo large ?isActive=${this.page === 'titanium-page-control'}></titanium-page-control-demo> `
          : nothing}
        ${this.page === 'titanium-date-input'
          ? html` <titanium-date-input-demo large ?isActive=${this.page === 'titanium-date-input'}></titanium-date-input-demo> `
          : nothing}
        ${this.page === 'titanium-search-input'
          ? html` <titanium-search-input-demo large ?isActive=${this.page === 'titanium-search-input'}></titanium-search-input-demo> `
          : nothing}
        ${this.page === 'titanium-toolbar'
          ? html` <titanium-toolbar-demo large ?isActive=${this.page === 'titanium-toolbar'}></titanium-toolbar-demo> `
          : nothing}
        ${this.page === 'titanium-full-page-loading-indicator'
          ? html`
              <titanium-full-page-loading-indicator-demo
                large
                ?isActive=${this.page === 'titanium-full-page-loading-indicator'}
              ></titanium-full-page-loading-indicator-demo>
            `
          : nothing}
        ${this.page === 'titanium-loading-indicator'
          ? html` <titanium-loading-indicator-demo large ?isActive=${this.page === 'titanium-loading-indicator'}></titanium-loading-indicator-demo> `
          : nothing}
        ${this.page === 'titanium-chip-multi-select'
          ? html` <titanium-chip-multi-select-demo large ?isActive=${this.page === 'titanium-chip-multi-select'}></titanium-chip-multi-select-demo> `
          : nothing}
        ${this.page === 'titanium-styles' ? html` <titanium-styles-demo large ?isActive=${this.page === 'titanium-styles'}></titanium-styles-demo> ` : nothing}
        ${this.page === 'titanium-snackbar'
          ? html` <titanium-snackbar-demo large ?isActive=${this.page === 'titanium-snackbar'}></titanium-snackbar-demo> `
          : nothing}
        ${this.page === 'titanium-smart-attachment-input'
          ? html`
              <titanium-smart-attachment-input-demo large ?isActive=${this.page === 'titanium-smart-attachment-input'}></titanium-smart-attachment-input-demo>
            `
          : nothing}
        ${this.page === 'titanium-card' ? html` <titanium-card-demo large ?isActive=${this.page === 'titanium-card'}></titanium-card-demo> ` : nothing}
        ${this.page === 'titanium-youtube-input'
          ? html` <titanium-youtube-input-demo large ?isActive=${this.page === 'titanium-youtube-input'}></titanium-youtube-input-demo> `
          : nothing}
        ${this.page === 'titanium-show-hide'
          ? html` <titanium-show-hide-demo large ?isActive=${this.page === 'titanium-show-hide'}></titanium-show-hide-demo> `
          : nothing}
        ${this.page === 'titanium-duration-input'
          ? html` <titanium-duration-input-demo large ?isActive=${this.page === 'titanium-duration-input'}></titanium-duration-input-demo> `
          : nothing}
        ${this.page === 'titanium-confirm-dialog'
          ? html` <titanium-confirm-dialog-demo large ?isActive=${this.page === 'titanium-confirm-dialog'}></titanium-confirm-dialog-demo> `
          : nothing}
        <titanium-access-denied-page ?hidden=${this.page !== 'access-denied'}></titanium-access-denied-page>
        <titanium-error-page ?hidden=${this.page !== 'error'} .message=${this.fatalErrorMessage}></titanium-error-page>
      </main-content>

      <titanium-confirm-dialog></titanium-confirm-dialog>
      <titanium-snackbar-stack .eventListenerTarget=${this}></titanium-snackbar-stack>
      <titanium-service-worker-notifier></titanium-service-worker-notifier>`;
  }
}

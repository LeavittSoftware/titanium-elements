import '@leavittsoftware/titanium-toolbar';
import '@leavittsoftware/user-manager';
import '@leavittsoftware/titanium-snackbar';
import '@leavittsoftware/titanium-loading-indicator';
import '@leavittsoftware/titanium-error-page';
import '@leavittsoftware/titanium-sw-notifier';
import '@leavittsoftware/titanium-drawer';
import '@leavittsoftware/profile-picture/lib/profile-picture-menu';

import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/iconbutton/outlined-icon-button';
import '@material/web/list/list';
import '@material/web/list/list-item';

import { ChangePathEvent, RedirectPathEvent, SiteErrorEvent } from './events';
import { LitElement, css, html, nothing } from 'lit';
import { PendingStateEvent, TitaniumFullPageLoadingIndicatorElement } from '@leavittsoftware/titanium-loading-indicator';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ConfirmDialogOpenEvent } from '@leavittsoftware/titanium-dialog/lib/confirm-dialog-open-event';
import { installMediaQueryWatcher } from '@leavittsoftware/titanium-helpers';
import { myAppStyles } from './styles/my-app-styles';
import { TitaniumDrawer } from '@leavittsoftware/titanium-drawer';
import { p } from '@leavittsoftware/titanium-styles';

import ConfirmDialogElement from '@leavittsoftware/titanium-dialog/lib/confirm-dialog';
import page from 'page';

const LGLogo = new URL('../images/lg-logo.svg', import.meta.url).href;
const LGLogoWhite = new URL('../images/lg-logo-white.svg', import.meta.url).href;

@customElement('my-app')
export class MyApp extends LitElement {
  @state() private accessor page: string | undefined;
  @state() private accessor fatalErrorMessage: string = '';
  @state() private accessor isWideViewPort: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'collapse-main-menu' }) private accessor collapseMainMenu: boolean = false;

  @query('confirm-dialog') private accessor confirmDialog: ConfirmDialogElement;
  @query('titanium-full-page-loading-indicator') private accessor loadingIndicator: TitaniumFullPageLoadingIndicatorElement;
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
      await import('@leavittsoftware/titanium-dialog/lib/confirm-dialog');
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
    page('/titanium-date-range-selector', () =>
      this.#changePage('titanium-date-range-selector', () => import('./demos/titanium-date-range-selector/titanium-date-range-selector-demo.js'))
    );
    page('/titanium-data-table-item', () =>
      this.#changePage('titanium-data-table-item', () => import('./demos/titanium-data-table-item/titanium-data-table-item-demo.js'))
    );
    page('/leavitt-file-explorer', () =>
      this.#changePage('leavitt-file-explorer', () => import('./demos/leavitt-file-explorer/leavitt-file-explorer-demo.js'))
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
    page('/mwc-datefield', () => this.#changePage('mwc-datefield', () => import('./demos/mwc-datefield/mwc-datefield-demo.js')));
    page('/profile-picture', () => this.#changePage('profile-picture', () => import('./demos/profile-picture/profile-picture-demo.js')));
    page('/profile-picture-menu', () => this.#changePage('profile-picture-menu', () => import('./demos/profile-picture-menu/profile-picture-menu-demo.js')));
    page('/titanium-access-denied-page', () =>
      this.#changePage('titanium-access-denied-page', () => import('./demos/titanium-access-denied-page/titanium-access-denied-page-demo.js'))
    );
    page('/titanium-attachment-input', () =>
      this.#changePage('titanium-attachment-input', () => import('./demos/titanium-attachment-input/titanium-attachment-input-demo.js'))
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
    page('/titanium-icon', () => this.#changePage('titanium-icon', () => import('./demos/titanium-icon/titanium-icon-demo.js')));
    page('/titanium-icon-picker', () => this.#changePage('titanium-icon-picker', () => import('./demos/titanium-icon-picker/titanium-icon-picker-demo.js')));
    page('/titanium-header', () => this.#changePage('titanium-header', () => import('./demos/titanium-header/titanium-header-demo.js')));
    page('/titanium-image-input', () => this.#changePage('titanium-image-input', () => import('./demos/titanium-image-input/titanium-image-input-demo.js')));
    page('/titanium-button', () => this.#changePage('titanium-button', () => import('./demos/titanium-button/titanium-button-demo.js')));
    page('/titanium-menu-surface', () =>
      this.#changePage('titanium-menu-surface', () => import('./demos/titanium-menu-surface/titanium-menu-surface-demo.js'))
    );
    page('/titanium-chip', () => this.#changePage('titanium-chip', () => import('./demos/titanium-chip/titanium-chip-demo.js')));
    page('/titanium-chip-multi-select', () =>
      this.#changePage('titanium-chip-multi-select', () => import('./demos/titanium-chip-multi-select/titanium-chip-multi-select-demo.js'))
    );
    page('/titanium-input-validator', () =>
      this.#changePage('titanium-input-validator', () => import('./demos/titanium-input-validator/titanium-input-validator-demo.js'))
    );
    page('/titanium-data-table-header', () =>
      this.#changePage('titanium-data-table-header', () => import('./demos/titanium-data-table-header/titanium-data-table-header-demo.js'))
    );
    page('/titanium-card-list-item', () =>
      this.#changePage('titanium-card-list-item', () => import('./demos/titanium-card-list-item/titanium-card-list-item-demo.js'))
    );
    page('/titanium-card-two-line-list-item', () =>
      this.#changePage('titanium-card-two-line-list-item', () => import('./demos/titanium-card-two-line-list-item/titanium-card-two-line-list-item-demo.js'))
    );
    page('/titanium-dialog-base', () => this.#changePage('titanium-dialog-base', () => import('./demos/titanium-dialog-base/titanium-dialog-base-demo.js')));
    page('/titanium-dialog', () => this.#changePage('titanium-dialog', () => import('./demos/titanium-dialog/titanium-dialog-demo.js')));
    page('/confirm-dialog', () => this.#changePage('confirm-dialog', () => import('./demos/confirm-dialog/confirm-dialog-demo.js')));
    page('/titanium-full-page-loading-indicator', () =>
      this.#changePage(
        'titanium-full-page-loading-indicator',
        () => import('./demos/titanium-full-page-loading-indicator/titanium-full-page-loading-indicator-demo.js')
      )
    );
    page('/titanium-loading-indicator', () =>
      this.#changePage('titanium-loading-indicator', () => import('./demos/titanium-loading-indicator/titanium-loading-indicator-demo.js'))
    );
    page('/titanium-offline-notice', () =>
      this.#changePage('titanium-offline-notice', () => import('./demos/titanium-offline-notice/titanium-offline-notice-demo.js'))
    );
    page('/titanium-page-control', () =>
      this.#changePage('titanium-page-control', () => import('./demos/titanium-page-control/titanium-page-control-demo.js'))
    );
    page('/titanium-progress', () => this.#changePage('titanium-progress', () => import('./demos/titanium-progress/titanium-progress-demo.js')));
    page('/titanium-single-select', () =>
      this.#changePage('titanium-single-select', () => import('./demos/titanium-single-select/titanium-single-select-demo.js'))
    );
    page('/titanium-smart-attachment-input', () =>
      this.#changePage('titanium-smart-attachment-input', () => import('./demos/titanium-smart-attachment-input/titanium-smart-attachment-input-demo.js'))
    );
    page('/titanium-search-input', () =>
      this.#changePage('titanium-search-input', () => import('./demos/titanium-search-input/titanium-search-input-demo.js'))
    );
    page('/titanium-side-menu-item', () =>
      this.#changePage('titanium-side-menu-item', () => import('./demos/titanium-side-menu-item/titanium-side-menu-item-demo.js'))
    );
    page('/titanium-single-action-card', () =>
      this.#changePage('titanium-single-action-card', () => import('./demos/titanium-single-action-card/titanium-single-action-card-demo.js'))
    );
    page('/titanium-svg-button', () => this.#changePage('titanium-svg-button', () => import('./demos/titanium-svg-button/titanium-svg-button-demo.js')));
    page('/titanium-svg-button-menu', () =>
      this.#changePage('titanium-svg-button-menu', () => import('./demos/titanium-svg-button-menu/titanium-svg-button-menu-demo.js'))
    );
    page('/titanium-tab-control', () => this.#changePage('titanium-tab-control', () => import('./demos/titanium-tab-control/titanium-tab-control-demo.js')));
    page('/titanium-toggle-button', () =>
      this.#changePage('titanium-toggle-button', () => import('./demos/titanium-toggle-button/titanium-toggle-button-demo.js'))
    );
    page('/titanium-toolbar', () => this.#changePage('titanium-toolbar', () => import('./demos/titanium-toolbar/titanium-toolbar-demo.js')));
    page('/titanium-twoline-formfield', () =>
      this.#changePage('titanium-twoline-formfield', () => import('./demos/titanium-twoline-formfield/titanium-twoline-formfield-demo.js'))
    );
    page('/titanium-styles', () => this.#changePage('titanium-styles', () => import('./demos/titanium-styles/titanium-styles-demo.js')));
    page('/titanium-select', () => this.#changePage('titanium-select', () => import('./demos/titanium-select/titanium-select-demo.js')));
    page('/titanium-snackbar', () => this.#changePage('titanium-snackbar', () => import('./demos/titanium-snackbar/titanium-snackbar-demo.js')));
    page('/titanium-shadow-text', () => this.#changePage('titanium-shadow-text', () => import('./demos/titanium-shadow-text/titanium-shadow-text-demo.js')));
    page('/titanium-card', () => this.#changePage('titanium-card', () => import('./demos/titanium-card/titanium-card-demo.js')));
    page('/titanium-youtube-input', () =>
      this.#changePage('titanium-youtube-input', () => import('./demos/titanium-youtube-input/titanium-youtube-input-demo.js'))
    );
    page('/titanium-color-input', () => this.#changePage('titanium-color-input', () => import('./demos/titanium-color-input/titanium-color-input-demo.js')));
    page('/titanium-show-hide', () => this.#changePage('titanium-show-hide', () => import('./demos/titanium-show-hide/titanium-show-hide-demo.js')));
    page('/titanium-duration-input', () =>
      this.#changePage('titanium-duration-input', () => import('./demos/titanium-duration-input/titanium-duration-input-demo.js'))
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
      menu-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
      }

      mwc-drawer {
        margin-top: 48px;
        --mdc-drawer-width: 290px;
      }

      div[drawer-content] {
        margin-top: 24px;
      }

      details {
        user-select: none;
      }

      summary {
        padding-left: 24px;
        font-size: 13px;
        padding: 2px 20px;
        border-radius: 0px 50px 50px 0px;
        cursor: pointer;
        color: var(--app-text-color);
        font-weight: 500;
        margin-top: 12px;
      }
      summary::marker {
        margin-right: 12px;
      }

      summary:hover {
        background: var(--app-hover-color);
      }

      titanium-drawer a {
        display: flex;
        text-decoration: none;
        color: var(--app-light-text-color);
        font-size: 14px;
        line-height: 16px;
        align-items: center;
        gap: 6px;
        padding: 4px 24px;
        border-radius: 0px 50px 50px 0px;
      }

      titanium-drawer a mwc-icon {
        --mdc-icon-size: 16px;
      }

      titanium-drawer a:hover {
        background-color: var(--app-hover-color);
        transition: 0.3s ease;
      }

      md-list-item {
        height: 26px;
        --md-list-item-one-line-container-height: 26px;
        --md-list-item-label-text-line-height: 11px;
        --md-list-item-label-text-size: 11px;
      }

      md-icon {
        height: 16px;
        width: 16px;
        font-size: 16px;
      }

      titanium-drawer a[selected] {
        background-color: #e8f0fe;
        fill: #1967d2;
        color: #1967d2;
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
        <h3>Component library</h3>
        <p>Leavitt group custom elements</p>

        <md-list-item ?selected=${!!this.page?.includes('getting-started')} href="/getting-started" type="link">
          <md-icon slot="start">home</md-icon> <span>Getting started </span>
        </md-list-item>

        <md-list-item ?selected=${!!this.page?.includes('available-cdn-icons')} href="/available-cdn-icons" type="link">
          <md-icon slot="start">photo_camera</md-icon> <span>Icons </span>
        </md-list-item>

        <section>
          <details open>
            <summary>Titanium</summary>
            <!-- Titanium menu -->

            <md-list-item ?selected=${this.page === 'confirm-dialog'} href="/confirm-dialog" type="link">
              <md-icon slot="start">library_books</md-icon> <span>confirm-dialog </span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('mwc-datefield')} href="/mwc-datefield" type="link">
              <md-icon slot="start">library_books</md-icon> <span>mwc-datefield </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-access-denied-page'} href="/titanium-access-denied-page" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-access-denied-page </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-address-input'} href="/titanium-address-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-address-input </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-card'} href="/titanium-card" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-card </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-card-list-item'} href="/titanium-card-list-item" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-card-list-item </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-card-two-line-list-item'} href="/titanium-card-two-line-list-item" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-card-two-line-list-item </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-chip-multi-select'} href="/titanium-chip-multi-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-chip-multi-select </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-data-table'} href="/titanium-data-table" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-data-table </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-data-table-header'} href="/titanium-data-table-header" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-data-table-header </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-data-table-item'} href="/titanium-data-table-item" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-data-table-item </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-date-range-selector'} href="/titanium-date-range-selector" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-date-range-selector </span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-dialog-base')} href="/titanium-dialog-base" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-dialog-base</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-drawer'} href="/titanium-drawer" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-drawer</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-error-page')} href="/titanium-error-page" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-error-page</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-full-page-loading-indicator')} href="/titanium-full-page-loading-indicator" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-full-page-loading-indicator</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-header'} href="/titanium-header" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-header</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-icon-picker'} href="/titanium-icon-picker" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-icon-picker</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-image-input'} href="/titanium-image-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-image-input</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-offline-notice')} href="/titanium-offline-notice" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-offline-notice</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-input-validator')} href="/titanium-input-validator" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-input-validator</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-loading-indicator')} href="/titanium-loading-indicator" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-loading-indicator</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-page-control')} href="/titanium-page-control" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-page-control</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-search-input')} href="/titanium-search-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-search-input</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-smart-attachment-input')} href="/titanium-smart-attachment-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-smart-attachment-input</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-snackbar')} href="/titanium-snackbar" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-snackbar</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-styles')} href="/titanium-styles" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-styles</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-tab-control'} href="/titanium-tab-control" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-tab-control</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-toolbar')} href="/titanium-toolbar" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-toolbar</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-twoline-formfield')} href="/titanium-twoline-formfield" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-twoline-formfield</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-youtube-input')} href="/titanium-youtube-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-youtube-input</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-show-hide')} href="/titanium-show-hide" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-show-hide</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-duration-input')} href="/titanium-duration-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-duration-input</span>
            </md-list-item>
          </details>
        </section>

        <section>
          <details open>
            <summary>Leavitt</summary>
            <!-- Leavitt menu -->
            <md-list-item ?selected=${this.page === 'leavitt-company-select'} href="/leavitt-company-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>leavitt-company-select </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'leavitt-file-explorer'} href="/leavitt-file-explorer" type="link">
              <md-icon slot="start">library_books</md-icon> <span>leavitt-file-explorer </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'leavitt-person-company-select'} href="/leavitt-person-company-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>leavitt-person-company-select </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'leavitt-person-group-select'} href="/leavitt-person-group-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>leavitt-person-group-select </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'leavitt-person-select'} href="/leavitt-person-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>leavitt-person-select </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'leavitt-user-feedback'} href="/leavitt-user-feedback" type="link">
              <md-icon slot="start">library_books</md-icon> <span>leavitt-user-feedback </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'profile-picture'} href="/profile-picture" type="link">
              <md-icon slot="start">library_books</md-icon> <span>profile-picture </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'profile-picture-menu'} href="/profile-picture-menu" type="link">
              <md-icon slot="start">library_books</md-icon> <span>profile-picture-menu </span>
            </md-list-item>
          </details>
        </section>
        <section>
          <details>
            <summary>Deprecated</summary>
            <md-list-item ?selected=${this.page === 'titanium-color-input'} href="/titanium-color-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-color-input </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-dialog'} href="/titanium-dialog" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-dialog </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-attachment-input'} href="/titanium-attachment-input" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-attachment-input </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-chip'} href="/titanium-chip" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-chip </span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-icon'} href="/titanium-icon" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-icon </span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-shadow-text')} href="/titanium-shadow-text" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-shadow-text </span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-single-action-card')} href="/titanium-single-action-card" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-single-action-card</span>
            </md-list-item>

            <md-list-item ?selected=${this.page === 'titanium-button'} href="/titanium-button" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-button </span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-side-menu-item')} href="/titanium-side-menu-item" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-side-menu-item </span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-menu-surface')} href="/titanium-menu-surface" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-menu-surface</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-progress')} href="/titanium-progress" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-progress</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-select')} href="/titanium-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-select</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-toggle-button')} href="/titanium-toggle-button" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-toggle-button</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-single-select')} href="/titanium-single-select" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-single-select</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-svg-button')} href="/titanium-svg-button" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-svg-button</span>
            </md-list-item>

            <md-list-item ?selected=${!!this.page?.includes('titanium-svg-button-menu')} href="/titanium-svg-button-menu" type="link">
              <md-icon slot="start">library_books</md-icon> <span>titanium-svg-button-menu</span>
            </md-list-item>
          </details>
        </section>
      </titanium-drawer>

      <main-content>
        ${this.page === 'getting-started' ? html`<getting-started></getting-started>` : nothing}
        ${this.page === 'error' ? html`<div>Oops, something went wrong.</div>` : nothing}

        <!-- Stories -->
        ${this.page === 'available-cdn-icons'
          ? html` <available-cdn-icons-demo ?isActive=${this.page === 'available-cdn-icons'}></available-cdn-icons-demo> `
          : nothing}
        ${this.page === 'titanium-attachment-input'
          ? html` <titanium-attachment-input-demo ?isActive=${this.page === 'titanium-attachment-input'}></titanium-attachment-input-demo> `
          : nothing}
        ${this.page === 'leavitt-file-explorer'
          ? html` <leavitt-file-explorer-demo ?isActive=${this.page === 'leavitt-file-explorer'}></leavitt-file-explorer-demo> `
          : nothing}
        ${this.page === 'mwc-datefield' ? html` <mwc-datefield-demo ?isActive=${this.page === 'mwc-datefield'}></mwc-datefield-demo> ` : nothing}
        ${this.page === 'titanium-date-range-selector'
          ? html` <titanium-date-range-selector-demo ?isActive=${this.page === 'titanium-date-range-selector'}></titanium-date-range-selector-demo> `
          : nothing}
        ${this.page === 'leavitt-person-select'
          ? html` <leavitt-person-select-demo ?isActive=${this.page === 'leavitt-person-select'}></leavitt-person-select-demo> `
          : nothing}
        ${this.page === 'leavitt-company-select'
          ? html` <leavitt-company-select-demo ?isActive=${this.page === 'leavitt-company-select'}></leavitt-company-select-demo> `
          : nothing}
        ${this.page === 'leavitt-user-feedback'
          ? html` <leavitt-user-feedback-demo ?isActive=${this.page === 'leavitt-user-feedback'}></leavitt-user-feedback-demo> `
          : nothing}
        ${this.page === 'leavitt-person-company-select'
          ? html` <leavitt-person-company-select-demo ?isActive=${this.page === 'leavitt-person-company-select'}></leavitt-person-company-select-demo> `
          : nothing}
        ${this.page === 'leavitt-person-group-select'
          ? html` <leavitt-person-group-select-demo ?isActive=${this.page === 'leavitt-person-group-select'}></leavitt-person-group-select-demo> `
          : nothing}
        ${this.page === 'titanium-drawer' ? html` <titanium-drawer-demo ?isActive=${this.page === 'titanium-drawer'}></titanium-drawer-demo> ` : nothing}
        ${this.page === 'profile-picture' ? html` <profile-picture-demo ?isActive=${this.page === 'profile-picture'}></profile-picture-demo> ` : nothing}
        ${this.page === 'profile-picture-menu'
          ? html` <profile-picture-menu-demo ?isActive=${this.page === 'profile-picture-menu'}></profile-picture-menu-demo> `
          : nothing}
        ${this.page === 'titanium-button' ? html` <titanium-button-demo ?isActive=${this.page === 'titanium-button'}></titanium-button-demo> ` : nothing}
        ${this.page === 'titanium-menu-surface'
          ? html` <titanium-menu-surface-demo ?isActive=${this.page === 'titanium-menu-surface'}></titanium-menu-surface-demo> `
          : nothing}
        ${this.page === 'titanium-chip' ? html` <titanium-chip-demo ?isActive=${this.page === 'titanium-chip'}></titanium-chip-demo> ` : nothing}
        ${this.page === 'titanium-input-validator'
          ? html` <titanium-input-validator-demo ?isActive=${this.page === 'titanium-input-validator'}></titanium-input-validator-demo> `
          : nothing}
        ${this.page === 'titanium-card-list-item'
          ? html` <titanium-card-list-item-demo ?isActive=${this.page === 'titanium-card-list-item'}></titanium-card-list-item-demo> `
          : nothing}
        ${this.page === 'titanium-card-two-line-list-item'
          ? html`
              <titanium-card-two-line-list-item-demo ?isActive=${this.page === 'titanium-card-two-line-list-item'}></titanium-card-two-line-list-item-demo>
            `
          : nothing}
        ${this.page === 'titanium-data-table'
          ? html` <titanium-data-table-demo ?isActive=${this.page === 'titanium-data-table'}></titanium-data-table-demo> `
          : nothing}
        ${this.page === 'titanium-data-table-header'
          ? html` <titanium-data-table-header-demo ?isActive=${this.page === 'titanium-data-table-header'}></titanium-data-table-header-demo> `
          : nothing}
        ${this.page === 'titanium-data-table-item'
          ? html` <titanium-data-table-item-demo ?isActive=${this.page === 'titanium-data-table-item'}></titanium-data-table-item-demo> `
          : nothing}
        ${this.page === 'titanium-access-denied-page'
          ? html` <titanium-access-denied-page-demo ?isActive=${this.page === 'titanium-access-denied-page'}></titanium-access-denied-page-demo> `
          : nothing}
        ${this.page === 'titanium-address-input'
          ? html` <titanium-address-input-demo ?isActive=${this.page === 'titanium-address-input'}></titanium-address-input-demo> `
          : nothing}
        ${this.page === 'titanium-error-page'
          ? html` <titanium-error-page-demo ?isActive=${this.page === 'titanium-error-page'}></titanium-error-page-demo> `
          : nothing}
        ${this.page === 'titanium-header' ? html` <titanium-header-demo ?isActive=${this.page === 'titanium-header'}></titanium-header-demo> ` : nothing}
        ${this.page === 'titanium-icon' ? html` <titanium-icon-demo ?isActive=${this.page === 'titanium-icon'}></titanium-icon-demo> ` : nothing}
        ${this.page === 'titanium-icon-picker'
          ? html` <titanium-icon-picker-demo ?isActive=${this.page === 'titanium-icon-picker'}></titanium-icon-picker-demo> `
          : nothing}
        ${this.page === 'titanium-image-input'
          ? html` <titanium-image-input-demo ?isActive=${this.page === 'titanium-image-input'}></titanium-image-input-demo> `
          : nothing}
        ${this.page === 'titanium-progress'
          ? html` <titanium-progress-demo ?isActive=${this.page === 'titanium-progress'}></titanium-progress-demo> `
          : nothing}
        ${this.page === 'titanium-single-select'
          ? html` <titanium-single-select-demo ?isActive=${this.page === 'titanium-single-select'}></titanium-single-select-demo> `
          : nothing}
        ${this.page === 'titanium-page-control'
          ? html` <titanium-page-control-demo ?isActive=${this.page === 'titanium-page-control'}></titanium-page-control-demo> `
          : nothing}
        ${this.page === 'titanium-search-input'
          ? html` <titanium-search-input-demo ?isActive=${this.page === 'titanium-search-input'}></titanium-search-input-demo> `
          : nothing}
        ${this.page === 'titanium-side-menu-item'
          ? html` <titanium-side-menu-item-demo ?isActive=${this.page === 'titanium-side-menu-item'}></titanium-side-menu-item-demo> `
          : nothing}
        ${this.page === 'titanium-single-action-card'
          ? html` <titanium-single-action-card-demo ?isActive=${this.page === 'titanium-single-action-card'}></titanium-single-action-card-demo> `
          : nothing}
        ${this.page === 'titanium-svg-button'
          ? html` <titanium-svg-button-demo ?isActive=${this.page === 'titanium-svg-button'}></titanium-svg-button-demo> `
          : nothing}
        ${this.page === 'titanium-svg-button-menu'
          ? html` <titanium-svg-button-menu-demo ?isActive=${this.page === 'titanium-svg-button-menu'}></titanium-svg-button-menu-demo> `
          : nothing}
        ${this.page === 'titanium-tab-control'
          ? html` <titanium-tab-control-demo ?isActive=${this.page === 'titanium-tab-control'}></titanium-tab-control-demo> `
          : nothing}
        ${this.page === 'titanium-toggle-button'
          ? html` <titanium-toggle-button-demo ?isActive=${this.page === 'titanium-toggle-button'}></titanium-toggle-button-demo> `
          : nothing}
        ${this.page === 'titanium-toolbar' ? html` <titanium-toolbar-demo ?isActive=${this.page === 'titanium-toolbar'}></titanium-toolbar-demo> ` : nothing}
        ${this.page === 'titanium-twoline-formfield'
          ? html` <titanium-twoline-formfield-demo ?isActive=${this.page === 'titanium-twoline-formfield'}></titanium-twoline-formfield-demo> `
          : nothing}
        ${this.page === 'titanium-full-page-loading-indicator'
          ? html`
              <titanium-full-page-loading-indicator-demo
                ?isActive=${this.page === 'titanium-full-page-loading-indicator'}
              ></titanium-full-page-loading-indicator-demo>
            `
          : nothing}
        ${this.page === 'titanium-loading-indicator'
          ? html` <titanium-loading-indicator-demo ?isActive=${this.page === 'titanium-loading-indicator'}></titanium-loading-indicator-demo> `
          : nothing}
        ${this.page === 'titanium-offline-notice'
          ? html` <titanium-offline-notice-demo ?isActive=${this.page === 'titanium-offline-notice'}></titanium-offline-notice-demo> `
          : nothing}
        ${this.page === 'titanium-chip-multi-select'
          ? html` <titanium-chip-multi-select-demo ?isActive=${this.page === 'titanium-chip-multi-select'}></titanium-chip-multi-select-demo> `
          : nothing}
        ${this.page === 'titanium-dialog-base'
          ? html` <titanium-dialog-base-demo ?isActive=${this.page === 'titanium-dialog-base'}></titanium-dialog-base-demo> `
          : nothing}
        ${this.page === 'titanium-dialog' ? html` <titanium-dialog-demo ?isActive=${this.page === 'titanium-dialog'}></titanium-dialog-demo> ` : nothing}
        ${this.page === 'confirm-dialog' ? html` <confirm-dialog-demo ?isActive=${this.page === 'confirm-dialog'}></confirm-dialog-demo> ` : nothing}
        ${this.page === 'titanium-styles' ? html` <titanium-styles-demo ?isActive=${this.page === 'titanium-styles'}></titanium-styles-demo> ` : nothing}
        ${this.page === 'titanium-select' ? html` <titanium-select-demo ?isActive=${this.page === 'titanium-select'}></titanium-select-demo> ` : nothing}
        ${this.page === 'titanium-snackbar'
          ? html` <titanium-snackbar-demo ?isActive=${this.page === 'titanium-snackbar'}></titanium-snackbar-demo> `
          : nothing}
        ${this.page === 'titanium-shadow-text'
          ? html` <titanium-shadow-text-demo ?isActive=${this.page === 'titanium-shadow-text'}></titanium-shadow-text-demo> `
          : nothing}
        ${this.page === 'titanium-smart-attachment-input'
          ? html` <titanium-smart-attachment-input-demo ?isActive=${this.page === 'titanium-smart-attachment-input'}></titanium-smart-attachment-input-demo> `
          : nothing}
        ${this.page === 'titanium-card' ? html` <titanium-card-demo ?isActive=${this.page === 'titanium-card'}></titanium-card-demo> ` : nothing}
        ${this.page === 'titanium-youtube-input'
          ? html` <titanium-youtube-input-demo ?isActive=${this.page === 'titanium-youtube-input'}></titanium-youtube-input-demo> `
          : nothing}
        ${this.page === 'titanium-color-input'
          ? html` <titanium-color-input-demo ?isActive=${this.page === 'titanium-color-input'}></titanium-color-input-demo> `
          : nothing}
        ${this.page === 'titanium-show-hide'
          ? html` <titanium-show-hide-demo ?isActive=${this.page === 'titanium-show-hide'}></titanium-show-hide-demo> `
          : nothing}
        ${this.page === 'titanium-duration-input'
          ? html` <titanium-duration-input-demo ?isActive=${this.page === 'titanium-duration-input'}></titanium-duration-input-demo> `
          : nothing}
        <titanium-access-denied-page ?hidden=${this.page !== 'access-denied'}></titanium-access-denied-page>
        <titanium-error-page ?hidden=${this.page !== 'error'} .message=${this.fatalErrorMessage}></titanium-error-page>
      </main-content>

      <titanium-snackbar></titanium-snackbar>
      <titanium-sw-notifier></titanium-sw-notifier>
      <confirm-dialog></confirm-dialog>`;
  }
}

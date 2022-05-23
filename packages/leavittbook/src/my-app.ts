import '@leavittsoftware/titanium-toolbar';
import '@leavittsoftware/user-manager';
import '@leavittsoftware/titanium-snackbar';
import '@leavittsoftware/titanium-loading-indicator';
import '@leavittsoftware/titanium-error-page';
import '@material/mwc-icon';
import '@material/mwc-drawer';
import '@material/mwc-top-app-bar-fixed';
import '@leavittsoftware/titanium-sw-notifier/lib/titanium-sw-notifier';
import '@leavittsoftware/titanium-side-menu/lib/titanium-side-menu-item';
import '@leavittsoftware/profile-picture/lib/profile-picture-menu';
import './shared/story-header';

import { installMediaQueryWatcher } from '@leavittsoftware/titanium-helpers/lib/titanium-media-query';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import page from 'page';
import { h1, p } from '@leavittsoftware/titanium-styles';
import { ChangePathEvent, RedirectPathEvent } from './events';

import {
  PendingStateEvent,
  TitaniumFullPageLoadingIndicatorElement,
} from '@leavittsoftware/titanium-loading-indicator/lib/titanium-full-page-loading-indicator';
import { Drawer } from '@material/mwc-drawer';

const LGLogo = new URL('../images/lg-logo.svg', import.meta.url).href;

@customElement('my-app')
export class MyAppElement extends LitElement {
  @property({ type: Boolean, reflect: true }) public isOnline: boolean = true;

  @state() private page: string | undefined;
  @state() private isDesktop: boolean = false;

  @query('titanium-full-page-loading-indicator') private loadingIndicator: TitaniumFullPageLoadingIndicatorElement & LitElement;
  @query('mwc-drawer') private drawer: Drawer;

  public async firstUpdated() {
    page.start();

    installMediaQueryWatcher('(max-width: 830px)', async matches => {
      this.isDesktop = !matches;
    });

    await this.loadingIndicator.updateComplete;

    this.addEventListener(ChangePathEvent.eventName, (event: ChangePathEvent) => {
      page.show(event.detail.path);
    });

    this.addEventListener(RedirectPathEvent.eventName, (event: RedirectPathEvent) => {
      page.redirect(event.detail.path);
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
    page('/leavitt-date-range', () => this.#changePage('leavitt-date-range', () => import('./demos/leavitt-date-range/leavitt-date-range-demo.js')));
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
    page('/mwc-datefield', () => this.#changePage('mwc-datefield', () => import('./demos/mwc-datefield/mwc-datefield-demo.js')));
    page('/profile-picture', () => this.#changePage('profile-picture', () => import('./demos/profile-picture/profile-picture-demo.js')));
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
    page('/titanium-error-page', () => this.#changePage('titanium-error-page', () => import('./demos/titanium-error-page/titanium-error-page-demo.js')));
    page('/titanium-address-input', () =>
      this.#changePage('titanium-address-input', () => import('./demos/titanium-address-input/titanium-address-input-demo.js'))
    );
    page('/titanium-header', () => this.#changePage('titanium-header', () => import('./demos/titanium-header/titanium-header-demo.js')));
    page('/titanium-button', () => this.#changePage('titanium-button', () => import('./demos/titanium-button/titanium-button-demo.js')));
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
    page('/titanium-page-control', () =>
      this.#changePage('titanium-page-control', () => import('./demos/titanium-page-control/titanium-page-control-demo.js'))
    );
    page('/titanium-progress', () => this.#changePage('titanium-progress', () => import('./components/titanium-progress.js')));
    page('/titanium-search-input', () =>
      this.#changePage('titanium-search-input', () => import('./demos/titanium-search-input/titanium-search-input-demo.js'))
    );
    page('/titanium-side-menu-item', () =>
      this.#changePage('titanium-side-menu-item', () => import('./demos/titanium-side-menu-item/titanium-side-menu-item-demo.js'))
    );

    page('/titanium-svg-button', () => this.#changePage('titanium-svg-button', () => import('./demos/titanium-svg-button/titanium-svg-button-demo.js')));
    page('/titanium-tab-control', () => this.#changePage('titanium-tab-control', () => import('./demos/titanium-tab-control/titanium-tab-control-demo.js')));
    page('/titanium-toolbar', () => this.#changePage('titanium-toolbar', () => import('./components/titanium-toolbar-demo.js')));
    page('/titanium-twoline-formfield', () => this.#changePage('titanium-twoline-formfield', () => import('./components/titanium-twoline-formfield.js')));
    page('/titanium-styles', () => this.#changePage('titanium-styles', () => import('./demos/titanium-styles/titanium-styles-demo.js')));
    page('/titanium-snackbar', () => this.#changePage('titanium-snackbar', () => import('./demos/titanium-snackbar/titanium-snackbar-demo.js')));

    page('*', () => {
      this.#changePage('error');
    });

    page.start();
  }

  #changePage(mainPage: string, importFunction?: () => Promise<unknown>) {
    const handlePageChange = new Promise<void>(async res => {
      this.page = mainPage;

      try {
        await importFunction?.();

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch (error) {
        console.warn(error);
      }
      res();
    });
    this.dispatchEvent(new PendingStateEvent(handlePageChange));
  }

  static styles = [
    h1,
    p,
    css`
      :host {
        --app-primary-color: var(--app-link-color);
        --app-secondary-color: #4285f4;
        --app-text-color: #5f6368;
        --app-light-text-color: #707175;
        --app-dark-text-color: #202124;
        --app-hover-color: #f9f9f9;
        --app-border-color: #dadce0;
        --app-menu-text-color: #5f6368;
        --app-link-color: #1a73e8;
        --material-primary-color: var(--app-secondary-color);
        --material-primary-text-color: var(--app-link-color);
        --material-error-text-color: #da3227;
        --app-accent-color-orange: #f8ad03;
        --app-accent-color-red: #dc3327;
        --app-accent-color-blue: #4285f4;
        --app-accent-color-light-blue: #0288d1;
        --app-accent-color-teal: #00796b;
        --app-accent-color-indigo: #303f9f;
        --app-accent-color-green: #34a853;
        --app-nav-color: #002d56;
        --mdc-theme-primary: var(--app-primary-color);
        --mdc-theme-secondary: var(--app-secondary-color);
        --mdc-text-field-outlined-idle-border-color: var(--app-border-color);
        --mdc-select-outlined-idle-border-color: var(--app-border-color);
        --mdc-icon-font: 'Material Icons Outlined';

        /* Dialog styles */
        --mdc-dialog-max-width: 450px;
        --mdc-typography-headline6-font-family: Metropolis, Roboto, Noto, sans-serif;
        --mdc-typography-headline6-font-weight: 400;
        --mdc-typography-headline6-font-size: 22px;
        --mdc-typography-headline6-line-height: 28px;
        --mdc-dialog-heading-ink-color: var(--app-dark-text-color, #202124);

        display: flex;
        flex-direction: column;
      }

      titanium-snackbar {
        z-index: 7;
      }

      titanium-toolbar {
        display: flex;
        justify-content: space-between;
        z-index: 7;
        padding: 0 12px 0 0;
      }

      titanium-toolbar h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      titanium-toolbar a[logo],
      titanium-toolbar img {
        height: 26px;
        /* Prevent shifting on load */
        min-width: 26px;
        cursor: pointer;
      }

      titanium-toolbar a[logo] {
        margin: 0 12px;
      }

      menu-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
      }

      mwc-drawer {
        padding-top: 48px;
      }

      div[drawer-content] {
        margin-top: 24px;
      }

      div[drawer-content] details {
        user-select: none;
      }

      div[drawer-content] summary {
        padding-left: 24px;
        font-size: 13px;
        padding: 2px 28px;
        border-radius: 0px 50px 50px 0px;
        cursor: pointer;
        color: var(--app-text-color);
        font-weight: 500;
        margin-top: 12px;
      }
      div[drawer-content] summary::marker {
        margin-right: 12px;
      }

      div[drawer-content] summary:hover {
        background: var(--app-hover-color);
      }

      div[drawer-content] a {
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

      div[drawer-content] a mwc-icon {
        --mdc-icon-size: 16px;
      }

      div[drawer-content] a:hover {
        background-color: var(--app-hover-color);
        transition: 0.3s ease;
      }

      div[drawer-content] a[selected] {
        background-color: #e8f0fe;
        fill: #1967d2;
        color: #1967d2;
      }

      div[app-content] {
        margin: 0 24px;
      }

      titanium-error-page {
        margin-top: 24px;
      }

      @media (max-width: 830px) {
        div[app-content] {
          margin: 0 16px;
        }
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
      <user-manager disableAutoload></user-manager>
      <titanium-toolbar>
        <menu-group>
          ${this.isDesktop
            ? html`<a href="/" title="Back to home" logo>
                <img src=${LGLogo} alt="Leavitt Group" />
              </a>`
            : html`<mwc-icon-button icon="menu" @click=${() => (this.drawer.open = !this.drawer.open)}></mwc-icon-button>`}
        </menu-group>
        <h3 title="Leavittbook" ?hidden=${this.isDesktop} @click=${() => page.show('/')} main-title>Leavittbook</h3>
        <profile-picture-menu size="36"></profile-picture-menu>
      </titanium-toolbar>
      <mwc-drawer ?open=${this.isDesktop} hasHeader type=${this.isDesktop ? 'dismissible' : 'modal'}>
        <span slot="title">Component library</span>
        <span slot="subtitle">Leavitt group custom elements</span>
        <div drawer-content>
          <a href="/getting-started" ?selected=${!!this.page?.includes('getting-started')}>
            <mwc-icon><span class="material-icons-outlined"> home </span></mwc-icon>
            <span>Getting started</span>
          </a>
          <section>
            <details open>
              <summary>Titanium</summary>
              <!-- Titanium menu -->
              <a href="/titanium-attachment-input" ?selected=${!!this.page?.includes('titanium-attachment-input')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-attachment-input</span>
              </a>
              <a href="/mwc-datefield" ?selected=${!!this.page?.includes('mwc-datefield')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>mwc-datefield</span>
              </a>

              <a href="/titanium-chip" ?selected=${this.page === 'titanium-chip'}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-chip</span>
              </a>
              <a href="/titanium-chip-multi-select" ?selected=${this.page === 'titanium-chip-multi-select'}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-chip-multi-select</span>
              </a>
              <a href="/titanium-data-table" ?selected=${this.page === 'titanium-data-table'}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-data-table</span>
              </a>
              <a href="/titanium-data-table-header" ?selected=${!!this.page?.includes('titanium-data-table-header')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-data-table-header</span>
              </a>
              <a href="/titanium-data-table-item" ?selected=${!!this.page?.includes('titanium-data-table-item')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-data-table-item</span>
              </a>
              <a href="/titanium-input-validator" ?selected=${!!this.page?.includes('titanium-input-validator')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-input-validator</span>
              </a>
              <a href="/titanium-access-denied-page" ?selected=${!!this.page?.includes('titanium-access-denied-page')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-access-denied-page</span>
              </a>
              <a href="/titanium-address-input" ?selected=${!!this.page?.includes('titanium-address-input')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-address-input</span>
              </a>
              <a href="/titanium-card-list-item" ?selected=${!!this.page?.includes('titanium-card-list-item')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-card-list-item</span>
              </a>
              <a href="/titanium-card-two-line-list-item" ?selected=${!!this.page?.includes('titanium-card-two-line-list-item')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-card-two-line-list-item</span>
              </a>
              <a href="/titanium-error-page" ?selected=${!!this.page?.includes('titanium-error-page')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-error-page</span>
              </a>
              <a href="/titanium-full-page-loading-indicator" ?selected=${!!this.page?.includes('titanium-full-page-loading-indicator')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-full-page-loading-indicator</span>
              </a>
              <a href="/titanium-loading-indicator" ?selected=${!!this.page?.includes('titanium-loading-indicator')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-loading-indicator</span>
              </a>
              <a href="/titanium-dialog-base" ?selected=${!!this.page?.includes('titanium-dialog-base')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-dialog-base</span>
              </a>
              <a href="/titanium-dialog" ?selected=${this.page === 'titanium-dialog'}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-dialog</span>
              </a>
              <a href="/confirm-dialog" ?selected=${this.page === 'confirm-dialog'}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>confirm-dialog</span>
              </a>
              <a href="/titanium-header" ?selected=${!!this.page?.includes('titanium-header')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-header</span>
              </a>
              <a href="/titanium-page-control" ?selected=${!!this.page?.includes('titanium-page-control')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-page-control</span>
              </a>
              <a href="/titanium-progress" ?selected=${!!this.page?.includes('titanium-progress')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-progress</span>
              </a>
              <a href="/titanium-search-input" ?selected=${!!this.page?.includes('titanium-search-input')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-search-input</span>
              </a>
              <a href="/titanium-side-menu-item" ?selected=${!!this.page?.includes('titanium-side-menu-item')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-side-menu-item</span>
              </a>
              <a href="/titanium-styles" ?selected=${!!this.page?.includes('titanium-styles')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-styles</span>
              </a>
              <a href="/titanium-tab-control" ?selected=${this.page === 'titanium-tab-control'}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-tab-control</span>
              </a>
              <a href="/titanium-toolbar" ?selected=${!!this.page?.includes('titanium-toolbar')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-toolbar</span>
              </a>
              <a href="/titanium-twoline-formfield" ?selected=${!!this.page?.includes('titanium-twoline-formfield')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-twoline-formfield</span>
              </a>
              <a href="/titanium-snackbar" ?selected=${!!this.page?.includes('titanium-snackbar')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-snackbar</span>
              </a>
            </details>
          </section>

          <section>
            <details open>
              <summary>Leavitt</summary>
              <!-- Leavitt menu -->
              <a href="/profile-picture" ?selected=${!!this.page?.includes('profile-picture')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>profile-picture</span>
              </a>
              <a href="/leavitt-date-range" ?selected=${!!this.page?.includes('leavitt-date-range')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>leavitt-date-range</span>
              </a>
              <a href="/leavitt-file-explorer" ?selected=${!!this.page?.includes('leavitt-file-explorer')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>leavitt-file-explorer</span>
              </a>
              <a href="/leavitt-person-select" ?selected=${!!this.page?.includes('leavitt-person-select')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>leavitt-person-select</span>
              </a>
              <a href="/leavitt-person-company-select" ?selected=${!!this.page?.includes('leavitt-person-company-select')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>leavitt-person-company-select</span>
              </a>
              <a href="/leavitt-person-group-select" ?selected=${!!this.page?.includes('leavitt-person-group-select')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>leavitt-person-group-select</span>
              </a>
            </details>
          </section>
          <section>
            <details>
              <summary>Deprecated</summary>
              <a href="/titanium-button" ?selected=${!!this.page?.includes('titanium-button')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-button</span>
              </a>
              <a href="/titanium-svg-button" ?selected=${!!this.page?.includes('titanium-svg-button')}>
                <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
                <span>titanium-svg-button</span>
              </a>
            </details>
          </section>
        </div>
        <div app-content slot="appContent">
          ${this.page === 'getting-started' ? html`<getting-started></getting-started>` : nothing}
          ${this.page === 'error' ? html`<div>Oops, something went wrong.</div>` : nothing}
          <!-- Stories -->
          ${this.page === 'titanium-attachment-input'
            ? html` <titanium-attachment-input-demo ?isActive=${this.page === 'titanium-attachment-input'}></titanium-attachment-input-demo> `
            : nothing}
          ${this.page === 'leavitt-file-explorer'
            ? html` <leavitt-file-explorer-demo ?isActive=${this.page === 'leavitt-file-explorer'}></leavitt-file-explorer-demo> `
            : nothing}
          ${this.page === 'mwc-datefield' ? html` <mwc-datefield-demo ?isActive=${this.page === 'mwc-datefield'}></mwc-datefield-demo> ` : nothing}
          ${this.page === 'leavitt-date-range'
            ? html` <leavitt-date-range-demo ?isActive=${this.page === 'leavitt-date-range'}></leavitt-date-range-demo> `
            : nothing}
          ${this.page === 'leavitt-person-select'
            ? html` <leavitt-person-select-demo ?isActive=${this.page === 'leavitt-person-select'}></leavitt-person-select-demo> `
            : nothing}
          ${this.page === 'leavitt-person-company-select'
            ? html` <leavitt-person-company-select-demo ?isActive=${this.page === 'leavitt-person-company-select'}></leavitt-person-company-select-demo> `
            : nothing}
          ${this.page === 'leavitt-person-group-select'
            ? html` <leavitt-person-group-select-demo ?isActive=${this.page === 'leavitt-person-group-select'}></leavitt-person-group-select-demo> `
            : nothing}
          ${this.page === 'profile-picture' ? html` <profile-picture-demo ?isActive=${this.page === 'profile-picture'}></profile-picture-demo> ` : nothing}
          ${this.page === 'titanium-button' ? html` <titanium-button-demo ?isActive=${this.page === 'titanium-button'}></titanium-button-demo> ` : nothing}
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
          ${this.page === 'titanium-progress'
            ? html` <titanium-progress-demo ?isActive=${this.page === 'titanium-progress'}></titanium-progress-demo> `
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
          ${this.page === 'titanium-svg-button'
            ? html` <titanium-svg-button-demo ?isActive=${this.page === 'titanium-svg-button'}></titanium-svg-button-demo> `
            : nothing}
          ${this.page === 'titanium-tab-control'
            ? html` <titanium-tab-control-demo ?isActive=${this.page === 'titanium-tab-control'}></titanium-tab-control-demo> `
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
          ${this.page === 'titanium-chip-multi-select'
            ? html` <titanium-chip-multi-select-demo ?isActive=${this.page === 'titanium-chip-multi-select'}></titanium-chip-multi-select-demo> `
            : nothing}
          ${this.page === 'titanium-dialog-base'
            ? html` <titanium-dialog-base-demo ?isActive=${this.page === 'titanium-dialog-base'}></titanium-dialog-base-demo> `
            : nothing}
          ${this.page === 'titanium-dialog' ? html` <titanium-dialog-demo ?isActive=${this.page === 'titanium-dialog'}></titanium-dialog-demo> ` : nothing}
          ${this.page === 'confirm-dialog' ? html` <confirm-dialog-demo ?isActive=${this.page === 'confirm-dialog'}></confirm-dialog-demo> ` : nothing}
          ${this.page === 'titanium-styles' ? html` <titanium-styles-demo ?isActive=${this.page === 'titanium-styles'}></titanium-styles-demo> ` : nothing}
          ${this.page === 'titanium-snackbar'
            ? html` <titanium-snackbar-demo ?isActive=${this.page === 'titanium-snackbar'}></titanium-snackbar-demo> `
            : nothing}
        </div>
      </mwc-drawer>
      <titanium-snackbar></titanium-snackbar>
      <titanium-sw-notifier></titanium-sw-notifier>
    `;
  }
}

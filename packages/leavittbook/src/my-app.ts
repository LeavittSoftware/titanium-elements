import '@leavittsoftware/titanium-toolbar';
import '@leavittsoftware/user-manager';
import '@leavittsoftware/titanium-snackbar';
import '@leavittsoftware/titanium-loading-indicator';
import '@leavittsoftware/titanium-error-page';
import '@material/mwc-icon';
import '@leavittsoftware/titanium-offline-notice/lib/titanium-offline-notice';
import '@leavittsoftware/titanium-sw-notifier/lib/titanium-sw-notifier';
import '@leavittsoftware/titanium-tab-control/lib/titanium-tab-control';
import '@leavittsoftware/titanium-side-menu/lib/titanium-side-menu-item';
import '@leavittsoftware/titanium-dialog/lib/confirm-dialog';
import './shared/story-header';

import { installMediaQueryWatcher } from '@leavittsoftware/titanium-helpers/lib/titanium-media-query';
import { html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import page from 'page';
import { h1, p } from '@leavittsoftware/titanium-styles';
import { ChangePathEvent, RedirectPathEvent } from './events';

import {
  PendingStateEvent,
  TitaniumFullPageLoadingIndicatorElement,
} from '@leavittsoftware/titanium-loading-indicator/lib/titanium-full-page-loading-indicator';
import { ConfirmDialogOpenEvent } from '@leavittsoftware/titanium-dialog/lib/confirm-dialog-open-event';
import ConfirmDialogElement from '@leavittsoftware/titanium-dialog/lib/confirm-dialog';
import { myAppStyles } from './styles/my-app-styles';
import DesktopMenuStyles from './styles/desktop-menu-styles';

const LGLogo = new URL('../images/lg-logo.svg', import.meta.url).href;
const LGMark = new URL('../images/lg-mark.svg', import.meta.url).href;

@customElement('my-app')
export class MyAppElement extends LitElement {
  @property({ type: Boolean, reflect: true }) public isOnline: boolean = true;

  @state() private page: string | undefined;
  @state() private isDesktop: boolean = true;

  @query('confirm-dialog') private confirmDialog: ConfirmDialogElement;
  @query('titanium-full-page-loading-indicator') private loadingIndicator: TitaniumFullPageLoadingIndicatorElement & LitElement;

  public async firstUpdated() {
    page.start();

    installMediaQueryWatcher('(max-width: 830px)', async matches => {
      this.isDesktop = !matches;
    });

    await this.loadingIndicator.updateComplete;

    this.addEventListener(ConfirmDialogOpenEvent.eventType, async (e: ConfirmDialogOpenEvent) => {
      this.confirmDialog.handleEvent(e);
    });

    this.addEventListener(ChangePathEvent.eventName, (event: ChangePathEvent) => {
      page.show(event.detail.path);
    });

    this.addEventListener(RedirectPathEvent.eventName, (event: RedirectPathEvent) => {
      page.redirect(event.detail.path);
    });

    page('/', async () => {
      page.show('/home');
    });
    page('/home', () => this.#changePage('home'));
    page('/leavitt-file-explorer', () => this.#changePage('leavitt-file-explorer', () => import('./components/leavitt-file-explorer.js')));
    page('/leavitt-person-select', () => this.#changePage('leavitt-person-select', () => import('./components/leavitt-person-select.js')));
    page('/mwc-datefield', () => this.#changePage('mwc-datefield', () => import('./components/mwc-datefield-demo.js')));
    page('/profile-picture', () => this.#changePage('profile-picture', () => import('./components/profile-picture-demo.js')));
    page('/titanium-access-denied-page', () => this.#changePage('titanium-access-denied-page', () => import('./components/titanium-access-denied-page.js')));
    page('/titanium-error-page', () => this.#changePage('titanium-error-page', () => import('./components/titanium-error-page.js')));
    page('/titanium-header', () => this.#changePage('titanium-header', () => import('./components/titanium-header.js')));
    page('/titanium-button', () => this.#changePage('titanium-button', () => import('./components/titanium-button.js')));
    page('/titanium-chip', () => this.#changePage('titanium-chip', () => import('./components/titanium-chip-demo.js')));
    page('/titanium-card-list-item', () => this.#changePage('titanium-card-list-item', () => import('./components/titanium-card-list-item-demo.js')));
    page('/titanium-progress', () => this.#changePage('titanium-progress', () => import('./components/titanium-progress.js')));
    page('/titanium-search-input', () => this.#changePage('titanium-search-input', () => import('./components/titanium-search-input-demo.js')));
    page('/titanium-side-menu-item', () => this.#changePage('titanium-side-menu-item', () => import('./components/titanium-side-menu-item-demo.js')));
    page('/titanium-tab-control', () => this.#changePage('titanium-tab-control', () => import('./components/titanium-tab-control-demo.js')));
    page('/titanium-toolbar', () => this.#changePage('titanium-toolbar', () => import('./components/titanium-toolbar-demo.js')));
    page('/titanium-twoline-formfield', () => this.#changePage('titanium-twoline-formfield', () => import('./components/titanium-twoline-formfield.js')));

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

  static styles = [h1, p, myAppStyles, DesktopMenuStyles];

  render() {
    return html`
      <titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
      <user-manager disableAutoload></user-manager>
      <titanium-toolbar
        ><a href="/" title="Back to home">
          <img src=${this.isDesktop ? LGLogo : LGMark} alt="Leavitt Group logo" />
        </a>
        <h3 title="Leavittbook" ?hidden=${this.isDesktop} @click=${() => page.show('/')} main-title>Leavittbook</h3>
      </titanium-toolbar>

      <desktop-menu ?hidden=${!this.isDesktop}>
        <h3 main-title="">Leavittbook</h3>
        <section>
          <details>
            <summary>Leavitt</summary>
            <!-- Leavitt menu -->
            <a href="/home" ?selected=${!!this.page?.includes('home')}>
              <mwc-icon><span class="material-icons-outlined"> home </span></mwc-icon>
              <span>Home</span>
            </a>
            <a href="/leavitt-file-explorer" ?selected=${!!this.page?.includes('leavitt-file-explorer')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>leavitt-file-explorer</span>
            </a>
            <a href="/leavitt-person-select" ?selected=${!!this.page?.includes('leavitt-person-select')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>leavitt-person-select</span>
            </a>
          </details>
        </section>
        <section>
          <details>
            <summary>Titanium</summary>
            <!-- Titanium menu -->
            <a href="/mwc-datefield" ?selected=${!!this.page?.includes('mwc-datefield')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>mwc-datefield</span>
            </a>
            <a href="/profile-picture" ?selected=${!!this.page?.includes('profile-picture')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>profile-picture</span>
            </a>
            <a href="/titanium-button" ?selected=${!!this.page?.includes('titanium-button')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>titanium-button</span>
            </a>
            <a href="/titanium-chip" ?selected=${!!this.page?.includes('titanium-chip')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>titanium-chip</span>
            </a>
            <a href="/titanium-access-denied-page" ?selected=${!!this.page?.includes('titanium-access-denied-page')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>titanium-access-denied-page</span>
            </a>
            <a href="/titanium-card-list-item" ?selected=${!!this.page?.includes('titanium-card-list-item')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>titanium-card-list-item</span>
            </a>
            <a href="/titanium-error-page" ?selected=${!!this.page?.includes('titanium-error-page')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>titanium-error-page</span>
            </a>
            <a href="/titanium-header" ?selected=${!!this.page?.includes('titanium-header')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>titanium-header</span>
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
          </details>
        </section>
        <section>
          <details>
            <summary>Deprecated</summary>
            <!-- Deprecated menu -->
          </details>
        </section>
      </desktop-menu>

      <toolbar-placeholder></toolbar-placeholder>

      <titanium-tab-control ?hidden=${this.isDesktop}>
        <titanium-tab-control-item href="/home" ?selected=${!!this.page?.includes('home')}>Home</titanium-tab-control-item>
        <titanium-tab-control-item href="/leavitt-file-explorer" ?selected=${!!this.page?.includes('leavitt-file-explorer')}
          >leavitt-file-explorer</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/leavitt-person-select" ?selected=${!!this.page?.includes('leavitt-person-select')}
          >leavitt-person-select</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/mwc-datefield" ?selected=${!!this.page?.includes('mwc-datefield')}>mwc-datefield</titanium-tab-control-item>
        <titanium-tab-control-item href="/profile-picture" ?selected=${!!this.page?.includes('profile-picture')}>profile-picture</titanium-tab-control-item>
        <titanium-tab-control-item href="/titanium-button" ?selected=${!!this.page?.includes('titanium-button')}>titanium-button</titanium-tab-control-item>
        <titanium-tab-control-item href="/titanium-chip" ?selected=${!!this.page?.includes('titanium-chip')}>titanium-chip</titanium-tab-control-item>
        <titanium-tab-control-item href="/titanium-card-list-item" ?selected=${!!this.page?.includes('titanium-card-list-item')}
          >titanium-card-list-item</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/titanium-progress" ?selected=${!!this.page?.includes('titanium-progress')}
          >titanium-progress</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/titanium-access-denied-page" ?selected=${!!this.page?.includes('/titanium-access-denied-page')}
          >/titanium-access-denied-page</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/titanium-error-page" ?selected=${!!this.page?.includes('/titanium-error-page')}
          >/titanium-error-page</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/titanium-header" ?selected=${!!this.page?.includes('/titanium-header')}>/titanium-header</titanium-tab-control-item>
        <titanium-tab-control-item href="/titanium-search-input" ?selected=${!!this.page?.includes('titanium-search-input')}
          >titanium-search-input</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/titanium-side-menu-item" ?selected=${!!this.page?.includes('titanium-side-menu-item')}
          >titanium-side-menu-item</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/titanium-tab-control" ?selected=${this.page === 'titanium-tab-control'}
          >titanium-tab-control</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/titanium-toolbar" ?selected=${!!this.page?.includes('titanium-toolbar')}>titanium-toolbar</titanium-tab-control-item>
        <titanium-tab-control-item href="/titanium-twoline-formfield" ?selected=${!!this.page?.includes('titanium-twoline-formfield')}
          >titanium-twoline-formfield</titanium-tab-control-item
        >
      </titanium-tab-control>

      <main-content>
        <width-limiter>
          ${this.page === 'home'
            ? html`
                <div>
                  <story-header name="Leavittbook" tagName="@leavittsoftware" klass="A showcase of our components!"></story-header>
                  <h1></h1>
                  <p></p>
                </div>
              `
            : nothing}
          ${this.page === 'error' ? html`<div>Oops, something went wrong.</div>` : nothing}
          <!-- Stories -->
          ${this.page === 'leavitt-file-explorer'
            ? html` <leavitt-file-explorer-demo ?isActive=${this.page === 'leavitt-file-explorer'}></leavitt-file-explorer-demo> `
            : nothing}
          ${this.page === 'mwc-datefield' ? html` <mwc-datefield-demo ?isActive=${this.page === 'mwc-datefield'}></mwc-datefield-demo> ` : nothing}
          ${this.page === 'leavitt-person-select'
            ? html` <leavitt-person-select-demo ?isActive=${this.page === 'leavitt-person-select'}></leavitt-person-select-demo> `
            : nothing}
          ${this.page === 'profile-picture' ? html` <profile-picture-demo ?isActive=${this.page === 'profile-picture'}></profile-picture-demo> ` : nothing}
          ${this.page === 'titanium-button' ? html` <titanium-button-demo ?isActive=${this.page === 'titanium-button'}></titanium-button-demo> ` : nothing}
          ${this.page === 'titanium-chip' ? html` <titanium-chip-demo ?isActive=${this.page === 'titanium-chip'}></titanium-chip-demo> ` : nothing}
          ${this.page === 'titanium-card-list-item'
            ? html` <titanium-card-list-item-demo ?isActive=${this.page === 'titanium-card-list-item'}></titanium-card-list-item-demo> `
            : nothing}
          ${this.page === 'titanium-access-denied-page'
            ? html` <titanium-access-denied-page-demo ?isActive=${this.page === 'titanium-access-denied-page'}></titanium-access-denied-page-demo> `
            : nothing}
          ${this.page === 'titanium-error-page'
            ? html` <titanium-error-page-demo ?isActive=${this.page === 'titanium-error-page'}></titanium-error-page-demo> `
            : nothing}
          ${this.page === 'titanium-header' ? html` <titanium-header-demo ?isActive=${this.page === 'titanium-header'}></titanium-header-demo> ` : nothing}
          ${this.page === 'titanium-progress'
            ? html` <titanium-progress-demo ?isActive=${this.page === 'titanium-progress'}></titanium-progress-demo> `
            : nothing}
          ${this.page === 'titanium-search-input'
            ? html` <titanium-search-input-demo ?isActive=${this.page === 'titanium-search-input'}></titanium-search-input-demo> `
            : nothing}
          ${this.page === 'titanium-side-menu-item'
            ? html` <titanium-side-menu-item-demo ?isActive=${this.page === 'titanium-side-menu-item'}></titanium-side-menu-item-demo> `
            : nothing}
          ${this.page === 'titanium-tab-control'
            ? html` <titanium-tab-control-demo ?isActive=${this.page === 'titanium-tab-control'}></titanium-tab-control-demo> `
            : nothing}
          ${this.page === 'titanium-toolbar' ? html` <titanium-toolbar-demo ?isActive=${this.page === 'titanium-toolbar'}></titanium-toolbar-demo> ` : nothing}
          ${this.page === 'titanium-twoline-formfield'
            ? html` <titanium-twoline-formfield-demo ?isActive=${this.page === 'titanium-twoline-formfield'}></titanium-twoline-formfield-demo> `
            : nothing}
        </width-limiter>
      </main-content>
      <titanium-snackbar></titanium-snackbar>
      <titanium-offline-notice @is-online-changed=${(e: CustomEvent<boolean>) => (this.isOnline = e.detail)}> </titanium-offline-notice>
      <titanium-sw-notifier></titanium-sw-notifier>
      <confirm-dialog></confirm-dialog>
    `;
  }
}

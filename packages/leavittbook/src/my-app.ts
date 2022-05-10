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
    page('/titanium-access-denied-page', () => this.#changePage('titanium-access-denied-page', () => import('./components/titanium-access-denied-page.js')));
    page('/titanium-button', () => this.#changePage('titanium-button', () => import('./components/titanium-button.js')));
    page('/titanium-card-list-item', () => this.#changePage('titanium-card-list-item', () => import('./components/titanium-card-list-item-demo.js')));
    page('/titanium-twoline-formfield', () => this.#changePage('titanium-twoline-formfield', () => import('./components/titanium-twoline-formfield.js')));
    page('/leavitt-person-select', () => this.#changePage('leavitt-person-select', () => import('./components/leavitt-person-select.js')));

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
          </details>
        </section>
        <section>
          <details>
            <summary>Titanium</summary>
            <!-- Titanium menu -->
            <a href="/titanium-button" ?selected=${!!this.page?.includes('titanium-button')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>titanium-button</span>
            </a>
            <a href="/titanium-access-denied-page" ?selected=${!!this.page?.includes('titanium-access-denied-page')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>titanium-access-denied-page</span>
            </a>
            <a href="/titanium-card-list-item" ?selected=${!!this.page?.includes('titanium-card-list-item')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>titanium-card-list-item</span>
            </a>
            <a href="/titanium-twoline-formfield" ?selected=${!!this.page?.includes('titanium-twoline-formfield')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>titanium-twoline-formfield</span>
            </a>
            <a href="/leavitt-person-select" ?selected=${!!this.page?.includes('leavitt-person-select')}>
              <mwc-icon><span class="material-icons-outlined"> library_books </span></mwc-icon>
              <span>leavitt-person-select</span>
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
        <titanium-tab-control-item href="/titanium-button" ?selected=${!!this.page?.includes('titanium-button')}>titanium-button</titanium-tab-control-item>
        <titanium-tab-control-item href="/titanium-card-list-item" ?selected=${!!this.page?.includes('titanium-card-list-item')}
          >titanium-card-list-item</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/titanium-access-denied-page" ?selected=${!!this.page?.includes('/titanium-access-denied-page')}
          >/titanium-access-denied-page</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/titanium-twoline-formfield" ?selected=${!!this.page?.includes('titanium-twoline-formfield')}
          >titanium-twoline-formfield</titanium-tab-control-item
        >
        <titanium-tab-control-item href="/leavitt-person-select" ?selected=${!!this.page?.includes('leavitt-person-select')}
          >leavitt-person-select</titanium-tab-control-item
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
          ${this.page === 'titanium-button' ? html` <titanium-button-demo ?isActive=${this.page === 'titanium-button'}></titanium-button-demo> ` : nothing}
          ${this.page === 'titanium-card-list-item'
            ? html` <titanium-card-list-item-demo ?isActive=${this.page === 'titanium-card-list-item'}></titanium-card-list-item-demo> `
            : nothing}
          ${this.page === 'titanium-access-denied-page'
            ? html` <titanium-access-denied-page-demo ?isActive=${this.page === 'titanium-access-denied-page'}></titanium-access-denied-page-demo> `
            : nothing}
          ${this.page === 'titanium-twoline-formfield'
            ? html` <titanium-twoline-formfield-demo ?isActive=${this.page === 'titanium-twoline-formfield'}></titanium-twoline-formfield-demo> `
            : nothing}
          ${this.page === 'leavitt-person-select'
            ? html` <leavitt-person-select-demo ?isActive=${this.page === 'leavitt-person-select'}></leavitt-person-select-demo> `
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

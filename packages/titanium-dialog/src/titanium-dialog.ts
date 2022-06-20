import '@material/mwc-button';
import { css, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import { TitaniumNativeDialogBaseElement } from './titanium-native-dialog-base';

/**
 * Material design inspired dialog
 *
 * @element titanium-dialog
 *
 * @fires opening - Fired when opening animation begins
 * @fires opened - Fired after open animation is complete
 * @fires closing - Fired when closing animation begins
 * @fires closed - Fired after closing animation is complete
 * @fires removed - Fired when element is removed from the DOM
 *
 * @slot content - dialog content
 * @slot actions - dialog buttons (if provided will overwrite primaryAction and secondaryAction slots)
 * @slot primaryAction - primaryDialog button slot (if provided will overwrite the default close button)
 * @slot secondaryAction - secondaryAction button slot
 *
 * @cssprop  [--titanium-dialog-background-color=#ffffff] - Background color of the dialog
 * @cssprop {<length> | <percentage> | none | max-content | min-content | fit-content | fill-available} [--titanium-dialog-max-width=calc(100vh - 32px)] - max-width of dialog
 * @cssprop {<length> | <percentage> | none | max-content | min-content | fit-content | fill-available} [--titanium-dialog-min-width=none] - min-width of dialog
 * @cssprop {<length> | <percentage> | none | max-content | min-content | fit-content | fill-available} [--titanium-dialog-max-height=none] - max-height of dialog
 * @cssprop {<length> | <percentage> | none | max-content | min-content | fit-content | fill-available} [--titanium-dialog-min-height=calc(100vh - 32px)] - min-height of dialog
 * @cssprop {Color} [--app-border-color=#dadce0] - Dialog border color
 *
 */
@customElement('titanium-dialog')
export class TitaniumDialogElement extends TitaniumNativeDialogBaseElement {
  /**
   * Dialog title text
   */
  @property({ type: String }) header: string;

  /**
   * Disables momentum-based scrolling on (webkit only)
   */
  @property({ type: Boolean, reflect: true }) disableSmoothScroll: boolean = false;

  /**
   * Prevents dialog content from scrolling.
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-scroll' }) disableScroll: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'prevent-scroll' }) protected preventScroll: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'is-scrolling' }) protected isScrolling: boolean = false;

  @property({ type: String }) overflowNodeNames = 'MWC-SELECT';

  @query('main', true) protected mainElement!: HTMLElement;

  async firstUpdated() {
    await super.firstUpdated();
    const observer = new ResizeObserver(() => {
      if (!this.disableScroll) {
        this.isScrolling = this.mainElement.scrollHeight > this.mainElement.offsetHeight;
      }
    });

    observer.observe(this.mainElement);

    // experimental: mwc-select support
    // if the dialog doesn't have overflowing content (scrolling y),
    // turn off overflow-y when the select is opened
    this.addEventListener('opening', e => {
      if (!this.disableScroll && e.target instanceof Element && this.overflowNodeNames?.split(',')?.includes(e.target?.nodeName) && !this.isScrolling) {
        this.preventScroll = true;
      }
    });

    this.addEventListener('closed', e => {
      if (!this.disableScroll && e.target instanceof Element && this.overflowNodeNames?.split(',')?.includes(e.target?.nodeName) && !this.isScrolling) {
        this.preventScroll = false;
      }
    });
  }

  static styles = [
    ...TitaniumNativeDialogBaseElement.styles,
    h1,
    p,
    css`
      h1 {
        display: block;
        padding: 18px 24px 9px;
      }

      main {
        flex: 1 1 auto;
        padding: 0 24px 16px 24px;
      }

      :host(:not([disable-scroll])) main {
        overflow-y: auto;
      }

      :host([prevent-scroll]) main {
        overflow-y: inherit !important;
      }

      :host([is-scrolling]) h1 {
        border-bottom: 1px solid var(--app-border-color, #dadce0);
        padding: 16px 24px;
      }

      :host([is-scrolling]:not([disableSmoothScroll])) main {
        -webkit-overflow-scrolling: touch;
      }

      :host([is-scrolling]) footer {
        border-top: 1px solid var(--app-border-color, #dadce0);
      }

      footer {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        justify-content: end;

        padding: 8px;
        gap: 8px;
      }
    `,
  ];

  renderSlot() {
    return html`
      <h1>${this.header}</h1>
      <main>
        <slot></slot>
      </main>

      <footer>
        <slot name="actions">
          <slot name="secondaryAction"></slot>
          <slot name="primaryAction"><mwc-button @click=${() => this.close('close')} label="CLOSE"></mwc-button></slot>
        </slot>
      </footer>
    `;
  }
}

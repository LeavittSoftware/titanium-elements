import '@material/mwc-button';
import { css, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { TitaniumDialogBaseElement } from './titanium-dialog-base';
import { h1, p } from '@leavittsoftware/titanium-styles';

/**
 * Material design inspired dialog
 *
 * @element titanium-dialog
 *
 * @slot content - dialog content
 * @slot actions - dialog buttons (if provided will overwrite the default close button)
 *
 * @cssprop {Color} [--titanium-dialog-background-color=#ffffff] - Background color of the dialog
 * @cssprop {<length> | <percentage> | none | max-content | min-content | fit-content | fill-available} [--titanium-dialog-max-width=none] - Max-width of dialog container
 * @cssprop {Color} [--app-border-color=#dadce0] - Dialog border color
 */
@customElement('titanium-dialog')
export class TitaniumDialogElement extends TitaniumDialogBaseElement {
  /**
   * Dialog title text
   */
  @property({ type: String }) header: string;

  /**
   * Disables momentum-based scrolling on (webkit only)
   */
  @property({ type: Boolean, reflect: true }) disableSmoothScroll: boolean = false;

  /**
   * Allows dialog content to scroll.  (automatically controlled based on content and viewport size)
   */
  @property({ type: Boolean, reflect: true }) protected scrolls: boolean = false;

  @query('section') section: HTMLElement;

  afterOpen() {
    // Experimental way to determine if scroll bar is present.
    // Prevents user from having to declare if modal is scrollable.
    // TODO: Use Resize observers in the future......
    this.scrolls = this.section.scrollHeight > this.section.offsetHeight;
  }

  static styles = [
    ...TitaniumDialogBaseElement.styles,
    h1,
    p,
    css`
      h1 {
        display: block;
        padding: 24px 24px 16px 24px;
      }

      section[paragraph] {
        padding: 8px 24px 16px 24px;
        overflow-y: auto;
      }

      :host([scrolls]) h1 {
        border-bottom: 1px solid var(--app-border-color, #dadce0);
        padding: 16px 24px;
      }

      :host([scrolls]:not([disableSmoothScroll])) section {
        -webkit-overflow-scrolling: touch;
      }

      :host([scrolls]) footer {
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
      <section paragraph>
        <slot name="content"></slot>
      </section>

      <footer>
        <slot name="actions">
          ${this.focusTrap
            ? ''
            : html`
                <mwc-button
                  @click=${(e: Event) => {
                    e.preventDefault();
                    this.close('close-click');
                  }}
                  label="CLOSE"
                >
                </mwc-button>
              `}
        </slot>
      </footer>
    `;
  }
}

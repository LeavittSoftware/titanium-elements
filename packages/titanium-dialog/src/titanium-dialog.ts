import '@leavittsoftware/titanium-button';
import { css, customElement, html, property, query } from 'lit-element';
import { TitaniumDialogBaseElement } from './titanium-dialog-base';

/**
 * Material design inspired dialog
 *
 * @element titanium-dialog
 *
 * @slot content - dialog content
 * @slot actions - dialog buttons (if provided will overwrite the default close button)
 *
 * @cssprop {Color} --titanium-dialog-background-color - Background color of the dialog
 * @cssprop {Color} --app-light-text-color - Content text color
 * @cssprop {Color} --app-dark-text-color - Dialog header color
 * @cssprop {Color} --app-border-color - Dialog border color
 */
@customElement('titanium-dialog')
export class TitaniumDialogElement extends TitaniumDialogBaseElement {
  /**
   * Dialog title
   */
  @property({ type: String }) title: string;

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

  static styles = css`
    ${TitaniumDialogBaseElement.styles}
    header {
      font-family: Metropolis, 'Roboto', 'Noto', sans-serif;
      font-size: 22px;
      color: var(--app-dark-text-color, #202124);
      line-height: 28px;
      font-weight: 400;
      letter-spacing: 0.0125em;
      padding: 24px 24px 16px 24px;
    }

    section {
      color: var(--app-dark-text-color, #202124);
      padding: 8px 24px 16px 24px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      letter-spacing: 0.5px;
      overflow-y: auto;
    }

    :host([scrolls]) header {
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
      display: flex;
      flex-direction: row-reverse;
      padding: 10px;
    }
  `;

  renderSlot() {
    return html`
      <header>${this.title}</header>
      <section>
        <slot name="content"></slot>
      </section>

      <footer>
        <slot name="actions"
          ><titanium-button
            @click=${(e: Event) => {
              e.preventDefault();
              this.close('close-click');
            }}
          >
            CLOSE
          </titanium-button>
        </slot>
      </footer>
    `;
  }
}

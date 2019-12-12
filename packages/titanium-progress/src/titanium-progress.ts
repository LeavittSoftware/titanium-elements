import { customElement, html, LitElement, property, css } from 'lit-element';

/**
 * A simple progress indicator bar.
 *
 * @element titanium-progress
 *
 * @cssprop {Color} --app-primary-color - Progress bar color
 */
@customElement('titanium-progress')
export class TitaniumProgressElement extends LitElement {
  /**
   *  Whether or not the progress should be disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   *  Whether or not the progress should be hidden.
   */
  @property({ type: Boolean, reflect: true }) hidden: boolean = false;

  static styles = css`
    :host {
      display: block;
      position: relative;
      height: 5px;
      overflow-x: hidden;
    }

    :host([hidden]) {
      display: none;
    }

    .line {
      position: absolute;
      opacity: 0.4;
      background: var(--app-primary-color, #3b95ff);
      width: 150%;
      height: 5px;
    }

    .subline {
      position: absolute;
      background: var(--app-primary-color, #3b95ff);
      height: 5px;
    }

    .inc {
      animation: increase 3s infinite;
    }

    .dec {
      animation: decrease 3s 0.5s infinite;
    }

    :host([disabled]) .inc,
    :host([disabled]) .dec,
    :host([hidden]) .inc,
    :host([hidden]) .dec {
      -webkit-animation-play-state: paused;
      animation-play-state: paused;
    }

    :host([reverse]) .inc {
      animation: increase-right 1s infinite;
    }

    :host([reverse]) .dec {
      animation: decrease-right 1s 0.5s infinite;
    }

    @keyframes increase-right {
      from {
        right: -5%;
        width: 5%;
      }

      to {
        right: 130%;
        width: 100%;
      }
    }

    @keyframes increase {
      from {
        left: -5%;
        width: 5%;
      }

      to {
        left: 130%;
        width: 100%;
      }
    }

    @keyframes decrease {
      from {
        left: -80%;
        width: 80%;
      }

      to {
        left: 110%;
        width: 10%;
      }
    }

    @keyframes decrease-right {
      from {
        right: -80%;
        width: 80%;
      }

      to {
        right: 110%;
        width: 10%;
      }
    }
  `;

  render() {
    return html`
      <div class="line"></div>
      <div class="subline inc"></div>
      <div class="subline dec"></div>
    `;
  }
}

import { css, customElement, html, LitElement, property } from 'lit-element';

/**
 * A pre-styled error page
 *
 * @element titanium-error-page
 *
 * @cssprop {Color} --app-text-color - Text and heading color
 */

@customElement('titanium-error-page')
export class TitaniumErrorPageElement extends LitElement {
  /**
   * Reason text for the error
   */
  @property({ type: String }) message: string = 'We were unable to find the page you are looking for...';

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      font-family: Roboto, sans-serif;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;

      max-width: 1300px;
    }

    header {
      flex: 1 1 auto;
      margin-right: 24px;
    }

    h1 {
      font-family: Metropolis, 'Roboto', 'Noto', sans-serif;
      font-weight: 600;
      color: var(--app-text-color, #5f6368);
      font-size: 75px;
      line-height: 85px;
      margin: 0;
    }

    h2 {
      color: var(--app-text-color, #5f6368);
      font-weight: 400;
      margin: 8px 0 0 4px;
      max-width: 75%;
    }

    img {
      flex-shrink: 0;
      height: 280px;
      width: 280px;
    }

    @media (max-width: 768px) {
      :host {
        margin-top: 24px;
      }

      h2 {
        max-width: inherit;
        font-size: 21px;
      }

      img {
        height: 120px;
        width: 120px;
        align-self: flex-start;
      }

      h1 {
        font-size: 55px;
        line-height: 65px;
      }
    }
  `;

  render() {
    return html`
      <header>
        <h1>Oops!</h1>
        <h2>${this.message}</h2>
      </header>
      <img src="https://www.leavitt.com/images/alert.svg" />
    `;
  }
}

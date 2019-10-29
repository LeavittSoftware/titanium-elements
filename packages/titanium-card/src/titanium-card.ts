import { css, customElement, html, LitElement } from 'lit-element';

export const TitaniumCardStyles = css`
  ::slotted(h1),
  h1 {
    display: block;
    color: var(--app-dark-text-color, #202124);

    font-family: Metropolis, 'Roboto', 'Noto', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.264px;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    margin: 0;
    padding: 24px 24px 12px 24px;
  }

  ::slotted(h2),
  h2 {
    display: block;
    color: #000000de;

    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.264px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    padding: 24px 24px 12px 24px;
  }

  ::slotted(h3),
  h3 {
    display: block;
    color: #000000de;

    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.264px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding: 24px 24px 12px 24px;
  }

  ::slotted(p),
  p {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    font-weight: 400;
    color: var(--app-text-color, #5f6368);
    margin: 0;
    padding: 0 24px 24px;
    letter-spacing: 0.2px;
    line-height: 20px;
  }
`;

@customElement('titanium-card')
export class TitaniumCardElement extends LitElement {
  static styles = css`
    ${TitaniumCardStyles}
    :host {
      display: flex;
      flex-direction: column;

      border: 1px solid var(--app-border-color, #dadce0);
      border-radius: 8px;
      background-color: #fff;

      overflow: hidden;
    }
  `;

  render() {
    return html`
      <slot></slot>
    `;
  }
}

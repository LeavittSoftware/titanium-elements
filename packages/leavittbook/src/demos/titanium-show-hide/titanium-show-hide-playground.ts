/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-button';
import '@material/mwc-slider';

/* playground-fold-end */
import '@leavittsoftware/titanium-show-hide';
import dayjs from 'dayjs/esm';

/* playground-fold */
@customElement('titanium-show-hide-playground')
export class TitaniumColorInputPlayground extends LitElement {
  @query('titanium-show-hide[required]') requiredInput;
  @state() protected verticalStepValue = 10;
  @state() protected horizontalStepValue = 3;

  static styles = [
    h1,
    h2,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      [horizontal] {
        --titanium-show-hide-flex-direction: row;
      }

      :host > h1,
      :host > p {
        margin-left: 24px;
      }

      div[main] {
        border: 1px solid var(--app-border-color);
        padding: 12px 24px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 12px;
      }

      credit-card {
        transition: 0.6s ease;
        padding: 10px;
        position: relative;
        border-radius: 10px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #449db7;
        height: 150px;
        max-height: 150px;
        overflow: hidden;
        width: 250px;
        z-index: 2;
        transform: rotateY(0deg);
      }

      credit-card h3 {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 6px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.5);
        font-family: 'Metropolis';
        margin: 0;
      }

      credit-card p {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.2);
        margin-top: 5px;
      }

      card-number {
        display: inline-block;
        background-color: #69b1c5;
        font-size: 16px;
        color: #fff;
        padding: 4px;
        border-radius: 8px;
      }

      mark-gold {
        position: absolute;
        bottom: 10px;
        right: 10px;
        border: solid 1px rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        width: 40px;
        height: 50px;
      }

      mark-gold circle-one {
        width: 40px;
        height: 25px;
        border-radius: 6px;
        background: #ccc;
        position: relative;
        top: 13px;
      }

      mark-gold circle-one:before {
        content: '';
        width: 30px;
        height: 5px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        position: absolute;
        bottom: 2px;
        left: 5px;
      }

      mark-gold circle-one:after {
        content: '';
        width: 30px;
        top: 2px;
        left: 5px;
        border-radius: 3px;
        height: 5px;
        background: rgba(255, 255, 255, 0.2);
        position: absolute;
      }

      mark-gold circle-two {
        margin-top: 2px;
        width: 28px;
        height: 25px;
        position: relative;
        bottom: -28px;
        left: 21px;
      }

      mark-gold circle-two:before {
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background: #ff9d66;
        position: absolute;
        right: -2px;
      }

      mark-gold circle-two:after {
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background: #f57576;
        position: absolute;
        left: -2px;
      }
    `,
  ];

  #generateCardNumber(digits: number) {
    const add = 1;
    let max = 12 - add;

    if (digits > max) {
      return this.#generateCardNumber(max) + this.#generateCardNumber(digits - max);
    }

    max = Math.pow(10, digits + add);
    const min = max / 10;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    return ('' + num).substring(add);
  }

  #formatWithDashes(cardNumber: string) {
    return cardNumber.replace(/(\d{4})(\d{4})(\d{4})(\d+)/, '$1-$2-$3-$4');
  }

  #getCardNumber() {
    return this.#formatWithDashes(this.#generateCardNumber(16));
  }

  render() {
    /* playground-fold-end */
    return html`
      <h1>Vertical</h1>
      <p>Example with the css variable setting the flex direction to column (default)</p>
      <div main>
        <h2>Credit Card Generator</h2>
        <p>How many would you like?</p>
        <mwc-slider
          discrete
          withTickMarks
          step="1"
          min="1"
          max="100"
          @input=${event => (this.verticalStepValue = event.target.value)}
          .value=${this.verticalStepValue}
        >
        </mwc-slider>
        <titanium-show-hide collapse-height="200">
          ${(new Array(this.verticalStepValue) as number[]).fill(0).map(
            (_, idx) => html`<credit-card>
              <h3>Credit Card ${idx + 1}</h3>
              <p>CARD NUMBER</p>
              <card-number>${this.#getCardNumber()}</card-number>
              <mark-gold>
                <div>
                  <circle-one></circle-one>
                  <circle-two></circle-two>
                </div>
              </mark-gold>
              <p>CARD EXPIRATION</p>
              <card-number>${dayjs().format('MM/YY')}</card-number>
            </credit-card>`
          )}
        </titanium-show-hide>
      </div>

      <h1>Horizontal</h1>
      <p>Example with the css variable setting the flex direction to row</p>
      <div main>
        <h2>Credit Card Generator</h2>
        <p>How many would you like?</p>
        <mwc-slider
          discrete
          withTickMarks
          step="1"
          min="1"
          max="100"
          @input=${event => (this.horizontalStepValue = event.target.value)}
          .value=${this.horizontalStepValue}
        >
        </mwc-slider>
        <titanium-show-hide horizontal collapse-height="200">
          ${(new Array(this.horizontalStepValue) as number[]).fill(0).map(
            (_, idx) => html`<credit-card>
              <h3>Credit Card ${idx + 1}</h3>
              <p>CARD NUMBER</p>
              <card-number>${this.#getCardNumber()}</card-number>
              <mark-gold>
                <div>
                  <circle-one></circle-one>
                  <circle-two></circle-two>
                </div>
              </mark-gold>
              <p>CARD EXPIRATION</p>
              <card-number>${dayjs().format('MM/YY')}</card-number>
            </credit-card>`
          )}
        </titanium-show-hide>
      </div>
    `;
  }
}

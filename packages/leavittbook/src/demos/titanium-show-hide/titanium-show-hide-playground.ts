/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, p } from '@leavittsoftware/titanium-styles';
import '@material/web/button/text-button';
import '@material/web/slider/slider';

/* playground-fold-end */
import '@leavittsoftware/titanium-show-hide';
import dayjs from 'dayjs/esm';

/* playground-fold */
@customElement('titanium-show-hide-playground')
export class TitaniumColorInputPlayground extends LitElement {
  @query('titanium-show-hide[required]') requiredInput;
  @state() protected verticalStepValue = 10;
  @state() protected horizontalStepValue = 3;
  @state() protected collapsed;

  static styles = [
    h1,
    h2,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
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
        border: 1px solid var(--md-sys-color-surface-variant);
        border-radius: 8px;
        padding: 12px 24px;
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
        background: var(--md-sys-color-background);
        color: var(--md-sys-color-on-background);
        height: 150px;
        max-height: 150px;
        overflow: hidden;
        width: 250px;
        z-index: 2;
        transform: rotateY(0deg);
        border: 2px solid var(--md-sys-color-on-background);
      }

      credit-card h3 {
        border-bottom: 1px solid var(--md-sys-color-on-background);
        padding-bottom: 6px;
        font-weight: 500;
        color: var(--md-sys-color-on-background);
        font-family: 'Metropolis';
        margin: 0;
      }

      credit-card p {
        font-size: 11px;
        margin: 8px 0 1px 2px;
      }

      card-number {
        display: inline-block;
        background-color: var(--md-sys-color-primary);
        font-size: 13px;
        color: var(--md-sys-color-on-primary);
        padding: 4px 12px;
        border-radius: 8px;
      }

      mark-gold {
        position: absolute;
        bottom: 10px;
        right: 10px;
        border: solid 2px var(--md-sys-color-primary);
        border-radius: 10px;
        width: 40px;
        height: 50px;
      }

      mark-gold circle-one {
        width: 40px;
        height: 25px;
        border-radius: 6px;
        background: var(--md-sys-color-surface-variant);
        position: relative;
        top: 13px;
      }

      mark-gold circle-one:before {
        content: '';
        width: 30px;
        height: 5px;
        background: var(--md-sys-color-surface-variant);
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
        background: var(--md-sys-color-surface-variant);
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
        background: var(--md-sys-color-surface-variant);
        position: absolute;
        right: -2px;
      }

      mark-gold circle-two:after {
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background: var(--md-sys-color-primary);
        position: absolute;
        left: -2px;
      }

      md-text-button {
        margin-top: 12px;
        max-width: 150px;
        width: 100%;
      }

      titanium-show-hide[start]::part(button) {
        align-self: start;
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
      <div main>
        <h2>Vertical Credit Card Generator</h2>
        <p>How many would you like?</p>
        <md-slider @input=${(event) => (this.verticalStepValue = event.target.value)} .value=${this.verticalStepValue}> </md-slider>
        <titanium-show-hide collapse-height="200">
          ${(new Array(this.verticalStepValue) as number[]).fill(0).map(
            (_, idx) =>
              html`<credit-card>
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

      <div main>
        <h2>Horizontal Credit Card Generator</h2>
        <p>How many would you like?</p>
        <md-slider @input=${(event) => (this.horizontalStepValue = event.target.value)} .value=${this.horizontalStepValue}> </md-slider>
        <titanium-show-hide horizontal collapse-height="200">
          ${(new Array(this.horizontalStepValue) as number[]).fill(0).map(
            (_, idx) =>
              html`<credit-card>
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
      <div main>
        <h2>Text Example</h2>
        <p>Using a custom slotted button</p>
        <titanium-show-hide @collapsed-changed=${(e) => (this.collapsed = e.target.collapsed)} start>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum arcu, semper ac aliquet eu, porttitor vel turpis. Nullam non dolor ac massa
            pharetra vulputate vel ac libero. In hac habitasse platea dictumst. Praesent lacus mi, vehicula eu euismod sit amet, accumsan porta massa. Morbi
            nibh odio, pellentesque sit amet nulla sit amet, pellentesque mattis felis. Donec in eros sit amet lectus maximus porttitor. Morbi iaculis velit sed
            interdum venenatis. Suspendisse ac consectetur tellus. Fusce molestie nunc ac dui sollicitudin, at sagittis dui convallis. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin euismod nisl et risus malesuada, non fermentum diam pharetra. Sed accumsan
            diam turpis, aliquet viverra quam molestie viverra. Nam ullamcorper commodo dictum. Cras bibendum odio vel tortor sodales porttitor ac nec ligula.
            Praesent eget tellus vitae diam vehicula aliquam sit amet ut mi. Curabitur pretium, enim in lacinia vehicula, sapien metus ultrices eros, vitae
            volutpat ex tortor nec lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eget porttitor mi.
            Suspendisse sed dolor non justo euismod volutpat. Nulla massa quam, dignissim sed dapibus ac, laoreet eu elit. Proin libero ipsum, blandit quis diam
            non, vulputate faucibus risus. Sed tincidunt elit metus. Aliquam maximus fringilla erat, eget pretium erat. Maecenas euismod fringilla placerat.
            Nunc lorem nulla, feugiat sagittis dolor id, scelerisque convallis risus. Nullam molestie, odio sed cursus convallis, nulla ligula gravida leo, ac
            suscipit mi elit nec velit. Nulla euismod molestie accumsan. Suspendisse ut aliquet dolor. Sed vel mollis nisl, sit amet porta odio. Vivamus
            sagittis metus vulputate enim porttitor rhoncus. Ut facilisis ligula eget lorem rhoncus, vel pretium mauris cursus. Cras vel condimentum odio. Fusce
            vehicula facilisis risus, in maximus ante suscipit sed. Sed ac quam a nisl hendrerit tempor varius sed mauris. Donec tempor mauris et nisi sagittis
            laoreet. Sed dapibus ex non consectetur maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean arcu
            neque, molestie a nisi vel, tincidunt vehicula arcu. Ut ut lectus gravida, tristique mauris a, aliquet magna. Duis sodales in ipsum pretium
            hendrerit.
          </p>
          <md-text-button slot="button"> ${this.collapsed ? 'Read more' : 'Read less'} </md-text-button>
        </titanium-show-hide>
      </div>
    `;
  }
}

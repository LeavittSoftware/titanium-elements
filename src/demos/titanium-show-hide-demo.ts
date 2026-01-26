import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';

import '@material/web/button/filled-tonal-button';
import '@material/web/slider/slider';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/show-hide/show-hide';
import dayjs from 'dayjs/esm';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-show-hide-demo')
export class TitaniumShowHideDemo extends LitElement {
  @query('titanium-show-hide[required]') requiredInput;
  @state() protected accessor verticalStepValue = 10;
  @state() protected accessor horizontalStepValue = 3;
  @state() protected accessor collapsed;

  static styles = [
    StoryStyles,
    css`
      [horizontal] {
        --titanium-show-hide-flex-direction: row;
      }

      div[main] {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        &:not(:first-of-type) {
          margin-top: 24px;
        }
      }

      h2 {
        margin-bottom: 12px;
      }

      credit-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.6s ease;
        padding: 12px 16px;
        position: relative;
        border-radius: 10px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: var(--app-accent-color-indigo);
        color: #fff;
        height: 150px;
        max-height: 150px;
        overflow: hidden;
        width: 250px;
        z-index: 2;
        transform: rotateY(0deg);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

        card-chip {
          width: 50px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;

          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 50%;
            background: rgba(255, 255, 255, 0.1);
            top: 0;
            left: 0;
          }

          &:after {
            content: '';
            position: absolute;
            width: 30%;
            height: 100%;
            background: rgba(255, 255, 255, 0.1);
            top: 0;
            left: 35%;
          }
        }

        h2 {
          margin: -32px 0 0 0;
          letter-spacing: 1.3px;
        }

        card-details {
          display: flex;
          gap: 24px;

          p {
            opacity: 0.8;
            font-size: 11px;
            margin-bottom: 0;
          }

          h3 {
            font-size: 14px;
            margin-top: -3px;
          }

          section {
            display: flex;
            flex-direction: column;
          }

          card-type {
            place-self: end;
            margin-left: 24px;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            margin: 0 0 0 44px;
            padding: 0;
            box-sizing: border-box;
            font-family:
              'Inter',
              -apple-system,
              BlinkMacSystemFont,
              'Segoe UI',
              Roboto,
              sans-serif;
          }
        }
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
        background: #fff;
        position: relative;
        top: 13px;
      }

      mark-gold circle-one:before {
        content: '';
        width: 30px;
        height: 5px;
        background: #fff;
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
        background: #fff;
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
        background: var(--app-accent-color-orange);
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

      md-filled-tonal-button {
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

  #formatCardNumber(cardNumber: string) {
    return `•••• •••• •••• ${cardNumber}`;
  }

  #getCardNumber() {
    return this.#formatCardNumber(this.#generateCardNumber(4));
  }

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium show hide" level1Href="/titanium-show-hide" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium show hide" className="TitaniumShowHide"></story-header>

            <div>
              <h1>Vertical Credit Card Generator</h1>
              <p>How many would you like?</p>
              <md-slider @input=${(event) => (this.verticalStepValue = event.target.value)} .value=${this.verticalStepValue}> </md-slider>
              <titanium-show-hide collapse-height="200">
                ${(new Array(this.verticalStepValue) as number[]).fill(0).map(
                  () =>
                    html`<credit-card>
                      <card-chip></card-chip>
                      <h2>${this.#getCardNumber()}</h2>

                      <card-details>
                        <section>
                          <p>Expires</p>
                          <h3>${dayjs().format('MM/YY')}</h3>
                        </section>
                        <section>
                          <p>Card Holder</p>
                          <h3>John Doe</h3>
                        </section>
                        <card-type>Visa</card-type>
                      </card-details>
                    </credit-card>`
                )}
              </titanium-show-hide>
            </div>

            <div>
              <h1>Horizontal Credit Card Generator</h1>
              <p>How many would you like?</p>
              <md-slider @input=${(event) => (this.horizontalStepValue = event.target.value)} .value=${this.horizontalStepValue}> </md-slider>
              <titanium-show-hide horizontal collapse-height="200">
                ${(new Array(this.horizontalStepValue) as number[]).fill(0).map(
                  () =>
                    html`<credit-card>
                      <card-chip></card-chip>
                      <h2>${this.#getCardNumber()}</h2>

                      <card-details>
                        <section>
                          <p>Expires</p>
                          <h3>${dayjs().format('MM/YY')}</h3>
                        </section>
                        <section>
                          <p>Card Holder</p>
                          <h3>John Doe</h3>
                        </section>
                        <card-type>Visa</card-type>
                      </card-details>
                    </credit-card>`
                )}
              </titanium-show-hide>
            </div>

            <div>
              <h1>Text Example</h1>
              <p>Using a custom slotted button</p>
              <titanium-show-hide @collapsed-changed=${(e) => (this.collapsed = e.target.collapsed)} start>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum arcu, semper ac aliquet eu, porttitor vel turpis. Nullam non dolor ac
                  massa pharetra vulputate vel ac libero. In hac habitasse platea dictumst. Praesent lacus mi, vehicula eu euismod sit amet, accumsan porta
                  massa. Morbi nibh odio, pellentesque sit amet nulla sit amet, pellentesque mattis felis. Donec in eros sit amet lectus maximus porttitor.
                  Morbi iaculis velit sed interdum venenatis. Suspendisse ac consectetur tellus. Fusce molestie nunc ac dui sollicitudin, at sagittis dui
                  convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin euismod nisl et risus malesuada, non
                  fermentum diam pharetra. Sed accumsan diam turpis, aliquet viverra quam molestie viverra. Nam ullamcorper commodo dictum. Cras bibendum odio
                  vel tortor sodales porttitor ac nec ligula. Praesent eget tellus vitae diam vehicula aliquam sit amet ut mi. Curabitur pretium, enim in
                  lacinia vehicula, sapien metus ultrices eros, vitae volutpat ex tortor nec lacus. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Sed eget porttitor mi. Suspendisse sed dolor non justo euismod volutpat. Nulla massa quam, dignissim sed
                  dapibus ac, laoreet eu elit. Proin libero ipsum, blandit quis diam non, vulputate faucibus risus. Sed tincidunt elit metus. Aliquam maximus
                  fringilla erat, eget pretium erat. Maecenas euismod fringilla placerat. Nunc lorem nulla, feugiat sagittis dolor id, scelerisque convallis
                  risus. Nullam molestie, odio sed cursus convallis, nulla ligula gravida leo, ac suscipit mi elit nec velit. Nulla euismod molestie accumsan.
                  Suspendisse ut aliquet dolor. Sed vel mollis nisl, sit amet porta odio. Vivamus sagittis metus vulputate enim porttitor rhoncus. Ut facilisis
                  ligula eget lorem rhoncus, vel pretium mauris cursus. Cras vel condimentum odio. Fusce vehicula facilisis risus, in maximus ante suscipit sed.
                  Sed ac quam a nisl hendrerit tempor varius sed mauris. Donec tempor mauris et nisi sagittis laoreet. Sed dapibus ex non consectetur maximus.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean arcu neque, molestie a nisi vel, tincidunt
                  vehicula arcu. Ut ut lectus gravida, tristique mauris a, aliquet magna. Duis sodales in ipsum pretium hendrerit.
                </p>
                <md-filled-tonal-button slot="button"> ${this.collapsed ? 'Read more' : 'Read less'} </md-filled-tonal-button>
              </titanium-show-hide>
            </div>

            <div>
              <h1>Filled button example</h1>
              <p>Read some text</p>
              <md-slider @input=${(event) => (this.verticalStepValue = event.target.value)} .value=${this.verticalStepValue}> </md-slider>
              <titanium-show-hide filled collapse-height="200">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum arcu, semper ac aliquet eu, porttitor vel turpis. Nullam non dolor ac
                  massa pharetra vulputate vel ac libero. In hac habitasse platea dictumst. Praesent lacus mi, vehicula eu euismod sit amet, accumsan porta
                  massa. Morbi nibh odio, pellentesque sit amet nulla sit amet, pellentesque mattis felis. Donec in eros sit amet lectus maximus porttitor.
                  Morbi iaculis velit sed interdum venenatis. Suspendisse ac consectetur tellus. Fusce molestie nunc ac dui sollicitudin, at sagittis dui
                  convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin euismod nisl et risus malesuada, non
                  fermentum diam pharetra. Sed accumsan diam turpis, aliquet viverra quam molestie viverra. Nam ullamcorper commodo dictum. Cras bibendum odio
                  vel tortor sodales porttitor ac nec ligula. Praesent eget tellus vitae diam vehicula aliquam sit amet ut mi. Curabitur pretium, enim in
                  lacinia vehicula, sapien metus ultrices eros, vitae volutpat ex tortor nec lacus. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Sed eget porttitor mi. Suspendisse sed dolor non justo euismod volutpat. Nulla massa quam, dignissim sed
                  dapibus ac, laoreet eu elit. Proin libero ipsum, blandit quis diam non, vulputate faucibus risus. Sed tincidunt elit metus. Aliquam maximus
                  fringilla erat, eget pretium erat. Maecenas euismod fringilla placerat. Nunc lorem nulla, feugiat sagittis dolor id, scelerisque convallis
                  risus. Nullam molestie, odio sed cursus convallis, nulla ligula gravida leo, ac suscipit mi elit nec velit. Nulla euismod molestie accumsan.
                  Suspendisse ut aliquet dolor. Sed vel mollis nisl, sit amet porta odio. Vivamus sagittis metus vulputate enim porttitor rhoncus. Ut facilisis
                  ligula eget lorem rhoncus, vel pretium mauris cursus. Cras vel condimentum odio. Fusce vehicula facilisis risus, in maximus ante suscipit sed.
                  Sed ac quam a nisl hendrerit tempor varius sed mauris. Donec tempor mauris et nisi sagittis laoreet. Sed dapibus ex non consectetur maximus.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean arcu neque, molestie a nisi vel, tincidunt
                  vehicula arcu. Ut ut lectus gravida, tristique mauris a, aliquet magna. Duis sodales in ipsum pretium hendrerit.
                </p>
              </titanium-show-hide>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-show-hide"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}

import { css, html, LitElement } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';

/**
 * Input validator to make components use validation consistent with mwc-components.
 *
 * @element titanium-input-validator
 * @slot any element - The slotted element should fire the NotifyUserInputEvent when it is ready to be validated
 * @example
 * <titanium-input-validator .evaluator=${() => (this.collection?.length ?? 0) > 0} validationMessage="Collection must have one item">
 *     <custom-input @input=${() => this.dispatchEvent(new NotifyUserInputEvent())}></custom-input>
 * </titanium-input-validator>
 * @exports NotifyUserInputEvent - this is a custom event that the consumer of this component can fire to trigger validation
 * @cssprop {Color} --mdc-theme-error - error color used for validation message
 */
@customElement('titanium-input-validator')
export class TitaniumInputValidatorElement extends LitElement {
  /**
   *  Validation message displayed when the input is invalid
   */
  @property({ type: String }) validationMessage = '';
  /**
   *  Evaluator function that will be called to determine if the input is valid
   */
  @property({ type: Object }) evaluator = () => true;

  @state() protected isUiValid = true;

  firstUpdated() {
    this.addEventListener(NotifyUserInputEvent.eventName, e => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      this.reportValidity();
    });
  }

  checkValidity(): boolean {
    return !!this.evaluator();
  }

  reportValidity(): boolean {
    const isValid = this.checkValidity();
    this.isUiValid = isValid;
    return isValid;
  }

  static styles = css`
    :host {
      display: inline-flex;
      flex-direction: column;
    }

    error-message {
      color: var(--mdc-theme-error, #b00020);
      letter-spacing: 0.0333333em;
      font-size: 12px;
      height: 19px;
      padding: 0 16px;
      opacity: 0.99;
      -webkit-font-smoothing: antialiased;
    }
  `;

  render = () => html`<slot></slot>
    <error-message>${this.isUiValid ? '' : this.validationMessage}</error-message> `;
}

export class NotifyUserInputEvent extends Event {
  static eventName = 'user-input';

  constructor() {
    super(NotifyUserInputEvent.eventName, { bubbles: true, composed: true });
  }
}

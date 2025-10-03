import { customElement, property } from 'lit/decorators.js';
import { MdFilledField } from '@material/web/field/filled-field';

/**
 * Input validator to make components use validation consistent with material 3 outlined styling
 *
 * @element titanium-filled-input-validator
 * @slot default - The slotted element should fire the NotifyUserInputEvent when it is ready to be validated
 * @example
 * <titanium-filled-input-validator .evaluator=${() => (this.collection?.length ?? 0) > 0} validationMessage="Collection must have one item">
 *     <custom-input></custom-input>
 * </titanium-filled-input-validator>
 */
@customElement('titanium-filled-input-validator')
export class TitaniumFilledInputValidator extends MdFilledField {
  @property({ type: Boolean }) populated: boolean = true;
  @property({ type: Object }) accessor evaluator: () => boolean;

  firstUpdated() {
    this.addEventListener('focusin', () => (this.focused = true));
    this.addEventListener('focusout', () => (this.focused = false));
  }

  reset() {
    this.error = false;
  }

  reportValidity() {
    const valid = this.checkValidity();
    this.error = !valid;

    return valid;
  }

  checkValidity() {
    return !!this.evaluator();
  }
}

import { customElement, property } from 'lit/decorators.js';
import { MdOutlinedField } from '@material/web/field/outlined-field';

/**
 * Input validator to make components use validation consistent with mwc-components.
 *
 * @element titanium-input-validator
 * @slot default - The slotted element should fire the NotifyUserInputEvent when it is ready to be validated
 * @example
 * <titanium-input-validator .evaluator=${() => (this.collection?.length ?? 0) > 0} validationMessage="Collection must have one item">
 *     <custom-input></custom-input>
 * </titanium-input-validator>
 */
@customElement('titanium-input-validator')
export class TitaniumInputValidator extends MdOutlinedField {
  @property({ type: Boolean }) populated: boolean = true;
  @property({ type: Object }) evaluator;

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

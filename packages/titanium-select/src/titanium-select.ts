import '@material/mwc-textfield';

import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { TextField } from '@material/mwc-textfield';

/**
 * Material design inspired select. This component is just a wrapper for a native select adding styles and functionality.
 *
 * @element titanium-select
 *
 * @fires value-changed - Fired when selection changes. details contains the selected item <T> or null.
 *
 * @cssprop {Color} --app-text-color - Text color in the select
 * @cssprop {Color} --app-secondary-color - forwarded to --mdc-text-field-outlined-idle-border-color and  --mdc-text-field-label-ink-color
 *
 */
type TextFieldExt = TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };
@customElement('titanium-select')
export class TitaniumSelectElement<T> extends LitElement {
  /**
   *  List of object that are the options for the select.  At a minium the object should have a name and unique id property.
   */
  @property({ type: Array }) options: Array<T> = [];

  /**
   *  Currently selected object
   */
  @property({ type: Object }) value: T | null = null;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = '';

  /**
   *  Whether or not the input should be disabled.
   */
  @property({ type: Boolean }) disabled: boolean = false;

  /**
   *  Displays error state if value is empty and input is blurred.
   */
  @property({ type: Boolean }) required: boolean = false;

  /**
   *  	Message to show in the error color when the textfield is invalid. (Helper text will not be visible)
   */
  @property({ type: String }) validationMessage: string = '';

  /**
   *  	Helper text to display below the input. Display default only when focused.
   */
  @property({ type: String }) helper = '';

  /**
   *  Always show the helper text despite focus.
   */
  @property({ type: Boolean }) helperPersistent = false;

  /**
   *  	Whether or not to make the input fullwidth. No longer displays label; only placeholder and helper.
   */
  @property({ type: Boolean }) fullwidth = false;

  /**
   *  Property name in the options object where the display name is stored.
   */
  @property({ type: String }) itemLabelPath: string = 'Name';

  /**
   *  Property name in the options object where the unique option Id is stored.
   */
  @property({ type: String }) itemIdentifierPath: string = 'Id';

  @query('mwc-textfield') protected textfield: TextFieldExt;
  @property({ type: Boolean }) protected focused: boolean = false;

  /**
   *  Property name in the options object where the unique option Id is stored.
   */
  public async reset() {
    //Hack to get around lack of a reset method on mwc-textfield
    // Update when API is available
    this.value = null;
    await this.updateComplete;
    this.textfield?.mdcFoundation?.setValid(true);
    this.textfield.isUiValid = true;
  }

  /**
   * Returns true if the textfield passes validity checks. Returns false and fires an invalid event on the textfield otherwise.
   * NOTE: When accessing any property or function that checks validity at textfield initial boot up, you may have to await <mwc-textfield>.updateComplete.
   */
  public checkValidity() {
    return this.textfield.checkValidity();
  }

  /**
   * Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  public reportValidity() {
    return this.textfield.reportValidity();
  }

  /**
   * Re-calculate layout. If a textfield is styled with display:none before it is first rendered, and it has a label that is floating, then you must call layout() the first time you remove display:none, or else the notch surrounding the label will not render correctly.
   */
  public layout() {
    return this.textfield.layout();
  }

  static styles = css`
    :host {
      display: inline-flex;
      outline: none;
      position: relative;
    }

    mwc-textfield {
      position: relative;
      width: 100%;
      pointer-events: none;
    }

    mwc-textfield[focused] {
      --mdc-text-field-outlined-idle-border-color: var(--app-secondary-color, #4285f4);
      --mdc-notched-outline-stroke-width: 2px;
      --mdc-text-field-label-ink-color: var(--app-secondary-color, #4285f4);
    }

    select {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 56px;
      cursor: pointer;
      border: none;
      padding: 0;
      background-color: transparent;
      color: var(--app-text-color, #5f6368);
      font-size: 16px;
      font-weight: 400;
      font-family: Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      -webkit-appearance: none;
      opacity: 0;
    }

    select::-ms-expand {
      display: none;
    }

    select:focus {
      outline: none;
    }

    select:hover + mwc-textfield:not([focused]) {
      --mdc-text-field-outlined-idle-border-color: var(--mdc-text-field-outlined-hover-border-color);
    }
  `;

  render() {
    return html`
      <select
        .value=${this.value?.[this.itemIdentifierPath] ?? ''}
        @focus=${() => (this.focused = true)}
        @blur=${() => {
          this.focused = false;
          this.textfield.reportValidity();
        }}
        @change=${e => {
          e.stopPropagation();
          // tslint:disable-next-line: triple-equals
          this.value = this.options.find(o => o[this.itemIdentifierPath] == e.target.value) ?? null;
          this.dispatchEvent(new CustomEvent<T | null>('value-changed', { composed: true, detail: this.value }));
        }}
        ?disabled=${this.disabled}
      >
        <option value="" disabled hidden></option>
        ${this.options.map(
          option => html`
            <option ?selected=${option?.[this.itemIdentifierPath] === this.value?.[this.itemIdentifierPath]} value=${option?.[this.itemIdentifierPath]}>
              &nbsp;&nbsp;${option?.[this.itemLabelPath]}
            </option>
          `
        )}
      </select>
      <mwc-textfield
        tabindex="-1"
        outlined
        .helper=${this.helper}
        .fullwidth=${this.fullwidth}
        helperPersistent
        ?required=${this.required}
        ?disabled=${this.disabled}
        .validationMessage=${this.validationMessage}
        iconTrailing="keyboard_arrow_down"
        ?focused=${this.focused}
        label=${this.label}
        value=${this.value?.[this.itemLabelPath] ?? ''}
      >
      </mwc-textfield>
    `;
  }
}

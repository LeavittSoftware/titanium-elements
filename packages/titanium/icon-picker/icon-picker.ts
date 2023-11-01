import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
// import '@material/mwc-select';
// import '@leavittsoftware/titanium-icon';
// import '@material/mwc-list/mwc-list-item';
import { MaterialSymbol, MaterialSymbols } from './material-symbols';
// import { Select } from '@material/mwc-select';

/**
 * Titanium icon picker - a picker for material icons
 *
 * @element titanium-icon-picker
 *
 */
@customElement('titanium-icon-picker')
export class TitaniumIconPicker extends LitElement {
  /**
   *  The selected icon
   */
  @property({ type: String }) value: MaterialSymbol | null = null;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = 'Icon';

  /**
   *  Sets placeholder text value.
   */
  @property({ type: String }) placeholder: string = '';

  /**
   *  Whether or not the input should be disabled.
   */
  @property({ type: Boolean }) disabled: boolean = false;

  /**
   *  Displays error state if input is empty and input is blurred.
   */
  @property({ type: Boolean }) required: boolean = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @query('mwc-select') protected select: any & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  async reset() {
    this.value = null;
    await this.updateComplete;
    if (this.select) {
      this.select.value = '';
      this.select.isUiValid = true;
      this.select.mdcFoundation?.setValid?.(true);
    }
  }

  /**
   *  Runs layout() method on textfield.
   */
  layout() {
    this.select.layout();
  }

  /**
   *  Sets focus on the input.
   */
  focus() {
    this.select.focus();
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    return this.select.checkValidity();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    return this.select.reportValidity();
  }

  static styles = css`
    :host {
      display: block;
    }

    mwc-select {
      width: 100%;
    }
  `;

  render = () =>
    html` <mwc-select
      outlined
      .label=${this.label}
      .disabled=${this.disabled}
      .placeholder=${this.placeholder}
      .required=${this.required}
      .icon=${this.value || ''}
      .value=${this.value ?? ''}
      @selected=${e => (this.value = e.target.value || null)}
    >
      ${!this.required ? html`<mwc-list-item value=""></mwc-list-item>` : ''}
      ${MaterialSymbols.map(
        (icon: string) => html`
          <mwc-list-item graphic="icon" value=${icon}><titanium-icon slot="graphic" icon=${icon}></titanium-icon> ${icon}</mwc-list-item>
        `
      )}
    </mwc-select>`;
}

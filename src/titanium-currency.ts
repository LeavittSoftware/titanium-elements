import {customElement, observe, property} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer';

@customElement('titanium-currency')

export class TitaniumCurrencyElement extends PolymerElement {
  /**value parameter. If this is not a number or parseable into a number,
   * formattedValue will be the same as this*/
  @property({type: String}) value: string;

  /**Whether to use parentheses to format negative values. e.g. a value of `-4`
   * produces a formattedValue of `($4)`*/
  @property({type: Boolean}) hideAccountingFormat: boolean;

  /**Whether to use commas to separate thousands places. e.g. a value of
   * `4000000` produces a formattedValue of `$4,000,000`*/
  @property({type: Boolean}) hideThousandsSeparators: boolean;

  /**Number of decimal places to round to in the formatted value. e.g. a value
   * of `30.5678` and decimalPlaces of `2` produces a formattedValue of
   * `$30.57`*/
  @property({type: Number}) decimalPlaces: number = 0;

  /**The value formatted as currency.*/
  @property({notify: true, type: String}) formattedValue: string;

  @observe(
      'value',
      'hideAccountingFormat',
      'decimalPlaces',
      'hideThousandsSeparators')
  protected _computeFormattedValue(value: string): void {
    let floatValue: number;
    floatValue = parseFloat(value);

    // can't parse into a number, return original parameter
    if (isNaN(floatValue)) {
      this.set('formattedValue', value);
      return;
    }

    let decimalPlacesValue = parseInt(this.decimalPlaces.toString());
    let digits = (decimalPlacesValue && (decimalPlacesValue >= 0)) ?
        decimalPlacesValue :
        0;
    digits = Math.min(digits, 20);

    let formattedValue = Math.abs(floatValue).toFixed(digits);

    if (!this.hideThousandsSeparators) {
      formattedValue = this.addCommas(formattedValue);
    }

    formattedValue = `\$${formattedValue}`;

    if (floatValue < 0 && !this.hideAccountingFormat) {
      formattedValue = `(${formattedValue})`;
    } else if (floatValue < 0) {
      formattedValue = `-${formattedValue}`;
    }

    this.set('formattedValue', formattedValue);
  }

  private addCommas(value: string): string {
    value += '';
    let x = value.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(
          rgx,
          '$1' +
              ',' +
              '$2');
    }
    return x1 + x2;
  }

  static get template() {
    return html`  <style>
    </style>
    [[formattedValue]]
    <script src="lib/titanium-currency.js"></script>`;
  }
}

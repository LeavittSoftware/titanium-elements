var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, observe, property } from '@polymer/decorators';
import { html, PolymerElement } from '@polymer/polymer';
let TitaniumCurrency = class TitaniumCurrency extends PolymerElement {
    constructor() {
        super(...arguments);
        /**Whether to use parentheses to format negative values. e.g. a value of `-4`
         * produces a formattedValue of `($4)`*/
        this.accountingFormat = false;
        /**Whether to use commas to separate thousands places. e.g. a value of
         * `4000000` produces a formattedValue of `$4,000,000`*/
        this.thousandsSeparators = true;
        /**Number of decimal places to round to in the formatted value. e.g. a value
         * of `30.5678` and decimalPlaces of `2` produces a formattedValue of
         * `$30.57`*/
        this.decimalPlaces = 0;
    }
    _computeFormattedValue(value) {
        let floatValue;
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
        if (this.thousandsSeparators) {
            formattedValue = this.addCommas(formattedValue);
        }
        formattedValue = `\$${formattedValue}`;
        if (floatValue < 0 && this.accountingFormat) {
            formattedValue = `(${formattedValue})`;
        }
        else if (floatValue < 0) {
            formattedValue = `-${formattedValue}`;
        }
        this.set('formattedValue', formattedValue);
    }
    addCommas(value) {
        value += '';
        let x = value.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        let rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' +
                ',' +
                '$2');
        }
        return x1 + x2;
    }
    static get template() {
        return html `  <style>
    </style>
    [[formattedValue]]
    <script src="lib/titanium-currency.js"></script>`;
    }
};
__decorate([
    property({ type: String })
], TitaniumCurrency.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], TitaniumCurrency.prototype, "accountingFormat", void 0);
__decorate([
    property({ type: Boolean })
], TitaniumCurrency.prototype, "thousandsSeparators", void 0);
__decorate([
    property({ type: Number })
], TitaniumCurrency.prototype, "decimalPlaces", void 0);
__decorate([
    property({ notify: true, type: String })
], TitaniumCurrency.prototype, "formattedValue", void 0);
__decorate([
    observe('value', 'accountingFormat', 'decimalPlaces', 'thousandsSeparators')
], TitaniumCurrency.prototype, "_computeFormattedValue", null);
TitaniumCurrency = __decorate([
    customElement('titanium-currency')
], TitaniumCurrency);
export { TitaniumCurrency };
//# sourceMappingURL=titanium-currency.js.map
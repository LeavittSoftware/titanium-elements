import { PolymerElement } from '@polymer/polymer';
export declare class TitaniumCurrencyElement extends PolymerElement {
    /**value parameter. If this is not a number or parseable into a number,
     * formattedValue will be the same as this*/
    value: string;
    /**Whether to use parentheses to format negative values. e.g. a value of `-4`
     * produces a formattedValue of `($4)`*/
    hideAccountingFormat: boolean;
    /**Whether to use commas to separate thousands places. e.g. a value of
     * `4000000` produces a formattedValue of `$4,000,000`*/
    hideThousandsSeparators: boolean;
    /**Number of decimal places to round to in the formatted value. e.g. a value
     * of `30.5678` and decimalPlaces of `2` produces a formattedValue of
     * `$30.57`*/
    decimalPlaces: number;
    /**The value formatted as currency.*/
    formattedValue: string;
    protected _computeFormattedValue(value: string): void;
    private addCommas;
    static readonly template: HTMLTemplateElement;
}

import '@polymer/paper-button';
import '@polymer/paper-toggle-button';
import '@polymer/paper-toggle-button';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles.js';
import '@polymer/iron-demo-helpers/demo-snippet.js';


import {customElement, property} from '@polymer/decorators';
import {DeclarativeEventListeners} from '@polymer/decorators/lib/declarative-event-listeners.js';
import {html, PolymerElement} from '@polymer/polymer';

@customElement('titanium-currency-demo')
export class TitaniumCurrencyDemo extends DeclarativeEventListeners
(PolymerElement) {
  @property({type: String}) decimalPlaces: string = '2';
  @property({type: String}) value;

  static get template() {
    return html`
     <style>
            .row {
                @apply --layout-horizontal;
            }
        </style>
        <h3>Titanium Currency Demo</h3>
        <div>
            <div class="row">
                thousandsSeparators
                <paper-toggle-button checked="{{thousandsSeparators}}"></paper-toggle-button>
            </div>
            <div class="row">
                accountingFormat
                <paper-toggle-button checked="{{accountingFormat}}"></paper-toggle-button>
            </div>
            <div class="row">
                <paper-input type="number" label="decimalPlaces" value="{{decimalPlaces}}"></paper-input>
            </div>
            <div class="row">
                <paper-input label="value" value="{{value}}"></paper-input>
            </div>
        </div>
        formatted currency:
      <titanium-currency value="[[value]]" decimal-places="[[decimalPlaces]]" thousands-separators="[[thousandsSeparators]]" accounting-format="[[accountingFormat]]"></titanium-currency>
    <script src="titanium-currency-demo.js"></script>`;
  }
}

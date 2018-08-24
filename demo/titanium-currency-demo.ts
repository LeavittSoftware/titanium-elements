import '@polymer/paper-button';


import {customElement, property} from '@polymer/decorators';
import {DeclarativeEventListeners} from '@polymer/decorators/lib/declarative-event-listeners.js';
import {html, PolymerElement} from '@polymer/polymer';

@customElement('titanium-currency-demo')
export class TitaniumCurrencyDemo extends DeclarativeEventListeners
(PolymerElement) {
  @property({type: String}) decimalPlaces: string = '2';

  static get template() {
    return html`
    <custom-style>
        <style is="custom-style" include="demo-pages-shared-styles">

        </style>
    </custom-style>
<dom-module id="x-demo">
        <h3>Titanium Currency Demo</h3>
        <demo-snippet>
            <code>
        <style>
            .row {
                @apply --layout-horizontal;
            }
        </style>
        <h1>titanium-currency Demo</h1>
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
   </code>
        </demo-snippet>
    <script src="titanium-currency-demo.js"></script>
<body>
    <div class="vertical-section-container centered">
        <x-demo></x-demo>
    </div>
</body>
      `;
  }
}

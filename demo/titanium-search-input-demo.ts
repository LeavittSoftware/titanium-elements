import '@leavittsoftware/titanium-elements/lib/titanium-search-input';
import '@polymer/iron-flex-layout/iron-flex-layout.js';

import {customElement, property} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer/polymer-element';

@customElement('titanium-search-input-demo')
export default class TitaniumSearchInputDemo extends PolymerElement {
  @property() searchTerm: string;

  static get template() {
    return html`<style>
    h1 {
        @apply --paper-font-title;
    }
    demo-container {
        @apply --layout-vertical;
        @apply --layout-flex-auto;
        padding: 16px;
    }

    search-term {
        display: block;
        @apply --paper-font-body2;
        padding-bottom: 16px;
    }

    titanium-search-input {
        @apply --layout-self-center;
        --titanium-search-input-clear-button-fill-color: salmon;
        --titanium-search-input-svg-fill-color: salmon;
    }
</style>
<demo-container>
    <h3>Titanium Search Input</h3>
    <search-term>Term: [[searchTerm]]</search-term>
    <titanium-search-input placeholder="Search" value="{{searchTerm}}"></titanium-search-input>
</demo-container>`;
  }
}
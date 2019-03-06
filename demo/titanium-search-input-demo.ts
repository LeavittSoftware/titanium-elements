import '@leavittsoftware/titanium-elements/lib/titanium-search-input';

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

    search-term {
        display: block;
        @apply --paper-font-body2;
        padding-bottom: 16px;
    }
</style>
<div>
    <h3>Titanium Search Input</h3>
    <search-term>Term: [[searchTerm]]</search-term>
    <titanium-search-input placeholder="Search" value="{{searchTerm}}"></titanium-search-input>
</div>`;
  }
}
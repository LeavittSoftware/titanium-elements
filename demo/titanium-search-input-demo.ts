import '@leavittsoftware/titanium-elements/lib/titanium-search-input';
import '@polymer/iron-flex-layout/iron-flex-layout.js';

import {customElement, property} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer/polymer-element';

@customElement('titanium-search-input-demo')
export default class TitaniumSearchInputDemo extends PolymerElement {
  @property() searchTerm: string = 'hello world';

  static get template() {
    return html`<style>
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
        --titanium-search-input-clear-button-fill-color: dodgerblue;
        --titanium-search-input-svg-fill-color: dodgerblue;
        --titanium-search-input-text-color: slategray;
        --titanium-search-input-focus-color: slategray;
        --titanium-search-input-border-color: lightgray;
    }

    titanium-search-input[wide] {
        --titanium-search-input-width: 500px;
    }
</style>
<demo-container>
    <search-term>Term: [[searchTerm]]</search-term>
    <titanium-search-input placeholder="Search" value="{{searchTerm}}"></titanium-search-input>


    <h3> Collapsed </h3>
    <titanium-search-input placeholder="Search"></titanium-search-input>

    <h3> Wide </h3>
    <titanium-search-input wide placeholder="Search"></titanium-search-input>

    <h3> Prevent Collapse </h3>
    <titanium-search-input prevent-collapse placeholder="Search"></titanium-search-input>



</demo-container>`;
  }
}
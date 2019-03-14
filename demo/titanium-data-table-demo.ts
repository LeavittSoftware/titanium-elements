import '@leavittsoftware/titanium-elements/lib/titanium-data-table';
import '@leavittsoftware/titanium-elements/lib/titanium-svg-button';
import '@leavittsoftware/titanium-elements/lib/titanium-search-input';
import '@polymer/paper-toggle-button';
import '@leavittsoftware/titanium-elements/lib/titanium-data-table-item';
import '@polymer/iron-flex-layout/iron-flex-layout.js';

import {TitaniumDataTable} from '@leavittsoftware/titanium-elements/lib/titanium-data-table';
import {customElement, observe, property, query} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer/polymer-element';

type itemModel = {
  first: string,
  last: string,
  title: string,
}

@customElement('titanium-data-table-demo')
export default class TitaniumDataTableDemo extends PolymerElement {
  @property() searchTerm: string;
  @property({notify: true, type: Array}) items: Array<itemModel>;
  @property() selectedItems: Array<itemModel> = [];
  @property() count: number;
  @property() take: number;
  @property() page: number;
  @query('titanium-data-table') dataTable: TitaniumDataTable;

  ready() {
    super.ready();
    setTimeout(() => {
      this._getDataAsync();
    }, 200);

    // this.addEventListener(
    //     'items-changed', (e) => console.log('items-changed', e));
    // this.addEventListener(
    //     'selected-items-changed',
    //     (e: CustomEvent) => {
    //       console.log(e.detail);
    //     }

    // );
    this.dataTable.addEventListener('selected-changed', (e: CustomEvent) => {
      this.selectedItems = e.detail;
      this.notifySplices('selectedItems', null);
    });
  }

  @observe('take', 'page')
  private _getDataAsync() {
    console.log('take: ', this.take);
    console.log('page: ', this.page);

    this.items = [
      {first: 'Aaron', last: 'Drabeck', title: 'Engineer 1', amount: '1.2'},
      {first: 'Anthony', last: 'Thomas', title: 'Engineer 2', amount: '0.2'},
      {first: 'Wyatt', last: 'Morrow', title: 'Engineer 3 ', amount: '3.2'},
      {first: 'Bob', last: 'Drabeck', title: 'Engineer 4 ', amount: '4.5'},
      {first: 'Frank', last: 'Thomas', title: 'Engineer 5', amount: '2.7'},
      {first: 'John', last: 'Morrow', title: 'Engineer 6', amount: '5.3'},
      {first: 'Robert', last: 'Drabeck', title: 'Engineer 7', amount: '6.4'},
      {first: 'Vlad', last: 'Thomas', title: 'Engineer 8', amount: '7.4'},
      {first: 'Billy', last: 'Morrow', title: 'Engineer 9', amount: '6.3'},
      {first: 'Tina', last: 'Drabeck', title: 'Engineer 10', amount: '1.5'},
      {first: 'Danielle', last: 'Thomas', title: 'Engineer 11', amount: '2.2'},
      {first: 'Wilson', last: 'Morrow', title: 'Engineer 12', amount: '0.3'},
      {first: 'Kip', last: 'Morrow', title: 'Engineer 13', amount: '2.2'}
    ].slice(this.page * this.take, (this.page * this.take) + this.take);

    this.count = 13;
  }

  static get template() {
    return html`<style>
    :host {
        display: block;
    }

    demo-container {
        @apply --layout-vertical;
        padding: 16px;
    }
</style>
<demo-container>

    <h4>Table Options</h4>
    <paper-toggle-button checked="{{singleSelect}}">Multi Select</paper-toggle-button>

    <h4>Selected Items</h4>
    <template is="dom-repeat" items="[[selectedItems]]">
        <div> [[item.first]] [[item.last]] [[item.title]] </div>
    </template>

    <br />
    <br />
    <titanium-data-table single-select$="[[singleSelect]]" title="Demo People Table" count="[[count]]" page="{{page}}"
        take="{{take}}" items="[[items]]">
        <titanium-search-input slot="table-actions" placeholder="Search" value={{searchTerm}}></titanium-search-input>
        <titanium-svg-button slot="table-actions" title="Add" on-click="_handleAdd" path="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></titanium-svg-button>
        <titanium-svg-button slot="table-actions" title="Filter" on-click="_handleFilter" path="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></titanium-svg-button>

        <titanium-svg-button slot="selected-actions" title="Edit" on-click="_handleEdit" path="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"></titanium-svg-button>
        <titanium-svg-button slot="selected-actions" title="Delete" on-click="_handleDelete" path="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></titanium-svg-button>


        <titanium-table-header slot="table-headers" large column-name="first" title="First Name" sort-by="{{sortBy}}"            sort-direction="{{sortDirection}}"></titanium-table-header>
        <titanium-table-header slot="table-headers" column-name="last" title="Last Name" sort-by="{{sortBy}}"            sort-direction="{{sortDirection}}"></titanium-table-header>
        <titanium-table-header slot="table-headers" desktop column-name="title" title="Title" sort-by="{{sortBy}}"            sort-direction="{{sortDirection}}"></titanium-table-header>
        <titanium-table-header slot="table-headers" desktop center column-name="amount" title="Centered" sort-by="{{sortBy}}" sort-direction="{{sortDirection}}"></titanium-table-header>
        <titanium-table-header slot="table-headers" desktop right column-name="amount" title="Right" sort-by="{{sortBy}}" sort-direction="{{sortDirection}}"></titanium-table-header>
        <titanium-table-header slot="table-headers" width="40px" column-name="amount" title="Width" sort-by="{{sortBy}}" sort-direction="{{sortDirection}}"></titanium-table-header>
        <titanium-table-header slot="table-headers" desktop width="120px" center column-name="amount" title="Width Center" sort-by="{{sortBy}}" sort-direction="{{sortDirection}}"></titanium-table-header>
        <titanium-table-header slot="table-headers" desktop width="120px" right column-name="amount" title="Width Right" sort-by="{{sortBy}}" sort-direction="{{sortDirection}}"></titanium-table-header>
        <template is="dom-repeat" items="[[items]]">
            <titanium-data-table-item item="[[item]]" slot="items">
                <row-item large>[[item.first]]</row-item>
                <row-item>[[item.last]]</row-item>
                <row-item desktop >[[item.title]]</row-item>
                <row-item desktop center >[[item.amount]]</row-item>
                <row-item desktop right>[[item.amount]]</row-item>
                <row-item width="40px">[[item.amount]]</row-item>
                <row-item desktop width="120px" center>[[item.amount]]</row-item>
                <row-item desktop width="120px" right>[[item.amount]]</row-item>
            </titanium-data-table-item>
        </template>
    </titanium-data-table>



</demo-container>`;
  }
}
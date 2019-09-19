import { storiesOf, forceReRender } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';
import '@leavittsoftware/titanium-chip/lib/titanium-chip';

const availableCssVars = {
  cssresources: [
    {
      id: `Theme`,
      code: `<style> titanium-data-table {
      --app-text-color: #01579b;
      --app-light-text-color: #4f83cc;
      --app-dark-text-color: #002f6c;
      --app-hover-color: #e1f5fe;
      --app-border-color: #870000;
      --app-menu-text-color: #81d4fa;
      } </style>`,
    },
  ],
};

let sortDirection = 'desc';
let sortBy = 'Name';
const onSortDirectionChange = event => {
  sortDirection = event.detail;
  forceReRender();
};
const onSortByChange = event => {
  sortBy = event.detail;
  forceReRender();
};

//TODO: Make more demos
storiesOf('UI COMPONENTS|titanium-data-table', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set',
    () => {
      return html`
        <titanium-data-table
          .items=${[{}, {}]}
          .isLoading=${false}
          count="2"
          largePages
          header="Data table"
          @titanium-data-table-item-navigate=${action('navigate')}
          @titanium-data-table-item-selected-changed=${action('changed')}
        >
          <titanium-search-input slot="table-actions"></titanium-search-input>
          <titanium-svg-button slot="table-actions" path="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></titanium-svg-button>

          <titanium-chip label="Hello" closeable slot="table-sub-actions"></titanium-chip>
          <titanium-chip label="World" closeable slot="table-sub-actions"></titanium-chip>
          <titanium-chip label="Hello" closeable slot="table-sub-actions"></titanium-chip>
          <titanium-chip label="World" closeable slot="table-sub-actions"></titanium-chip>
          <titanium-chip label="Hello" closeable slot="table-sub-actions"></titanium-chip>
          <titanium-chip label="World" closeable slot="table-sub-actions"></titanium-chip>

          <titanium-data-table-header
            @sort-by-changed=${onSortByChange}
            .sortBy=${sortBy}
            .sortDirection=${sortDirection}
            @sort-direction-changed=${onSortDirectionChange}
            column-name="Name"
            slot="table-headers"
            large
            title="Name"
          ></titanium-data-table-header>
          <titanium-data-table-header
            @sort-by-changed=${onSortByChange}
            .sortBy=${sortBy}
            .sortDirection=${sortDirection}
            @sort-direction-changed=${onSortDirectionChange}
            column-name="SName"
            slot="table-headers"
            desktop
            title="Short Name"
          ></titanium-data-table-header>
          <titanium-data-table-header slot="table-headers" no-sort desktop title="Type"></titanium-data-table-header>
          <titanium-data-table-header slot="table-headers" no-sort desktop center width="105px" title="Phone Number"></titanium-data-table-header>
          <titanium-data-table-header slot="table-headers" no-sort width="75px" right title="Locations"></titanium-data-table-header>

          <titanium-data-table-item slot="items">
            <row-item large>Item A</row-item>
            <row-item desktop>2 eggs</row-item>
            <row-item desktop>5 dollars</row-item>
            <row-item desktop width="105px" center>25 cents</row-item>
            <row-item width="75px" right>Samsung</row-item>
          </titanium-data-table-item>
          <titanium-data-table-item slot="items">
            <row-item large>Item B</row-item>
            <row-item desktop>4 eggs</row-item>
            <row-item desktop>77 dollars</row-item>
            <row-item desktop width="105px" center>75 cents</row-item>
            <row-item width="75px" right>Pixel</row-item>
          </titanium-data-table-item>
        </titanium-data-table>
      `;
    },
    availableCssVars
  )
  .add(
    'No select',
    () => {
      return html`
        <titanium-data-table disable-select .items=${[{}, {}]} .isLoading=${false} count="2" largePages header="Data table">
          <titanium-search-input slot="table-actions"></titanium-search-input>
          <titanium-svg-button slot="table-actions" path="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></titanium-svg-button>

          <titanium-chip label="Hello" closeable slot="table-sub-actions"></titanium-chip>
          <titanium-chip label="World" closeable slot="table-sub-actions"></titanium-chip>
          <titanium-chip label="Hello" closeable slot="table-sub-actions"></titanium-chip>
          <titanium-chip label="World" closeable slot="table-sub-actions"></titanium-chip>
          <titanium-chip label="Hello" closeable slot="table-sub-actions"></titanium-chip>
          <titanium-chip label="World" closeable slot="table-sub-actions"></titanium-chip>

          <titanium-data-table-header
            @sort-by-changed=${onSortByChange}
            .sortBy=${sortBy}
            .sortDirection=${sortDirection}
            @sort-direction-changed=${onSortDirectionChange}
            column-name="Name"
            slot="table-headers"
            large
            title="Name"
          ></titanium-data-table-header>
          <titanium-data-table-header
            @sort-by-changed=${onSortByChange}
            .sortBy=${sortBy}
            .sortDirection=${sortDirection}
            @sort-direction-changed=${onSortDirectionChange}
            column-name="SName"
            slot="table-headers"
            desktop
            title="Short Name"
          ></titanium-data-table-header>
          <titanium-data-table-header slot="table-headers" no-sort desktop title="Type"></titanium-data-table-header>
          <titanium-data-table-header slot="table-headers" no-sort desktop center width="105px" title="Phone Number"></titanium-data-table-header>
          <titanium-data-table-header slot="table-headers" no-sort width="75px" right title="Locations"></titanium-data-table-header>

          <titanium-data-table-item disable-select slot="items">
            <row-item large>Item A</row-item>
            <row-item desktop>2 eggs</row-item>
            <row-item desktop>5 dollars</row-item>
            <row-item desktop width="105px" center>25 cents</row-item>
            <row-item width="75px" right>Samsung</row-item>
          </titanium-data-table-item>
          <titanium-data-table-item disable-select slot="items">
            <row-item large>Item B</row-item>
            <row-item desktop>4 eggs</row-item>
            <row-item desktop>77 dollars</row-item>
            <row-item desktop width="105px" center>75 cents</row-item>
            <row-item width="75px" right>Pixel</row-item>
          </titanium-data-table-item>
        </titanium-data-table>
      `;
    },
    availableCssVars
  );

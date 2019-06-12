import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-svg-button';
import '@leavittsoftware/titanium-header';
import '@leavittsoftware/titanium-chip';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-toolbar';
import '@leavittsoftware/titanium-progress';
import '@leavittsoftware/titanium-card/lib/titanium-card-list-item';
import '@leavittsoftware/titanium-card/lib/titanium-single-action-card';
import '@leavittsoftware/titanium-button';
import '@leavittsoftware/titanium-loading-indicator';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';

const availableCssVars = {
  cssresources: [
    {
      id: `Theme`,
      code: `<style> body {
      --app-text-color: #01579b;
      --app-light-text-color: #4f83cc;
      --app-dark-text-color: #002f6c;
      --app-hover-color: #e1f5fe;
      --app-border-color: #bbdefb;
      --app-menu-text-color: #81d4fa;
      --app-link-color: #d84315;
      --app-primary-color: #f4511e;
      } </style>`,
    },
  ],
};
//TODO: Make more demos
storiesOf('UI COMPONENTS|- Titanium Super Demo -', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set',
    () => {
      let disable = boolean('disable', false);
      return html`
        <titanium-toolbar> <span main-title>A Simple Toolbar</span></titanium-toolbar>

        <titanium-header header="Titanium elements" subHeader="One stop shop for everything good" style="padding-top: 60px"></titanium-header>
        <titanium-data-table header="Data table">
          <titanium-search-input slot="table-actions" ?disabled=${disable}></titanium-search-input>
          <titanium-svg-button slot="table-actions" ?disabled=${disable} path="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></titanium-svg-button>

          <titanium-data-table-header slot="table-headers" large columnName="Name" title="Name" sortBy="Name"></titanium-data-table-header>
          <titanium-data-table-header slot="table-headers" desktop title="Short Name" sortBy="SName"></titanium-data-table-header>
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

        <p>
          <titanium-chip label="C Drive" closeable ?disabled=${disable}></titanium-chip>
          <titanium-chip label="D Drive" closeable ?disabled=${disable}></titanium-chip>
          <titanium-chip label="F Drive" closeable ?disabled=${disable}></titanium-chip>
          <titanium-chip label="F Drive" closeable ?disabled=${disable}></titanium-chip>
          <titanium-chip label="This Guy" src="https://mapi.leavitt.com/People(771130)/Default.Picture(size=35)" ?disabled=${disable}></titanium-chip>
          <titanium-chip label="Main frame" closeable ?disabled=${disable}>
            <svg slot="chip-icon" style="width:18px;height:18px" viewBox="0 0 24 24">
              <path
                d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"
              />
            </svg>
          </titanium-chip>
        </p>
        <br />
        <titanium-button ?disabled=${disable}>CLOSE</titanium-button>
        <titanium-button outlined ?disabled=${disable}>OUTLINED</titanium-button>
        <titanium-button raised ?disabled=${disable}>RAISED</titanium-button>
        <titanium-button unelevated ?disabled=${disable}>UNELEVATED</titanium-button>
        <br />
        <br />
        <titanium-loading-indicator ?disabled=${disable}></titanium-loading-indicator>
        <br />
        <br />

        <titanium-progress ?disabled=${disable}> </titanium-progress>
        <br />
        <br />

        <titanium-search-input ?disabled=${disable}></titanium-search-input>

        <titanium-svg-button ?disabled=${disable} path="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></titanium-svg-button>
        <titanium-svg-button large ?disabled=${disable} path="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"></titanium-svg-button>

        <titanium-card>
          <h1>Color picker</h1>
          <h2>TLDR</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
          </p>
          <h2>Preamble</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>

          <h3>Section I</h3>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </titanium-card>
        <br />
        <titanium-single-action-card ?disable-action=${disable} buttonTitle="Manage your data & personalization">
          <h1>Privacy & personalization</h1>
          <p>
            Nulla posuere lacus luctus, fringilla orci vel, laoreet felis. Maecenas imperdiet urna eu consequat lobortis. Sed at ornare nibh. Donec justo urna,
            iaculis a interdum id, luctus sit amet mi. Aenean eu metus sed ligula egestas tincidunt.
          </p>
        </titanium-single-action-card>
        <br />
        <titanium-single-action-card ?disable-action=${disable} buttonTitle="Manage your data & personalization">
          <h1>Manage payment methods</h1>
          <titanium-card-list-item ?disabled=${disable} title="Mastercard">
            <horizontal-pane style="display: flex; justify-content:space-between; flex-direction: row; fill: #5f6368">
              <div>Mastercard</div>
              <svg viewBox="0 0 24 24" style="height: 24px; width: 24px; flex-shrink: 0;">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </horizontal-pane>
          </titanium-card-list-item>
          <titanium-card-list-item ?disabled=${disable} title="Visa">
            <horizontal-pane style="display: flex; justify-content:space-between; flex-direction: row; fill: #5f6368">
              <div>Visa</div>
              <svg viewBox="0 0 24 24" style="height: 24px; width: 24px; flex-shrink: 0;">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </horizontal-pane>
          </titanium-card-list-item>
          <titanium-card-list-item ?disabled=${disable} title="Discover">
            <horizontal-pane style="display: flex; justify-content:space-between; flex-direction: row;">
              <div>Discover</div>
              <svg viewBox="0 0 24 24" style="height: 24px; width: 24px; flex-shrink: 0; fill: #5f6368">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </horizontal-pane>
          </titanium-card-list-item>
        </titanium-single-action-card>
      `;
    },
    availableCssVars
  );

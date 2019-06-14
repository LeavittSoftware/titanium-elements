import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-svg-button';
import '@leavittsoftware/titanium-header';
import '@leavittsoftware/titanium-chip';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-toolbar';
import '@leavittsoftware/titanium-progress';
import '@leavittsoftware/titanium-side-menu';
import '@leavittsoftware/titanium-card/lib/titanium-card-list-item';
import '@leavittsoftware/titanium-card/lib/titanium-single-action-card';
import '@leavittsoftware/titanium-button';
import '@leavittsoftware/titanium-loading-indicator';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';
import '@leavittsoftware/titanium-single-select';
import '@leavittsoftware/titanium-tab-control';

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

        <titanium-single-select
          ?disabled=${disable}
          style="max-width: 400px; margin: 24px 0;"
          itemlabelpath="FullName"
          hinttext="Search for a person or group to add them as a participant"
          placeholder="Add participants"
        >
        </titanium-single-select>
        <titanium-single-select
          ?disabled=${disable}
          style="max-width: 400px; margin: 24px 0;"
          shaped
          itemlabelpath="Shaped"
          hinttext="Search for a person or group to add them as a participant"
          placeholder="Shaped"
        >
        </titanium-single-select>
        <titanium-single-select
          ?disabled=${disable}
          style="max-width: 400px; margin: 24px 0;"
          filled
          itemlabelpath="Filled"
          hinttext="Search for a person or group to add them as a participant"
          placeholder="Filled"
        >
        </titanium-single-select>

        <titanium-svg-button ?disabled=${disable} path="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></titanium-svg-button>
        <titanium-svg-button large ?disabled=${disable} path="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"></titanium-svg-button>

        <menu-container style="display: flex; flex-direction: column;width: 280px;margin: 24px 0;">
          <titanium-side-menu-item href="#" ?disabled=${disable}>One Fish</titanium-side-menu-item>
          <titanium-side-menu-item href="#">Two Fish</titanium-side-menu-item>
          <titanium-side-menu-item href="#" selected>
            <svg viewBox="0 0 24 24">
              <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" /></svg >
              <span>Red Fish</span>
          </titanium-side-menu-item>
          <titanium-side-menu-item href="#">
          <svg viewBox="0 0 24 24">
               <path d="M12,20L12.76,17C9.5,16.79 6.59,15.4 5.75,13.58C5.66,14.06 5.53,14.5 5.33,14.83C4.67,16 3.33,16 2,16C3.1,16 3.5,14.43 3.5,12.5C3.5,10.57 3.1,9 2,9C3.33,9 4.67,9 5.33,10.17C5.53,10.5 5.66,10.94 5.75,11.42C6.4,10 8.32,8.85 10.66,8.32L9,5C11,5 13,5 14.33,5.67C15.46,6.23 16.11,7.27 16.69,8.38C19.61,9.08 22,10.66 22,12.5C22,14.38 19.5,16 16.5,16.66C15.67,17.76 14.86,18.78 14.17,19.33C13.33,20 12.67,20 12,20M17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12A1,1 0 0,0 17,11Z"/></svg>
              <span>Blue Fish</span>
          </titanium-side-menu-item>
        </menu-container>
        <titanium-tab-control style="margin: 24px 0;">
          <titanium-tab-control-item> One Fish </titanium-tab-control-item>
          <titanium-tab-control-item> Two Fish </titanium-tab-control-item>
          <titanium-tab-control-item selected> Red Fish </titanium-tab-control-item>
          <titanium-tab-control-item> Blue Fish </titanium-tab-control-item>
        </titanium-tab-control>

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
            <div>Mastercard</div>
            <div spacer></div>
            <svg viewBox="0 0 24 24" style="height: 24px; width: 24px; flex-shrink: 0;fill: #5f6368"">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </titanium-card-list-item>
          <titanium-card-list-item ?disabled=${disable} title="Visa">
            <div>Visa</div>
            <div spacer></div>
            <svg viewBox="0 0 24 24" style="height: 24px; width: 24px; flex-shrink: 0;fill: #5f6368"">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </titanium-card-list-item>
          <titanium-card-list-item ?disabled=${disable} title="Discover">
            <div>Discover</div>
            <div spacer></div>
            <svg viewBox="0 0 24 24" style="height: 24px; width: 24px; flex-shrink: 0; fill: #5f6368">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </titanium-card-list-item>
        </titanium-single-action-card>
      `;
    },
    availableCssVars
  );

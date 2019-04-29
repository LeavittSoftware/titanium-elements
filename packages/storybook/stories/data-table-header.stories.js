import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-header';

const availableCssVars = {
  cssresources: [
    {
      id: `Theme`,
      code: `<style> titanium-data-table-header {
        --titanium-data-table-header-active-svg-color: green;
        --titanium-data-table-header-svg-color: green;
        --titanium-data-table-header-active-text-color: blue; 
      } </style>`,
    },
  ],
};
//TODO: Make more demos
storiesOf('UI COMPONENTS|titanium-data-table-header', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set',
    () => {
      let columnName = text('column-name', 'name');
      let title = text('title', 'First Name');
      let width = text('width', '');
      let active = boolean('active', true);
      let direction = select('Sort Direction', { asc: 'asc', desc: 'desc', none: '' });
      return html`
        <header style="border-bottom: 1px solid #dadce0;border-top: 1px solid #dadce0;">
          <titanium-data-table-header
            ?active=${active}
            .sortDirection=${direction}
            .columnName=${columnName}
            .title=${title}
            .width=${width}
            @sort-by-changed=${action('Sort Direction Changed')}
          ></titanium-data-table-header>
        </header>
      `;
    },
    availableCssVars
  );

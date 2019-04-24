import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-chip';

const availableCssVars = {
  cssresources: [
    {
      id: `Darkheme`,
      code: `<style> titanium-chip {
        --titanium-chip-label-background-color: #f9f9f9;
        --titanium-chip-label-hover-background-color: #eee;
        --titanium-chip-label-active-background-color: #eee;
        --titanium-chip-label-color: #000;
      } </style>`,
    },
  ],
};

storiesOf('UI COMPONENTS|titanium-chip', module)
  .addDecorator(withKnobs)
  .add(
    'Simple',
    () => {
      let label = text('label', 'James Franco');
      return html`
        <titanium-chip .label=${label}></titanium-chip>
      `;
    },
    availableCssVars
  )
  .add(
    'Feature set',
    () => {
      let label = text('label', 'James Franco');
      let img = text('img src', 'https://mapi.leavitt.com/People(771130)/Default.Picture(size=35)');
      let closable = boolean('closeable', false);
      let disable = boolean('disable', false);
      return html`
        <titanium-chip
          .label=${label}
          .src=${img}
          ?closeable=${closable}
          ?disabled=${disable}
          @titanium-chip-close=${action('Chip Closed Event')}
        ></titanium-chip>
      `;
    },
    availableCssVars
  )
  .add(
    'Custom Icon',
    () => {
      let label = text('label', 'Primary Disk Drive');
      let closable = boolean('closeable', false);
      let disable = boolean('disable', false);
      return html`
        <titanium-chip .label=${label} ?closeable=${closable} ?disabled=${disable} @titanium-chip-close=${action('Chip Closed Event')}>
          <svg slot="chip-icon" style="width:18px;height:18px" viewBox="0 0 24 24">
            <path
              fill="#757575"
              d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"
            />
          </svg>
        </titanium-chip>
      `;
    },
    availableCssVars
  );

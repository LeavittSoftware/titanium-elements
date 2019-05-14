import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-button';

const availableCssVars = {
  cssresources: [
    {
      id: `Pink`,
      code: `<style> titanium-button {
        --titanium-button-text-color: #fff;
        --titanium-button-background-color: #e9437a;
    } </style>`,
    },
  ],
};

storiesOf('UI COMPONENTS|titanium-button', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set',
    () => {
      let raised = boolean('raised', false);
      let disable = boolean('disable', false);
      let outlined = boolean('outlined', false);
      let unelevated = boolean('unelevated', false);
      return html`
        <titanium-button ?unelevated=${unelevated} ?raised=${raised} ?outlined=${outlined} ?disabled=${disable} @click=${action('Button Clicked')}
          >CLOSE</titanium-button
        >
      `;
    },
    availableCssVars
  )
  .add(
    'Flat',
    () => {
      return html`
        <titanium-button>CLOSE</titanium-button>
        <titanium-button outlined>OUTLINED</titanium-button>
        <titanium-button disabled>DISABLED</titanium-button>
      `;
    },
    {
      cssresources: [
        {
          id: `Pink`,
          code: `<style> titanium-button {
            --titanium-button-text-color: #e9437a;
        } </style>`,
        },
      ],
    }
  )
  .add(
    'Raised',
    () => {
      return html`
        <titanium-button raised>RAISED</titanium-button>
        <titanium-button unelevated>UNELEVATED</titanium-button>
        <titanium-button disabled>DISABLED</titanium-button>
      `;
    },
    {
      cssresources: [
        {
          id: `Pink`,
          code: `<style> titanium-button {
            --titanium-button-text-color: #fff;
            --titanium-button-background-color: #e9437a;
        } </style>`,
        },
      ],
    }
  );

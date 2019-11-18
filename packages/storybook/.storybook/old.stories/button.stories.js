import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-button';

const availableCssVars = {
  cssresources: [
    {
      id: `Solid Button Light Theme`,
      code: `<style> titanium-button {
        --app-primary-color: #eee;
        --titanium-solid-button-text-color: #000;
    } </style>`,
      id: `Button Pink Theme`,
      code: `<style> titanium-button {
        --app-primary-color: #f4511e;
        --app-link-color: #d84315;
        --titanium-solid-button-text-color: blue;
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
            --app-primary-color: #f4511e;
            --app-link-color: #d84315;
            --titanium-solid-button-text-color: blue;
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
          id: `Light Theme`,
          code: `<style> titanium-button {
            --app-primary-color: #f4511e;
            --app-link-color: #d84315;
            --titanium-solid-button-text-color: blue;
        } </style>`,
        },
      ],
    }
  )
  .add(
    'Dense',
    () => {
      return html`
        <titanium-button dense raised>RAISED</titanium-button>
        <titanium-button dense unelevated>UNELEVATED</titanium-button>
        <titanium-button dense disabled>DISABLED</titanium-button>
      `;
    },
    {
      cssresources: [
        {
          id: `Light Theme`,
          code: `<style> titanium-button {
            --app-primary-color: #f4511e;
            --app-link-color: #d84315;
            --titanium-solid-button-text-color: blue;
        } </style>`,
        },
      ],
    }
  );

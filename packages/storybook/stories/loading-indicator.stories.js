import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-loading-indicator';

const availableCssVars = {
  cssresources: [
    {
      id: `Theme`,
      code: `<style> titanium-loading-indicator {
        --titanium-loading-indicator-text-color: green;
        --titanium-loading-indicator-icon-color: lightcoral; 
      } </style>`,
    },
  ],
};

storiesOf('UI COMPONENTS|titanium-loading-indicator', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set',
    () => {
      let disabled = boolean('disabled');
      return html`
        <titanium-loading-indicator ?disabled=${disabled}></titanium-loading-indicator>
      `;
    },
    availableCssVars
  )
  .add(
    'Centered',
    () => {
      return html`
        <div
          style="display: flex;height: 350px;width: 350px;border: 1px solid black;justify-content: center;align-items: center;text-align: center;flex-direction: column;"
        >
          <titanium-loading-indicator>Loading in a box...</titanium-loading-indicator>
        </div>
      `;
    },
    availableCssVars
  );

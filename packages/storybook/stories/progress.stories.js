import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import '@leavittsoftware/titanium-progress';
const availableCssVars = {
  cssresources: [
    {
      id: `Theme`,
      code: `<style> titanium-progress {
        --app-primary-color: #002f6c;
      } </style>`,
    },
  ],
};

storiesOf('UI COMPONENTS|titanium-progress', module).add(
  'Feature set',
  () => {
    return html`
      <titanium-progress> </titanium-progress>
    `;
  },
  availableCssVars
);

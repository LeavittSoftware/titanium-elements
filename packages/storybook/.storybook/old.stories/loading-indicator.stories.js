import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-loading-indicator';
import '@leavittsoftware/titanium-loading-indicator/lib/titanium-full-page-loading-indicator';

const availableCssVars = {
  cssresources: [
    {
      id: `Theme`,
      code: `<style> titanium-loading-indicator {
        --app-text-color: #01579b;
      } </style>`,
    },
  ],
};

var openDialog = e => {
  e.preventDefault();
  document
    .querySelector(`titanium-full-page-loading-indicator`)
    .open()
    .then(() => console.log('Closed'));
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
  )
  .add(
    'Full Page',
    () => {
      return html`
        <a href="#" @click=${e => openDialog(e)}>
          Open dialog no title
        </a>
        <titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
      `;
    },
    availableCssVars
  );

import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import '@leavittsoftware/titanium-toolbar';
const availableCssVars = {
  cssresources: [
    {
      id: `Theme`,
      code: `<style> titanium-toolbar {
        --app-text-color: #fff;
        --titanium-toolbar-color: #002f6c;
      } </style>`,
    },
  ],
};

storiesOf('UI COMPONENTS|titanium-toolbar', module).add(
  'Feature set',
  () => {
    return html`
      <titanium-toolbar> <span main-title>An 8k toolbar?</span></titanium-toolbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      Page Footer
    `;
  },
  availableCssVars
);

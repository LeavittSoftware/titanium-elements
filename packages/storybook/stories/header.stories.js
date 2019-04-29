import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-header';

const availableCssVars = {
  cssresources: [
    {
      id: `Theme`,
      code: `<style> titanium-header {
        --titanium-header-header-color: red; 
        --titanium-header-subheader-color: green; 
      } </style>`,
    },
  ],
};

storiesOf('UI COMPONENTS|titanium-header', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set',
    () => {
      let header = text('header', 'Cute kittens');
      let subHeader = text('subHeader', 'These are my cute kittens');
      let noNav = boolean('no-nav');
      return html`
        <titanium-header ?no-nav=${noNav} .header=${header} .subHeader=${subHeader}></titanium-header>
      `;
    },
    availableCssVars
  );

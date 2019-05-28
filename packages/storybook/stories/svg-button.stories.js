import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-svg-button';

const availableCssVars = {
  cssresources: [
    {
      id: `StyleMe`,
      code: `<style> titanium-svg-button {
        --titanium-svg-button-svg-width: 30%;
        --titanium-svg-button-svg-height: 30%;
        --app-hover-color: #e1f5fe;
        --app-text-color: #01579b;
    } </style>`,
    },
  ],
};

const sampleSvgPaths = {
  Back: 'M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z',
  GT: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
  Download: 'M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z',
};

storiesOf('UI COMPONENTS|titanium-svg-button', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set',
    () => {
      let path = select('path', sampleSvgPaths, 'M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z');
      let large = boolean('large', false);
      let disable = boolean('disable', false);
      return html`
        <titanium-svg-button ?large=${large} ?disabled=${disable} .path=${path} @click=${action('Button Clicked')}></titanium-svg-button>
      `;
    },
    availableCssVars
  );

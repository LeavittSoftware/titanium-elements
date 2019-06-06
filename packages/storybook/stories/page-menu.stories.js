import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { decorate } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-page-menu';
import '@leavittsoftware/titanium-page-menu/lib/titanium-page-menu-item';

const availableCssVars = {
  cssresources: [
    {
      id: `StyleMe`,
      code: `<style></style>`,
    },
  ],
};

const sampleSvgPaths = {
  Back: 'M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z',
  GT: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
  Download: 'M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z',
  Fish:
    'M12,20L12.76,17C9.5,16.79 6.59,15.4 5.75,13.58C5.66,14.06 5.53,14.5 5.33,14.83C4.67,16 3.33,16 2,16C3.1,16 3.5,14.43 3.5,12.5C3.5,10.57 3.1,9 2,9C3.33,9 4.67,9 5.33,10.17C5.53,10.5 5.66,10.94 5.75,11.42C6.4,10 8.32,8.85 10.66,8.32L9,5C11,5 13,5 14.33,5.67C15.46,6.23 16.11,7.27 16.69,8.38C19.61,9.08 22,10.66 22,12.5C22,14.38 19.5,16 16.5,16.66C15.67,17.76 14.86,18.78 14.17,19.33C13.33,20 12.67,20 12,20M17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12A1,1 0 0,0 17,11Z',
  Disabled:
    'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.85 4.63,15.55 5.68,16.91L16.91,5.68C15.55,4.63 13.85,4 12,4M12,20A8,8 0 0,0 20,12C20,10.15 19.37,8.45 18.32,7.09L7.09,18.32C8.45,19.37 10.15,20 12,20Z',
};

const values = ['', 'One Fish', 'Two Fish', '#f00', '#00f', 'Disabled Fish'];

let value = decorate([args => args[0].detail.value]);

storiesOf('UI COMPONENTS|titanium-page-menu', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set',
    () => {
      let path = select('path', sampleSvgPaths, sampleSvgPaths.Fish);
      let disable = boolean('disable', false);
      let selection = select('page', values, values[0]);
      return html`
        <titanium-page-menu .selected=${selection} ?disabled=${disable} @titanium-page-menu-item-selected=${value.action(`Selected`)}>
          <titanium-page-menu-item>One Fish</titanium-page-menu-item>
          <titanium-page-menu-item>Two Fish</titanium-page-menu-item>
          <hr />
          <titanium-page-menu-item .icon=${path} .value=${'#f00'}>Red Fish </titanium-page-menu-item>
          <titanium-page-menu-item .icon=${path} .value=${'#00f'}>Blue Fish </titanium-page-menu-item>
          <hr />
          <titanium-page-menu-item .icon=${sampleSvgPaths.Disabled} disabled>Disabled Fish</titanium-page-menu-item>
        </titanium-page-menu>
      `;
    },
    availableCssVars
  );

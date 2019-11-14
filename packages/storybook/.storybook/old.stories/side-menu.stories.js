import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-side-menu';

const availableCssVars = {
  cssresources: [
    {
      id: `Theme`,
      code: `<style> titanium-side-menu-item {
      --titanium-side-menu-item-active-background-color: lightblue;
      --titanium-side-menu-item-selected-background-color: red;
      --titanium-side-menu-item-selected-color: white;
      --app-hover-color: #002f6c;
      --app-text-color: #01579b;
    } </style>`,
    },
  ],
};

storiesOf('UI COMPONENTS|titanium-side-menu', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set',
    () => {
      let disable = boolean('disable', true);
      return html`
        <menu-container style="display: flex; flex-direction: column;width: 280px;">
          <titanium-side-menu-item href="#">One Fish</titanium-side-menu-item>
          <titanium-side-menu-item href="#" ?disabled=${disable}>Two Fish</titanium-side-menu-item>
          <titanium-side-menu-item href="#" ?disabled=${disable}>
            <svg viewBox="0 0 24 24">
              <path
                d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
              /></svg
            >Red Fish
          </titanium-side-menu-item>
          <titanium-side-menu-item href="#" selected
            ><svg viewBox="0 0 24 24">
              <path
                d="M12,20L12.76,17C9.5,16.79 6.59,15.4 5.75,13.58C5.66,14.06 5.53,14.5 5.33,14.83C4.67,16 3.33,16 2,16C3.1,16 3.5,14.43 3.5,12.5C3.5,10.57 3.1,9 2,9C3.33,9 4.67,9 5.33,10.17C5.53,10.5 5.66,10.94 5.75,11.42C6.4,10 8.32,8.85 10.66,8.32L9,5C11,5 13,5 14.33,5.67C15.46,6.23 16.11,7.27 16.69,8.38C19.61,9.08 22,10.66 22,12.5C22,14.38 19.5,16 16.5,16.66C15.67,17.76 14.86,18.78 14.17,19.33C13.33,20 12.67,20 12,20M17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12A1,1 0 0,0 17,11Z"
              /></svg
            >Blue Fish
          </titanium-side-menu-item>
        </menu-container>
      `;
    },
    availableCssVars
  );

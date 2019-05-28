import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-search-input';

const availableCssVars = {
  cssresources: [
    {
      id: `Theme`,
      code: `<style> titanium-search-input {
        --titanium-svg-button-svg-active-color: green;
        --app-border-color: #bbdefb;
        --app-darker-text-color: #002f6c;
        --app-text-color: #01579b;
      } </style>`,
    },
  ],
};

storiesOf('UI COMPONENTS|titanium-search-input', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set',
    () => {
      let value = text('value', '');
      let placeholder = text('placeholder', '');
      let disabled = boolean('disabled');
      let preventCollapse = boolean('preventCollapse');
      let hideClearButton = boolean('hideClearButton');
      let collapsed = boolean('collapsed', true);
      return html`
        <titanium-search-input
          .placeholder=${placeholder}
          ?hide-clear-button=${hideClearButton}
          .value=${value}
          ?disabled=${disabled}
          ?collapsed=${collapsed}
          ?prevent-collapse=${preventCollapse}
          @value-changed=${action('Value Changed')}
        ></titanium-search-input>
      `;
    },
    availableCssVars
  );

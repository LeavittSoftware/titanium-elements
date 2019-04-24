import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, button, text } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-snackbar/lib/titanium-snackbar';

storiesOf('UI COMPONENTS|titanium-snackbar', module)
  .addDecorator(withKnobs)
  .add(
    'Usage',

    () => {
      let title = text('Toast Message', 'Query failed');
      let actionText = text('Action Text', 'LONGER ACTION TEXT');
      let handler = () => {
        document.querySelector('titanium-snackbar').open(title, actionText);
      };

      button('Open Toast', handler);

      return html`
        Use the open toast knob to show the toast.
        <titanium-snackbar></titanium-snackbar>
      `;
    },
    {
      cssresources: [
        {
          id: `LightTheme`,
          code: `<style> titanium-snackbar {
            --titanium-snackbar-background-color: #fff;
            --titanium-snackbar-text-color: #757575;
            --titanium-snackbar-action-color: #000;
          } </style>`,
        },
      ],
    }
  );

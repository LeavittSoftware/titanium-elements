import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, button, text } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-snackbar';

storiesOf('UI COMPONENTS|titanium-snackbar', module)
  .addDecorator(withKnobs)
  .add(
    'Usage',

    () => {
      return html`
        <div style="height: 48px;background-color: red; z-index: 2;"></div>
        <a
          href="#"
          @click=${e => {
            e.preventDefault();
            document
              .querySelector(`titanium-snackbar`)
              .open('This is the body')
              .then(() => console.log('closed'));
          }}
        >
          Simple snackbar
        </a>
        <br />
        <a
          href="#"
          @click=${e => {
            e.preventDefault();
            document
              .querySelector(`titanium-snackbar`)
              .open('Autohide snackbar', { autoHide: true })
              .then(() => console.log('closed'));
          }}
        >
          Autohide snackbar
        </a>
        <br />
        <a
          href="#"
          @click=${e => {
            e.preventDefault();
            document
              .querySelector(`titanium-snackbar`)
              .open('Informational snackbar', { style: 'informational' })
              .then(() => console.log('closed'));
          }}
        >
          Informational snackbar
        </a>
        <br />
        <a
          href="#"
          @click=${e => {
            e.preventDefault();
            document
              .querySelector(`titanium-snackbar`)
              .open('Informational no action auto-hide snackbar', { autoHide: true, noAction: true, style: 'informational' })
              .then(() => console.log('closed'));
          }}
        >
          Informational no action auto-hide snackbar
        </a>
        <br />
        <a
          href="#"
          @click=${e => {
            e.preventDefault();
            document
              .querySelector(`titanium-snackbar`)
              .open('Error styled snackbar', { style: 'error' })
              .then(() => console.log('closed'));
          }}
        >
          Error styled snackbar
        </a>
        <br />
        <a
          href="#"
          @click=${e => {
            e.preventDefault();
            document
              .querySelector(`titanium-snackbar`)
              .open(
                'Literally beard sartorial cronut. Squid echo park iPhone polaroid 8-bit, migas synth brunch cred neutra hot chicken snackwave small batch. Yr crucifix letterpress seitan, asymmetrical vape tousled. Typewriter tofu chambray chillwave kombucha.',
                { actionText: 'UNDO the synth brunch ' }
              )
              .then(() => console.log('closed'));
          }}
        >
          Stacked (long action) snackbar
        </a>
        <br />
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

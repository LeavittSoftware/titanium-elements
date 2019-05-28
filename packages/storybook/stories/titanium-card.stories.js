import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-card/lib/titanium-card-list-item';
import '@leavittsoftware/titanium-card/lib/titanium-single-action-card';

const availableCssVars = {
  cssresources: [
    {
      id: `Theme`,
      code: `<style> body {
      --app-text-color: #01579b;
      --app-light-text-color: #4f83cc;
      --app-dark-text-color: #002f6c;
      --app-hover-color: #e1f5fe;
      --app-border-color: #bbdefb;
      --app-menu-text-color: #81d4fa;
      --app-link-color: #d84315;
      --app-primary-color: #f4511e;
      } </style>`,
    },
  ],
};
storiesOf('UI COMPONENTS|titanium-card', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set',
    () => {
      let disable = boolean('disable', false);
      return html`
        <titanium-card>
          <h1>Color picker</h1>
          <h2>TLDR</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
          </p>
          <h2>Preamble</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>

          <h3>Section I</h3>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </titanium-card>
        <br />
        <titanium-single-action-card ?disabled=${disable} buttonTitle="Manage your data & personalization">
          <h1>Privacy & personalization</h1>
          <p>
            Nulla posuere lacus luctus, fringilla orci vel, laoreet felis. Maecenas imperdiet urna eu consequat lobortis. Sed at ornare nibh. Donec justo urna,
            iaculis a interdum id, luctus sit amet mi. Aenean eu metus sed ligula egestas tincidunt.
          </p>
        </titanium-single-action-card>
        <br />
        <titanium-single-action-card ?disabled=${disable} buttonTitle="Manage your data & personalization">
          <h1>Manage payment methods</h1>
          <titanium-card-list-item ?disabled=${disable} title="Mastercard">
            <horizontal-pane style="display: flex; justify-content:space-between; flex-direction: row; fill: #5f6368">
              <div>Mastercard</div>
              <svg viewBox="0 0 24 24" style="height: 24px; width: 24px; flex-shrink: 0;">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </horizontal-pane>
          </titanium-card-list-item>
          <titanium-card-list-item ?disabled=${disable} title="Visa">
            <horizontal-pane style="display: flex; justify-content:space-between; flex-direction: row; fill: #5f6368">
              <div>Visa</div>
              <svg viewBox="0 0 24 24" style="height: 24px; width: 24px; flex-shrink: 0;">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </horizontal-pane>
          </titanium-card-list-item>
          <titanium-card-list-item ?disabled=${disable} title="Discover">
            <horizontal-pane style="display: flex; justify-content:space-between; flex-direction: row;">
              <div>Discover</div>
              <svg viewBox="0 0 24 24" style="height: 24px; width: 24px; flex-shrink: 0; fill: #5f6368">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </horizontal-pane>
          </titanium-card-list-item>
        </titanium-single-action-card>
      `;
    },
    availableCssVars
  );

import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import '@leavittsoftware/titanium-error-page';

storiesOf('UI COMPONENTS|titanium-error-page', module)
  .add('Feature set', () => {
    return html`
      <div style="margin: 0 auto; max-width: 70%;">
        <titanium-error-page></titanium-error-page>
      </div>
    `;
  });

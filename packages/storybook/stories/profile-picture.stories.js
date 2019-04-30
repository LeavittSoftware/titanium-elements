import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import '@leavittsoftware/profile-picture';
import '@leavittsoftware/profile-picture/lib/profile-picture-menu';

storiesOf('UI COMPONENTS|profile-picture', module)
  .addDecorator(withKnobs)
  .add(
    'Feature set - profile-picture',
    () => {
      let personId = text('personId', '11056');
      let shape = select('path', {square: 'square', circle: 'circle'});
      let size = text('size', '104');
      return html`
       <profile-picture .personId=${personId} .shape=${shape} .size=${size}></profile-picture>
      `;
    }
  )
  .add(
    'Feature set - profile-picture-menu',
    () => {
      return html`
      <user-manager></user-manager>
      <profile-picture-menu style="float:right">
        <div slot="content">
          <pre>slot="content"</pre>
        </div>
      </profile-picture-menu>
      `;
    }
  );

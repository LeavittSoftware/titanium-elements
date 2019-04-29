import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, button } from '@storybook/addon-knobs';
import '@leavittsoftware/user-manager/lib/user-manager';
import { GetUserManagerInstance } from '@leavittsoftware/user-manager/lib/user-manager';

storiesOf('COMMUNICATION|user-manager', module)
  .addDecorator(withKnobs)
  .add(
    'Get token example',

    () => {
      let handler = () => {
        GetUserManagerInstance()
          .getAccessTokenAsync()
          .then(token => {
            alert(token);
          })
          .catch(function(error) {
            console.warn(error);
          });
      };

      button('Get Token', handler);

      return html`
        <user-manager></user-manager>
      `;
    }
  )
  .add('Get person data', () => {
    // GetUserManagerInstance().addEventListener(UserManagerUpdatedEvent.eventName, () => this.updateProps());

    const fullname = GetUserManagerInstance().fullname;
    const lastName = GetUserManagerInstance().lastName;
    const firstName = GetUserManagerInstance().firstName;
    const email = GetUserManagerInstance().email;
    const personId = GetUserManagerInstance().personId;
    const roles = GetUserManagerInstance().roles;

    return html`
      <style>
        um-prop {
          display: block;
        }

        um-scope {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      </style>
      <h1>Authenticated Person Data Demo Element</h1>
      <um-prop><b>personId:</b> ${personId}</um-prop>
      <um-prop><b>firstName:</b> ${firstName}</um-prop>
      <um-prop><b>lastName:</b> ${lastName}</um-prop>
      <um-prop><b>fullname:</b> ${fullname}</um-prop>
      <um-prop><b>email:</b> ${email}</um-prop>
      <um-prop><b>roles:</b> </um-prop>
      <ol>
        ${roles.map(
          o =>
            html`
              <li>${o}</li>
            `
        )}
      </ol>

      <user-manager></user-manager>
    `;
  });

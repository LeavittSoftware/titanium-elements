import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, button } from '@storybook/addon-knobs';
import '@leavittsoftware/api-service';

storiesOf('COMMUNICATION|api-service', module)
  .addDecorator(withKnobs)
  .add('Fruits CRUD Demo', () => {
    let apiServiceApi2 = () => document.querySelector('api-service[api2]');

    const names = ['Apple', 'Banana', 'Apricot', 'Blackcurrant', 'Blueberry', 'Orange', 'Strawberry', 'Tomato', 'Redcurrant'];
    // const getRandomFruitName = () => names[Math.floor(Math.random() * names.length)];

    button('Get Fruits - Top 5', async () => {
      try {
        alert(JSON.stringify((await apiServiceApi2().getAsync('Fruits/?$top=5&$orderby=Id desc')).toList()));
      } catch (error) {
        alert(error);
      }
    });

    const uploadFile = async () => {
      const input = document.querySelector('input');
      try {
        const result = await document.querySelector('api-service[mapi]').uploadFile(
          'Forums(193)/Default.UploadAttachment',
          input.files[0],
          (e, _xhr) => {
            if (e.lengthComputable) {
              var percentComplete = (e.loaded / e.total) * 100;
              console.log('Upload progress: ', percentComplete);
            }
          },
          'Home'
        );
        alert(JSON.stringify(result));
      } catch (error) {
        alert(error);
      }
    };

    const template = html`
      <user-manager></user-manager>
      <api-service api2 appName="Testing"></api-service>
      <api-service mapi baseProductionUri="https://mapi.leavitt.com/" baseDevUri="https://devmapi.leavitt.com/"></api-service>

      <input type="file" accept="*.*" />
      <button @click=${uploadFile}>Upload</button>
    `;
    return template;
  });

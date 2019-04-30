import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, button } from '@storybook/addon-knobs';
import '@leavittsoftware/api-service';

storiesOf('COMMUNICATION|api-service', module)
  .addDecorator(withKnobs)
  .add('Fruits CRUD Demo', () => {
    let apiService = () => document.querySelector('api-service');
    const names = ['Apple', 'Banana', 'Apricot', 'Blackcurrant', 'Blueberry', 'Orange', 'Strawberry', 'Tomato', 'Redcurrant'];
    const getRandomFruitName = () => names[Math.floor(Math.random() * names.length)];

    button('Get Fruits - Top 5', async () => {
      try {
        alert(JSON.stringify((await apiService().getAsync('Fruits/?$top=5&$orderby=Id desc')).toList()));
      } catch (error) {
        alert(error);
      }
    });

    button('POST Fruit', async () => {
      const dto = {};
      dto.Name = getRandomFruitName();

      try {
        const fruit = await apiService().postAsync('Fruits', dto);
        alert(JSON.stringify(fruit));
      } catch (error) {
        alert(error);
      }
    });

    const template = html`
      <user-manager></user-manager>
      <api-service appName="Testing"></api-service>
    `;
    return template;
  });

import '../lib/titanium-header';

import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/polymer/dist/client/preview/index';

const notes = `
    Titanium Header is a lightweight header component
`;

const basic =
    `<titanium-header header="Cute kittens" subHeader="These are my cute kittens"></titanium-header>`;

const styled = `
    <style>
    titanium-header {
        --titanium-header-header-color: red; 
        --titanium-header-subheader-color: green; 
    }
    </style>
    <titanium-header header="Cute kittens" subHeader="These are my cute kittens"></titanium-header>`;

storiesOf('Header', module)
    .add('basic', withNotes(notes)(() => basic))
    .add('styled', withNotes(notes)(() => styled));

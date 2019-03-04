import '../lib/titanium-header';

import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/polymer/dist/client/preview/index';

const notes = `
    Titanium Header is a lightweight header component
`;

const basic =
    `<titanium-header header="Cute kittens" subHeader="These are my cute kittens"></titanium-chip>`;

storiesOf('Header', module).add('basic', withNotes(notes)(() => basic));

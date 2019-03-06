import '../lib/titanium-search-input';

import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/polymer/dist/client/preview/index';

const notes = `
    Titanium Search Input is a lightweight input component.
`;

const basic = `<titanium-search-input value="dog"></titanium-search-input>`;
const hiddenClearButton =
    `<titanium-search-input hide-clear-button value="dog"></titanium-search-input>`;
const disabled = `<titanium-search-input disabled></titanium-search-input>`;

storiesOf('Search Input', module)
    .add('basic', withNotes(notes)(() => basic))
    .add('hidden clear button', withNotes(notes)(() => hiddenClearButton))
    .add('disabled', withNotes(notes)(() => disabled));

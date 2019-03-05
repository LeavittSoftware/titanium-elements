import '../lib/titanium-svg-button';

import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/polymer/dist/client/preview/index';

const notes = `
    Titanium svg button is a lightweight icon button component
`;

const basic =
    `<titanium-svg-button path="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></titanium-svg-button>`;
const disabled =
    `<titanium-svg-button disabled path="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></titanium-svg-button>`;
const large =
    `<titanium-svg-button large path="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"></titanium-svg-button>`;

storiesOf('SVG Button', module)
    .add('basic', withNotes(notes)(() => basic))
    .add('large', withNotes(notes)(() => large))
    .add('disabled', withNotes(notes)(() => disabled));

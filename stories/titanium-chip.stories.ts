import '../lib/titanium-chip';

import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/polymer/dist/client/preview/index';

const notes = `
    Titanium chip will one day be replaced by @material/mwc-chip
`;

const basic = `<titanium-chip label="James Franco"></titanium-chip>`;

const withProfilePicture =
    `<titanium-chip label="James Franco" src="https://mapi.leavitt.com/People(771130)/Default.Picture(size=35)"></titanium-chip>`;

const closeable =
    `<titanium-chip label="James Franco" src="https://mapi.leavitt.com/People(771130)/Default.Picture(size=35)" closeable></titanium-chip>`;

const withIcon =
    `<titanium-chip closeable label="Kittens DB" src="https://mapi.leavitt.com/People(771130)/Default.Picture(size=35)">
<svg slot="chip-icon" style="width:18px;height:18px" viewBox="0 0 24 24">
    <path fill="#757575" d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
</svg>
</titanium-chip>`;

const disabled =
    `<titanium-chip label="Cute Kittens" closeable disabled></titanium-chip>`;

const list = `<div style="display: flex;flex-wrap:wrap">
    <titanium-chip style="margin: 8px;" label="Cute Cats" closeable></titanium-chip>
    <titanium-chip style="margin: 8px;" label="Cute Dogs" closeable></titanium-chip>
    <titanium-chip style="margin: 8px;" label="Cute Goats" closeable></titanium-chip>
    <titanium-chip style="margin: 8px;" label="Cute Cows" closeable></titanium-chip>
</div>`;

storiesOf('Chip', module)
    .add('basic', withNotes(notes)(() => basic))
    .add('with profile picture', withNotes(notes)(() => withProfilePicture))
    .add('closeable', withNotes(notes)(() => closeable))
    .add('with icon', withNotes(notes)(() => withIcon))
    .add('disabled', withNotes(notes)(() => disabled))
    .add('list', withNotes(notes)(() => list));

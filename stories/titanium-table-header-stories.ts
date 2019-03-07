

import '../lib/titanium-table-header';

import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/polymer/dist/client/preview/index';

const notes =
    `Titanium table header is a lightweight sortable or non-sortable header component`;

const basic = `
<header style="border-bottom: 1px solid #dadce0;border-top: 1px solid #dadce0;">
<titanium-table-header column-name="name" title="Name"></titanium-table-header>
</header>
`;
const styled = `
<style>
    titanium-table-header {
        color: blue;
        --titanium-table-header-svg-color: blue; 

        --titanium-table-header-active-text-color: red; 
        --titanium-table-header-active-svg-color: red; 
    }
    </style>
<header style="border-bottom: 1px solid #dadce0;border-top: 1px solid #dadce0;">
<titanium-table-header column-name="name" title="Name"></titanium-table-header>
</header>
`;

const noSort = `
<header style="border-bottom: 1px solid #dadce0;border-top: 1px solid #dadce0;">
<titanium-table-header no-sort column-name="name" title="Name"></titanium-table-header>
</header>
`;

storiesOf('Table Header', module)
    .add('basic', withNotes(notes)(() => basic))
    .add('styled', withNotes(notes)(() => styled))
    .add('no sort', withNotes(notes)(() => noSort));

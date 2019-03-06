

import '../demo/titanium-table-header-demo';

import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/polymer/dist/client/preview/index';

const notes =
    `Titanium table header is a lightweight sortable or non-sortable header component`;

const basic = `
<header style="border-bottom: 1px solid #dadce0;border-top: 1px solid #dadce0;">
<titanium-table-header column-name="name" title="Name"></titanium-table-header>
</header>
`;

const demo = `<titanium-table-header-demo></titanium-table-header-demo>`;

storiesOf('Table Header', module)
    .add('basic', withNotes(notes)(() => basic))
    .add('demo', withNotes(notes)(() => demo));

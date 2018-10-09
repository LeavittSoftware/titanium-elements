import '../lib/titanium-chip';

import {storiesOf} from '@storybook/polymer';

storiesOf('Titanium Chip', module)
    .add('basic', () => `<titanium-chip label="James Franco"></titanium-chip>`)
    .add(
        'with profile picture',
        () =>
            `<titanium-chip label="James Franco" src="https://mapi.leavitt.com/People(771130)/Default.Picture(size=35)"></titanium-chip>`)
    .add(
        'closeable',
        () =>
            `<titanium-chip label="James Franco" src="https://mapi.leavitt.com/People(771130)/Default.Picture(size=35)" closeable></titanium-chip>`);

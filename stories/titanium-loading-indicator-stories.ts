import '../lib/titanium-loading-indicator';

import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/polymer/dist/client/preview/index';

const notes =
    `Titanium loading indicator displays a loading indicator with optional text slotted in`;

const basic = `<titanium-loading-indicator></titanium-loading-indicator>`;

const disabled =
    `<titanium-loading-indicator disabled></titanium-loading-indicator>`;

const centered =
    `<div style="display: flex;height: 350px;width: 350px;border: 1px solid black;justify-content: center;align-items: center;text-align: center;flex-direction: column;"> 
    <titanium-loading-indicator>Loading in a box...</titanium-loading-indicator></div>`;

storiesOf('Loading Indicator', module)
    .add('Basic', withNotes(notes)(() => basic))
    .add('Disabled', withNotes(notes)(() => disabled))
    .add('Centered in a div', withNotes(notes)(() => centered));

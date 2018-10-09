import {configure} from '@storybook/polymer';

const req = require.context('../stories', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

module.exports = {
  logLevel: 'debug',
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-storysource', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack4',
  },
};

/** @storybook/addon-essentials Included
Actions
Backgrounds
Controls
Docs
Viewport
Toolbars
**/

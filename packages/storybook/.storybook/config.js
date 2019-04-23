import { configure, addDecorator } from '@storybook/polymer';
import { makeDecorator } from '@storybook/addons';
import { withCssResources } from '@storybook/addon-cssresources';

addDecorator(withCssResources);
const litDecorator = makeDecorator({
  name: 'lit',
  parameterName: 'exports',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const component = getStory();
    if (!(component instanceof HTMLElement)) {
      const { render } = parameters;
      const el = document.createElement('section'); // this element probably can br reused.
      render(component, el);
      return el;
    }

    return getStory(context);
  },
});
addDecorator(litDecorator);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

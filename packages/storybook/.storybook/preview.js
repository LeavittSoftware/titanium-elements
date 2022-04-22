import { setCustomElements } from '@storybook/web-components';
import customElements from '../custom-elements.json';

setCustomElements(customElements);

export const parameters = {
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  docs: {
    iframeHeight: '200px',
  },
  backgrounds: {
    disable: true,
  },
  viewport: {
    disable: true,
  },
};

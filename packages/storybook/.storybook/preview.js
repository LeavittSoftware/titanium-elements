import customElementsManifest from '../custom-elements.json';

import { setCustomElements } from '@storybook/web-components';
import customElements from '../custom-elements.json';

setCustomElements(customElements);

// window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__ = customElementsManifest;

export const parameters = {
    passArgsFirst: false,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  };


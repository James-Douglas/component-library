import { addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'CTM Manor-react'
    }),
    isFullscreen: false,
    panelPosition: 'right',
    showPanel: true,
  }
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);

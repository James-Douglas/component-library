import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import '../src/index.css'

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

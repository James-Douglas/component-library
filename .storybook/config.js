import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import '@storybook/addon-console';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { create } from '@storybook/theming';
import '../src/index.css'

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

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

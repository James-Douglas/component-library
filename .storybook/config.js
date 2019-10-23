import '@storybook/addon-console';
import { addDecorator, addParameters } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { create } from '@storybook/theming';
import '../src/index.css';

addDecorator(function (storyFn, context) { return withConsole()(storyFn)(context)});

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

import '../src/stories';

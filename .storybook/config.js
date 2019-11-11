import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import '../src/index.css';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'CTM Manor-react'
    }),
    isFullscreen: false,
    panelPosition: 'right',
    showPanel: true,
    storySort: (a, b) => a[1].id.localeCompare(b[1].id)
  }
});

import '../src/stories';

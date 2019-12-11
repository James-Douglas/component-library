import { addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import '../src/stories';

addDecorator(withA11y);

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'CTM Manor-react'
    }),
    isFullscreen: false,
    panelPosition: 'right',
    showPanel: true,
    storySort: function(a, b) { a[1].id.localeCompare(b[1].id)}
  }
});



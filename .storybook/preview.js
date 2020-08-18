import { addParameters, addDecorator, configure } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ManorProvider from '../packages/Provider/ManorProvider';
import { ManorFonts } from '../packages/Fonts';
addDecorator(withA11y);
addDecorator(StoryFn => <ManorProvider><ManorFonts/><StoryFn /></ManorProvider>);

addParameters({
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Welcome', 'Foundation', 'Components'],
      locales: 'en-AU',
    }
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

function loadStories() {
  const allExports = [];
  const req = require.context('../stories', true, /\.stories\.(js|mdx)$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
}

configure(loadStories, module);


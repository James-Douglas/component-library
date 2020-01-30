import { addParameters, addDecorator, configure } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ManorProvider from '../src/provider/ManorProvider';

addDecorator(withA11y);
addDecorator(storyFn => <ManorProvider>{storyFn()}</ManorProvider>);

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

function loadStories() {
  const allExports = [];
  const req = require.context('../src/stories', true, /\.stories\.(js|mdx)$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
}

configure(loadStories, module);



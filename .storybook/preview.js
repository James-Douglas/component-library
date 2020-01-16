import { addParameters, addDecorator, configure } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { ManorGlobalStyles } from '../src/components/Global/manorGlobal.component';

addDecorator(withA11y);

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
  const globalStyleEl = document.querySelector('#gen3-global-style')
    || (() => {
      const el = document.createElement('div');
      el.id = 'gen3-global-style';
      document.head.append(el);
      return el;
    })();
  ReactDOM.render(<ManorGlobalStyles />, globalStyleEl);
  const allExports = [];
  const req = require.context('../src/stories', true, /\.stories\.(js|mdx)$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
}

configure(loadStories, module);



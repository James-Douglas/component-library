import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from '@storybook/react';
import { ManorGlobalStyles } from './components/Global/manorGlobal.component';

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

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
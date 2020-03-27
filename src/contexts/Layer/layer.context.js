import { createContext } from 'react';

const noop = () => {};

const LayerContext = createContext({
  layers: null, push: noop, pop: noop, top: noop,
});

export default LayerContext;

import React, {
  createContext, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ManorGlobalStyles } from '../components/Global/manorGlobal.component';
import CTMTheme from '../themes/ctm.theme';

const noop = () => {};

const LayerContext = createContext({
  layers: null, push: noop, pop: noop, top: noop,
});

const ManorProvider = (props) => {
  const {
    theme, children, disableGlobalStyles, ...otherProps
  } = props;
  const [layers, setLayers] = useState([]);

  const layerInfo = useMemo(() => ({
    layers,
    push: (layer) => {
      if (!layers.includes(layer)) {
        setLayers(layers.concat([layer]));
      }
      return layers.length + 1;
    },
    pop: () => setLayers(layers.length > 1 ? layers.slice(0, layers.length - 1) : []),
    top: (layer) => layers.length > 0 && layers[layers.length - 1] === layer,
    contains: (layer) => layers.includes(layer),
  }), [layers, setLayers]);

  return (
    <>
      <ThemeProvider theme={theme}>
        {!disableGlobalStyles && <ManorGlobalStyles />}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <LayerContext.Provider value={layerInfo} {...otherProps}>
          {children}
        </LayerContext.Provider>
      </ThemeProvider>
    </>
  );
};

ManorProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
  /**
   * Disables the injection of global styles.
   */
  disableGlobalStyles: PropTypes.bool,
  /**
   * The child content
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

ManorProvider.defaultProps = {
  theme: CTMTheme,
  disableGlobalStyles: false,
  children: [],
};

export default ManorProvider;

export const useLayers = () => useContext(LayerContext);

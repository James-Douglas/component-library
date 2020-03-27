import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import LayerContext from '../contexts/Layer/layer.context';

const LayerProvider = ({ children, ...otherProps }) => {
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
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <LayerContext.Provider value={layerInfo} {...otherProps}>
        {children}
      </LayerContext.Provider>
    </>
  );
};

LayerProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default LayerProvider;

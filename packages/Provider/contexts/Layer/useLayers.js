import { useContext } from 'react';
import LayerContext from './layer.context';

const useLayers = () => useContext(LayerContext);

export default useLayers;

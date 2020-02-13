import React, {
  useCallback, useEffect, useLayoutEffect, useRef,
} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLayers } from './provider/ManorProvider';
import getTheme from './utils/getTheme';
import usePrevious from './hooks/usePrevious';

const StyledLayer = styled.span`
  z-index: ${({ zIndex }) => zIndex};
  position: relative;
  width: 100%;
`;

const LayerEventManager = ({
  id, visible, handleClose, children,
}) => {
  const layerInfo = useLayers();
  const theme = getTheme();
  const zIndex = useRef(parseInt(theme.zIndex[30], 10));
  const layerId = useRef(id);
  const previouslyVisible = usePrevious(visible);

  useEffect(() => {
    const generateId = () => {
      const now = Date.now();
      const rand = Math.floor(Math.random() * Math.floor(999999));
      const generatedId = now.toString() + rand;
      if (layerInfo.layers && layerInfo.layers.includes(generatedId)) {
        return generateId();
      }
      return generatedId.replace(/\s/g, '');
    };

    if (!layerId.current) {
      layerId.current = id || generateId();
    }
  }, [id, layerInfo]);

  useEffect(() => {
    if (visible && !layerInfo.contains(layerId.current)) {
      zIndex.current = parseInt(theme.zIndex[30], 10) + layerInfo.push(layerId.current);
    }
  }, [visible, theme, layerInfo, layerId]);

  // If the modal/drawer is closed a way outside of LayerEventManager's knowledge
  // (i.e. not via escape button), remove the layer from the stack
  useEffect(() => {
    if (!visible && previouslyVisible && layerInfo.top(layerId.current)) {
      layerInfo.pop();
    }
  }, [visible, previouslyVisible, layerInfo, layerId]);

  const handleUserKeyPress = useCallback((event) => {
    const { keyCode } = event;
    // escape
    if (keyCode === 27 && visible) {
      if (layerInfo.top(layerId.current)) {
        if (handleClose) {
          handleClose();
        }
        layerInfo.pop();
      }
    } else if (keyCode === 9 && visible) {
      // focus trapping
      setTimeout(() => {
        if (layerInfo.top(layerId.current)) {
          const topElementId = layerInfo.layers[layerInfo.layers.length - 1];
          const layerElement = document.getElementById(`layer-${topElementId}`);
          if (!layerElement.contains(document.activeElement)) {
            const focusable = layerElement.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable) {
              focusable.focus();
            } else {
              layerElement.firstChild.focus();
            }
          }
        }
      });
    }
  }, [visible, layerInfo, handleClose]);

  useLayoutEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);


  return (
    <StyledLayer zIndex={zIndex.current} id={`layer-${layerId.current}`}>
      { children }
    </StyledLayer>
  );
};

LayerEventManager.propTypes = {
  id: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  handleClose: PropTypes.func,
};

LayerEventManager.defaultProps = {
  id: null,
  handleClose: null,
};

export default LayerEventManager;

import React, {
  useCallback, useEffect, useLayoutEffect, useRef,
} from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { useLayers } from './provider/ManorProvider';
import usePrevious from './hooks/usePrevious';

const StyledLayer = styled.span`
  z-index: ${({ zIndex }) => zIndex};
  position: relative;
  width: 100%;
`;

const LayerEventManager = ({
  id, visible, closeOnEsc, trapFocus, handleClose, children, theme,
}) => {
  const layerInfo = useLayers();
  const zIndex = useRef(parseInt(theme.zIndex[40], 10));
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
      zIndex.current = parseInt(theme.zIndex[40], 10) + layerInfo.push(layerId.current);
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
    if (keyCode === 27 && visible && closeOnEsc) {
      if (layerInfo.top(layerId.current)) {
        if (handleClose) {
          handleClose();
        }
        layerInfo.pop();
      }
    } else if (keyCode === 9 && visible && trapFocus) {
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
  }, [visible, layerInfo, handleClose, closeOnEsc, trapFocus]);

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
  closeOnEsc: PropTypes.bool,
  trapFocus: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  handleClose: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

LayerEventManager.defaultProps = {
  id: null,
  closeOnEsc: true,
  trapFocus: true,
  handleClose: null,
  theme: {},
};

export default withTheme(LayerEventManager);

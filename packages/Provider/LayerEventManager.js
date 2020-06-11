import React, {
  useCallback, useEffect, useLayoutEffect, useState,
} from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { usePrevious, useId } from '@comparethemarketau/manor-hooks';
import useLayers from './contexts/Layer/useLayers';

const StyledLayer = styled.span`
  z-index: ${({ zIndex }) => zIndex};
  position: relative;
  width: 100%;
`;

const LayerEventManager = ({
  id: propsId, visible, closeOnEsc, trapFocus, handleClose, children, theme,
}) => {
  const id = useId(propsId);
  const layerInfo = useLayers();
  const [zIndex, setZIndex] = useState(parseInt(theme.zIndex[10], 10));
  const previouslyVisible = usePrevious(visible);
  useEffect(() => {
    if (visible && !layerInfo.contains(id)) {
      setZIndex(parseInt(theme.zIndex[50], 10) + layerInfo.push(id));
    }
  }, [visible, theme, layerInfo, id]);

  // If the modal/drawer is closed a way outside of LayerEventManager's knowledge
  // (i.e. not via escape button), remove the layer from the stack
  useEffect(() => {
    if (!visible && previouslyVisible && layerInfo.top(id)) {
      setZIndex(parseInt(theme.zIndex[10], 10));
      layerInfo.pop();
    }
  }, [visible, previouslyVisible, layerInfo, id, theme.zIndex]);

  const handleUserKeyPress = useCallback((event) => {
    const { keyCode } = event;
    // escape
    if (keyCode === 27 && visible && closeOnEsc) {
      if (layerInfo.top(id)) {
        if (handleClose) {
          handleClose();
        }
        layerInfo.pop();
      }
    } else if (keyCode === 9 && visible && trapFocus) {
      // focus trapping
      setTimeout(() => {
        if (layerInfo.top(id)) {
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
  }, [visible, closeOnEsc, trapFocus, layerInfo, id, handleClose]);

  useLayoutEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <StyledLayer zIndex={zIndex} id={`layer-${id}`}>
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

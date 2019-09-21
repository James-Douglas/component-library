import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';

import Icon from '../Icon/Icon.component';
import { useIsDesktop } from '../../utils/breakpoint';
import throttle from '../../utils/throttle';

import './Tooltip.module.css';

const Tooltip = ({
  title, body, boundingElementSelector, screenReaderLabel,
}) => {
  const [pinned, setPinned] = useState(false);
  const desktop = useIsDesktop();
  const [tippyInstance, setTippyInstance] = useState(null);
  const [tippyVisible, setTippyVisible] = useState(false);
  const tooltipElement = useRef(null);
  const boundingElement = useRef(null);

  const updateDynamicStyles = (containerWidth) => {
    // Used to dynamically override tippy styles, in particular we set a max-width property to
    // constrain it to a container when there is a boundingElement
    const styleElement = document.getElementById('tp-styles');
    if (styleElement) {
      if (styleElement.sheet.cssRules.length) {
        styleElement.sheet.deleteRule(0);
      }
      styleElement.sheet.insertRule(`.tippy-popper { margin: 0 auto; max-width: ${containerWidth}px !important; }`, 0);
    }
  };

  /**
   * Calculates the width of the tooltip when there is a boundingElement & we're in a "small"
   * container.
   * width = (end of tooltip - start of container) - (end of container - end of tooltip
   *    (even 'padding' on both sides))
   *       = (icon.right - boundingElement.left) - (boundingElement.right - icon.right)
   */
  const calculateTooltipWidth = () => {
    if (tooltipElement.current && boundingElement.current) {
      const tooltipElementBoundingRect = tooltipElement.current.getBoundingClientRect();
      const boundingElementBoundingRect = boundingElement.current.getBoundingClientRect();
      return (tooltipElementBoundingRect.right - boundingElementBoundingRect.left)
        - (boundingElementBoundingRect.right - tooltipElementBoundingRect.right);
    }
    return null;
  };

  const setPlacementAndDynamicStyles = () => {
    const containerWidth = calculateTooltipWidth();
    // If in desktop or in a container over 500px, align the tooltip to the left
    if (desktop && containerWidth > 500) {
      tippyInstance.set({
        placement: 'left',
      });
    } else {
      tippyInstance.set({
        placement: 'bottom-end',
      });
    }

    updateDynamicStyles(containerWidth);
  };

  const hideTooltip = () => {
    setTippyVisible(false);
    setPinned(false);
    document.body.removeEventListener('click', hideTooltip);
  };

  const showTooltip = () => {
    setTippyVisible(true);
  };

  const throttledSetPlacementAndDynamicStyles = throttle(setPlacementAndDynamicStyles);

  const addOnShowListeners = () => {
    window.addEventListener('resize', throttledSetPlacementAndDynamicStyles);
    window.addEventListener('scroll', hideTooltip);
  };

  const removeOnShowListeners = () => {
    window.removeEventListener('scroll', hideTooltip);
    window.removeEventListener('resize', throttledSetPlacementAndDynamicStyles);
  };

  const onDestroy = () => {
    if (tippyInstance) {
      tippyInstance.destroy();
    }
    document.body.removeEventListener('click', hideTooltip);
    removeOnShowListeners();
  };

  useEffect(() => {
    if (boundingElementSelector) {
      boundingElement.current = document.querySelector(boundingElementSelector);
    } else {
      boundingElement.current = document.body;
    }
    return onDestroy;
  }, []);

  const pinTooltip = (e) => {
    e.preventDefault();
    showTooltip();
    setPinned(true);
  };

  const getContent = () => (
    <div className="manor-tooltip-content">
      {title ? <div className="manor-subtitle2">{title}</div> : ''}
      <div className="manor-body2">{body}</div>
    </div>
  );

  const onTippyShow = () => {
    document.body.click();
    document.body.addEventListener('click', hideTooltip);
    setPlacementAndDynamicStyles();
    addOnShowListeners();
  };

  const handleKeyPress = (e) => {
    if (e.key === ' ' && e.target === tooltipElement.current) {
      e.preventDefault();
      showTooltip();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      hideTooltip();
    }
  };

  return (
    <div className={`tooltip-wrapper ${desktop ? 'justify-center' : 'justify-end'}`}>
      <Tippy
        content={getContent()}
        theme="manor"
        interactive
        animateFill
        arrow={desktop}
        distance={desktop ? 5 : 0}
        animation="scale"
        duration={[150, 75]}
        hideOnClick={false}
        trigger="manual"
        onCreate={(instance) => setTippyInstance(instance)}
        onShow={onTippyShow}
        visible={tippyVisible}
      >
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <div
          role="tooltip"
          ref={tooltipElement}
          className={`tooltip-icon ${pinned ? 'tooltip-pinned' : ''} ${tippyVisible && !pinned ? 'tooltip-active' : ''}`}
          onClick={pinTooltip}
          onKeyDown={handleKeyPress}
          onFocus={showTooltip}
          onBlur={hideTooltip}
          onMouseEnter={showTooltip}
          onMouseLeave={() => {
            if (!pinned) {
              hideTooltip();
            }
          }}
        >
          <>
            <span className="sr-only">{screenReaderLabel}</span>
            <Icon name="info" size={desktop ? 2.4 : 3.5} />
          </>
        </div>
      </Tippy>
    </div>
  );
};

Tooltip.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  boundingElementSelector: PropTypes.string,
  screenReaderLabel: PropTypes.string,
};

Tooltip.defaultProps = {
  title: '',
  body: '',
  boundingElementSelector: null,
  screenReaderLabel: '',
};

export default Tooltip;

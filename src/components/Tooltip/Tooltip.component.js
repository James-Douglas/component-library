import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';

import Icon from '../Icon/Icon.component';
import { useIsDesktop } from '../../utils/breakpoint';
import throttle from '../../utils/throttle';
import useUnmountEffect from '../../hooks/useUnmountEffect';
import './Tooltip.module.css';


/**
 * Calculates the width of the tooltip when there is a boundingElement & we're in a "small"
 * container.
 * width = (end of tooltip - start of container) - (end of container - end of tooltip
 *    (even 'padding' on both sides))
 *       = (icon.right - boundingElement.left) - (boundingElement.right - icon.right)
 */
export function calculateTooltipWidth(tooltipElement, boundingElement) {
  if (tooltipElement && boundingElement) {
    const tooltipElementBoundingRect = tooltipElement.getBoundingClientRect();
    const boundingElementBoundingRect = boundingElement.getBoundingClientRect();

    const containerWidth = (tooltipElementBoundingRect.right - boundingElementBoundingRect.left)
      - (boundingElementBoundingRect.right - tooltipElementBoundingRect.right);

    if (containerWidth < 0) {
      // Icon isn't aligned properly, e.g. resizing has pushed it to the next line
      return boundingElement.offsetWidth;
    }

    if (containerWidth < 150) {
      return 150; // min width
    }

    if (containerWidth >= 500) {
      return 500; // max width
    }
    return containerWidth;
  }
  return null;
}

/**
 * Returns the alignments for the tippy tooltip
 * @param desktop {boolean} - is desktop resolution
 * @param containerWidth {number} - width of the tooltip container
 * @returns {string} - placement
 */
export function getTippyPlacement(desktop, containerWidth) {
  // If in desktop or in a container over 499, align the tooltip to the left
  if (desktop && containerWidth > 499) {
    return 'left';
  }
  return 'bottom-end';
}

/**
 * Get the tooltip html content
 * @param title {string} - Optional title for the tooltip
 * @param body {string} - Optional body for the tooltip
 * @returns {*}
 */
export function getContent(title, body) {
  return (
    <div className="manor-tooltip-content">
      {title ? <div className="manor-subtitle2">{title}</div> : ''}
      {body ? <div className="manor-body2">{body}</div> : ''}
    </div>
  );
}

const Tooltip = ({
  title, body, boundingElementSelector, screenReaderLabel,
}) => {
  const [pinned, setPinned] = useState(false);
  const desktop = useIsDesktop();
  const [tippyInstance, setTippyInstance] = useState(null);
  const [tippyVisible, setTippyVisible] = useState(false);
  const tooltipElement = useRef(null);
  const boundingElement = useRef(null);

  useEffect(() => {
    if (boundingElementSelector) {
      boundingElement.current = document.querySelector(boundingElementSelector);
    } else {
      boundingElement.current = document.body;
    }
  }, [boundingElementSelector]);

  const setPlacementAndDynamicStyles = () => {
    const containerWidth = calculateTooltipWidth(tooltipElement.current, boundingElement.current);
    tippyInstance.set({
      placement: getTippyPlacement(desktop, containerWidth),
    });
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

  useUnmountEffect(() => {
    if (tippyInstance) {
      tippyInstance.destroy();
    }
    document.body.removeEventListener('click', hideTooltip);
    removeOnShowListeners();
  });

  const pinTooltip = (e) => {
    e.preventDefault();
    showTooltip();
    setPinned(true);
  };

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
        content={getContent(title, body)}
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
        maxWidth={calculateTooltipWidth(tooltipElement.current, boundingElement.current)}
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
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
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

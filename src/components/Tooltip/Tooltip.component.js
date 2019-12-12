import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import { animateFill } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/shift-away.css';
import Subtitle from 'components/Typography/Subtitle/Subtitle.component';
import useIsDesktop from 'hooks/useIsDesktop';
import useUnmountEffect from 'hooks/useUnmountEffect';
import Icon from '../Icon/Icon.component';
import throttle from '../../utils/throttle';

const StyledTooltipWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  justify-content: ${(props) => (props.desktop ? 'center' : 'flex-end')}; 
  ${(props) => props.justifyEnd && css`
    justify-content: flex-end;
  `}
`;

const StyledTooltipIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color:  ${(props) => props.theme.colors.grey}; 
  fill: currentColor;
   ${(props) => props.pinned && css`
    fill: currentColor;
    color: rgba(51, 51, 51, 0.97) !important;
  `}
  ${(props) => props.tippyVisible && !props.pinned && css`
    color:  ${props.theme.colors.blueLight}; 
  `}
`;

const GlobalStyle = createGlobalStyle`
  .manor-tooltip-content {
    text-align: left;
    padding: 2rem;
  }
  .tippy-tooltip.manor-theme[data-animatefill] {
    background-color: rgba(51, 51, 51, 0.97) !important;
    box-shadow: 0 0.5rem 0.5rem 0 rgba(0,0,0,.1);
  }
  @media screen and (min-width: 769px) {
    .tippy-tooltip.manor-theme {
      max-width: 28rem;
    }
  }
  @media screen and (max-width: 768px) {
    :global(.tippy-popper) {
      right: 0;
      left: 0;
    }
    :global(.tippy-tooltip) {
      max-width: none !important;
    }
  }
`;

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
      {title ? <Subtitle variant="secondary">{title}</Subtitle> : ''}
      {body ? <p>{body}</p> : ''}
    </div>
  );
}

const Tooltip = ({
  title,
  body,
  boundingElementSelector,
  screenReaderLabel,
  justifyEnd,
}) => {
  const [pinned, setPinned] = useState(false);
  const desktop = useIsDesktop(false);
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
    tippyInstance.setProps({
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
    <ThemeProvider theme={getTheme()}>
      <StyledTooltipWrapper justifyEnd={justifyEnd} desktop={desktop}>
        <GlobalStyle />
        <Tippy
          content={getContent(title, body)}
          theme="manor"
          interactive
          animateFill
          plugins={[animateFill]}
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
          <StyledTooltipIcon
            role="tooltip"
            ref={tooltipElement}
            pinned={pinned}
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
          </StyledTooltipIcon>
        </Tippy>
      </StyledTooltipWrapper>
    </ThemeProvider>
  );
};

export const tooltipPropTypes = {
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
  justifyEnd: PropTypes.bool,
  boundingElementSelector: PropTypes.string,
  screenReaderLabel: PropTypes.string,
};

Tooltip.propTypes = tooltipPropTypes;

Tooltip.defaultProps = {
  title: '',
  body: '',
  justifyEnd: false,
  boundingElementSelector: null,
  screenReaderLabel: '',
};

export default Tooltip;

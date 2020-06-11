import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { useIsDesktop, useUnmountEffect } from '@comparethemarketau/manor-hooks';
import { SROnly } from '@comparethemarketau/manor-typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons/faInfoCircle';
import {
  StyledTooltipContent,
  StyledTooltipTitle,
  StyledTooltipBody,
  StyledTippy,
  StyledTooltipIcon,
} from './Tooltip.styles';

/**
 * Get the tooltip html content
 * @param title {string} - Optional title for the tooltip
 * @param body {string} - Optional body for the tooltip
 * @returns {*}
 */
export function getContent(title, body, variant) {
  return (
    <StyledTooltipContent>
      {title ? <StyledTooltipTitle variant={variant}>{title}</StyledTooltipTitle> : ''}
      <StyledTooltipBody variant={variant}>{body}</StyledTooltipBody>
    </StyledTooltipContent>
  );
}

const Tooltip = ({
  title,
  body,
  placement,
  variant,
  screenReaderLabel,
  className,
}) => {
  const [pinned, setPinned] = useState(false);
  const desktop = useIsDesktop(false);
  const [tippyInstance, setTippyInstance] = useState(null);
  const [tippyVisible, setTippyVisible] = useState(false);
  const tooltipElement = useRef(null);

  const hideTooltip = () => {
    setTippyVisible(false);
    setPinned(false);
    document.body.removeEventListener('click', hideTooltip);
  };

  const showTooltip = () => {
    if (!tippyVisible) {
      setTippyVisible(true);
    }
  };

  const addOnShowListeners = () => {
    window.addEventListener('scroll', hideTooltip);
  };

  const removeOnShowListeners = () => {
    window.removeEventListener('scroll', hideTooltip);
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

  if (!title && !body) {
    return null;
  }

  return (
    <>
      <StyledTippy
        content={getContent(title, body, variant)}
        arrow
        distance="1rem"
        animation="scale"
        duration={[150, 75]}
        hideOnClick={false}
        trigger="manual"
        onCreate={(instance) => setTippyInstance(instance)}
        onShow={onTippyShow}
        visible={tippyVisible}
        placement={desktop ? placement : 'bottom'}
        maxWidth={500}
        delay={125}
        variant={variant}
        className={className}
      >
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <StyledTooltipIcon
          tabIndex={0}
          role="tooltip"
          desktop={desktop}
          ref={tooltipElement}
          pinned={pinned}
          tippyVisible={tippyVisible}
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
          className={className}
        >
          <>
            <SROnly>{screenReaderLabel}</SROnly>
            <FontAwesomeIcon icon={faInfoCircle} />
          </>
        </StyledTooltipIcon>
      </StyledTippy>
    </>
  );
};

export const tooltipPropTypes = {
  /**
   * Title for the tooltip
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /**
   * Body content for the tooltip
   */
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /**
   * Label for screen readers
   */
  screenReaderLabel: PropTypes.string,
  /**
   * Placement of the tooltip in relation to it's icon
   */
  placement: PropTypes.oneOf([
    'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end',
    'right-start', 'right-end',
  ]),
  /**
   * Light or dark variant (see design system documentation for use cases)
   */
  variant: PropTypes.oneOf(['dark', 'light']),
  /**
   * Classes to be applied to the Tooltip component
   */
  className: PropTypes.string,
};

const defaultProps = {
  title: '',
  body: '',
  screenReaderLabel: '',
  placement: 'right',
  variant: 'dark',
  className: 'ctm-tooltip',
};

Tooltip.propTypes = tooltipPropTypes;

Tooltip.defaultProps = defaultProps;

export default Tooltip;

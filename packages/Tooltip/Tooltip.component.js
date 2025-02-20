import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { useDebouncedCallback } from 'use-debounce';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { useUnmountEffect, useId } from '@comparethemarketau/manor-hooks';
import { Typography } from '@comparethemarketau/manor-typography';
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
      {title ? <StyledTooltipTitle variant={variant}><Typography variant="body2" component="span">{title}</Typography></StyledTooltipTitle> : ''}
      <StyledTooltipBody variant={variant}><Typography variant="body2" component="span">{body}</Typography></StyledTooltipBody>
    </StyledTooltipContent>
  );
}

const Tooltip = ({
  trackingLabel,
  id: propsId,
  arrow,
  title,
  body,
  placement,
  variant,
  screenReaderLabelId,
  screenReaderLabel,
  children,
  active,
  className,
  iconSize,
}) => {
  const id = useId(propsId);
  const [pinned, setPinned] = useState(false);
  const { isDesktop, trackInteraction } = useContext(ManorContext);
  const [tippyInstance, setTippyInstance] = useState(null);
  const [tippyVisible, setTippyVisible] = useState(false);
  const tooltipElement = useRef(null);

  const hideTooltip = () => {
    setTippyVisible(false);
    setPinned(false);
    document.body.removeEventListener('click', bodyClickListener);
  };

  const debouncedTrackFocus = useDebouncedCallback(
    () => {
      // Check the tooltip is still visible so we dont track accidental mouseovers
      if (tippyVisible) {
        trackInteraction('Focus', 'Tool Tip', 'Tool Tip', trackingLabel, '');
      }
    },
    1000,
  );
  const showTooltip = () => {
    if (!tippyVisible) {
      setTippyVisible(true);
    }
    debouncedTrackFocus();
  };

  const addOnShowListeners = () => {
    window.addEventListener('scroll', hideTooltip);
  };

  const removeOnShowListeners = () => {
    window.removeEventListener('scroll', hideTooltip);
  };

  const bodyClickListener = (e) => {
    if (tippyVisible && tooltipElement.current && !tooltipElement.current.contains(e.target)) {
      hideTooltip();
    }
  };

  useUnmountEffect(() => {
    if (tippyInstance) {
      tippyInstance.destroy();
    }
    document.body.removeEventListener('click', bodyClickListener);
    removeOnShowListeners();
  });

  const pinTooltip = (e) => {
    e.preventDefault();
    showTooltip();
    setPinned(true);
  };

  const onTippyShow = () => {
    document.body.click();
    document.body.addEventListener('click', bodyClickListener);
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

  useEffect(() => {
    if (active) {
      showTooltip();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!title && !body) {
    return null;
  }

  return (
    <StyledTippy
      content={getContent(title, body, variant)}
      arrow={arrow}
      animation="scale"
      duration={[150, 75]}
      onCreate={(instance) => setTippyInstance(instance)}
      onShow={onTippyShow}
      visible={tippyVisible}
      placement={isDesktop ? placement : 'bottom'}
      maxWidth={500}
      delay={125}
      variant={variant}
      className={className}
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <StyledTooltipIcon
        id={id}
        tabIndex={active ? '0' : '-1'}
        role="tooltip"
        desktop={isDesktop}
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
        textAnchor={!!children}
        className={className}
      >
        <>
          <Typography id={screenReaderLabelId} variant="srOnly">{screenReaderLabel}</Typography>
          {
            children || <FontAwesomeIcon icon={faInfoCircle} size={iconSize} />
          }
        </>
      </StyledTooltipIcon>
    </StyledTippy>
  );
};

export const tooltipPropTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   * An id for the tooltip element
   */
  id: PropTypes.string,
  /**
   * Set the tool tip as active (displayed)
   */
  active: PropTypes.bool,
  /**
   * If the tooltip has an arrow or not
   */
  arrow: PropTypes.bool,
  /**
   * Title for the tooltip
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Body content for the tooltip
   */
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Label for screen readers
   */
  screenReaderLabel: PropTypes.string,
  /**
   * id to be applied to the Tooltip screenReaderLabel container for accessibility purposes
   */
  screenReaderLabelId: PropTypes.string,
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
  /**
   * Children of the tooltip - replaces the icon
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Size of the tooltip icon - FontAwesome sizing
   */
  iconSize: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
};

const defaultProps = {
  id: null,
  arrow: true,
  active: false,
  title: '',
  body: '',
  screenReaderLabel: '',
  screenReaderLabelId: '',
  placement: 'right',
  variant: 'dark',
  className: 'ctm-tooltip',
  children: null,
  iconSize: '1x',
};

Tooltip.propTypes = tooltipPropTypes;

Tooltip.defaultProps = defaultProps;

export default Tooltip;

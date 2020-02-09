import React, { useState, useRef } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import Subtitle from 'components/Typography/Subtitle/Subtitle.component';
import useIsDesktop from 'hooks/useIsDesktop';
import useUnmountEffect from 'hooks/useUnmountEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
import SRonly from '../Typography/SRonly/SRonly.component';

const StyledTooltipIcon = styled.div`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing[8]};
  font-size: '1.8rem'; 
  height: 2.4rem;
  width: 2.4rem;
  color:  ${(props) => props.theme.colors.grey}; 
  fill: currentColor;
   ${({ theme, tippyVisible }) => tippyVisible && css`
    fill: currentColor;
    color: ${theme.tooltip.iconColorVisible};
  `}
  outline: none;
`;

const GlobalStyle = createGlobalStyle`
  .manor-tooltip-content {
    text-align: left;
    padding: 2rem;
  }
  .tippy-tooltip.manor-theme[data-animatefill] {
    background-color: ${({ theme }) => theme.tooltip.background} !important;
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
 * Get the tooltip html content
 * @param title {string} - Optional title for the tooltip
 * @param body {string} - Optional body for the tooltip
 * @returns {*}
 */
export function getContent(title, body) {
  return (
    <div className="manor-tooltip-content">
      {title ? <Subtitle variant="secondary">{title}</Subtitle> : ''}
      {body}
    </div>
  );
}

const Tooltip = ({
  title,
  body,
  placement,
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
    setTippyVisible(true);
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
      <GlobalStyle />
      <Tippy
        content={getContent(title, body)}
        theme="manor"
        interactive
        arrow={desktop}
        distance={desktop ? '0.8rem' : 0}
        animation="scale"
        duration={[150, 75]}
        hideOnClick={false}
        trigger="manual"
        onCreate={(instance) => setTippyInstance(instance)}
        onShow={onTippyShow}
        visible={tippyVisible}
        placement={placement}
        maxWidth={500}
        delay={125}
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
        >
          <>
            <SRonly>{screenReaderLabel}</SRonly>
            <FontAwesomeIcon icon={faInfoCircle} />
          </>
        </StyledTooltipIcon>
      </Tippy>
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
   * Classes to be applied to the Tooltip component
   */
  className: PropTypes.string,
};

const defaultProps = {
  title: '',
  body: '',
  screenReaderLabel: '',
  placement: 'right',
  className: '',
};

Tooltip.propTypes = tooltipPropTypes;

Tooltip.defaultProps = defaultProps;

export default Tooltip;

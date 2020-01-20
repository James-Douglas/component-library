import React, { useState, useRef } from 'react';
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
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

const StyledTooltipWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  justify-content: ${({ desktop }) => (desktop ? 'center' : 'flex-end')}; 
  ${({ justifyEnd }) => justifyEnd && css`
    justify-content: flex-end;
  `}
`;

const StyledTooltipIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ desktop, iconSmall }) => (desktop || iconSmall ? '1.8rem' : '2.4rem')}; 
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

const StyledTooltipContainer = styled.div`
  min-height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  justifyEnd,
  iconSmall,
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

  return (
    <ThemeProvider theme={getTheme()}>
      <StyledTooltipWrapper justifyEnd={justifyEnd} desktop={desktop}>
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
            iconSmall={iconSmall}
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
      </StyledTooltipWrapper>
    </ThemeProvider>
  );
};

export const InlineTooltip = ({
  title,
  body,
  placement,
  screenReaderLabel,
  justifyEnd,
  iconSmall,
}) => (
  <StyledTooltipContainer>
    <Tooltip
      title={title}
      body={body}
      placement={placement}
      screenReaderLabel={screenReaderLabel}
      justifyEnd={justifyEnd}
      iconSmall={iconSmall}
    />
  </StyledTooltipContainer>
);

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
   * Aligns the tooltip with the end of it's wrapper (centered otherwise)
   */
  justifyEnd: PropTypes.bool,
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
   * Render a 1.8rem tooltip icon despite screensize (by default the tooltip icon is 1.8rem on desktop &
   * 2.4rem on mobile), the clickable area will remain 2.4rem
   */
  iconSmall: PropTypes.bool,
};

const defaultProps = {
  title: '',
  body: '',
  justifyEnd: false,
  screenReaderLabel: '',
  placement: 'left',
  iconSmall: false,
};


Tooltip.propTypes = tooltipPropTypes;
InlineTooltip.propTypes = tooltipPropTypes;


Tooltip.defaultProps = defaultProps;
InlineTooltip.defaultProps = defaultProps;

export default Tooltip;

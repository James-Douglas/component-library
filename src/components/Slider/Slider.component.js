import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import getTheme from 'utils/getTheme';
import Icon from '../Icon/Icon.component';

const coolBoxOpenLeftKeyframes = keyframes`
  from { left: -100% }
  to { left: 0 }
`;
const coolBoxOpenRightKeyframes = keyframes`
  from { right: -100% }
  to { right: 0 }
`;
const coolBoxOpenTopKeyframes = keyframes`
  from { top: -100% }
  to { top: 0 }
`;
const coolBoxBottomTopKeyframes = keyframes`
  from { bottom: -100% }
  to { bottom: 0}
`;

const StyledSlider = styled.div`
  position: fixed;
  overflow: auto;
  margin: 0;
  height: 100%;
  border-top: ${(props) => `1px solid ${props.theme.colors.white}`}; 
  background: ${(props) => (props.theme.colors.white)}; 
  z-index: ${(props) => (props.theme.zIndex[40])}; 
  box-shadow: ${(props) => (props.show ? props.theme.boxShadow.lg : props.theme.boxShadow.none)}; 
  ${(props) => props.direction === 'top' && css`
    animation-name: ${coolBoxOpenTopKeyframes};
    height: ${props.notificationSize};
    width: 100%;
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    top: ${!props.show ? -props.notificationSize : 0};
    left: 0;
  `}
  ${(props) => props.direction === 'left' && css`
    animation-name: ${coolBoxOpenLeftKeyframes};
    width: ${props.notificationSize};
    padding: 6.4rem 0.5rem 0.5rem 0.5rem;
    top:0;
    left: ${!props.show ? -props.notificationSize : 0};
  `}
  ${(props) => props.direction === 'bottom' && css`
    animation-name: ${coolBoxBottomTopKeyframes};
    width: 100%;
    height: ${props.notificationSize};
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    bottom: ${!props.show ? -props.notificationSize : 0};
    left: 0;
  `}
  ${(props) => props.direction === 'right' && css`
    animation-name: ${coolBoxOpenRightKeyframes};
    width: ${props.notificationSize};
    padding: 6.4rem 0.5rem 0.5rem 0.5rem;
    top:0;
    right: ${!props.show ? -props.notificationSize : 0};
  `} 
  animation-duration: 0.4s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-play-state: running;
`;
const StyledIcon = styled.div`
  position: absolute;
  right: 2rem;
  top: 2.5rem;
  cursor: pointer;
  z-index: ${(props) => (props.theme.zIndex[50])}; 
  opacity: 0.5;
`;


const Slider = ({
  direction,
  notificationSize,
  closeButton,
  children,
  iconClassName,
  show,
  onClose,
}) => {
  const IconClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <StyledSlider
        show={Boolean(show)}
        notificationSize={notificationSize}
        direction={direction}
      >
        {closeButton && <StyledIcon className={`${iconClassName} icon-close`} onClick={IconClick} onKeyPress={IconClick} aria-label="Close Dialog" tabIndex="0" role="button" aria-pressed="false"><Icon name="close" size={1.6} /></StyledIcon>}
        {children}
      </StyledSlider>
    </ThemeProvider>
  );
};


Slider.propTypes = {
  /**
   *  Direction param play a role in how we interpret a slide's movement within a frame.
   */
  direction: PropTypes.string,
  /**
   *  Defines height or width (depending from direction) of the slide.
   */
  notificationSize: PropTypes.string,
  /**
   *  The slide's content.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   *  Defines close button visibility(by default it's hidden).
   */
  closeButton: PropTypes.bool,
  /**
   *  Defines custom class name for close button.
   */
  iconClassName: PropTypes.string,
  /**
   *  Defines slide visibility.
   */
  show: PropTypes.bool,
  /**
   *  onClose function, called when click close button.
   */
  onClose: PropTypes.func,
};

Slider.defaultProps = {
  direction: 'right',
  notificationSize: '80%',
  children: '',
  closeButton: false,
  iconClassName: '',
  show: false,
  onClose: null,
};

export default Slider;

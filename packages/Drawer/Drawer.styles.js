import styled, { keyframes, css } from 'styled-components';

const animateLeft = keyframes`
  from { left: -100% }
  to { left: 0 }
`;
const animateRight = keyframes`
  from { right: -100% }
  to { right: 0 }
`;
const animateTop = keyframes`
  from { top: -100% }
  to { top: 0 }
`;
const animateBottom = keyframes`
  from { bottom: -100% }
  to { bottom: 0}
`;

export const StyledDrawer = styled.div`
  position: fixed;
  overflow: auto;
  margin: 0;
  height: 100%;
  ${({ theme, keyLine }) => keyLine && css`
    border-top: ${theme.drawer.borderTop};
  `}
  background: ${({ theme }) => (theme.drawer.background)};
  z-index: ${({ zIndex }) => zIndex};
  box-shadow: ${({ theme }) => theme.drawer.shadow};
  padding: ${({ theme }) => `0 ${theme.spacing[4]} ${theme.spacing[4]}`};
  ${({ size, direction }) => direction === 'top' && css`
    animation-name: ${animateTop};
    height: ${size};
    width: 100%;
    top: 0;
    left: 0;
  `}
  ${({ size, direction }) => direction === 'left' && css`
    animation-name: ${animateLeft};
    width: ${size};
    top: 0;
    left: 0;
  `}
  ${({ size, direction }) => direction === 'bottom' && css`
    animation-name: ${animateBottom};
    width: 100%;
    height: ${size};
    bottom: 0;
    left: 0;
  `}
  ${({ size, direction }) => direction === 'right' && css`
    animation-name: ${animateRight};
    width: ${size};
    top: 0;
    right: 0;
  `}
  animation-duration: 0.4s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-play-state: running;
`;

export const StyledIcon = styled.div`
  position: fixed; /* fallback for IE11 */
  position: sticky;
  float: right;
  right: ${({ theme }) => (theme.spacing[20])};
  top: ${({ theme }) => (theme.spacing[20])};
  cursor: pointer;
  z-index: inherit;
  color: ${({ theme }) => theme.drawer.closeIcon};
  font-size: ${({ theme }) => theme.fontSize['3xl']};
`;

export const StyledDrawerCloseBase = styled.div`
  height: ${({ theme }) => (theme.spacing[12])};
  position: fixed;
  background: ${({ theme }) => (theme.drawer.background)};
  z-index: inherit;
  width: 100%;

  ${({ direction }) => direction === 'top' && css`
    width: 100%;
    animation-name: ${animateTop};
  `}
  ${({ direction }) => direction === 'bottom' && css`
    width: 100%;
    animation-name: ${animateBottom};
  `}
  ${({ theme, direction, size }) => direction === 'left' && css`
    width: calc(${size} - ${theme.spacing[8]});
    animation-name: ${animateLeft};
  `}
  ${({ direction, size }) => direction === 'right' && css`
    width: ${size};
    animation-name: ${animateRight};
  `}
`;

export const StyledDrawerText = styled.div`
 padding-top: ${({ theme, closeButton }) => (closeButton ? theme.spacing[60] : theme.spacing[32])};
`;

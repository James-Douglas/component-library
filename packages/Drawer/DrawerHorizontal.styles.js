import styled, { keyframes, css } from 'styled-components';
import { Button } from '@comparethemarketau/manor-button';

const animateTop = (size) => keyframes`
  from { top: -${size}px }
  to { top: ${size}px }
`;

const animateBottomPreview = (preview, size) => keyframes`
  from { bottom: -${size - preview.viewArea}px }
  to { bottom: 0}
`;

const animateBottom = (size) => keyframes`
  from { bottom: -${size}px }
  to { bottom: 0}
`;

export const StyledDrawer = styled.div`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  position: fixed;
  margin: 0;
  height: 100%;
  ${({ theme, keyLine }) => keyLine && css`
    border-top: ${theme.drawer.borderTop};
  `}
  background: ${({ theme }) => theme.drawer.background};
  z-index: ${({ zIndex }) => zIndex};
  box-shadow: ${({ theme }) => theme.drawer.shadow};
  padding: ${({ theme }) => `0 ${theme.spacing[4]} ${theme.spacing[4]}`};
  animation-duration: 0.4s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-play-state: running;
  ${({ size, direction }) => direction === 'top' && css`
    height: ${size}px;
    width: 100%;
    top: -${size}px;
    left: 0;
  `}
  ${({ size, direction }) => direction === 'bottom' && css`
    width: 100%;
    height: ${size}px;
    bottom: -${size}px;
    left: 0;
  `}
  &.StyledDrawerActive {
    ${({ direction, preview, size }) => direction === 'bottom' && css`
      animation-name: ${preview.viewArea ? animateBottomPreview(preview, size) : animateBottom(size)};
      bottom: 0;
    `}
  }
  &.StyledDrawerPreview {
    ${({ direction, preview, size }) => direction === 'bottom' && css`
      bottom: -${size - preview.viewArea}px;
    `}
  }
`;

export const StyledDrawerPreviewButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.primary50};
    ${({ keyLine }) => keyLine && css`
      border-top: ${theme.drawer.borderTop};
      top: -35px;
    `}
    ${({ keyLine }) => !keyLine && css`
      top: -37px;
    `}
    left: 5%;
    border-bottom-right-radius: ${theme.spacing[0]};
    border-bottom-left-radius: ${theme.spacing[0]};
    margin-bottom: ${theme.spacing[0]};
    position: absolute;
    padding-left: ${theme.spacing[32]};
    padding-right: ${theme.spacing[32]};
  `}
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
  ${({ direction, size }) => direction === 'top' && css`
    width: 100%;
    animation-name: ${animateTop(size)};
  `}
  ${({ direction, preview, size }) => direction === 'bottom' && css`
    width: 100%;
    animation-name: ${animateBottom(preview, size)};
  `}
`;

export const StyledDrawerText = styled.div`
  padding-top: ${({ theme, closeButton }) => (
    closeButton ? theme.spacing[60] : theme.spacing[32]
  )};
  ${({ preview, theme }) => preview.visible === true && css`
    padding-top: ${theme.spacing[4]};
  `}
  overflow: auto;
  position: fixed;
  height: ${({ size }) => `${size}px`};
`;

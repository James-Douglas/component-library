import styled, { keyframes, css } from 'styled-components';

const animateTop = (size) => keyframes`
  from { top: -${size}px }
  to { top: 0px }
`;

const animateBottom = (size) => keyframes`
  from { bottom: -${size}px }
  to { bottom: 0px }
`;

export const CompareDrawerContainer = styled.div`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  :root {
    --sab: env(safe-area-inset-bottom);
  }
  font-family: ${({ theme }) => theme.fontFamily};
  position: fixed;
  margin: 0;
  border-top: ${({ theme }) => theme.compareDrawer.borderTop};
  background: ${({ theme }) => theme.compareDrawer.background};
  z-index: ${({ zIndex }) => zIndex};
  animation-duration: 0.4s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-play-state: running;
  ${({ size, direction }) => direction === 'top' && css`
    min-height: ${size}px;
    width: 100%;
    top: -${size + 5}px;
    left: 0;
  `}
  ${({ size, direction }) => direction === 'bottom' && css`
    width: 100%;
    min-height: ${size}px;
    bottom: -${size + 5}px; 
    left: 0;
  `}
  &.CompareDrawerContainerActive {
    ${({ direction, size }) => direction === 'bottom' && css`
      animation-name: ${animateBottom(size)};
      bottom: 0px;
      @supports(padding: max(0px)) {
        padding-bottom: max(0px, env(safe-area-inset-bottom));
      }
    `}
    ${({ direction, size }) => direction === 'top' && css`
      animation-name: ${animateTop(size)};
      top: 0;
    `}
  }
`;

export const BottomLine = styled.div`
  border-bottom: ${({ theme }) => theme.borders.disabled};
`;

export const CompareDrawerBody = styled.div`
  width: ${({ breakpoint }) => ((breakpoint === 'lg') && '116.8rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'md') && '96rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'sm') && '68.8rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'xs') && '100%')};
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ breakpoint }) => ((breakpoint === 'xs') ? 'wrap' : 'nowrap')};
  border-left: ${({ theme }) => theme.borders.disabled};
  margin: auto;
  box-sizing: border-box;
`;

export const CompareCard = styled.div`
  width: ${({ breakpoint }) => ((breakpoint === 'lg') && '32.8rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'md') && '25.9rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'sm') && '16.8rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'xs') && '33.333333%')};
  display: flex;
  flex-wrap: ${({ breakpoint }) => ((breakpoint === 'xs') ? 'wrap-reverse' : 'wrap')};
  border-right: ${({ theme }) => theme.borders.disabled};
  border-bottom: ${({ breakpoint, theme }) => ((breakpoint === 'xs') ? theme.borders.disabled : 'none')};
  box-sizing: border-box;
`;

export const CompareCardData = styled.div`
  width: 100%;
  height: 6.4rem;
  padding: 0 1.2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const CompareCardLogoWrapper = styled.div`
  width: ${({ breakpoint }) => ((breakpoint === 'lg' || breakpoint === 'md') && '4.8rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'sm') && '4rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'xs') && '3.4rem')};
  padding-top: 0.8rem;
`;

export const CompareCardLogo = styled.div`
  width: 100%
`;

export const CompareCardProductName = styled.div`
  width: ${({ breakpoint }) => ((breakpoint === 'lg') && '15rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'md') && '8rem')};
  align-items: center;
  font-size: ${({ theme, breakpoint }) => ((breakpoint === 'lg') && theme.fontSize.sm)};
  font-size: ${({ theme, breakpoint }) => ((breakpoint === 'md') && theme.fontSize.xs)};
  line-height: ${({ theme, breakpoint }) => ((breakpoint === 'lg') && '1.8rem')};
  line-height: ${({ theme, breakpoint }) => ((breakpoint === 'md') && '1.6rem')};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  display: ${({ breakpoint }) => ((breakpoint === 'sm' || breakpoint === 'xs') ? 'none' : 'flex')};
`;

export const CompareCardPriceWrapper = styled.div`
  text-align: right;
  padding-top: 1.2rem;
`;

export const CompareCardPrice = styled.div`
  font-size: ${({ breakpoint, theme }) => ((breakpoint === 'lg' || breakpoint === 'md') ? theme.fontSize.xl : theme.fontSize.lg)};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.grey900};
  > span {
    font-size: ${({ breakpoint, theme }) => ((breakpoint === 'lg' || breakpoint === 'md') ? theme.fontSize.base : theme.fontSize.xs)};
  }
`;

export const CompareCardExcess = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.grey600}
`;

export const CompareCardDelete = styled.div`
  width: 100%;
  display: flex;
  border-top: ${({ breakpoint, theme }) => ((breakpoint === 'xs') ? 'none' : theme.borders.disabled)};
  border-bottom: ${({ breakpoint, theme }) => ((breakpoint === 'xs') ? theme.borders.disabled : 'none')};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: center;
  line-height: 3.8rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.grey600};
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const EmptyCompareCard = styled.div`
  width: ${({ breakpoint }) => ((breakpoint === 'lg') && '32.8rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'md') && '25.9rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'sm') && '16.8rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'xs') && '33.333333%')};
  border-right: ${({ theme }) => theme.borders.disabled};
  border-bottom: ${({ breakpoint, theme }) => ((breakpoint === 'xs') ? theme.borders.disabled : 'none')};
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: ${({ breakpoint, theme }) => ((breakpoint === 'lg' || breakpoint === 'md') ? theme.fontSize.base : theme.fontSize.xs)};
  background: ${({ theme }) => theme.emptyCard.background};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.grey600};
  padding: 0 1.6rem;
`;

export const CompareButton = styled.div`
  width: ${({ breakpoint }) => ((breakpoint === 'lg') && '18.4rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'md') && '18.3rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'sm') && '18.4rem')};
  width: ${({ breakpoint }) => ((breakpoint === 'xs') && '100%')};
  padding: ${({ breakpoint }) => ((breakpoint === 'xs') ? '12px' : '0 0 0 16px')};
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const StyledRemoveText = styled.div`
  margin-left: 0.8rem;
`;

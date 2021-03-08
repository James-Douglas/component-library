import styled, { css } from 'styled-components';

export const StyledSegmentedButtons = styled.div`
  width: auto;
  flex-wrap: wrap;
  justify-content: flex-start;
  display: ${({ flex }) => (flex ? 'flex' : 'inline-flex')};

  ${({ flex }) => !flex
    && css`
      align-self: flex-start;
    `};

  ${({ fixed, breakpoint }) => fixed !== true
    && (breakpoint === 'xs')
    && css`
      flex-direction: column;
      display: flex;
    `};

  ${({ fixed, cols, contentWidth }) => fixed
    && cols
    && !contentWidth
    && css`
      @media only screen and (max-width: ${cols * 216}px) {
        flex-direction: column;
        display: inline-flex;
      }
    `};

  ${({ fixed, cols, contentWidth }) => contentWidth
    && fixed
    && cols
    && css`
      @media only screen and (max-width: ${cols
          * (parseInt(contentWidth.slice(0, -2), 10) + 42)}px) {
        flex-direction: column;
        display: inline-flex;
      }
    `};
`;

export const StyledValidationWrapper = styled.div`
  width: 100%;
`;

export const StyledEvenDivWrapper = styled.div`
  display: inline-flex;
  flex: auto;
  maxwidth: ${({ divWidth }) => divWidth};
`;

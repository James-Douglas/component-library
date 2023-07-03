import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 1.4rem 1.6rem 0.2rem 1.6rem;
  color: ${({ theme }) => theme.toggle.button.text};
  ${({ disabled }) => disabled
    && css`
      color: ${({ theme }) => theme.toggle.greyed.color};
    `};
`;

export const StyledSegmentedButtonContent = styled.div`
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  min-height: ${({ theme }) => theme.spacing[20]};
  text-align: center;
  width: auto;
  & div {
    margin-bottom: ${({ theme, subText }) => (subText ? theme.spacing[40] : theme.spacing[12])};
  }
  ${({ fixed }) => fixed
    && css`
      width: 17.5rem;
    `};

  ${({ contentWidth, fixed }) => contentWidth
    && fixed
    && css`
      width: ${contentWidth};
    `};

  ${({ fixed, breakpoint }) => !fixed
    && (breakpoint === 'xs')
    && css`
      width: auto;
    `};
`;

export const StyledContent = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

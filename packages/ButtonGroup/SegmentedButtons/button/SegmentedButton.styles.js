import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 1.4rem 1.6rem 0.2rem 1.6rem;
  color: ${({ theme }) => theme.toggle.button.text};
`;

export const StyledSegmentedButtonContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  min-height: ${({ theme }) => theme.spacing[20]};
  text-align: center;
  width: auto;

  ${({ fixed }) => fixed
    && css`
      width: 17.5rem;
    `};

  ${({ contentWidth, fixed }) => contentWidth
    && fixed
    && css`
      width: ${contentWidth};
    `};

  ${({ fixed }) => !fixed
    && css`
      @media only screen and (max-width: 576px) {
        width: auto;
      }
    `};
`;

export const StyledContent = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

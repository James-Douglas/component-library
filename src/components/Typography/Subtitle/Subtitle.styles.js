import styled, { css } from 'styled-components';

const StyledSubtitle = styled.p`
  ${({ variant, theme }) => variant === 'primary'
    && css`
      font-weight: ${theme.fontWeight.normal};
      line-height: ${theme.lineHeight.snug};
      font-size: ${theme.fontSize.lg};
    `}
  ${({ theme, variant }) => variant === 'secondary'
    && css`
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize.base};
      line-height: ${theme.lineHeight.normal};
    `}
`;

export default StyledSubtitle;

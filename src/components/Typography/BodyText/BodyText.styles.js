import styled, { css } from 'styled-components';

const StyledBodyText = styled.p`
  line-height: ${({ theme }) => theme.lineHeight.snug};
  margin: 0 0 ${({ theme }) => theme.spacing[12]};

  ${({ theme, variant }) => variant === 'primary'
    && css`
      font-size: ${theme.fontSize.base};
    `}

  ${({ theme, variant }) => variant === 'secondary'
    && css`
      font-size: ${theme.fontSize.sm};
    `}
`;

export default StyledBodyText;

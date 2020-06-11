import styled, { css } from 'styled-components';

const StyledLogo = styled.div`
  transition: all 200ms ease;

  ${({ theme, size }) => size === 'large'
    && css`
      height: ${theme.logo.heightLarge}; /* 44px */
    `}

  ${({ theme, size }) => size === 'small'
    && css`
      height: ${theme.logo.heightSmall}; /* 32px */
    `}
`;

export default StyledLogo;

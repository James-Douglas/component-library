import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
  width: 100%;
`;

export const StyledPosition = styled.div`
  ${({ sticky }) => sticky
    && css`
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
    `}
  background: ${({ theme, background }) => (background ? theme.footer.background : theme.footer.transparent)};  
`;

export const StyledFooterBar = styled.div`
  min-height: 5.4rem;
  width: 100%;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[24]};
`;

export const StyledCustomerAccounts = styled.div`
  text-align: left;
  p, a {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
  a {
    text-decoration: none;
  }
`;

export const StyledMicrocopy = styled.div`
  span {
    display: block;
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: ${({ theme }) => theme.lineHeight.snug};
    margin-bottom: ${({ theme }) => theme.spacing[12]}
  }
`;

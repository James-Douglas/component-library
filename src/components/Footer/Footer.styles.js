import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
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
  padding: ${({ theme }) => `${theme.spacing[24]} 0`};
`;

export const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

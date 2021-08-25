import styled, { keyframes, css } from 'styled-components';

export const StyledAlignment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  pointer-events: none;
  z-index: ${({ zIndex }) => zIndex};
`;

const animateIn = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.grey100};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  z-index: inherit;
  max-width: ${({ breakpoint }) => ((breakpoint === 'sm') ? '57.6rem' : '76.8rem')};
  min-width: 32.5rem;
  ${({ dynamicHeight }) => !dynamicHeight
    && css`
      height: 100%;
      max-height: ${({ desktop, breakpoint }) => ((desktop || breakpoint === 'sm') && '69.6rem')};      
    `};
  pointer-events: auto;
  position: relative;
  animation-name: ${animateIn};
  animation-duration: 0.3s;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ desktop }) => (desktop ? 'flex-end' : 'flex-start')};
  padding: ${({ desktop }) => (desktop ? '2.4rem 2.4rem 2rem 2.4rem' : '3rem 2.4rem 1.45rem 2.4rem')};
`;

export const StyledCloseIcon = styled.div`
  cursor: pointer;
  z-index: inherit;
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSize['3xl']};
`;

export const StyledCloseButton = styled.div`
  padding: 0;
  margin: 0;    
`;

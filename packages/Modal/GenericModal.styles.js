import styled, { keyframes } from 'styled-components';

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
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  z-index: inherit;
  pointer-events: auto;
  position: relative;
  animation-name: ${animateIn};
  animation-duration: .3s;
`;

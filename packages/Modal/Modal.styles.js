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
  max-width: 745px;
  min-width: 350px;
  width: ${({ size }) => {
    if (size === 'lg') {
      return '62%';
    }
    if (size === 'md') {
      return '50%';
    }
    return '33.333333%';
  }};
  min-height: 30rem;
  height: auto;
  pointer-events: auto;
  position: relative;
  animation-name: ${animateIn};
  animation-duration: .3s;
`;

export const StyledCloseIcon = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: inherit;
  opacity: 0.5;
  right: ${({ theme }) => theme.spacing[24]};
  top: ${({ theme }) => theme.spacing[24]};
  font-size: ${({ theme }) => theme.fontSize['3xl']};
`;

export const StyledContent = styled.div`
  padding: ${({ theme }) => `${theme.spacing[20]} ${theme.spacing[24]} ${theme.spacing[32]}`};
`;

export const StyledContentChildren = styled.div`
  margin-top: ${({ theme }) => theme.spacing[28]};
`;

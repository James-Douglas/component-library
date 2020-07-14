import React from 'react';
import styled from 'styled-components';
import useToasts from './contexts/Toast/useToasts';

const StyledContainer = styled.div`
    position: fixed;
    top: ${({ theme }) => theme.spacing[76]};
    right: 0;
    overflow: hidden;
    z-index: ${({ theme }) => theme.zIndex.max};
`;

const StyledWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

const ToastManager = () => {
  const { toasts } = useToasts();
  return (
    <StyledContainer>
      <StyledWrap>
        {toasts}
      </StyledWrap>
    </StyledContainer>
  );
};

export default ToastManager;

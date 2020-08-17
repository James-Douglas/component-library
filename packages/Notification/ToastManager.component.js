import React, { useState } from 'react';
import styled from 'styled-components';
import { useMountEffect, useUnmountEffect } from '@comparethemarketau/manor-hooks';
import { ManorProvider } from '@comparethemarketau/manor-provider';

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
  const [toasts, setToasts] = useState([]);

  const add = ({ detail: toast }) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
  };

  const remove = ({ detail: id }) => {
    setToasts(toasts.filter((n) => n.props.id !== id));
  };

  useMountEffect(() => {
    window.addEventListener('addToastNotification', add);
    window.addEventListener('removeToastNotification', remove);
  });

  useUnmountEffect(() => {
    window.removeEventListener('addToastNotification', add);
    window.removeEventListener('removeToastNotification', remove);
  });

  return (
    <ManorProvider>
      <StyledContainer>
        <StyledWrap>
          {toasts}
        </StyledWrap>
      </StyledContainer>
    </ManorProvider>
  );
};

export default ToastManager;

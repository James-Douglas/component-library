import React, { useReducer } from 'react';
import styled from 'styled-components';
import { useMountEffect, useUnmountEffect } from '@comparethemarketau/manor-hooks';

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
  const [toasts, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [...state, action.toast];
      case 'remove':
        return state.filter((n) => n.props.id !== action.id);
      default:
        return state;
    }
  }, []);

  const add = ({ detail: toast }) => {
    dispatch({
      type: 'add',
      toast,
    });
  };

  const remove = ({ detail: id }) => {
    dispatch({
      type: 'remove',
      id,
    });
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
    <StyledContainer>
      <StyledWrap>
        {toasts}
      </StyledWrap>
    </StyledContainer>
  );
};

export default ToastManager;

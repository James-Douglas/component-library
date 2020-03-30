import React, {
  useCallback,
} from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import useToasts from '../../contexts/Toast/useToasts';
import Notification from './Notification.component';

const slideIn = keyframes`
    0% {
        transform: translateX(200px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

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

const AnimatedNotification = styled(Notification)`
    animation-name: ${slideIn};
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-play-state: running;
`;

const ToastManager = () => {
  const { toasts, removeToast } = useToasts();

  const renderNotifcationsStack = useCallback(() => toasts.map((n) => (
    <AnimatedNotification
      id={n.id}
      key={n.id}
      type={n.props.type}
      variant={n.props.variant}
      title={n.props.title}
      content={n.props.content}
      primaryAction={n.props.primaryAction}
      icon={n.props.icon}
      closeButton={n.props.closeButton}
      handleClose={() => removeToast(n.id)}
      autoClose={n.props.autoClose}
    />
  )), [toasts, removeToast]);


  return createPortal(
    <StyledContainer>
      <StyledWrap>
        {renderNotifcationsStack()}
      </StyledWrap>
    </StyledContainer>,
    document.body,
  );
};

export default ToastManager;

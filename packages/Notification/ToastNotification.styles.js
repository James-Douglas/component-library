import styled, { keyframes } from 'styled-components';
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

const AnimatedNotification = styled(Notification)`
    animation-name: ${slideIn};
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-play-state: running;
`;

export default AnimatedNotification;

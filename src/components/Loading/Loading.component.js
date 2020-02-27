import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Progress from './Progress';
import useInterval from '../../hooks/useInterval';

export const StyledContainer = styled.div`
  font-size: ${({ theme }) => theme.loading.fontSize};
  background-color: ${({ theme }) => theme.loading.containerBackground};
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const StyledInnerContainer = styled.div`
  text-align: center;
  width: 100%;
`;
export const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingComponent = ({
  messages,
  isDelayMessages,
  handleLoaded,
  forceStop,
  delayNumber,
  className,
  maxProgress,
  variant,
}) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    setProgress(forceStop ? maxProgress : progress);
  }, [forceStop, maxProgress, progress]);

  // Interval to track the progress value
  useInterval(() => {
    setTimer(timer + 1);
    // Start incrementing the progress value
    if (!isDone && !delay) {
      setProgress(progress + 1);
    }
    if (isDelayMessages && (progress + delay) === timer) {
      setTimer(progress);
      setDelay(0);
    }

    if (progress === Math.floor(maxProgress / messages.length) * (messageIndex + 1)) {
      setNextMessageIndex(messageIndex + 1);
      if (isDelayMessages) {
        setDelay(Math.floor(Math.random() * 20) + 1);
      }
    }

    if (progress === maxProgress) {
      done();
    }
  }, delayNumber);

  const setNextMessageIndex = (index) => {
    if (messages[index]) {
      setMessageIndex(index);
    }
  };

  const done = () => {
    setIsDone(true);
    if (handleLoaded) {
      handleLoaded();
    }
  };

  return (
    <StyledContainer className={className}>
      <StyledInnerContainer>
        {
          messages[messageIndex]
          && (
            <StyledMessageContainer>
              <div className="loading-message">{messages[messageIndex]}</div>
            </StyledMessageContainer>
          )
        }
        <Progress value={progress} variant={variant} />
      </StyledInnerContainer>
    </StyledContainer>
  );
};

LoadingComponent.propTypes = {
  /**
   * Set of messages to show.
   * Currently cycles through a maximum of 3 messages.
   */
  messages: PropTypes.arrayOf(PropTypes.string),
  /**
   * Call back function when loading has finished.
   */
  handleLoaded: PropTypes.func,
  /**
   * Stops the loading on each message
   */
  isDelayMessages: PropTypes.bool,
  /**
   * Force stop the loading
   */
  forceStop: PropTypes.bool,
  /**
   * Change speed of the loading
   */
  delayNumber: PropTypes.number,
  /**
   * Classes to be applied to the Loading component
   */
  className: PropTypes.string,
  /**
   * Define a maximum percentage the loading bar can reach
   */
  maxProgress: PropTypes.number,
  /**
   * Defines  colors
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

LoadingComponent.defaultProps = {
  messages: ['Loading...'],
  handleLoaded: null,
  isDelayMessages: false,
  forceStop: false,
  delayNumber: 30,
  className: '',
  maxProgress: 100,
  variant: 'primary',
};

export default LoadingComponent;

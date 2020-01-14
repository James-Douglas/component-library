import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'utils/getTheme';
import Progress from './Progress';
import useInterval from '../../hooks/useInterval';

export const StyledContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 150px);
  font-size: ${(props) => props.theme.fontSize.base};
`;
export const StyledInnerContainer = styled.div`
  margin-top: 10rem;
  text-align: center;
  width: 800px;
`;
export const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = ({
  messages,
  isDelayMessages,
  onLoaded,
  forceStop,
  delayNumber,
}) => {
  const maxProgress = 100;
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    setProgress(forceStop ? maxProgress : progress);
  }, [forceStop, progress]);

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
    onLoaded();
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <StyledInnerContainer>
          {
            messages[messageIndex]
            && (
              <StyledMessageContainer>
                <div className="loading-message">{messages[messageIndex]}</div>
              </StyledMessageContainer>
            )
          }
          <Progress value={progress} />
        </StyledInnerContainer>
      </StyledContainer>
    </ThemeProvider>
  );
};

Loading.propTypes = {
  /**
   * @param {Array} messages
   * Set of messages to show.
   * Currently cycles through a maximum of 3 messages.
   */
  messages: PropTypes.arrayOf(PropTypes.string),
  /**
   * @param {Function} onLoaded
   * Call back function when loading has finished.
   */
  onLoaded: PropTypes.func,
  /**
   * @param {Boolean} isDelayMessages
   * Stops the loading on each message
   */
  isDelayMessages: PropTypes.bool,
  /**
   * @param {Boolean} forceStop
   * Force stop the loading
   */
  forceStop: PropTypes.bool,
  /**
   * @param {Boolean} forceStop
   * Change speed of the loading
   */
  delayNumber: PropTypes.number,
};

Loading.defaultProps = {
  messages: ['Loading...'],
  onLoaded: () => {},
  isDelayMessages: false,
  forceStop: false,
  delayNumber: 30,
};

export default Loading;

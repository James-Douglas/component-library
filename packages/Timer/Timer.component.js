import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@comparethemarketau/manor-typography';

const Timer = ({ targetTime, typographyVariant }) => {
  const diffMs = Date.parse(targetTime) - Date.now();
  const [hours, setHours] = useState(Math.floor(diffMs / 3.6e6));
  const [minutes, setMinutes] = useState(Math.floor((diffMs % 3.6e6) / 6e4));
  const [seconds, setSeconds] = useState(Math.floor((diffMs % 6e4) / 1000));
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(myInterval);
      } else {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
          if (minutes === 0) {
            setMinutes(59);
            setHours(hours - 1);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    diffMs > 0
      ? <Typography variant={typographyVariant}> {hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Typography>
      : <Typography variant={typographyVariant}>0:00:00</Typography>
  );
};

Timer.propTypes = {
  /**
   * An ISO String of target time
   */
  targetTime: PropTypes.string.isRequired,
  /**
   * The typography variant we want to display the countdown in
   */
  typographyVariant: PropTypes.string,
};

Timer.defaultProps = {
  typographyVariant: 'body1',
};

export default Timer;

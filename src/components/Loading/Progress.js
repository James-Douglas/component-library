import React from 'react';
import PropTypes from 'prop-types';
import StyledProgress from './Progress.styles';

const Progress = ({
  value,
  max,
  variant,
}) => {
  const Component = 'progress';

  return (
    <StyledProgress
      as={Component}
      value={value}
      max={max}
      variant={variant}
    />
  );
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};

Progress.defaultProps = {
  max: 100,
};

export default Progress;

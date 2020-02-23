import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledProgress = styled.div`
  margin-top: 1rem;
  width: 100%;

  &[value] {
    /* Reset the default appearance */
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    height: 8px;
    &::-webkit-progress-bar {
      background: ${(props) => props.theme.colors.greyLight};
      border-radius: 8px;
    }
    &::-webkit-progress-value {
      border-radius: 8px;
      background: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const Progress = ({
  value,
  max,
}) => {
  const Component = 'progress';

  return (
    <StyledProgress
      as={Component}
      value={value}
      max={max}
    />
  );
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};

Progress.defaultProps = {
  max: 100,
};

export default Progress;

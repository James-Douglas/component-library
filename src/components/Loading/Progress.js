import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledProgress = styled.div`
  margin-top: ${({ theme }) => theme.spacing[12]};
  width: 100%;
  &[value] {
    /* Reset the default appearance */
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    height:  ${({ theme }) => theme.spacing[8]};
    &::-webkit-progress-bar {
      background: ${({ theme }) => theme.loading.background};
      border-radius: ${({ theme }) => theme.loading.borderRadius};
    }
    &::-webkit-progress-value {
      border-radius: ${({ theme }) => theme.loading.borderRadius};
      background: ${({ theme, variant }) => theme.loading[variant]};
    }
  }
`;

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

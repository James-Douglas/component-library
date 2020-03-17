import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledBar = styled.div`
  width: 100%;
  height: 0.6rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  z-index: ${({ theme }) => (theme.zIndex[30])};
  position: ${({ isSticky, stuck }) => (isSticky || stuck ? 'fixed' : 'relative')};
  top: ${({ isSticky, stuck }) => (isSticky || stuck ? '0' : 'inherit')};
`;

const sharedStyleProgress = css`
  background: ${({ theme }) => theme.progress.bar.progressBackground};
  transition: width 0.4s ease-in-out;
  border-radius:  ${({ theme, value }) => (value.toString() === '100' ? theme.borderRadius.none : `0 ${theme.borderRadius.full} ${theme.borderRadius.full} 0`)};
`;

const StyledProgress = styled.progress`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* IE-11 styling */
  color: ${({ theme }) => theme.progress.bar.progressBackground};
  &[value]  {
    /* Reset the default appearance */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Get rid of default border in IE. */
    border: none;
  }
  
  ::-webkit-progress-bar {
    background: ${({ theme }) => theme.progress.bar.backgroundValue};
  }
  ::-webkit-progress-value {
    ${sharedStyleProgress}
  }

  /* ie11 & edge remove black right border */
  &::-ms-fill {
    border-color: currentColor;
  }

  ::-moz-progress-bar {
    ${sharedStyleProgress}
  }
`;

const Bar = ({
  value,
  isSticky,
  stuck,
}) => (
  <StyledBar stuck={stuck} isSticky={isSticky} value={value}>
    <StyledProgress max="100" value={value} />
  </StyledBar>
);


Bar.propTypes = {
  /**
   * Percentage completed (0 - 100)
   */
  value: PropTypes.number.isRequired,
  /**
   * Determines if the bar should be sticky
   */
  isSticky: PropTypes.bool,
  /**
   * Determines if the bar is in the stuck state
   */
  stuck: PropTypes.bool,
};

Bar.defaultProps = {
  isSticky: false,
  stuck: false,
};

export default Bar;

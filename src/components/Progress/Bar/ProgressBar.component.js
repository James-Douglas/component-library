import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledBar = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow.progress};
  font-size: ${({ theme }) => theme.fontSize.sm};
  z-index: ${({ theme }) => (theme.zIndex[50])};
  position: ${({ isSticky, stuck }) => (isSticky || stuck ? 'fixed' : 'relative')};
  top: ${({ isSticky, stuck }) => (isSticky || stuck ? '0' : 'inherit')};
  height:  ${({ stuck }) => (stuck ? 'auto' : 'none')};
`;

const sharedStyleProgress = css`
  ${({ theme }) => theme.progress.bar.backgroundCss};
  transition: width 0.4s ease-in-out;
  border-radius:  ${({ theme, value }) => (value.toString() === '100' ? theme.borderRadius.none : `0 ${theme.borderRadius.full} ${theme.borderRadius.full} 0`)};
`;

const StyledProgress = styled.progress`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.progress.bar.background};
  /* ie11 */
  &[value]  {
    background: ${({ theme }) => theme.progress.bar.backgroundValue};
    color: ${({ theme }) => theme.progress.bar.colorValue};
    /* Reset the default appearance */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Get rid of default border in IE. */
    border: none;
  }

  /* ie11 & edge remove black right border */
  &::-ms-fill {
    border-color: currentColor;
  }

  &::-webkit-progress-bar {
    background: ${({ theme }) => theme.progress.bar.backgroundValue};
    transition: background-color 300ms ease-in-out;
  }

  ::-webkit-progress-value {
    ${sharedStyleProgress}
  }
  ::-moz-progress-bar {
    ${sharedStyleProgress}
  }
`;

const StyledLabel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-weight:  ${({ theme }) => theme.fontWeight.semibold};
  animation: 0.4s ease-in-out 0.3s 1 forwardsKey;
  height: ${({ theme }) => theme.spacing[24]};
  margin-left: ${({ value }) => `${value}vw`};
  right: ${({ value }) => (value > 10 ? '4.8rem' : '3.5rem')};
`;


const Bar = ({
  value,
  isSticky,
  stuck,
}) => (
  <StyledBar stuck={stuck} isSticky={isSticky} value={value}>
    <StyledProgress max="100" value={value} />
    <StyledLabel value={value}>
      {`${value}%`}
    </StyledLabel>
  </StyledBar>
);


Bar.propTypes = {
  /**
   * Percentage completed (0 - 100)
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
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
  value: 70,
  isSticky: false,
  stuck: false,
};

export default Bar;

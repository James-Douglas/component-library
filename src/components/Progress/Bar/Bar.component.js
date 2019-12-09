import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledBar = styled.div`
  width: 100%;
  box-shadow: ${(props) => props.theme.boxShadow.progress}; 
  font-size: ${(props) => props.theme.fontSize.sm}; 
  z-index: ${(props) => (props.theme.zIndex[50])}; 
  position: ${(props) => (props.isSticky || props.stuck ? 'fixed' : 'relative')}; 
  top: ${(props) => (props.isSticky || props.stuck ? '0' : 'inherit')};
  height:  ${(props) => (props.stuck ? 'auto' : 'none')};
}
`;

const sharedStyleProgress = css`
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfefc2+0,c3e4cf+100 */
  background: ${(props) => (props.theme.colors.secondaryLight)};  /* Old browsers */
  background ${(props) => (`-moz-linear-gradient(left, ${props.theme.colors.secondaryLight} 0%, ${props.theme.colors.secondaryLighter}  100%)`)}; /* FF3.6-15 */   
  background: ${(props) => (`-webkit-linear-gradient(left, ${props.theme.colors.secondaryLight} 0%, ${props.theme.colors.secondaryLighter}  100%)`)}; /* Chrome10-25,Safari5.1-6 */
  background: ${(props) => (`linear-gradient(to right, ${props.theme.colors.secondaryLight} 0%, ${props.theme.colors.secondaryLighter}  100%)`)}; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: ${(props) => (`progid:DXImageTransform.Microsoft.gradient( startColorstr=${props.theme.colors.secondaryLight}, endColorstr=${props.theme.colors.secondaryLighter},GradientType=1 )`)};  /* IE6-9 */
  transition : width 0.4s ease-in-out;
  border-radius:  ${(props) => (props.value.toString() === '100' ? props.theme.borderRadius.none : `0 ${props.theme.borderRadius.full} ${props.theme.borderRadius.full} 0`)};  
`;

const StyledProgress = styled.progress`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${(props) => (props.theme.colors.white)}; 
  /* ie11 */
  &[value]  {
    background: ${(props) => (props.theme.colors.greyLighterAA)}; 
    color: ${(props) => (props.theme.colors.secondaryLight)}; 
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
    background: ${(props) => (props.theme.colors.greyLighterAA)}; 
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
  font-weight:  ${(props) => (props.theme.fontWeight.semibold)};
  animation: 0.4s ease-in-out 0.3s 1 forwardsKey;
  height: 2.4rem;      /* 24px */
  margin-left: ${(props) => `${props.value}vw`}};
  right: ${(props) => (props.value > 10 ? '4.8rem' : '3.5rem')}};
`;


const Bar = ({
  value,
  isSticky,
  stuck,
}) => (
  <ThemeProvider theme={getTheme()}>
    <StyledBar stuck={stuck} isSticky={isSticky} value={value}>
      <StyledProgress max="100" value={value} />
      <StyledLabel value={value}>
        {`${value}%`}
      </StyledLabel>
    </StyledBar>
  </ThemeProvider>
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

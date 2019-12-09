import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';


const StyledCallout = styled.div`
  font-size:  ${(props) => props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: ${(props) => props.theme.lineHeight.tight};
  border-left: ${(props) => `4px solid ${props.theme.colors.blueDark}`};
  padding: ${(props) => `${props.theme.spacing['12']} ${props.theme.spacing['20']}`};
  background: ${(props) => (props.bgColorGrey ? props.theme.colors.greyLighter : props.theme.colors.white)}; 
`;

const Callout = ({
  children,
  bgColorGrey,
}) => (
  <ThemeProvider theme={getTheme()}>
    <StyledCallout bgColorGrey={bgColorGrey}>
      {children}
    </StyledCallout>
  </ThemeProvider>
);
Callout.propTypes = {
  /**
   * Band background color
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Band background color
   */
  bgColorGrey: PropTypes.bool,
};

Callout.defaultProps = {
  children: 'message',
  bgColorGrey: false,
};

export default Callout;

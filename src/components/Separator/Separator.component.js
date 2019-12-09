import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledHR = styled.hr`
  border: none;
  margin: 0;
  padding: 0;
  height: ${(props) => ((props.type === 'horizontal') ? 0 : '100%')}; 
  width: ${(props) => ((props.type === 'horizontal') ? '100%' : 0)}; 
  margin: ${(props) => ((props.type === 'horizontal') ? `${props.theme.spacing['32']} 0` : `0 ${props.theme.spacing['32']}`)}; 
  border-bottom: ${(props) => ((props.type === 'horizontal') ? `1px solid ${props.theme.colors.greyLightAA}` : 'auto')}; 
  border-right: ${(props) => ((props.type === 'vertical') ? `1px solid ${props.theme.colors.greyLightAA}` : 'auto')}; 
`;
const Separator = ({ type, className }) => (
  <ThemeProvider theme={getTheme()}>
    <StyledHR type={type} className={className} />
  </ThemeProvider>
);

Separator.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Classes to be applied to the container element
   */
  className: PropTypes.string,
};

Separator.defaultProps = {
  type: 'horizontal',
  className: '',
};

export default Separator;

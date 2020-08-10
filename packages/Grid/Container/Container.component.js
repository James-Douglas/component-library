import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { spacingPropTypes } from '@comparethemarketau/manor-utils';
import StyledContainer from './Container.styles';
import getTheme from './Container.theme';

const Container = ({
  children, className, padding, gutterWidth,
}) => {
  // Create a small Theme subset just for Grid
  const theme = getTheme(gutterWidth);

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer className={className} padding={padding}>
        {children}
      </StyledContainer>
    </ThemeProvider>
  );
};

Container.propTypes = {
  /**
   * Classes to be applied to the container element
   */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * The left and right padding to be applied to the container
   */
  padding: spacingPropTypes,
  /**
   * The spacing between grid columns
   */
  gutterWidth: PropTypes.oneOf([4, 8, 12, 16, 24, 32]),
};

Container.defaultProps = {
  className: '',
  children: [],
  padding: 0,
  gutterWidth: 32,
};

export default Container;

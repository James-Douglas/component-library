import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';
import { spacingPropTypes } from '@comparethemarketau/manor-utils';
import StyledContainer from './FluidContainer.styles';
import getTheme from './Container.theme';

const ThemedFluidContainer = ({
  // eslint-disable-next-line react/prop-types
  children, className, padding, gutterWidth, theme,
}) => {
  // eslint-disable-next-line no-param-reassign,react/prop-types
  theme.flexboxgrid = getTheme(gutterWidth);
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer className={className} padding={padding}>
        {children}
      </StyledContainer>
    </ThemeProvider>
  );
};

const DynamicThemedFluidContainer = withTheme(ThemedFluidContainer);

const FluidContainer = ({
  children, className, padding, gutterWidth,
}) => (
  <DynamicThemedFluidContainer className={className} padding={padding} gutterWidth={gutterWidth}>
    {children}
  </DynamicThemedFluidContainer>
);

FluidContainer.propTypes = {
  /**
   * Classes to be applied to the FluidContainer element
   */
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  /**
   * The left and right padding to be applied to the container
   */
  padding: spacingPropTypes,
  /**
   * The spacing between grid columns
   */
  gutterWidth: PropTypes.oneOf([4, 8, 12, 16, 24, 32]),
};

FluidContainer.defaultProps = {
  className: '',
  children: [],
  padding: 0,
  gutterWidth: 32,
};

export default FluidContainer;

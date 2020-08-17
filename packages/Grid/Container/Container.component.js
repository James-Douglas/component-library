import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { spacingPropTypes } from '@comparethemarketau/manor-utils';
import { ThemeProvider, withTheme } from 'styled-components';
import StyledContainer from './Container.styles';

import getTheme from './Container.theme';

const ThemedContainer = ({
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

const DynamicThemedContainer = withTheme(ThemedContainer);

const Container = ({
  children, className, padding, gutterWidth, theme,
}) => (
  <ManorProvider theme={theme}>
    <DynamicThemedContainer className={className} padding={padding} gutterWidth={gutterWidth}>
      {children}
    </DynamicThemedContainer>
  </ManorProvider>
);

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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
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
  theme: undefined,
  padding: 0,
  gutterWidth: 32,
};

export default Container;

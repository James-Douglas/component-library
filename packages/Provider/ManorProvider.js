import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';

const ManorProvider = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

ManorProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
  /**
   * The child content
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

ManorProvider.defaultProps = {
  theme: ctmTheme,
  children: [],
};

export default ManorProvider;

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, ThemeContext } from 'styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';

const ManorContext = createContext();

const ManorProvider = ({ children }) => {
  const theme = useContext(ThemeContext);
  return (
    <ManorContext.Provider value={{ theme }}>
      {children}
    </ManorContext.Provider>
  );
};

ManorProvider.propTypes = {
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
  children: [],
};

const HasManorProvider = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <ManorProvider>
      {children}
    </ManorProvider>
  </ThemeProvider>
);

HasManorProvider.propTypes = {
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

HasManorProvider.defaultProps = {
  theme: ctmTheme,
  children: [],
};

export default HasManorProvider;

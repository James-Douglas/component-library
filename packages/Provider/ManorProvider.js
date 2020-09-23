import React, {
  createContext, useContext, useMemo, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, ThemeContext } from 'styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import {
  getThemeBreakpoints,
  listenForBreakpointChanges,
  useUnmountEffect,
} from '@comparethemarketau/manor-hooks';
import { isDesktop } from '@comparethemarketau/manor-utils';

export const ManorContext = createContext();

const ManorProvider = ({ children }) => {
  const theme = useContext(ThemeContext);
  const [initialized, setInitialized] = useState(false);
  const [breakpoint, setBreakpoint] = useState(null);
  const [desktop, setDesktop] = useState(null);
  const [handler, setHandler] = useState(null);
  if (!initialized) {
    setHandler(listenForBreakpointChanges(setBreakpoint, getThemeBreakpoints(theme)));
    setInitialized(true);
  }

  useEffect(() => {
    setDesktop(isDesktop(breakpoint));
  }, [breakpoint, setDesktop]);

  useUnmountEffect(() => {
    handler && window.removeEventListener('resize', handler);
  });

  const value = useMemo(() => ({ breakpoint, isDesktop: desktop, theme }), [breakpoint, desktop, theme]);

  return (
    <ManorContext.Provider value={value}>
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

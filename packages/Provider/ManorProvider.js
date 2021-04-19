import React, {
  createContext, useContext, useMemo, useEffect, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, ThemeContext } from 'styled-components';
import { useTracking } from 'react-tracking';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { useBreakpoint } from '@comparethemarketau/manor-hooks';
import { isDesktop, createTrackingEvent } from '@comparethemarketau/manor-utils';

export const ManorContext = createContext();

const ManorProvider = ({ children }) => {
  const theme = useContext(ThemeContext);
  const breakpoint = useBreakpoint(true);
  const [desktop, setDesktop] = useState(null);
  const { Track, trackEvent } = useTracking({ event: 'INTERACTION_EVENT' }, { dispatch: (data) => window && window.CtMDataLayer && window.CtMDataLayer.push(data) });

  useEffect(() => {
    setDesktop(isDesktop(breakpoint));
  }, [breakpoint]);

  const trackInteraction = useCallback((action, object, type, label, value) => {
    trackEvent(createTrackingEvent(action, object, type, label, value));
  }, [trackEvent]);

  const value = useMemo(() => ({
    breakpoint, isDesktop: desktop, theme, trackInteraction,
  }), [breakpoint, desktop, theme, trackInteraction]);

  return (
    <ManorContext.Provider value={value}>
      <Track>
        {children}
      </Track>
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

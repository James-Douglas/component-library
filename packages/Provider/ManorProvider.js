import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ManorGlobalStyles } from '@comparethemarketau/manor-global';
import { ctmTheme } from '@comparethemarketau/manor-themes';

import ToastProvider from './ToastProvider';
import LayerProvider from './LayerProvider';

const ManorProvider = (props) => {
  const {
    theme, children, disableGlobalStyles,
  } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        {!disableGlobalStyles && <ManorGlobalStyles />}
        <LayerProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </LayerProvider>
      </ThemeProvider>
    </>
  );
};

ManorProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
  /**
   * Disables the injection of global styles.
   */
  disableGlobalStyles: PropTypes.bool,
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
  disableGlobalStyles: false,
  children: [],
};

export default ManorProvider;

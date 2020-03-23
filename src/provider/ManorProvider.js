import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ManorGlobalStyles } from '../components/Global/manorGlobal.component';
import CTMTheme from '../themes/ctm.theme';

import ToastContext from '../contexts/ToastContext';
import LayerContext from '../contexts/LayerContext';

/* const ToastContext = createContext(); */

const ManorProvider = (props) => {
  const {
    theme, children, disableGlobalStyles,
  } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        {!disableGlobalStyles && <ManorGlobalStyles />}
        <LayerContext>
          <ToastContext>
            {children}
          </ToastContext>
        </LayerContext>
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
  theme: CTMTheme,
  disableGlobalStyles: false,
  children: [],
};

export default ManorProvider;

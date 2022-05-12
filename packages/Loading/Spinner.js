import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { createMuiTheme, ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: ctmTheme.loading.primary,
    },
    secondary: {
      main: ctmTheme.loading.secondary,
    },
  },
});

const Spinner = ({ variant }) => (
  <MUIThemeProvider theme={MuiTheme}>
    <CircularProgress size="6.6rem" color={variant} />;
  </MUIThemeProvider>
);

Spinner.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};

export default Spinner;

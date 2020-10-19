import { createMuiTheme, fade } from '@material-ui/core';

export default (manorTheme, disableMargins = false) => createMuiTheme({
  palette: {
    primary: {
      main: manorTheme.colors.primary500,
    },
  },
  overrides: {
    MuiSwitch: {
      switchBase: {
        opacity: 1,
        color: manorTheme.colors.grey200,
      },
      colorPrimary: {
        '&$checked + $track': {
          backgroundColor: manorTheme.colors.primary200,
        },
        '&$checked&:hover': {
          backgroundColor: fade(manorTheme.colors.primary500, 0.12),
        },
        '&:not($checked)&:hover': {
          backgroundColor: fade(manorTheme.colors.grey600, 0.15),
        },
      },
    },
  },
});

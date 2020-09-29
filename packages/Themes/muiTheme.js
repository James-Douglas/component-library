import { createMuiTheme, fade } from '@material-ui/core';

export default (manorTheme, disableMargins = false) => createMuiTheme({
  typography: {
    fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      lineHeight: manorTheme.lineHeight.tight,
      fontSize: manorTheme.fontSize['6xl'],
      margin: disableMargins ? '0' : `0 0 ${manorTheme.spacing['24']}`,
      '@media (min-width: 1024px)': { // theme.breakpoints.md
        lineHeight: manorTheme.lineHeight.tight,
        fontSize: manorTheme.fontSize['6xl'],
      },
    },
    h2: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      lineHeight: manorTheme.lineHeight.tight,
      fontSize: manorTheme.fontSize['5xl'],
      margin: disableMargins ? '0' : `0 0 ${manorTheme.spacing['20']}`,
      '@media (min-width: 1024px)': {
        lineHeight: manorTheme.lineHeight.tight,
        fontSize: manorTheme.fontSize['5xl'],
      },
    },
    h3: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      lineHeight: manorTheme.lineHeight.tight,
      fontSize: manorTheme.fontSize['3xl'],
      margin: disableMargins ? '0' : `0 0 ${manorTheme.spacing['16']}`,
      '@media (min-width: 1024px)': {
        lineHeight: manorTheme.lineHeight.tight,
        fontSize: manorTheme.fontSize['3xl'],
      },
    },
    h4: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      lineHeight: manorTheme.lineHeight.tight,
      fontSize: manorTheme.fontSize.xl,
      margin: disableMargins ? '0' : `0 0 ${manorTheme.spacing['16']}`,
      '@media (min-width: 1024px)': {
        lineHeight: manorTheme.lineHeight.tight,
        fontSize: manorTheme.fontSize.xl,
      },
    },
    h5: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      lineHeight: manorTheme.lineHeight.normal,
      fontSize: manorTheme.fontSize.lg,
      margin: disableMargins ? '0' : `0 0 ${manorTheme.spacing['16']}`,
      '@media (min-width: 1024px)': {
        lineHeight: manorTheme.lineHeight.tight,
        fontSize: manorTheme.fontSize.lg,
      },
    },
    h6: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      lineHeight: manorTheme.lineHeight.tighter,
      fontSize: manorTheme.fontSize.base,
      fontWeight: manorTheme.fontWeight.bold,
      margin: disableMargins ? '0' : `0 0 ${manorTheme.spacing['12']}`,
      '@media (min-width: 1024px)': {
        lineHeight: manorTheme.lineHeight.tight,
        fontSize: manorTheme.fontSize.base,
      },
    },
    subtitle1: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      fontWeight: manorTheme.fontWeight.normal,
      lineHeight: manorTheme.lineHeight.snug,
      fontSize: manorTheme.fontSize.lg,
      margin: disableMargins ? '0' : `0 0 ${manorTheme.spacing[12]}`,
    },
    subtitle2: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      fontWeight: manorTheme.fontWeight.bold,
      fontSize: manorTheme.fontSize.base,
      margin: disableMargins ? '0' : `0 0 ${manorTheme.spacing[12]}`,
    },
    body1: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      lineHeight: manorTheme.lineHeight.snug,
      fontSize: manorTheme.fontSize.base,
      margin: disableMargins ? '0' : `0 0 ${manorTheme.spacing[12]}`,
      '& a': {
        textDecoration: 'underline',
        color: manorTheme.colors.primary500,
      },
    },
    body2: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      lineHeight: manorTheme.lineHeight.snug,
      margin: disableMargins ? '0' : `0 0 ${manorTheme.spacing[12]}`,
      fontSize: manorTheme.fontSize.sm,
    },
    button: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      margin: 0,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textTransform: 'none',
      fontWeight: manorTheme.fontWeight.normal,
    },
    caption: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      lineHeight: manorTheme.lineHeight.tight,
      fontSize: manorTheme.fontSize['2xs'],
      letterSpacing: '0.15rem',
      fontWeight: manorTheme.fontWeight.normal,
      textTransform: 'uppercase',
      color: manorTheme.colors.grey600,
    },
    overline: {
      fontFamily: ['SourceSansPro', 'Arial', 'sans-serif'].join(','),
      lineHeight: manorTheme.lineHeight.tight,
      fontSize: manorTheme.fontSize['2xs'],
      letterSpacing: '0.02rem',
      fontWeight: manorTheme.fontWeight.semibold,
      textTransform: 'uppercase',
      color: manorTheme.colors.placeholderText,
    },
    htmlFontSize: 10,
  },
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

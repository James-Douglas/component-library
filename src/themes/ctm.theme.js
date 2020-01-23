const colors = {
  primary: '#1C3E94', // blue
  primaryLight: '#136ED2',
  primaryAA: '#001442',
  secondaryDark: '#319639',
  secondaryDarker: '#36A93F',
  secondary: '#0DB14B', // green
  secondaryLighter: '#C3E4CF',
  secondaryLight: '#CFEFC2',
  blueDark: '#001443',
  blueLight: '#1780F3',
  blueLighter: '#7A98FF',
  link: '#164AD9',
  warning: '#F49E1E',
  prechecked: '#F0E599',
  precheckedDarker: '#C39600',
  invalid: '#EF425E',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#AAAAAA',
  greyLighter: '#F8F8F8',
  greyLighterAA: '#F3F3F3',
  greyLight: '#DDDDDD',
  greyLightAA: '#D7D7D7',
  greyDark: '#999999',
  greyDarker: '#666666',
  greyDarkest: '#333333',
  whiteLight: '#F4F9FE',
  validationBackground: '#FDE8EB',
  disabled: '#CCCCCC',
  disabledText: '#B6B2AF',
  placeholderText: '#787673',
};
const fontFamily = '"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",  sans-serif';

const fontSize = {
  '3xs': '.8rem', // 8px
  '2xs': '1rem', // 10px
  xs: '1.2rem', // 12px
  sm: '1.4rem', // 14px
  base: '1.6rem', // 16px
  lg: '1.8rem', // 18px
  xl: '2rem', // 20px
  '2xl': '2.4rem', // 24px
  '3xl': '3rem', // 30px
  '4xl': '3.4rem', // 34px
  '5xl': '4.2rem', // 42px
  '6xl': '6rem', // 60px
};

const spacing = {
  px: '0.1rem', //   1px
  0: '0',
  4: '0.4rem',
  8: '0.8rem',
  12: '1.2rem',
  16: '1.6rem', // 16px (just move the decimal place to the right one place)
  20: '2rem',
  24: '2.4rem',
  32: '3.2rem',
  36: '3.6rem',
  40: '4rem',
  44: '4.4rem',
  48: '4.8rem',
  52: '5.2rem',
  56: '5.6rem',
  60: '6rem',
  64: '6.4rem',
  68: '6.8rem',
  72: '7.2rem',
  76: '7.6rem',
  80: '8rem',
  84: '8.4rem',
  88: '8.8rem',
  92: '9.2rem',
  96: '9.6rem',
  100: '10rem',
  104: '10.4rem',
  108: '10.8rem',
  112: '11.2rem',
  116: '11.6rem',
  120: '12rem',
  124: '12.4rem',
  128: '12.8rem',
  132: '13.2rem',
  136: '13.6rem',
  140: '14rem',
  144: '14.4rem',
  148: '14.8rem',
  152: '15.2rem',
  156: '15.6rem',
  160: '16rem',
  164: '16.4rem',
  168: '16.8rem',
  172: '17.2rem',
  176: '17.6rem',
  180: '18rem',
  184: '18.4rem',
  188: '18.8rem',
  192: '19.2rem',
  196: '19.6rem',
  200: '20rem',
  204: '20.4rem',
  208: '20.8rem',
  212: '21.2rem',
  216: '21.6rem',
  220: '22rem',
  224: '22.4rem',
  228: '22.8rem',
  232: '23.2rem',
  236: '23.6rem',
  240: '24rem',
  244: '24.4rem',
  248: '24.8rem',
  252: '25.2rem',
  256: '25.6rem',
};
const borderRadius = {
  none: '0',
  sm: '0.2rem', //    2x
  default: '0.4rem', //    4px
  lg: '0.8rem', //    8px
  full: '999.9rem', // 9999px
};

const boxShadow = {
  default: 'rgba(0, 0, 0, 0.1) 0 1rem 4rem 0',
  sm: '0 0.5rem 0.5rem 0 rgba(0,0,0,.1)',
  md: '0 0.4rem 0.8rem 0 rgba(0,0,0,0.12), 0 0.2rem 0.4rem 0 rgba(0,0,0,0.08)',
  lg: '0 1.5rem 3rem 0 rgba(0,0,0,0.11), 0 0.5rem 1.5rem 0 rgba(0,0,0,0.08)',
  inner: 'inset 0 0.2rem 0.4rem 0 rgba(0,0,0,0.06)',
  outline: '0 0 0 0.3rem rgba(52,144,220,0.5)',
  none: 'none',
  progress: '0 0.2rem 0.4rem 0 #DDDBDB',
};

const fontWeight = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

const lineHeight = {
  none: '1',
  tighter: '1.2',
  tight: '1.25',
  snug: '1.4',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
};

const maxWidth = {
  xs: '32rem', //  320px
  sm: '48rem', //  480px
  md: '64rem', //  640px
  lg: '80rem', //  800px
  xl: '96rem', //  960px
  '2xl': '112rem', // 1120px
  '3xl': '128rem', // 1280px
  '4xl': '144rem', // 1440px
  '5xl': '160rem', // 1600px
  '6xl': '190rem', // 1900px
  full: '100%',
};

const minHeight = {
  0: '0',
  full: '100%',
  screen: '100vh',
};

const minWidth = {
  0: '0',
  full: '100%',
};

const opacity = {
  0: '0',
  25: '0.25',
  50: '0.5',
  75: '0.75',
  100: '1',
};

const zIndex = {
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
};

const borders = {
  invalid: `1px solid ${colors.invalid}`,
  transparent: '1px solid transparent',
  disabled: `1px solid ${colors.disabled}`,
  component: `1px solid ${colors.greyLight}`,
  hover: `1px solid ${colors.blueLight}`,
  prefill: `1px solid ${colors.precheckedDarker}`,
  dark: `1px solid ${colors.blueDark}`,
};

const ctmTheme = {
  accordion: {
    background: colors.white,
    color: 'rgba(0,0,0,0.8)',
  },
  button: {
    shadows: {
      default: boxShadow.sm,
      focused: '0 0 2px 3px rgba(0, 123, 255, .3)',
      disabled: boxShadow.no,
    },
    primary: {
      border: borders.transparent,
      background: colors.secondaryDarker,
      backgroundHover: colors.secondaryDark,
      color: colors.white,
      fill: colors.white,
      minHeight: spacing[56],
    },
    secondary: {
      background: colors.white,
      border: `1px solid ${colors.primaryAA}`,
      borderHover: `1px solid ${colors.primaryLight}`,
      borderDarkMode: borders.transparent,
      color: colors.primaryAA,
      colorHover: colors.primaryLight,
      fill: colors.primaryAA,
      fillHover: colors.primaryLight,
      minHeight: spacing[44],
    },
    tertiary: {
      background: colors.blueDark,
      backgroundDarkMode: colors.white,
      borderDarkMode: borders.dark,
      color: colors.white,
      colorHover: colors.blueLighter,
      fill: colors.white,
      fillHover: colors.blueLighter,
      fillDarkMode: colors.blueDark,
      fillDarkModeHover: colors.primaryLight,
      colorDarkMode: colors.blueDark,
      borderColorDarkMode: colors.primaryLight,
      borderRadius: borderRadius.none,
    },
    text: {
      colorHover: colors.primaryLight,
      fillHover: colors.primaryLight,
      colorDarkMode: colors.white,
      fillDarkMode: colors.white,
      colorDarkModeHover: colors.blueLighter,
      fillDarkModeHover: colors.blueLighter,
    },
    link: {
      background: 'transparent',
      color: colors.black,
      fill: colors.black,
      colorHover: colors.primaryLight,
      colorFill: colors.primaryLight,
      colorDarkMode: colors.white,
      fillDarkMode: colors.white,
      colorDarkModeHover: colors.blueLighter,
      fillDarkModeHover: colors.blueLighter,
    },
    footer: {
      colorHover: colors.black,
      colorDarkMode: colors.white,
      fillDarkMode: colors.white,
      colorDarkModeHover: colors.white,
    },
  },
  callout: {
    border: `4px solid ${colors.blueDark}`,
    background: colors.white,
    backgroundGrey: colors.greyLighter,
  },
  card: {
    background: colors.white,
    border: borders.component,
    shadow: boxShadow.progress,
  },
  checkbox: {
    color: colors.white,
    colorDisabled: colors.blueDark,
    disabledOpacity: '0.5',
    border: borders.dark,
    size: spacing[24],
    background: colors.white,
    backgroundChecked: colors.blueDark,
    backgroundDisabled: colors.greyLight,
    borderRadius: '0 0 0 1px rgba(0, 123, 255, .5)',
    contentMargin: '0 0 0 1rem',
  },
  combo: {
    list: {
      color: colors.black,
      background: colors.white,
      shadow: boxShadow.md,
      item: {
        color: colors.greyDarker,
        backgroundHover: colors.greyLighter,
        borderFocus: borders.hover,
      },
    },
    button: {
      border: borders.transparent,
      background: colors.whiteLight,
      borderFocus: borders.hover,
      backgroundHover: colors.whiteLight,
    },
  },
  dropdown: {
    color: colors.black,
    background: colors.white,
    colorDisabled: colors.disabledText,
    disabledOpacity: '0.5',
    disabledSvgOpacity: '0.3',
    prefixBackground: colors.white,
  },
  featureList: {
    color: colors.secondaryDarker,
  },
  footer: {
    background: colors.greyLighterAA,
    scrollTopBorder: `1px solid ${colors.black}`,
  },
  header: {
    background: colors.white,
    height: spacing[60],
    heightStuck: spacing[44],
    contact: {
      color: colors.greyDarkest,
      hoverColor: colors.link,
    },
  },
  input: {
    background: colors.white,
    height: spacing[44],
    color: colors.black,
    clearButton: {
      hoverColor: colors.blueLight,
      color: colors.greyLight,
      colorAutofill: colors.greyDark,
    },
  },
  label: {
    color: colors.black,
  },
  logo: {
    heightSmall: spacing[32],
    heightLarge: spacing[44],
  },
  placeholder: {
    fontStyle: 'italic',
    fontSize: fontSize.base,
    color: colors.placeholderText,
  },
  progress: {
    bar: {
      background: colors.white,
      backgroundValue: colors.greyLighterAA,
      colorValue: colors.secondaryLight,
      backgroundCss: `
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfefc2+0,c3e4cf+100 */
        background: ${colors.secondaryLight};  /* Old browsers */
        background ${`-moz-linear-gradient(left, ${colors.secondaryLight} 0%, ${colors.secondaryLighter}  100%)`}; /* FF3.6-15 */   
        background: ${`-webkit-linear-gradient(left, ${colors.secondaryLight} 0%, ${colors.secondaryLighter}  100%)`}; /* Chrome10-25,Safari5.1-6 */
        background: ${`linear-gradient(to right, ${colors.secondaryLight} 0%, ${colors.secondaryLighter}  100%)`}; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: ${`progid:DXImageTransform.Microsoft.gradient( startColorstr=${colors.secondaryLight}, endColorstr=${colors.secondaryLighter},GradientType=1 )`};  /* IE6-9 */
      `,
    },
    icon: {
      border: `2px solid ${colors.black}`,
      borderDisabled: `2px solid ${colors.greyDark}`,
      disabledColor: colors.greyDark,
      activeColor: colors.white,
      activeBackground: colors.black,
    },
    tracker: {
      background: colors.white,
      backgroundValue: colors.greyLighterAA,
      colorValue: colors.secondaryLight,
      backgroundCss: `
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfefc2+0,c3e4cf+100 */
        background: ${colors.secondaryLight};  /* Old browsers */
        background ${`-moz-linear-gradient(left, ${colors.secondaryLight} 0%, ${colors.secondaryLighter}  100%)`}; /* FF3.6-15 */   
        background: ${`-webkit-linear-gradient(left, ${colors.secondaryLight} 0%, ${colors.secondaryLighter}  100%)`}; /* Chrome10-25,Safari5.1-6 */
        background: ${`linear-gradient(to right, ${colors.secondaryLight} 0%, ${colors.secondaryLighter}  100%)`}; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: ${`progid:DXImageTransform.Microsoft.gradient( startColorstr=${colors.secondaryLight}, endColorstr=${colors.secondaryLighter},GradientType=1 )`};  /* IE6-9 */
      `,
      itemLinkColor: colors.black,
      progressStep: {
        color: colors.black,
        disabledColor: colors.greyDark,
      },
      item: {
        border: `1px solid ${colors.greyLightAA}`,
      },
    },
  },
  slider: {
    borderTop: `1px solid ${colors.white}`,
    background: colors.white,
  },
  table: {
    rowHoverBackground: colors.greyLighter,
  },
  toggle: {
    base: {
      background: colors.white,
      backgroundChecked: colors.blueDark,
      color: colors.white,
    },
  },
  tooltip: {
    iconColor: colors.grey,
    iconColorVisible: colors.primaryAA,
    background: 'rgba(51, 51, 51, 0.97)',
  },
  borders,
  colors,
  fontFamily,
  fontSize,
  spacing,
  borderRadius,
  boxShadow,
  fontWeight,
  lineHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  zIndex,
};

export default ctmTheme;

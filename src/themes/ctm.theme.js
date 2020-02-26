const colors = {
  // Per design audit ticket, check to see if new colors are used and apply
  brandMidnightBlue: '#001443',
  brandDarkBlue: '#001564',
  brandLightBlue: '#0f58ab',
  primary50: '#e7f0fb',
  primary100: '#c1d8ef',
  primary200: '#8fbce9',
  primary300: '#5a93cd',
  primary400: '#3b80c5',
  primary500: '#0b60b7',
  primary600: '#004a8e',
  primary700: '#063a6d',
  primary800: '#042649',
  primary900: '#021324',
  hero50: '#e7f3ea',
  hero300: '#57ad69',
  hero400: '#339c48',
  hero500: '#0f8927',
  hero600: '#0d7522',
  hero700: '#0b611c',
  grey50: '#fafafa',
  grey100: '#f6f6f6',
  grey200: '#eeeeee',
  grey300: '#e0e0e0',
  grey400: '#c4c4c4',
  grey500: '#9e9e9e',
  grey600: '#757575',
  grey700: '#606060',
  grey800: '#424242',
  grey900: '#25130e',
  black: '#000000',
  white: '#FFFFFF',
  inputDisabledTextOnGray: '#606060', // grey 700
  inputPlacholderText: '#757575', // grey 600
  inputDisabledTextOnWhite: '#9e9e9e', // grey 500
  inputDisabledBackground: '#eeeeee', // grey 200
  inputPrefilled: '#fbf9ec',
  inputPrefilledBorder: '#c39600',
  success50: '#daf5d5',
  success500: '#0f8927',
  success700: '#0a5b1a',
  error50: '#fae4e6',
  error300: '#ef425e',
  error500: '#d2202f',
  error700: '#a31824',
  warning50: '#f5eebc',
  warning500: '#ff901d',
  warning700: '#d66c00',

  // old colors, to be deleted when new colors are integrated
  primary: '#1C3E94', // blue
  primaryLight: '#136ED2',
  primaryAA: '#001442',
  secondaryDark: '#319639',
  secondaryDarker: '#36A93F',
  secondary: '#0DB14B', // green
  secondaryLighter: '#C3E4CF',
  secondaryLight: '#CFEFC2',

  blueLight: '#1780F3',
  blueLighter: '#7A98FF',
  blueLightest: '#E7F0FB',
  link: '#164AD9',
  warning: '#F49E1E',
  prechecked: '#FCFAED',
  precheckedDarker: '#C39600',
  invalid: '#EF425E',

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
};

const fontFamily = '"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",  sans-serif';

const fontSize = {
  '2xs': '1rem', // 10px
  xs: '1.2rem', // 12px
  sm: '1.4rem', // 14px
  base: '1.6rem', // 16px
  lg: '1.8rem', // 18px
  xl: '2rem', // 20px
  '2xl': '2.2rem', // 22px
  '3xl': '2.4rem', // 24px
  '4xl': '2.8rem', // 28px
  '5xl': '3.2rem', // 32px
  '6xl': '4.2rem', // 42px
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
  280: '28rem',
};
const borderRadius = {
  none: '0',
  sm: '0.2rem', //    2x
  default: '0.4rem', //    4px
  lg: '0.8rem', //    8px
  full: '999.9rem', // 9999px
};

const elevation = {
  lvl1: '0px 2px 4px rgba(208,206,206,0.5)',
  lvl2: '0px 5px 8px rgba(0,0,0,0.05)',
  lvl3: '0px 3px 8px rgba(0,0,0,0.1)',
  lvl4: '0px 3px 8px rgba(0,0,0,0.2)',
  lvl5: '0px 5px 8px rgba(0,0,0,0.2)',
  lvl6: '0px 8px 8px rgba(0,0,0,0.2)',
  none: 'none',
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
  box: '0px 3px 8px rgba(0, 0, 0, 0.1)',
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
  entry: '-1',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
};

const transition = {
  default: 'all 200ms ease-out',
};

const borders = {
  invalid: `1px solid ${colors.invalid}`,
  transparent: '1px solid transparent',
  disabled: `1px solid ${colors.disabled}`,
  component: `1px solid ${colors.greyLight}`,
  hover: `1px solid ${colors.primary300}`,
  prefill: `1px solid ${colors.precheckedDarker}`,
  dark: `1px solid ${colors.brandMidnightBlue}`,
};

const ctmTheme = {
  accordion: {
    background: colors.white,
    color: 'rgba(0,0,0,0.8)',
  },
  button: {
    borderRadius: borderRadius.default,
    fontWeight: fontWeight.bold,
    disabledBackgound: colors.grey500,
    disabledText: colors.white,
    shadows: {
      default: elevation.lvl4,
      hover: elevation.lvl6,
      focused: elevation.lvl3,
      disabled: elevation.none,
    },
    hero: {
      bg: colors.hero500,
      bgHover: colors.hero600,
      color: colors.white,
      fill: colors.white,
      bgInverted: colors.white,
      bginvertedHover: colors.hero50,
      colorInverted: colors.hero500,
      fillInverted: colors.hero500,
    },
    primary: {
      bg: colors.primary500,
      bgHover: colors.primary600,
      color: colors.white,
      fill: colors.white,
      bgInverted: colors.white,
      bgInvertedHover: colors.primary50,
      colorInverted: colors.primary500,
      fillInverted: colors.primary500,
    },
    secondary: {
      bg: colors.white,
      bgHover: colors.primary50,
      color: colors.primary500,
      fill: colors.white,
      border: `1px solid ${colors.primary500}`,
      bgInverted: colors.primary500,
      bgInvertedHover: colors.primary400,
      borderInverted: `1px solid ${colors.white}`,
      colorInverted: colors.white,
      fillInverted: colors.white,
    },
    tertiary: {
      bg: 'transparent',
      bgHover: colors.primary50,
      color: colors.primary500,
      fill: colors.primary500,
      colorhover: colors.primary700,
    },
  },
  callout: {
    border: `4px solid ${colors.brandMidnightBlue}`,
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
    colorDisabled: colors.brandMidnightBlue,
    disabledOpacity: '0.5',
    border: borders.dark,
    size: spacing[24],
    background: colors.white,
    backgroundChecked: colors.brandMidnightBlue,
    backgroundDisabled: colors.greyLight,
    borderRadius: '0 0 0 1px rgba(0, 123, 255, .5)',
    contentMargin: '0 0 0 1rem',
  },
  container: {
    maxWidth: '120rem',
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
  datepicker: {
    navigationButtonColor: colors.primary300,
    datepickerDayColor: colors.white,
    datepickerDayBackground: colors.primary400,
    datepickerSelectedDayRangeColor: colors.black,
    datepickerSelectedDayRangeBackground: colors.primary50,
    datepickerSelectedDayEdgeBackground: colors.brandLightBlue,
    datepickerSelectedDayEdgeBackgroundHover: colors.primary400,
  },
  dropdown: {
    height: spacing[44],
    color: colors.black,
    background: colors.white,
    colorDisabled: colors.disabledText,
    disabledOpacity: '0.5',
    disabledSvgOpacity: '0.3',
    prefixBackground: colors.white,
    shadow: boxShadow.box,
  },
  featureList: {
    color: colors.secondaryDarker,
  },
  footer: {
    background: colors.white,
    transparent: 'transparent',
  },
  header: {
    background: colors.white,
    height: spacing[60],
    heightStuck: spacing[44],
    contact: {
      color: colors.primary500,
      hoverColor: colors.primary600,
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
    fontSize: fontSize.base,
    color: colors.grey600,
  },
  progress: {
    bar: {
      background: colors.white,
      backgroundValue: colors.grey300,
      progressBackground: colors.primary400,
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
      backgroundChecked: colors.brandMidnightBlue,
      color: colors.white,
    },
  },
  tooltip: {
    iconColor: colors.primary500,
    iconColorVisible: colors.primary600,
    background: 'rgba(51, 51, 51, 0.97)',
  },
  drawer: {
    borderTop: `1px solid ${colors.white}`,
    background: colors.white,
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
  transition,
  elevation,
};

export default ctmTheme;

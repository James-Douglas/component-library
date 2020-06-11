import { create } from '@storybook/theming/create';
import ctmTheme from '../packages/Themes/ctm.theme';
import logo from '../images/ctm-logo-inline.svg';

export default create({
  base: 'light',

  // colorSecondary: ctmTheme.colors.primaryLight,
  //
  appBg: ctmTheme.colors.whiteLight,
  appContentBg: ctmTheme.colors.white,
  //
  textColor: ctmTheme.colors.primaryAA,
  textInverseColor: ctmTheme.colors.white,
  //
  // Toolbar default and active colors
  barTextColor: ctmTheme.colors.greyDarker,
  barSelectedColor: ctmTheme.colors.blueLight,
  barBg: ctmTheme.colors.whiteLight,

  brandTitle: 'Manor - CTM',
  brandImage: logo,
});

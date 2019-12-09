import ctmTheme from '../themes/ctm.theme';

// for now, this just returns the ctm theme.
// an example of how we would add a different theme for whitelabeling purposes:
// const themeName = process.env.MANOR_THEME || 'ctm';
// if (themeName === 'choosi') {
//   return choosiTheme;
// }

const getTheme = () => ctmTheme;

export default getTheme;

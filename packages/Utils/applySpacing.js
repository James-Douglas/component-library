import { ctmTheme } from '@comparethemarketau/manor-themes';

const spacingPropTypes = (props, propName, componentName) => {
  // eslint-disable-next-line react/destructuring-assignment
  const values = props[propName];
  const spacing = Object.keys(ctmTheme.spacing);

  if (values === undefined || values.length === 0) return null;

  if (values.length > 4) {
    throw new Error(
      `Invalid prop value (${propName}=[${props[propName]}]) supplied to ${componentName}. Max array length is 4, representing each of the css values ${propName} can receive.`,
    );
  }

  values.forEach((el) => {
    if (!spacing.includes(el)) {
      throw new Error(
        `Invalid prop value (${propName}=[${props[propName]}]) supplied to ${componentName}. Each array item must be a multiple of 4, which is a key for the internal manor spacing.`,
      );
    }
  });

  return null;
};

const applySpacing = (theme, spacingType, spacingValue) => {
  const validCSS = spacingValue.map((v) => (theme.spacing[v] !== undefined ? theme.spacing[v] : '0'));
  const parsedResult = `${spacingType}: ${validCSS.join(' ')}`;
  return parsedResult;
};

export { spacingPropTypes, applySpacing };

import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { muiTheme } from '@comparethemarketau/manor-themes';
import { Typography as MUITypography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { withTheme } from 'styled-components';
import Box from '@material-ui/core/Box';

const TypographyInner = ({
  // eslint-disable-next-line react/prop-types
  theme, variant, component, children, style,
}) => {
  const renderChildren = () => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    style ? <Box {...style}>{children}</Box> : children
  );
  return (
    <ThemeProvider theme={muiTheme(theme)}>
      <MUITypography variant={variant} component={component}>
        {renderChildren()}
      </MUITypography>
    </ThemeProvider>
  );
};

const ThemedMuiTypography = withTheme(TypographyInner);

const Typography = ({
  variant,
  component,
  children,
  align,
  color,
  display,
  gutterBottom,
  noWrap,
  paragraph,
  style,
  theme,
}) => (
  <ManorProvider theme={theme}>
    <ThemedMuiTypography
      variant={variant}
      align={align}
      color={color}
      display={display}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      component={component}
      style={style}
    >
      {children}
    </ThemedMuiTypography>
  </ManorProvider>
);

Typography.propTypes = {
  /**
   * The typography style to render
   */
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit',
  ]).isRequired,
  /**
   * The component used for the root node
   */
  component: PropTypes.string,
  /**
   * Set the text-align on the component
   */
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  /**
   * The color of the component
   */
  color: PropTypes.oneOf(['initial', 'inherit']),
  /**
   * Controls the display type
   */
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  /**
   * If true, the text will have a bottom margin
   */
  gutterBottom: PropTypes.bool,
  /**
   * If true the text will not wrap, but instead will truncate with a text
   * overflow ellipsis. Note that text overflow can only happen with block
   * or inline-block level elements (the element needs to have a width in order
   * to overflow)
   */
  noWrap: PropTypes.bool,
  /**
   * If true, the text will have a bottom margin
   */
  paragraph: PropTypes.bool,
  /**
   * Additional styles - if using this a div will be rendered within the typography element,
   *  which may cause errors (e.g. you cannot have a div within a p tag). If so, use the `component` prop
   *  to change the HTML element being rendered (e.g. `component="div"`).
   */
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Typography.defaultProps = {
  component: null,
  align: 'inherit',
  color: 'initial',
  display: 'initial',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  children: [],
  style: null,
  theme: undefined,
};

export default Typography;

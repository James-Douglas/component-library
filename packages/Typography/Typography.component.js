import React from 'react';
import PropTypes from 'prop-types';
import { StyledTypography } from './Typography.styles';

const variantTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  caption: 'caption',
  helpText: 'helpText',
  overline: 'span',
  srOnly: 'span',
};

const Typography = ({
  variant,
  component,
  children,
  align,
  color,
  display,
  noWrap,
  style,
  className,
  helpTextFontSize,
  ...props
}) => {
  const componentToRender = component || variantTags[variant];
  return (
    <StyledTypography
      component={componentToRender}
      variant={variant}
      align={align}
      color={color}
      display={display}
      noWrap={noWrap}
      style={style}
      className={className}
      helpTextFontSize={helpTextFontSize}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

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
    'helpText',
    'overline',
    'srOnly',
  ]),
  /**
   * The component used for the root node (e.g. p, div, span...)
   */
  component: PropTypes.string,
  /**
   * Set the text-align on the component
   */
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  /**
   * The color of the component
   */
  color: PropTypes.string,
  /**
   * Controls the display type
   */
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  /**
   * If true the text will not wrap, but instead will truncate with a text
   * overflow ellipsis. Note that text overflow can only happen with block
   * or inline-block level elements (the element needs to have a width in order
   * to overflow)
   */
  noWrap: PropTypes.bool,
  /**
   * Additional styles - if using this a div will be rendered within the typography element,
   *  which may cause errors (e.g. you cannot have a div within a p tag). If so, use the `component` prop
   *  to change the HTML element being rendered (e.g. `component="div"`).
   */
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Classes to be applied to the rendered element
   */
  className: PropTypes.string,
  /**
   * Set this value to override helpText default font size (2xs). Note that
   * it will only take effect when variant set to 'helpText'.
   *
   * The array list must match the keys in theme.fontSize
   */
  helpTextFontSize: PropTypes.oneOf([
    '',
    '2xs',
    'xs',
    'sm',
    'base',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
  ]),
};

Typography.defaultProps = {
  variant: 'body1',
  component: null,
  align: 'left',
  color: 'inherit',
  display: null,
  noWrap: false,
  children: [],
  style: null,
  className: '',
  helpTextFontSize: '',
};

export default Typography;

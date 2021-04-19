import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { muiTheme } from '@comparethemarketau/manor-themes';
import { Link as MUILink } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { withTheme } from 'styled-components';

const ManorMuiLink = ({
  // eslint-disable-next-line react/prop-types
  href, onClick, target, rel, title, role, underline, theme, children, style,
}) => (
  <ThemeProvider theme={muiTheme(theme)}>
    <MUILink
      href={href}
      target={target}
      rel={rel}
      title={title}
      role={role}
      onClick={onClick}
      underline={underline}
      style={{
        // eslint-disable-next-line react/prop-types
        fontFamily: theme.fontFamily,
        // eslint-disable-next-line react/prop-types
        color: theme.colors.primary500,
        ...style,
      }}
    >
      {children}
    </MUILink>
  </ThemeProvider>
);

const ThemedMuiLink = withTheme(ManorMuiLink);

const Link = ({
  trackingLabel, href, handleClick, target, rel, title, role, underline, children, style,
}) => {
  const { trackInteraction } = useContext(ManorContext);

  const clickHandler = (e) => {
    if (handleClick) handleClick(e);
    trackInteraction('Click', 'Link', 'Link', trackingLabel, href);
  };

  return (
    <ThemedMuiLink
      href={href}
      target={target}
      rel={rel}
      title={title}
      onClick={clickHandler}
      role={role}
      underline={underline}
      style={style}
    >
      {children}
    </ThemedMuiLink>
  );
};

Link.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   * href for the link
   */
  href: PropTypes.string,
  /**
   * onClick function for the link
   */
  handleClick: PropTypes.func,
  /**
   * target attribute for the rendered <a> element
   */
  target: PropTypes.string,
  /**
   * rel attribute for the rendered <a> element
   */
  rel: PropTypes.string,
  /**
   * title attribute for the rendered <a> element
   */
  title: PropTypes.string,
  /**
   * role attribute for the rendered <a> element
   */
  role: PropTypes.string,
  /**
   * Controls when the link should have an underline.
   */
  underline: PropTypes.oneOf(['none', 'hover', 'always']),
  /**
   * link text
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Styles to be applied the underlying MUI link
   */
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any,
};

Link.defaultProps = {
  href: '',
  handleClick: null,
  target: null,
  rel: null,
  title: null,
  role: null,
  underline: 'always',
  children: '',
  style: null,
};

export default Link;

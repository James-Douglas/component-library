import React from 'react';
import PropTypes from 'prop-types';
import { muiTheme } from '@comparethemarketau/manor-themes';
import { Link as MUILink } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { withTheme } from 'styled-components';

const ManorMuiLink = ({
  // eslint-disable-next-line react/prop-types
  href, target, rel, title, theme, children,
}) => (
  <ThemeProvider theme={muiTheme(theme)}>
    <MUILink
      href={href}
      target={target}
      rel={rel}
      title={title}
      component="a"
      underline="always"
      style={{
        // eslint-disable-next-line react/prop-types
        fontFamily: theme.fontFamily,
        // eslint-disable-next-line react/prop-types
        color: theme.colors.primary500,
      }}
    >
      {children}
    </MUILink>
  </ThemeProvider>
);

const ThemedMuiLink = withTheme(ManorMuiLink);

const Link = ({
  href, target, rel, title, children,
}) => (
  <ThemedMuiLink
    href={href}
    target={target}
    rel={rel}
    title={title}
  >
    {children}
  </ThemedMuiLink>
);

Link.propTypes = {
  /**
   * href for the link
   */
  href: PropTypes.string,
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
   * link text
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Link.defaultProps = {
  href: '',
  target: null,
  rel: null,
  title: null,
  children: '',
};

export default Link;

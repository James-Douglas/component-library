/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from 'styled-components';
import { MenuItem as MUIMenuItem } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent !important',
    fontWeight: 600,
  },
  item: (theme) => ({
    fontFamily: theme.fontFamily,
    cursor: 'pointer',
    fontSize: theme.fontSize ? theme.fontSize.base : '1.6rem',
  }),
});

const TextDropdownItemInner = ({
  theme,
  button,
  dense,
  disableGutters,
  value,
  role,
  disabled,
  selected,
  classes,
  className,
  ListItemClasses,
  ...props
}) => {
  const styles = useStyles(theme);
  return (
    <MUIMenuItem
      {...props}
      button={button}
      dense={dense}
      disableGutters={disableGutters}
      value={value}
      role={role}
      disabled={disabled}
      selected={selected}
      classes={{
        ...(classes || {}),
        root: styles.item,
      }}
      className={className}
      ListItemClasses={ListItemClasses}
    />
  );
};

const ThemedMUIDropdown = withTheme(TextDropdownItemInner);

const TextDropdownItem = ({
  button,
  dense,
  disableGutters,
  value,
  role,
  disabled,
  selected,
  classes,
  className,
  ListItemClasses,
  ...props
}) => {
  const styles = useStyles();
  return (
    <ThemedMUIDropdown
      {...props}
      button={button}
      dense={dense}
      disableGutters={disableGutters}
      value={value}
      role={role}
      disabled={disabled}
      selected={selected}
      classes={{
        ...(classes || {}),
        selected: styles.selected,
      }}
      className={className}
      ListItemClasses={ListItemClasses}
    />
  );
};
TextDropdownItem.propTypes = {
  /**
   * Treat as a button
   */
  button: PropTypes.bool,
  /**
   * The value of this menu item
   */
  value: PropTypes.string,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * Additional className
   */
  className: PropTypes.string,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   * @default false
   */
  dense: PropTypes.bool,
  /**
   * Set this item to disabled
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes.bool,
  /**
   * `classes` prop applied to the [`ListItem`](/api/list-item/) element.
   */
  ListItemClasses: PropTypes.object,
  /**
   * @ignore
   */
  role: PropTypes.string,
  /**
   * Treat this item as selected
   */
  selected: PropTypes.bool,
};

TextDropdownItem.defaultProps = {
  button: false,
  dense: undefined,
  disableGutters: false,
  value: '',
  role: '',
  disabled: false,
  selected: false,
  classes: {},
  className: '',
  ListItemClasses: undefined,
};

export default TextDropdownItem;

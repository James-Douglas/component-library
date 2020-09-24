/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from '@comparethemarketau/manor-themes';
import { Chip as MUIChip } from '@material-ui/core';

const PillInner = ({
  theme,
  variant,
  icon,
  style,
  size,
  clickable,
  color,
  component,
  deleteIcon,
  disabled,
  handleClick,
  handleDelete,
  label,
  className,
  classes,
  ...props
}) => (
  <ThemeProvider theme={muiTheme(theme)}>
    <MUIChip
      {...props}
      label={label}
      variant={variant}
      size={size}
      icon={icon}
      onClick={handleClick}
      onDelete={handleDelete || handleClick}
      deleteIcon={deleteIcon}
      color={color}
      disabled={disabled}
      component={component}
      clickable={clickable}
      classes={classes}
      className={className}
    />
  </ThemeProvider>
);

const ThemedMUIChip = withTheme(PillInner);

const Pill = ({
  variant,
  icon,
  style,
  size,
  clickable,
  color,
  component,
  deleteIcon,
  disabled,
  handleClick,
  handleDelete,
  label,
  className,
  classes,
  ...props
}) => (
  <ThemedMUIChip
    {...props}
    label={label}
    variant={variant}
    icon={icon}
    size={size}
    handleClick={handleClick}
    handleDelete={handleDelete}
    color={color}
    disabled={disabled}
    deleteIcon={deleteIcon}
    component={component}
    clickable={clickable}
    classes={classes}
    className={className}
  />
);

Pill.propTypes = {
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['default', 'outlined']),
  /**
   * Override or extend the styles applied to the component.
   */
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  /**
   * Additional css classname
   */
  className: PropTypes.string,
  /**
   * Additional css classnames for MUI root elements
   */
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object,
  /**
   * If true, the chip will appear clickable,
   */
  clickable: PropTypes.bool,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Override the default delete icon element. Shown only if onDelete is set.
   */
  deleteIcon: PropTypes.element,
  /**
   * If true, the chip should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * Icon element.
   */
  icon: PropTypes.element,
  /**
   * The content of the label.
   */
  label: PropTypes.node,
  /**
   * Callback function fired when pill is clicked
   */
  handleClick: PropTypes.func,
  /**
   * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
   */
  handleDelete: PropTypes.func,
  /**
   * The size of the chip.
   */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

Pill.defaultProps = {
  variant: 'outlined',
  style: undefined,
  clickable: true,
  color: 'default',
  component: undefined,
  deleteIcon: undefined,
  disabled: false,
  icon: undefined,
  label: '',
  handleClick: undefined,
  handleDelete: undefined,
  size: 'small',
  className: '',
  classes: undefined,
};

export default Pill;

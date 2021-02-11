/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-children-prop */
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from '@comparethemarketau/manor-themes';
import { Select as MUISelect } from '@material-ui/core';
import { useId } from '@comparethemarketau/manor-hooks';
import { Label } from '@comparethemarketau/manor-label';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { FieldValidation } from '@comparethemarketau/manor-field-validation';
import TextDropdownIcon from './TextDropdownIcon.component';

const useStyles = makeStyles({
  root: (theme) => ({
    color: theme.colors.primary500,
    background: 'transparent !important',
    fontSize: theme.fontSize.base,
    fontFamily: theme.fontFamily,
  }),
});

const MenuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  getContentAnchorEl: null,
};

const TextDropdownInner = ({
  theme,
  id,
  variant,
  value,
  label,
  labelProps,
  tooltip,
  open,
  tabIndex,
  validation,
  validationProps,
  renderValue,
  defaultValue,
  displayEmpty,
  autoWidth,
  handleFocus,
  handleBlur,
  handleOpen,
  handleChange,
  handleClick,
  handleClose,
  children,
  Input,
  IconComponent,
  classes,
  className,
  ...props
}) => {
  const selectId = useId(id);
  const styles = useStyles(theme);
  const onHandleChange = useCallback(
    (event, child) => {
      handleChange(event, child.props.value, child);
    },
    [handleChange],
  );
  useEffect(() => {
    console.warn('WARNING: the manor TextDropdown component will be deprecated soon. please use the manor Dropdown component with variant="text" moving forward.');
  }, []);
  return (
    <ThemeProvider theme={muiTheme(theme)}>
      <Label {...labelProps} text={label} tooltip={tooltip} />
      <MUISelect
        data-manor-element="text dropdown"
        {...props}
        id={selectId}
        variant={variant}
        value={value}
        open={open}
        tabIndex={tabIndex}
        renderValue={renderValue}
        defaultValue={defaultValue}
        displayEmpty={displayEmpty}
        autoWidth={autoWidth}
        onOpen={handleOpen}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onHandleChange}
        onClick={handleClick}
        onClose={handleClose}
        children={children}
        disableUnderline
        MenuProps={MenuProps}
        classes={{
          ...(classes || {}),
          root: styles.root,
        }}
        IconComponent={IconComponent}
        className={className}
      />
      <FieldValidation
        {...validationProps}
        message={validation && validation.message}
      />
    </ThemeProvider>
  );
};

const ThemedMUIDropdown = withTheme(TextDropdownInner);

const TextDropdown = ({
  theme,
  id,
  variant,
  value,
  label,
  labelProps,
  tabIndex,
  tooltip,
  open,
  validation,
  validationProps,
  renderValue,
  defaultValue,
  displayEmpty,
  autoWidth,
  handleFocus,
  handleBlur,
  handleOpen,
  handleChange,
  handleClick,
  handleClose,
  children,
  Input,
  IconComponent,
  classes,
  className,
  ...props
}) => (
  <ThemedMUIDropdown
    {...props}
    id={id}
    variant={variant}
    value={value}
    label={label}
    labelProps={labelProps}
    tooltip={tooltip}
    tabIndex={tabIndex}
    open={open}
    validation={validation}
    validationProps={validationProps}
    renderValue={renderValue}
    defaultValue={defaultValue}
    displayEmpty={displayEmpty}
    autoWidth={autoWidth}
    handleOpen={handleOpen}
    handleBlur={handleBlur}
    handleFocus={handleFocus}
    handleChange={handleChange}
    handleClick={handleClick}
    handleClose={handleClose}
    children={children}
    Input={Input}
    IconComponent={IconComponent}
    classes={classes}
    className={className}
  />
);

TextDropdown.propTypes = {
  /**
   * The id of the component
   */
  id: PropTypes.string,
  /**
   * Label for this dropdown
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Additional props to pass to the label component
   */
  labelProps: PropTypes.object,
  /**
   * Validation object
   */
  validation: PropTypes.shape({
    invalid: PropTypes.bool,
    message: PropTypes.string,
  }),
  /**
   * Additional props to pass to the validation component
   */
  validationProps: PropTypes.object,
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: PropTypes.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * The CSS class name of the select element.
   */
  className: PropTypes.string,
  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the select will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: PropTypes.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes.elementType,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: PropTypes.string,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the component is blurred
   */
  handleBlur: PropTypes.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  handleChange: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  handleClose: PropTypes.func,
  /**
   * Callback fired when the component is focused
   */
  handleFocus: PropTypes.func,
  /**
   * Callback fired when the component is clicked
   */
  handleClick: PropTypes.func,
  /**
   * Callback fired when the component is opened
   */
  handleOpen: PropTypes.func,
  /**
   * Control `select` open state.
   */
  open: PropTypes.bool,
  /**
   * Sets the dropdown as read only
   */
  readOnly: PropTypes.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: PropTypes.func,
  /**
   * The input value.
   */
  value: PropTypes.any,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  /**
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

TextDropdown.defaultProps = {
  id: undefined,
  variant: 'standard',
  name: '',
  value: '',
  readOnly: false,
  tooltip: undefined,
  tabIndex: undefined,
  label: '',
  labelProps: {},
  labelId: undefined,
  validation: undefined,
  validationProps: {},
  open: undefined,
  disabled: false,
  renderValue: undefined,
  defaultValue: '',
  displayEmpty: false,
  autoWidth: false,
  handleOpen: () => {},
  handleBlur: () => {},
  handleFocus: () => {},
  handleChange: () => {},
  handleClick: () => {},
  handleClose: () => {},
  children: undefined,
  IconComponent: TextDropdownIcon,
  classes: {},
  className: '',
};

export default TextDropdown;

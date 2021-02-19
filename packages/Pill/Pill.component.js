/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from '@comparethemarketau/manor-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/pro-regular-svg-icons/faPlus';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useId } from '@comparethemarketau/manor-hooks';
import { ManorStyledPillToggle, ManorStyledPill, StyledLabel } from './Pill.styles';

const PillInner = ({
  theme,
  selected,
  icon,
  style,
  size,
  component,
  deleteIcon,
  disabled,
  handleClick,
  label,
  className,
  classes,
  ...props
}) => (
  <ThemeProvider theme={muiTheme(theme)}>
    <ManorStyledPill
      {...props}
      label={label}
      selected={selected}
      size={size}
      icon={icon}
      onClick={handleClick}
      onDelete={handleClick}
      deleteIcon={deleteIcon}
      disabled={disabled}
      component={component}
      clickable
      classes={classes}
      className={className}
    />
  </ThemeProvider>
);

const ThemedMUIChip = withTheme(PillInner);

const Pill = ({
  id: propsId,
  selected,
  icon,
  style,
  size,
  component,
  disabled,
  handleClick,
  label,
  className,
  classes,
  ...props
}) => {
  const id = useId(propsId);
  const [isSelected, setIsSelected] = useState(selected);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const clickHandler = () => {
    setIsSelected(!isSelected);
    handleClick && handleClick(!isSelected);
  };

  return (
    <ManorStyledPillToggle id={id}>
      <ThemedMUIChip
        {...props}
        label={(
          <StyledLabel
            variant={size === 'medium' ? 'body1' : 'body2'}
            noMargins
          >
            {label}
          </StyledLabel>
        )}
        selected={isSelected}
        icon={icon}
        size={size}
        handleClick={clickHandler}
        disabled={disabled}
        deleteIcon={<FontAwesomeIcon icon={isSelected ? faCheckCircle : faPlus} />}
        component={component}
        classes={classes}
        className={className}
      />
    </ManorStyledPillToggle>
  );
};

Pill.propTypes = {
  /**
   * Unique identifier for the dropdown item
   */
  id: PropTypes.string,
  /**
   * Defines whether the pill is currently selected
   */
  selected: PropTypes.bool,
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
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
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
   * The size of the chip.
   */
  size: PropTypes.oneOf(['medium', 'small']),
};

Pill.defaultProps = {
  id: null,
  selected: false,
  style: undefined,
  component: undefined,
  disabled: false,
  icon: undefined,
  label: '',
  handleClick: undefined,
  size: 'small',
  className: '',
  classes: undefined,
};

export default Pill;

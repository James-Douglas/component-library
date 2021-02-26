import React from 'react';
import PropTypes from 'prop-types';
import { muiTheme } from '@comparethemarketau/manor-themes';
import { FieldValidation } from '@comparethemarketau/manor-field-validation';
import { Tooltip, tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { Typography } from '@comparethemarketau/manor-typography';

import { withTheme } from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import { Switch as MUISwitch, FormGroup as MUIFormGroup, FormControlLabel as MUIFormControlLabel } from '@material-ui/core';
import StyledMargin from './Switch.styles';

const Switch = ({
  theme, name, id, checked, className, label, tooltip, labelVariant, labelPlacement, disabled, value, onChange, required, validationMessage,
}) => {
  const labelTypography = <Typography variant={labelVariant} component="div">{label} {tooltip && <Tooltip title={tooltip.title} body={tooltip.body} />}</Typography>;

  return (
    <ThemeProvider theme={muiTheme(theme)}>
      <StyledMargin className={className}>
        <MUIFormGroup row>
          <MUIFormControlLabel control={<MUISwitch color="primary" name={name} id={id} checked={checked} disabled={disabled} value={value} onChange={onChange} required={required} />} label={labelTypography} labelPlacement={labelPlacement} />
        </MUIFormGroup>
      </StyledMargin>
      <FieldValidation message={validationMessage} />
    </ThemeProvider>
  );
};

Switch.propTypes = {
  /**
   * The name attribute for the switch
   */
  name: PropTypes.string,
  /**
   * Unique identifier for the Input
   */
  id: PropTypes.string,
  /**
   * If true, the component is checked.
   */
  checked: PropTypes.bool,
  /**
   * Classes to be applied to the Switch component
   */
  className: PropTypes.string,
  /**
   * The text to be used in an enclosing label element.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * The type of label to render
   */
  labelVariant: PropTypes.oneOf([
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
  ]),
  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(['bottom', 'end', 'start', 'top']),
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * If true, the switch will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The value of the component. The DOM API casts this to a string. The browser uses "on" as the default value.
   */
  value: PropTypes.string,
  /**
   * Callback fired when the state is changed.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * If true, the input element will be required.
   */
  required: PropTypes.bool,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Switch.defaultProps = {
  name: undefined,
  id: '',
  checked: undefined,
  className: '',
  label: '',
  labelVariant: 'body1',
  labelPlacement: 'end',
  tooltip: undefined,
  disabled: false,
  value: undefined,
  required: false,
  validationMessage: '',
  theme: undefined,
};

export default withTheme(Switch);

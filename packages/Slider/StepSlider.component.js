import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@comparethemarketau/manor-typography';
import { Label } from '@comparethemarketau/manor-label';
import { useId } from '@comparethemarketau/manor-hooks';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { ManorStyledSlider, StyledNotch } from './StepSlider.styles';

/**
 * We pass the Material slider a copy of the marks array, the objects
 * within have the following structure
 * {
 *   label: either a Typography component (for end labels) or a StyledNotch
 *   value: the value (from)
 *   actualLabel: The original label passed in (still used by the value label display (the "blue balloon"))
 *   defaultIndicator: (optional) displays a styled notch to indicate the default value of the slider
 * }
 */
export const formatMarks = (marks, currentValue) => marks.map((mark, index) => {
  const { label, defaultIndicator, value } = mark;
  const newMark = {};
  if (index === 0 || index === marks.length - 1) {
    newMark.label = (<Typography variant="body1">{label}</Typography>);
  } else {
    newMark.label = (<StyledNotch defaultIndicator={defaultIndicator} />);
  }
  newMark.value = value;
  newMark.actualLabel = label;
  if (value === currentValue) {
    // hide the mark for the currently selected value
    newMark.label = '';
  }
  return newMark;
});

const StepSlider = ({
  name,
  id: propsId,
  value,
  marks,
  label,
  ariaValueText,
  disabled,
  onChange,
  onChangeCommitted,
  tooltip,
}) => {
  const id = useId(propsId);
  const marksForMui = formatMarks(marks, value);
  const max = marksForMui[marksForMui.length - 1].value;
  const last = marksForMui.find((x) => x.value === value).value === max;
  const first = value === marksForMui[0].value;
  const labelWrapId = `slider-label-${id}`;

  const valueLabelFormat = (x) => {
    const mark = marksForMui.find((m) => m.value === x);
    return <Typography variant="body2">{mark ? mark.actualLabel : ''}</Typography>;
  };

  const handleChange = (e, newValue) => {
    if (onChange) {
      const mark = marksForMui.find((m) => m.value === newValue);
      if (mark) {
        onChange(e, mark.value);
      }
    }
  };

  const handleChangeCommitted = (e, newValue) => {
    if (onChangeCommitted) {
      const mark = marksForMui.find((m) => m.value === newValue);
      if (mark) {
        onChangeCommitted(e, mark.value);
      }
    }
  };

  return (
    <>
      <div id={labelWrapId}>
        <Label htmlFor={id} text={label} tooltip={tooltip} />
      </div>
      <ManorStyledSlider
        name={name}
        id={id}
        value={value}
        aria-label={label}
        aria-valuetext={ariaValueText}
        aria-labelledby={labelWrapId}
        disabled={disabled}
        marks={marksForMui}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        valueLabelDisplay="on"
        valueLabelFormat={valueLabelFormat}
        step={null}
        min={0}
        max={max}
        first={first}
        last={last}
      />
    </>
  );
};

StepSlider.propTypes = {
  /**
   * Name attribute of the hidden input element.
   */
  name: PropTypes.string.isRequired,
  /**
   * Unique identifier for the Slider
   */
  id: PropTypes.string,
  /**
   * The value of the slider. For ranged sliders, provide an array with two values.
   */
  value: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * It should contain objects with value and label keys. Minimum of 3 marks required.
   */
  marks: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    }),
  ).isRequired,
  /**
   * The label of the slider.
   */
  label: PropTypes.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  ariaValueText: PropTypes.string,
  /**
   * If true, the slider will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Callback function that is fired when the slider's value changed.
   * Signature: function(event: object, value: number | number[])
   */
  onChange: PropTypes.func,
  /**
   * Callback function that is fired when the mouseup is triggered.
   * Signature: function(event: object, value: number | number[])
   */
  onChangeCommitted: PropTypes.func,
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
};

StepSlider.defaultProps = {
  id: null,
  label: '',
  ariaValueText: '',
  disabled: false,
  onChange: () => {},
  onChangeCommitted: () => {},
  tooltip: {},
};

export default StepSlider;

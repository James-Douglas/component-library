import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { Typography } from '@comparethemarketau/manor-typography';
import { Label } from '@comparethemarketau/manor-label';
import { useId } from '@comparethemarketau/manor-hooks';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import {
  ManorStyledSliderRtl, ManorStyledSlider, StyledSliderLabels, StyledWrapper,
} from './StepSlider.styles';

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
export const formatMarks = (marks) => marks.map((mark, index) => {
  const { label, defaultIndicator, value } = mark;
  const newMark = {};
  newMark.value = value;
  newMark.actualLabel = label;
  if (defaultIndicator) {
    newMark.label = '';
  }
  return newMark;
});

const StepSlider = ({
  trackingLabel,
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
  sortOrderAscending,
}) => {
  const { trackInteraction } = useContext(ManorContext);
  const id = useId(propsId);
  const marksForMui = formatMarks(marks);
  const max = marksForMui[marksForMui.length - 1].value;
  const last = marksForMui.find((x) => x.value === value).value === max;
  const first = value === marksForMui[0].value;
  const labelWrapId = `slider-label-${id}`;

  const valueLabelFormat = (x) => {
    const mark = marksForMui.find((m) => m.value === x);
    return <Typography variant="body2">{mark ? mark.actualLabel : ''}</Typography>;
  };

  const debouncedTrackChange = useDebouncedCallback(
    (newValue) => trackInteraction('Change', 'Slider', 'Step Slider', trackingLabel, newValue),
    1000,
  );

  const handleChange = (e, newValue) => {
    const mark = marksForMui.find((m) => m.value === newValue);
    debouncedTrackChange(mark.actualLabel);
    if (onChange) {
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

  const sliderNode = sortOrderAscending
    ? (
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
    ) : (
      <ManorStyledSliderRtl
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
        track="inverted"
      />
    );

  return (
    <StyledWrapper>
      <div id={labelWrapId}>
        <Label htmlFor={id} text={label} tooltip={tooltip} />
      </div>
      <StyledSliderLabels>
        <Typography variant="body2">{sortOrderAscending ? marksForMui[0].actualLabel : marksForMui[marksForMui.length - 1].actualLabel}</Typography>
        <Typography variant="body2">{sortOrderAscending ? marksForMui[marksForMui.length - 1].actualLabel : marksForMui[0].actualLabel}</Typography>
      </StyledSliderLabels>
      {sliderNode}
    </StyledWrapper>
  );
};

StepSlider.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
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
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * It should contain objects with value and label keys. Minimum of 3 marks required.
   * the value prop for each array item must be provided in ascending order - set the sortOrderAscending prop to false
   * to alter how they appear when rendered.
   */
  marks: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
  ).isRequired,
  /**
   * The label of the slider.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
  /**
   * This allows the sort order to be reversed when the component is rendered
   */
  sortOrderAscending: PropTypes.bool,
};

StepSlider.defaultProps = {
  id: null,
  label: '',
  ariaValueText: '',
  disabled: false,
  onChange: () => {},
  onChangeCommitted: () => {},
  tooltip: {},
  sortOrderAscending: true,
};

export default StepSlider;

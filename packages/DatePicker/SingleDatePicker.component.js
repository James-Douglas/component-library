import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, {
  useCallback, useContext, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { DayPickerSingleDateController as RDSingleDatePicker } from 'react-dates';
import moment from 'moment';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { useId, usePrevious } from '@comparethemarketau/manor-hooks';
import { DateInput } from '@comparethemarketau/manor-input';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { useDebouncedCallback } from 'use-debounce';
import { StyledCalendar, StyledDateRangePickerContainer } from './DatePicker.styles';
import { StyledDateRangePickerWrap, StyledFontAwesomeIcon } from './SingleDatePicker.styles';

const displayFormat = 'DD/MM/YYYY';

const SingleDatePicker = ({
  trackingLabel,
  dateId: propsDateId,
  dateTooltip,
  datePlaceholder,
  dateAriaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  date,
  numberOfMonths,
  validationMessage,
  isDayBlocked,
  handleChange,
  readonly,
  pickerVisible,
}) => {
  const dateId = useId(propsDateId);
  const { trackInteraction } = useContext(ManorContext);
  const node = useRef();
  const [selectedDate, setSelectedDate] = useState(date);
  const [value, setValue] = useState(selectedDate && selectedDate.format(displayFormat));
  const [hasFocus, setHasFocus] = useState(false);
  const hadFocus = usePrevious(hasFocus);
  const [isVisisble, setIsVisisble] = useState(pickerVisible);
  const [validationMessageDate, setValidationMessageDate] = useState(null);

  useEffect(() => {
    setIsVisisble(pickerVisible);
  }, [pickerVisible]);

  const dateHandleFocus = () => {
    if (!hasFocus) {
      setHasFocus(true);
    }
    setIsVisisble(true);
  };

  const debouncedTrackInput = useDebouncedCallback(
    (inputValue) => trackInteraction('Input', 'Date Picker', 'Single Date', trackingLabel, inputValue),
    1000,
  );

  const dateHandleChange = (_value) => {
    const parsed = moment(_value, displayFormat, true);
    setSelectedDate(parsed);
    setIsVisisble(false);
    if (moment.isMoment(_value)) {
      const formatted = _value.format(displayFormat);
      setValue(formatted);
      // debouncedTrackInput(formatted);
    } else {
      setValue(_value);
      debouncedTrackInput(_value);
    }
  };

  const handleDatePickerSelection = (_value) => {
    dateHandleChange(_value);
    trackInteraction('Selection', 'Date Picker', 'Single Date', trackingLabel, moment.isMoment(_value) ? _value.format(displayFormat) : '');
  };

  useEffect(() => {
    if (selectedDate) {
      if (selectedDate.isValid()) {
        if (isDayBlocked !== undefined && isDayBlocked(selectedDate)) {
          setValidationMessageDate(validationMessage);
        } else {
          setValidationMessageDate(validationMessage || null);
        }
      } else {
        setValidationMessageDate(validationMessage);
      }
    } else {
      setValidationMessageDate(validationMessage || null);
    }
  }, [selectedDate, isDayBlocked, validationMessage, setValidationMessageDate]);

  useEffect(() => {
    handleChange && handleChange(selectedDate);
  }, [selectedDate, handleChange]);

  const dateHandleBlur = (e) => {
    if (!node.current.contains(e.target) && node.current !== e.target) {
      setHasFocus(false);
    }
    const parsed = moment(value, displayFormat, true);

    if (parsed.isValid()) {
      if (isDayBlocked !== undefined && isDayBlocked(parsed)) {
        setValidationMessageDate(validationMessage);
      } else {
        setValidationMessageDate(validationMessage || null);
      }
    } else {
      setValidationMessageDate(validationMessage);
    }
  };

  useEffect(() => {
    if (hasFocus && !hadFocus) {
      trackInteraction('Focus', 'Date Picker', 'Single Date', trackingLabel, value ? value.toString() : '');
    }
  }, [trackInteraction, trackingLabel, value, hasFocus, hadFocus]);

  const handleClickOutside = useCallback((e) => {
    if (!node.current.contains(e.target)) {
      setIsVisisble(false);
    }
  }, [node, setIsVisisble]);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setIsVisisble(false);
    }
  }, []);

  useLayoutEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', escFunction);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', escFunction);
    };
  }, [handleClickOutside, escFunction]);

  return (
    <StyledDateRangePickerContainer ref={node}>
      <StyledDateRangePickerWrap>
        <DateInput
          id={dateId}
          tooltip={dateTooltip}
          placeholder={datePlaceholder}
          label={dateAriaLabel}
          ariaLabelledBy={ariaLabelledBy}
          ariaDescribedBy={ariaDescribedBy}
          value={value}
          prefixContent=""
          suffixContent={<StyledFontAwesomeIcon icon={faCalendarAlt} size="1x" />}
          handleFocus={dateHandleFocus}
          handleBlur={dateHandleBlur}
          handleChange={dateHandleChange}
          readonly={readonly}
          disableClearIcon
          validationMessage={validationMessageDate}
          className="date-input-calendar"
          trackingLabel={trackingLabel}
          disableInteractionTracking
        />
      </StyledDateRangePickerWrap>
      {isVisisble && (
        <StyledCalendar>
          <RDSingleDatePicker
            date={selectedDate && selectedDate.isValid() ? selectedDate : null}
            onDateChange={handleDatePickerSelection}
            keepOpenOnDateSelect
            hideKeyboardShortcutsPanel
            numberOfMonths={numberOfMonths}
            focused
            isDayBlocked={isDayBlocked || undefined}
            transitionDuration={0}
          />
        </StyledCalendar>
      )}
    </StyledDateRangePickerContainer>
  );
};

SingleDatePicker.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   * Unique identifier for the date input.
   */
  dateId: PropTypes.string,
  /**
   * Define a tooltip to be displayed alongside this component. See Tooltip props for details.
   */
  dateTooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Placeholder value to be displayed in the Input date component.
   */
  datePlaceholder: PropTypes.string,
  /**
   * Label for the Input start date component.
   */
  dateAriaLabel: PropTypes.string,
  /**
   * Array of ids of elements used to label the component ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute )
   */
  ariaLabelledBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * Array of ids of elements used to describe the component (tooltips etc) ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute )
   */
  ariaDescribedBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * Sets the value of the date input
   * moment instance, e.g: minDate={moment('2020-12-01T00:00:00.000')}
   */
  date: PropTypes.instanceOf(moment),
  /**
   * Sets the number of months
   */
  numberOfMonths: PropTypes.number,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  /**
   * Function called by the datepicker to determine if a day should be blocked from selection
   * (x: [moment instance]) => boolean)
   */
  isDayBlocked: PropTypes.func,
  /**
   * Called on change with { id, value }.
   */
  handleChange: PropTypes.func,
  /**
   * Specifies that the date input should be read-only. However you can still set dates from the picker
   */
  readonly: PropTypes.bool,
  /**
   * Allows manual control over the visibility of the picker
   */
  pickerVisible: PropTypes.bool,
};

SingleDatePicker.defaultProps = {
  dateId: null,
  dateTooltip: {},
  datePlaceholder: '',
  dateAriaLabel: '',
  ariaLabelledBy: [],
  ariaDescribedBy: [],
  date: null,
  numberOfMonths: 1,
  validationMessage: null,
  handleChange: null,
  isDayBlocked: undefined,
  readonly: false,
  pickerVisible: false,
};

export default SingleDatePicker;

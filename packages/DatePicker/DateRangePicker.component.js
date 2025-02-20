import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, {
  createRef, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { DayPickerRangeController as RSDayPickerRange } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/constants';
import moment from 'moment';
import { useDebouncedCallback } from 'use-debounce';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { useId, useMountEffect, usePrevious } from '@comparethemarketau/manor-hooks';
import { DateInput } from '@comparethemarketau/manor-input';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { StyledCalendar, StyledDateRangePickerContainer } from './DatePicker.styles';
import {
  StyledDateRangePicker, StyledDateRangePickerWrap, StyledFontAwesomeIcon, StyledTodayDot, StyledTodayWrap,
} from './DateRangePicker.styles';

const DISPLAY_FORMAT = 'DD/MM/YYYY';

const DateRangePicker = ({
  trackingLabel,
  startDateId: propsStartDateId,
  startDateTooltip,
  startDateAriaLabel,
  startDateAriaLabelledBy,
  startDateAriaDescribedBy,
  startDateSuffixIgnoreForAriaDescribedBy,
  startDateValue,
  endDateId: propsEndDateId,
  endDateTooltip,
  endDateAriaLabel,
  endDateAriaLabelledBy,
  endDateAriaDescribedBy,
  endDateSuffixIgnoreForAriaDescribedBy,
  endDateValue,
  numberOfMonths,
  minimumNights,
  endDateValidationMessage,
  startDateValidationMessage,
  isDayBlocked,
  handleChange,
  pickerVisible,
  readonly,
  keepOpen,
}) => {
  const startDateId = useId(propsStartDateId);
  const endDateId = useId(propsEndDateId);
  const { breakpoint, trackInteraction } = useContext(ManorContext);
  const node = React.useRef();
  const [startDate, setStartDate] = useState(startDateValue ? startDateValue.format(DISPLAY_FORMAT) : '');
  const [startDateMoment, setStartDateMoment] = useState(startDateValue ? moment(startDateValue, DISPLAY_FORMAT, true) : null);
  const [endDate, setEndDate] = useState(endDateValue ? endDateValue.format(DISPLAY_FORMAT) : '');
  const [endDateMoment, setEndDateMoment] = useState(endDateValue ? moment(endDateValue, DISPLAY_FORMAT, true) : null);
  const [focusedInput, setFocusedInput] = useState(START_DATE);
  const [isVisible, setIsVisible] = useState(pickerVisible);
  const [isInitialVisible, setIsInitialVisible] = useState(pickerVisible);
  const [startDateValidationMessageText, setStartDateValidationMessage] = useState(null);
  const [endDateValidationMessageText, setEndDateValidationMessage] = useState(null);
  const calendarArea = createRef();
  const [componentHasFocus, setComponentHasFocus] = useState(false);
  const hadFocus = usePrevious(componentHasFocus);
  const firstUpdate = useRef(true);

  const focusHandler = (value) => {
    setFocusedInput(value || START_DATE);
  };

  const blurHandler = (e) => {
    if (!node.current.contains(e.target) && node.current !== e.target) {
      setComponentHasFocus(false);
    }
  };

  useEffect(() => {
    if (componentHasFocus && !hadFocus) {
      trackInteraction('Focus', 'Date Picker', 'Date Range', trackingLabel, {
        [startDateAriaLabel || 'start']: startDate,
        [endDateAriaLabel || 'end']: endDate,
      });
    }
  }, [trackInteraction, trackingLabel, startDate, endDate, componentHasFocus, hadFocus, startDateAriaLabel, endDateAriaLabel]);

  useEffect(() => {
    setIsVisible(pickerVisible);
    setIsInitialVisible(pickerVisible);
  }, [pickerVisible]);

  useEffect(() => {
    const datePicker = node.current.querySelector('input');
    if (isInitialVisible && isVisible
        && (
          (!startDate && !endDate) || (startDate.toString() === 'Invalid date' && endDate.toString() === 'Invalid date')
        )
    ) {
      datePicker.focus();
      setIsInitialVisible(false);
    }
  }, [node, isInitialVisible, isVisible, startDate, endDate]);

  const dateIsBlocked = useCallback((date) => (typeof isDayBlocked === 'function' ? isDayBlocked(date) : false), [isDayBlocked]);

  const onDatesChange = (dates) => {
    // By default, the airbnb datepicker won't allow the selection of a startDate after the endDate (or vice versa).
    // we do want to allow this (And have validation show an error), so this takes care of that
    if (dates.startDate && !dates.endDate && endDate && dates.startDate !== startDate) {
      if (focusedInput === END_DATE) {
        setEndDate(dates.startDate.format(DISPLAY_FORMAT));
        setEndDateMoment(dates.startDate);
      } else {
        setStartDate(dates.startDate.format(DISPLAY_FORMAT));
        setStartDateMoment(dates.startDate);
      }
    } else {
      setStartDate(dates.startDate.format(DISPLAY_FORMAT));
      setStartDateMoment(dates.startDate);
      setEndDate(dates.endDate ? dates.endDate.format(DISPLAY_FORMAT) : '');
      setEndDateMoment(dates.endDate);
    }
    if (focusedInput === END_DATE) {
      setIsVisible(false);
    }
    debouncedTrackSelection(
      dates.startDate ? dates.startDate.format(DISPLAY_FORMAT) : '',
      dates.endDate ? dates.endDate.format(DISPLAY_FORMAT) : '',
    );
  };

  useEffect(() => {
    if (startDate) {
      setStartDateMoment(moment(startDate, DISPLAY_FORMAT, true));
    }
  }, [startDate]);

  useEffect(() => {
    if (endDate) {
      setEndDateMoment(moment(endDate, DISPLAY_FORMAT, true));
    }
  }, [endDate]);

  const debouncedTrackInput = useDebouncedCallback(
    (start, end) => {
      trackInteraction('Input', 'Date Picker', 'Date Range', trackingLabel, {
        [startDateAriaLabel || 'start']: start,
        [endDateAriaLabel || 'end']: end,
      });
    }, 1000,
  );

  const debouncedTrackSelection = useDebouncedCallback(
    (start, end) => {
      trackInteraction('Selection', 'Date Picker', 'Date Range', trackingLabel, {
        [startDateAriaLabel || 'start']: start,
        [endDateAriaLabel || 'end']: end,
      });
    }, 1000,
  );

  useEffect(() => {
    startDateMoment && startDateMoment.isValid() && !dateIsBlocked(startDateMoment) && setStartDateValidationMessage(null);
    endDateMoment && endDateMoment.isValid() && !dateIsBlocked(endDateMoment) && setEndDateValidationMessage(null);
    handleChange && handleChange({ startDate: startDateMoment, endDate: endDateMoment });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDateMoment, endDateMoment]);

  const fieldNameHandleFocus = (range) => {
    setIsVisible(true);
    setFocusedInput(range);
  };

  const startDateHandleFocus = () => {
    fieldNameHandleFocus(START_DATE);
    if (!componentHasFocus) {
      setComponentHasFocus(true);
    }
  };

  const keyboardAccessibilityFromDate = (event) => {
    if (event.key === 'Tab') {
      setIsVisible(true);
    }
  };

  const endDateHandleFocus = () => {
    fieldNameHandleFocus(END_DATE);
    if (!componentHasFocus) {
      setComponentHasFocus(true);
    }
  };

  const startDateHandleChange = (value) => {
    const parsed = moment(value, DISPLAY_FORMAT, true);
    debouncedTrackInput(value, endDate);
    setStartDate(value);
    setStartDateMoment(parsed);
  };

  const endDateHandleChange = (value) => {
    const parsed = moment(value, DISPLAY_FORMAT, true);
    debouncedTrackInput(startDate, value);
    setEndDate(value);
    setEndDateMoment(parsed);
  };

  useEffect(() => {
    if (startDateMoment) {
      if (startDateMoment.isValid()) {
        if (dateIsBlocked(startDateMoment)) {
          setStartDateValidationMessage(startDateValidationMessage);
          setFocusedInput(END_DATE);
          return;
        }
        setStartDateValidationMessage(startDateValidationMessage || null);
        setFocusedInput(END_DATE);
      } else {
        setStartDateValidationMessage(startDateValidationMessage);
      }
    }
  }, [dateIsBlocked, startDateMoment, startDateValidationMessage]);

  useEffect(() => {
    if (endDateMoment) {
      if (endDateMoment.isValid()) {
        setIsVisible(false);
        if (dateIsBlocked(endDateMoment)) {
          setEndDateValidationMessage(endDateValidationMessage);
          return;
        }
        setEndDateValidationMessage(endDateValidationMessage || null);
      } else {
        setEndDateValidationMessage(endDateValidationMessage);
      }
    }
  }, [dateIsBlocked, endDateMoment, endDateValidationMessage]);

  const handleClickOutside = useCallback((e) => {
    if (!node.current.contains(e.target)) {
      setIsVisible(false);
    }
  }, [node, setIsVisible]);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setIsVisible(false);
    }
  }, []);

  const renderToday = (day, mods) => (day.isSame(moment(), 'date')
    ? (<StyledTodayWrap selected={mods.has('selected') || mods.has('selected-start-no-selected-end') || mods.has('selected-start')}>{day.format('D')}<StyledTodayDot>•</StyledTodayDot></StyledTodayWrap>)
    : (day.format('D')));

  useLayoutEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', escFunction);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', escFunction);
    };
  }, [escFunction, handleClickOutside]);

  useMountEffect(() => {
    firstUpdate.current = false;
  });

  return (
    <StyledDateRangePickerContainer ref={node}>
      <StyledDateRangePicker>
        <StyledDateRangePickerWrap onKeyDown={keyboardAccessibilityFromDate} breakpoint={breakpoint}>
          <DateInput
            id={startDateId}
            tooltip={startDateTooltip}
            label={startDateAriaLabel}
            ariaLabelledBy={startDateAriaLabelledBy}
            ariaDescribedBy={startDateAriaDescribedBy}
            value={startDate || ''}
            suffixContent={<StyledFontAwesomeIcon icon={faCalendarAlt} size="1x" />}
            suffixIgnoreForAriaDescribedBy={startDateSuffixIgnoreForAriaDescribedBy}
            handleFocus={startDateHandleFocus}
            handleBlur={blurHandler}
            handleChange={startDateHandleChange}
            validationMessage={startDateValidationMessageText}
            disableClearIcon
            prefixContent=""
            className="date-input-calendar"
            readonly={readonly}
            disableInteractionTracking
            trackingLabel={trackingLabel}
          />
        </StyledDateRangePickerWrap>
        <StyledDateRangePickerWrap breakpoint={breakpoint}>
          <DateInput
            id={endDateId}
            tooltip={endDateTooltip}
            label={endDateAriaLabel}
            ariaLabelledBy={endDateAriaLabelledBy}
            ariaDescribedBy={endDateAriaDescribedBy}
            value={endDate || ''}
            suffixContent={<StyledFontAwesomeIcon icon={faCalendarAlt} size="1x" />}
            suffixIgnoreForAriaDescribedBy={endDateSuffixIgnoreForAriaDescribedBy}
            handleFocus={endDateHandleFocus}
            handleBlur={blurHandler}
            handleChange={endDateHandleChange}
            validationMessage={endDateValidationMessageText}
            disableClearIcon
            prefixContent=""
            className="date-input-calendar"
            readonly={readonly}
            disableInteractionTracking
            trackingLabel={trackingLabel}
          />
        </StyledDateRangePickerWrap>
      </StyledDateRangePicker>
      {(isVisible || keepOpen) && (
        <StyledCalendar
          endDateAriaLabel={endDateAriaLabel}
          startDateAriaLabel={startDateAriaLabel}
          ref={calendarArea}
          tabIndex={0}
          role="calendar"
        >
          <RSDayPickerRange
            startDate={startDateMoment && startDateMoment.isValid() ? startDateMoment : null} // momentPropTypes.momentObj or null,
            endDate={endDateMoment && endDateMoment.isValid() ? endDateMoment : null} // momentPropTypes.momentObj or null,
            onDatesChange={onDatesChange} // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusHandler} // PropTypes.func.isRequired,
            renderDayContents={renderToday}
            numberOfMonths={numberOfMonths}
            hideKeyboardShortcutsPanel
            isDayBlocked={isDayBlocked}
            minimumNights={minimumNights}
            transitionDuration={0}
          />
        </StyledCalendar>
      )}
    </StyledDateRangePickerContainer>
  );
};

DateRangePicker.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   *  Unique identifier for the start date input.
   */
  startDateId: PropTypes.string,
  /**
   *   Unique identifier for end date input.
   */
  endDateId: PropTypes.string,
  /**
   * Define a tooltip to be displayed alongside this component. See Tooltip props for details.
   */
  startDateTooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Define a tooltip to be displayed alongside this component. See Tooltip props for details.
   */
  endDateTooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Label for the Input start date component.
   */
  startDateAriaLabel: PropTypes.string,
  /**
   * Array of ids of elements used to label the component ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute )
   */
  startDateAriaLabelledBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * Array of ids of elements used to describe the component (tooltips etc) ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute )
   */
  startDateAriaDescribedBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * Exclude the start date field prefix id from the aria-describedby prop if it adds no value to visually impaired users.
   */
  startDateSuffixIgnoreForAriaDescribedBy: PropTypes.bool,
  /**
   * Array of ids of elements used to label the component ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute )
   */
  endDateAriaLabelledBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * Array of ids of elements used to describe the component (tooltips etc) ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute )
   */
  endDateAriaDescribedBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * Exclude the end date field prefix id from the aria-describedby prop if it adds no value to visually impaired users.
   */
  endDateSuffixIgnoreForAriaDescribedBy: PropTypes.bool,
  /**
   * Sets the value of the start date input
   */
  startDateValue: PropTypes.instanceOf(moment),
  /**
   * Label for the Input start date component.
   */
  endDateAriaLabel: PropTypes.string,
  /**
   * Sets the value of the end date input
   */
  endDateValue: PropTypes.instanceOf(moment),
  /**
   * Sets the number of months
   */
  numberOfMonths: PropTypes.number,
  /**
   * Sets the minimum number of nights between start and end dates (0 allows startDate === endDate)
   */
  minimumNights: PropTypes.number,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  endDateValidationMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  startDateValidationMessage: PropTypes.oneOfType([
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
   * Called on change with { dates }.
   */
  handleChange: PropTypes.func,
  /**
   * Allows manual control over the visibility of the picker
   * - the field focus will be forced on the start date input field.
   * NOTE: if this is applied, this component must be the first form input component on the page.
   */
  pickerVisible: PropTypes.bool,
  /**
   * Specifies that the date input should be read-only. However you can still set dates from the picker
   */
  readonly: PropTypes.bool,
  /**
   * Will keep the calendar open
   */
  keepOpen: PropTypes.bool,
};

DateRangePicker.defaultProps = {
  startDateId: null,
  endDateId: null,
  startDateTooltip: null,
  startDateAriaLabel: '',
  startDateAriaLabelledBy: [],
  startDateAriaDescribedBy: [],
  startDateSuffixIgnoreForAriaDescribedBy: false,
  endDateAriaLabelledBy: [],
  endDateAriaDescribedBy: [],
  endDateSuffixIgnoreForAriaDescribedBy: false,
  startDateValue: null,
  endDateTooltip: null,
  endDateAriaLabel: '',
  endDateValue: null,
  numberOfMonths: 1,
  minimumNights: 0,
  endDateValidationMessage: null,
  startDateValidationMessage: null,
  isDayBlocked: undefined,
  handleChange: null,
  pickerVisible: false,
  readonly: false,
  keepOpen: false,
};

export default DateRangePicker;

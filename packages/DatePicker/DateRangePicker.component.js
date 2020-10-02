import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, {
  createRef,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { DayPickerRangeController as RSDayPickerRange } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/constants';
import moment from 'moment';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { useId } from '@comparethemarketau/manor-hooks';
import { DateInput } from '@comparethemarketau/manor-input';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';

import { GlobalStyle, StyledCalendar, StyledDateRangePickerContainer } from './DatePicker.styles';
import { StyledDateRangePicker, StyledDateRangePickerWrap, StyledFontAwesomeIcon } from './DateRangePicker.styles';

const DateRangePicker = ({
  startDateId: propsStartDateId,
  startDateTooltip,
  startDatePlaceholder,
  startDateAriaLabel,
  startDateAriaLabelledBy,
  startDateAriaDescribedBy,
  startDateValue,
  endDateId: propsEndDateId,
  endDateTooltip,
  endDatePlaceholder,
  endDateAriaLabel,
  endDateAriaLabelledBy,
  endDateAriaDescribedBy,
  endDateValue,
  numberOfMonths,
  endDateValidationMessage,
  startDateValidationMessage,
  isDayBlocked,
  handleChange,
}) => {
  const startDateId = useId(propsStartDateId);
  const endDateId = useId(propsEndDateId);
  const containerRef = React.useRef();
  const node = containerRef;
  const displayFormat = 'DD/MM/YYYY';
  const [startDate, setStartDate] = useState(startDateValue);
  const [endDate, setEndDate] = useState(endDateValue);
  const [focusedInput, setFocusedInput] = useState(START_DATE);
  const [isVisisble, setIsVisisble] = useState(false);
  const [startDateValidationMessageText, setStartDateValidationMessage] = useState(null);
  const [endDateValidationMessageText, setEndDateValidationMessage] = useState(null);
  const calendarArea = createRef();
  const focusHandler = (value) => {
    setFocusedInput(value || START_DATE);
  };

  const onDatesChange = (dates) => {
    setStartDate(dates.startDate);
    setEndDate(dates.endDate);
    if (focusedInput === END_DATE) {
      setIsVisisble(false);
      handleChange && handleChange(dates);
    }
    setFocusedInput(focusedInput === START_DATE);
    dates.startDate && dates.startDate.isValid() && setStartDateValidationMessage(null);
    dates.endDate && dates.endDate.isValid() && setEndDateValidationMessage(null);
  };

  const fieldNameHandleFocus = (range) => {
    setIsVisisble(true);
    setFocusedInput(range);
  };

  const startDateHandleFocus = () => {
    fieldNameHandleFocus(START_DATE);
  };

  const keyboardAccessibilityFromDate = (event) => {
    if (event.key === 'Tab') {
      setIsVisisble(true);
      calendarArea && calendarArea.current && calendarArea.current.focus();
    }
  };

  const endDateHandleFocus = () => {
    fieldNameHandleFocus(END_DATE);
  };

  const startDateHandleChange = (value) => {
    const parsed = moment(value, displayFormat, true);
    if (parsed.isValid()) {
      setStartDate(parsed);
      if (isDayBlocked !== undefined && isDayBlocked(parsed)) {
        setStartDateValidationMessage(startDateValidationMessage);
      } else {
        setStartDateValidationMessage(null);
      }
      setFocusedInput(END_DATE);
    }
    !parsed.isValid() && setStartDateValidationMessage(startDateValidationMessage);
  };

  const endDateHandleChange = (value) => {
    const parsed = moment(value, displayFormat, true);
    if (parsed.isValid()) {
      setEndDate(parsed);
      setIsVisisble(false);
      if (isDayBlocked !== undefined && isDayBlocked(parsed)) {
        setEndDateValidationMessage(endDateValidationMessage);
      } else {
        setEndDateValidationMessage(null);
      }
    }
    !parsed.isValid() && setEndDateValidationMessage(endDateValidationMessage);
  };

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
  }, [escFunction, handleClickOutside]);

  return (
    <StyledDateRangePickerContainer ref={node}>
      <GlobalStyle />
      <StyledDateRangePicker>
        <StyledDateRangePickerWrap onKeyDown={keyboardAccessibilityFromDate}>
          <DateInput
            id={startDateId}
            tooltip={startDateTooltip}
            placeholder={startDatePlaceholder}
            label={startDateAriaLabel}
            ariaLabelledBy={startDateAriaLabelledBy}
            ariaDescribedBy={startDateAriaDescribedBy}
            value={startDate && startDate.format(displayFormat)}
            suffixContent={<StyledFontAwesomeIcon icon={faCalendarAlt} size="1x" />}
            handleFocus={startDateHandleFocus}
            handleChange={startDateHandleChange}
            validationMessage={startDateValidationMessageText}
            disableClearIcon
            prefixContent=""
            className="date-input-calendar"
          />
        </StyledDateRangePickerWrap>
        <StyledDateRangePickerWrap>
          <DateInput
            id={endDateId}
            tooltip={endDateTooltip}
            placeholder={endDatePlaceholder}
            label={endDateAriaLabel}
            ariaLabelledBy={endDateAriaLabelledBy}
            ariaDescribedBy={endDateAriaDescribedBy}
            value={endDate && endDate.format(displayFormat)}
            suffixContent={<StyledFontAwesomeIcon icon={faCalendarAlt} size="1x" />}
            handleFocus={endDateHandleFocus}
            handleChange={endDateHandleChange}
            validationMessage={endDateValidationMessageText}
            disableClearIcon
            prefixContent=""
            className="date-input-calendar"
          />
        </StyledDateRangePickerWrap>
      </StyledDateRangePicker>
      {isVisisble && (
        <StyledCalendar
          endDateAriaLabel={endDateAriaLabel}
          startDateAriaLabel={startDateAriaLabel}
          ref={calendarArea}
          tabIndex={0}
          role="calendar"
        >
          <RSDayPickerRange
            startDate={startDate} // momentPropTypes.momentObj or null,
            endDate={endDate} // momentPropTypes.momentObj or null,
            onDatesChange={onDatesChange} // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusHandler} // PropTypes.func.isRequired,
            numberOfMonths={numberOfMonths}
            hideKeyboardShortcutsPanel
            isDayBlocked={isDayBlocked}
          />
        </StyledCalendar>
      )}
    </StyledDateRangePickerContainer>
  );
};

DateRangePicker.propTypes = {
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
   * Placeholder value to be displayed in the Input start date component.
   */
  startDatePlaceholder: PropTypes.string,
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
   * Array of ids of elements used to label the component ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute )
   */
  endDateAriaLabelledBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * Array of ids of elements used to describe the component (tooltips etc) ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute )
   */
  endDateAriaDescribedBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * Sets the value of the start date input
   */
  startDateValue: PropTypes.instanceOf(moment),
  /**
   * Placeholder value to be displayed in the Input end date component.
   */
  endDatePlaceholder: PropTypes.string,
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
   * Displays given validation message and invalid styles on the component when provided.
   */
  endDateValidationMessage: PropTypes.string,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  startDateValidationMessage: PropTypes.string,
  /**
   * Function called by the datepicker to determine if a day should be blocked from selection
   * (x: [moment instance]) => boolean)
   */
  isDayBlocked: PropTypes.func,
  /**
   * Called on change with { dates }.
   */
  handleChange: PropTypes.func,
};

DateRangePicker.defaultProps = {
  startDateId: null,
  endDateId: null,
  startDateTooltip: {},
  startDatePlaceholder: '',
  startDateAriaLabel: '',
  startDateAriaLabelledBy: [],
  startDateAriaDescribedBy: [],
  endDateAriaLabelledBy: [],
  endDateAriaDescribedBy: [],
  startDateValue: null,
  endDateTooltip: {},
  endDatePlaceholder: '',
  endDateAriaLabel: '',
  endDateValue: null,
  numberOfMonths: 1,
  endDateValidationMessage: null,
  startDateValidationMessage: null,
  isDayBlocked: undefined,
  handleChange: null,
};

export default DateRangePicker;

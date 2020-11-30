import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, {
  createRef,
  useCallback,
  useLayoutEffect,
  useState,
  useEffect,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { DayPickerRangeController as RSDayPickerRange } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/constants';
import moment from 'moment';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { useId } from '@comparethemarketau/manor-hooks';
import { DateInput } from '@comparethemarketau/manor-input';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { ManorContext } from '@comparethemarketau/manor-provider';

import { StyledCalendar, StyledDateRangePickerContainer } from './DatePicker.styles';
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
  pickerVisible,
}) => {
  const startDateId = useId(propsStartDateId);
  const endDateId = useId(propsEndDateId);
  const { breakpoint } = useContext(ManorContext);
  const containerRef = React.useRef();
  const node = containerRef;
  const displayFormat = 'DD/MM/YYYY';
  const [startDate, setStartDate] = useState(startDateValue ? startDateValue.format(displayFormat) : '');
  const [startDateMoment, setStartDateMoment] = useState(startDateValue ? moment(startDateValue, displayFormat, true) : null);
  const [endDate, setEndDate] = useState(endDateValue ? endDateValue.format(displayFormat) : '');
  const [endDateMoment, setEndDateMoment] = useState(endDateValue ? moment(endDateValue, displayFormat, true) : null);
  const [focusedInput, setFocusedInput] = useState(START_DATE);
  const [isVisisble, setIsVisisble] = useState(pickerVisible);
  const [startDateValidationMessageText, setStartDateValidationMessage] = useState(null);
  const [endDateValidationMessageText, setEndDateValidationMessage] = useState(null);
  const calendarArea = createRef();
  const focusHandler = (value) => {
    setFocusedInput(value || START_DATE);
  };

  useEffect(() => {
    setIsVisisble(pickerVisible);
  }, [pickerVisible]);

  const dateIsBlocked = useCallback((date) => (typeof isDayBlocked === 'function' ? isDayBlocked(date) : false), [isDayBlocked]);

  const onDatesChange = (dates) => {
    // If the user tries to change the endDate to be before the startDate, the airbnb picker just sets the startDate to
    // the selected endDate. CX instead want to not set the endDate and display an error.
    if (dates.startDate && !dates.endDate && endDate && dates.startDate !== startDate) {
      setEndDate(dates.startDate.format(displayFormat));
      setEndDateMoment(dates.startDate);
    } else {
      setStartDate(dates.startDate.format(displayFormat));
      setStartDateMoment(dates.startDate);
      setEndDate(dates.endDate ? dates.endDate.format(displayFormat) : moment('', displayFormat, true));
      setEndDateMoment(dates.endDate);
    }
    if (focusedInput === END_DATE) {
      setIsVisisble(false);
    }
  };

  useEffect(() => {
    if (startDate) {
      setStartDateMoment(moment(startDate, displayFormat, true));
    }
  }, [startDate]);

  useEffect(() => {
    if (endDate) {
      setEndDateMoment(moment(endDate, displayFormat, true));
    }
  }, [endDate]);

  useEffect(() => {
    startDateMoment && startDateMoment.isValid() && !dateIsBlocked(startDateMoment) && setStartDateValidationMessage(null);
    endDateMoment && endDateMoment.isValid() && !dateIsBlocked(endDateMoment) && setEndDateValidationMessage(null);
    handleChange && handleChange({ startDate: startDateMoment, endDate: endDateMoment });
  }, [startDateMoment, endDateMoment]);

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
    }
  };

  const endDateHandleFocus = () => {
    fieldNameHandleFocus(END_DATE);
  };

  const startDateHandleChange = (value) => {
    const parsed = moment(value, displayFormat, true);
    setStartDate(value);
    setStartDateMoment(parsed);
  };

  const endDateHandleChange = (value) => {
    const parsed = moment(value, displayFormat, true);
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
        setIsVisisble(false);
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
      <StyledDateRangePicker>
        <StyledDateRangePickerWrap onKeyDown={keyboardAccessibilityFromDate} breakpoint={breakpoint}>
          <DateInput
            id={startDateId}
            tooltip={startDateTooltip}
            placeholder={startDatePlaceholder}
            label={startDateAriaLabel}
            ariaLabelledBy={startDateAriaLabelledBy}
            ariaDescribedBy={startDateAriaDescribedBy}
            value={startDate || ''}
            suffixContent={<StyledFontAwesomeIcon icon={faCalendarAlt} size="1x" />}
            handleFocus={startDateHandleFocus}
            handleChange={startDateHandleChange}
            validationMessage={startDateValidationMessageText}
            disableClearIcon
            prefixContent=""
            className="date-input-calendar"
          />
        </StyledDateRangePickerWrap>
        <StyledDateRangePickerWrap breakpoint={breakpoint}>
          <DateInput
            id={endDateId}
            tooltip={endDateTooltip}
            placeholder={endDatePlaceholder}
            label={endDateAriaLabel}
            ariaLabelledBy={endDateAriaLabelledBy}
            ariaDescribedBy={endDateAriaDescribedBy}
            value={endDate || ''}
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
            startDate={startDateMoment && startDateMoment.isValid() ? startDateMoment : null} // momentPropTypes.momentObj or null,
            endDate={endDateMoment && endDateMoment.isValid() ? endDateMoment : null} // momentPropTypes.momentObj or null,
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
  /**
   * Allows manual control over the visibility of the picker
   */
  pickerVisible: PropTypes.bool,
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
  pickerVisible: false,
};

export default DateRangePicker;

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, {
  useCallback, useLayoutEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { DayPickerSingleDateController as RDSingleDatePicker } from 'react-dates';
import moment from 'moment';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import { DateInput } from '@comparethemarketau/manor-input';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { GlobalStyle, StyledCalendar, StyledDateRangePickerContainer } from './DatePicker.styles';

import { StyledDateRangePickerWrap, StyledFontAwesomeIcon } from './SingleDatePicker.styles';

const SingleDatePicker = ({
  dateId: propsDateId,
  dateTooltip,
  datePlaceholder,
  dateAriaLabel,
  date,
  numberOfMonths,
  validationMessage,
  isDayBlocked,
  handleChange,
  theme,
}) => {
  const dateId = useId(propsDateId);
  const node = useRef();
  const displayFormat = 'DD/MM/YYYY';

  const [selectedDate, setSelectedDate] = useState(date || moment().startOf('day'));
  const [value, setValue] = useState(selectedDate.format(displayFormat));

  const [isVisisble, setIsVisisble] = useState(false);
  const [validationMessageDate, setValidationMessageDate] = useState(null);

  const dateHandleFocus = () => {
    setIsVisisble(true);
  };

  const dateHandleChange = (_value) => {
    const parsed = moment(_value, displayFormat, true);
    if (parsed.isValid()) {
      setSelectedDate(parsed);
      setIsVisisble(false);

      if (isDayBlocked !== undefined && isDayBlocked(parsed)) {
        setValidationMessageDate(validationMessage);
      } else {
        setValidationMessageDate(null);
      }
    }
    setValue(_value);
    handleChange && handleChange(parsed);
  };

  const dateHandleBlur = () => {
    const parsed = moment(value, displayFormat, true);

    if (parsed.isValid()) {
      if (isDayBlocked !== undefined && isDayBlocked(parsed)) {
        setValidationMessageDate(validationMessage);
      } else {
        setValidationMessageDate(null);
      }
    } else {
      setValidationMessageDate(validationMessage);
    }
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
  }, [handleClickOutside, escFunction]);

  return (
    <ManorProvider theme={theme}>
      <StyledDateRangePickerContainer ref={node}>
        <GlobalStyle />
        <StyledDateRangePickerWrap>
          <DateInput
            id={dateId}
            tooltip={dateTooltip}
            placeholder={datePlaceholder}
            label={dateAriaLabel}
            value={selectedDate && selectedDate.format(displayFormat)}
            prefixContent=""
            suffixContent={<StyledFontAwesomeIcon icon={faCalendarAlt} size="1x" />}
            handleFocus={dateHandleFocus}
            handleBlur={dateHandleBlur}
            handleChange={dateHandleChange}
            disableClearIcon
            validationMessage={validationMessageDate}
            className="date-input-calendar"
          />
        </StyledDateRangePickerWrap>
        {isVisisble && (
          <StyledCalendar>
            <RDSingleDatePicker
              date={selectedDate}
              onDateChange={dateHandleChange}
              keepOpenOnDateSelect
              hideKeyboardShortcutsPanel
              numberOfMonths={numberOfMonths}
              focused
              isDayBlocked={isDayBlocked || undefined}
            />
          </StyledCalendar>
        )}
      </StyledDateRangePickerContainer>
    </ManorProvider>
  );
};

SingleDatePicker.propTypes = {
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
   * Sets the value of the date input
   */
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.string,
  ]),
  /**
   * Sets the number of months
   */
  numberOfMonths: PropTypes.number,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Function to set disabled days
   */
  isDayBlocked: PropTypes.func,
  /**
   * Called on change with { id, value }.
   */
  handleChange: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

SingleDatePicker.defaultProps = {
  dateId: null,
  dateTooltip: {},
  datePlaceholder: '',
  dateAriaLabel: '',
  date: null,
  numberOfMonths: 1,
  validationMessage: null,
  handleChange: null,
  isDayBlocked: undefined,
  theme: undefined,
};

export default SingleDatePicker;

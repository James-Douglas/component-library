import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, {
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DayPickerRangeController as RSDayPickerRange } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/constants';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import DateInput from '../Input/Date/DateInput.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import { GlobalStyle, StyledCalendar, StyledDateRangePickerContainer } from './styled';

const StyledDateRangePickerWrap = styled.div`
  width: ${({ theme }) => theme.spacing[176]};
  margin-right: ${({ theme }) => theme.spacing[24]};
  .input-wrap {
    label {
      path {
         fill: ${({ theme }) => theme.datepicker.navigationButtonColor};
      }
    }
  }
`;
const StyledDateRangePicker = styled.div`
  display: flex;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  max-width: ${({ theme }) => theme.spacing[16]};
  path {
    fill: ${({ theme }) => theme.datepicker.navigationButtonColor};
  }
`;

const DateRangePicker = ({
  startDateId,
  startDateTooltip,
  startDatePlaceholder,
  startDateAriaLabel,
  startDateValue,
  endDateId,
  endDateTooltip,
  endDatePlaceholder,
  endDateAriaLabel,
  endDateValue,
  numberOfMonths,
  endDateValidationMessage,
  startDateValidationMessage,
  isDayBlocked,
  handleChange,
}) => {
  const containerRef = React.useRef();
  const node = containerRef;
  const displayFormat = 'DD/MM/YYYY';
  const [startDate, setStartDate] = useState(startDateValue || moment().startOf('day'));
  const [endDate, setEndDate] = useState(endDateValue || moment().add(7, 'days'));
  const [focusedInput, setFocusedInput] = useState(START_DATE);
  const [isVisisble, setIsVisisble] = useState(false);
  const [startDateValidationMessageText, setStartDateValidationMessage] = useState(null);
  const [endDateValidationMessageText, setEndDateValidationMessage] = useState(null);
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
  const endDateHandleFocus = () => {
    fieldNameHandleFocus(END_DATE);
  };
  const startDateHandleChange = (value) => {
    if (value.isValid()) {
      setStartDate(value);
      setFocusedInput(END_DATE);
    }
    value.isValid() && setStartDateValidationMessage(null);
    !value.isValid() && setStartDateValidationMessage(startDateValidationMessage);
  };
  const endDateHandleChange = (value) => {
    if (value.isValid()) {
      setEndDate(value);
      setIsVisisble(false);
    }
    value.isValid() && setEndDateValidationMessage(null);
    !value.isValid() && setEndDateValidationMessage(endDateValidationMessage);
  };
  const handleClickOutside = useCallback((e) => {
    if (!node.current.contains(e.target)) {
      setIsVisisble(false);
    }
  }, [node, setIsVisisble]);

  useLayoutEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <StyledDateRangePickerContainer ref={node}>
      <GlobalStyle />
      <StyledDateRangePicker>
        <StyledDateRangePickerWrap>
          <DateInput
            id={startDateId}
            tooltip={startDateTooltip}
            placeholder={startDatePlaceholder}
            label={startDateAriaLabel}
            value={startDate && startDate.format(displayFormat)}
            suffixContent={<StyledFontAwesomeIcon icon={faCalendarAlt} size="1x" />}
            handleFocus={startDateHandleFocus}
            handleChange={startDateHandleChange}
            validationMessage={startDateValidationMessageText}
            disableClearIcon
          />
        </StyledDateRangePickerWrap>
        <StyledDateRangePickerWrap>
          <DateInput
            id={endDateId}
            tooltip={endDateTooltip}
            placeholder={endDatePlaceholder}
            label={endDateAriaLabel}
            value={endDate && endDate.format(displayFormat)}
            suffixContent={<StyledFontAwesomeIcon icon={faCalendarAlt} size="1x" />}
            handleFocus={endDateHandleFocus}
            handleChange={endDateHandleChange}
            validationMessage={endDateValidationMessageText}
            disableClearIcon
          />
        </StyledDateRangePickerWrap>
      </StyledDateRangePicker>
      {isVisisble && (
        <StyledCalendar endDateAriaLabel={endDateAriaLabel} startDateAriaLabel={startDateAriaLabel}>
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
   * The input ID for the start date input. Required as it informs the label and value of the underlying input.
   */
  startDateId: PropTypes.string.isRequired,
  /**
   * The input ID for the end date input. Required as it informs the label and value of the underlying input.
   */
  endDateId: PropTypes.string.isRequired,
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
   * Sets the value of the start date input
   */
  startDateValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
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
  endDateValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
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
   * Function to set disabled days
   */
  isDayBlocked: PropTypes.func,
  /**
   * Called on change with { dates }.
   */
  handleChange: PropTypes.func,
};

DateRangePicker.defaultProps = {
  startDateTooltip: {},
  startDatePlaceholder: '',
  startDateAriaLabel: '',
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

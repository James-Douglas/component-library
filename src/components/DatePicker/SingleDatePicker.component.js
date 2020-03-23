import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, {
  useCallback, useLayoutEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DayPickerSingleDateController as RDSingleDatePicker } from 'react-dates';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { GlobalStyle, StyledCalendar, StyledDateRangePickerContainer } from './styled';
import DateInput from '../Input/Date/DateInput.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';

const StyledDateRangePickerWrap = styled.div`
  width: ${({ theme }) => theme.spacing[176]};
  margin-right: ${({ theme }) => theme.spacing[24]};
  .date-input-calendar {
    padding-right: ${({ theme }) => theme.spacing[12]};
  }
  .input-wrap {
    label {
      path {
         fill: ${({ theme }) => theme.datepicker.navigationButtonColor};
      }
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  max-width: ${({ theme }) => theme.spacing[16]};
  path {
    fill: ${({ theme }) => theme.datepicker.navigationButtonColor};
  }
`;

const SingleDatePicker = ({
  dateId,
  dateTooltip,
  datePlaceholder,
  dateAriaLabel,
  date,
  numberOfMonths,
  validationMessage,
  isDayBlocked,
  handleChange,
}) => {
  const node = useRef();
  const [selectedDate, setSelectedDate] = useState(date || moment().startOf('day'));
  const displayFormat = 'DD/MM/YYYY';
  const [isVisisble, setIsVisisble] = useState(false);
  const [validationMessageDate, setValidationMessageDate] = useState(null);

  const dateHandleFocus = () => {
    setIsVisisble(true);
  };
  const dateHandleChange = (value) => {
    const parsed = moment(value, displayFormat, true);
    if (parsed.isValid()) {
      setSelectedDate(parsed);
      setIsVisisble(false);
      setValidationMessageDate(null);
    } else {
      setValidationMessageDate(validationMessage);
    }
    handleChange && handleChange(parsed);
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
  );
};

SingleDatePicker.propTypes = {
  /**
   * The input ID for the date input. Required as it informs the label and value of the underlying input.
   */
  dateId: PropTypes.string.isRequired,
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
  date: PropTypes.string,
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
};

SingleDatePicker.defaultProps = {
  dateTooltip: {},
  datePlaceholder: '',
  dateAriaLabel: '',
  date: null,
  numberOfMonths: 1,
  validationMessage: null,
  handleChange: null,
  isDayBlocked: undefined,
};


export default SingleDatePicker;

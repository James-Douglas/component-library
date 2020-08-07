import styled, { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export

export const StyledCalendar = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex[40]};
  top: ${({ theme }) => theme.spacing[80]};
`;
export const StyledDateRangePickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;
export const GlobalStyle = createGlobalStyle`
  .DayPickerNavigation_button .DayPickerNavigation_svg__horizontal {
    fill: ${({ theme }) => theme.datepicker.navigationButtonColor};
  }
  .CalendarMonth_table .CalendarDay {
    border: none;
  }
  .CalendarMonth_table .CalendarDay__selected_span:hover {
    background: ${({ theme }) => theme.datepicker.datepickerDayBackground};
    color: ${({ theme }) => theme.datepicker.datepickerDayColor};
  }
  .DayPicker_weekHeader_ul{
    height: ${({ theme }) => theme.spacing[40]};;
    padding-bottom: 0;
  }
 .DayPicker_weekHeader_li {
    visibility: hidden;
    font-size: 0;
    height: ${({ theme }) => theme.spacing[40]};
    width: ${({ theme }) => theme.spacing[40]};
    line-height: 4rem;
    padding: 0;
  }
  .DayPicker_weekHeader {
    top: ${({ theme }) => theme.spacing[52]};
  }
  .DayPicker_weekHeader_li::first-letter {
    visibility: visible;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
  .CalendarMonth_table {
    margin: ${({ theme }) => `${theme.spacing['16']} 0`};
  }
  .CalendarMonth {
     margin: ${({ theme }) => `-${theme.spacing['8']} 0`};
  }
  .CalendarDay__selected_span {
    background: ${({ theme }) => theme.datepicker.datepickerSelectedDayRangeBackground};
    color: ${({ theme }) => theme.datepicker.datepickerSelectedDayRangeColor};  
  }
  .DateInput {
    svg {
      display: none;
    }
  }
  .CalendarDay__selected {
    background: ${({ theme }) => theme.datepicker.datepickerSelectedDayEdgeBackground};
    &:hover {
      background: ${({ theme }) => theme.datepicker.datepickerSelectedDayEdgeBackgroundHover};
    }
  }
  .SingleDatePicker_picker {
    top:  ${({ theme }) => theme.spacing[56]} !important;
  }
  .SingleDatePickerInput_calendarIcon {
    position: absolute;
    top: 0;
    right: 0;
    z-index: ${({ theme }) => theme.zIndex[10]};
  }
  .DayPicker__withBorder {
    box-shadow: ${({ theme }) => theme.boxShadow.box};
    border-radius: ${({ theme }) => theme.borderRadius.default};
  }
 .CalendarMonth_caption {
  position: relative;
  padding-top: ${({ theme }) => theme.spacing.box};
  top:  ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.fontSize.xl};
 }
`;

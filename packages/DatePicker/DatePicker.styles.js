import styled from 'styled-components';

const StyledCalendar = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex[20]};
  top: ${({ theme }) => theme.spacing[80]};
  & .CalendarMonth_table .CalendarDay__selected_span:hover {
    background: ${({ theme }) => theme.datepicker.datepickerDayBackground};
    color: ${({ theme }) => theme.datepicker.datepickerDayColorSelected};
  }
  
  & .DayPicker {
    font-family: ${({ theme }) => theme.fontFamily};
  }
  
  & .DayPicker_transitionContainer__horizontal {
    -webkit-transition-property: none;
    -moz-transition-property: none;
    -o-transition-property: none;
    transition-property: none;
    height: auto !important;
  }
  & .CalendarMonthGrid__horizontal {
    position: relative;
  }
  & .CalendarMonthGrid_month__hidden {
    display: none;
  }
  & .DayPickerNavigation_button .DayPickerNavigation_svg__horizontal {
    fill: ${({ theme }) => theme.datepicker.navigationButtonColor};
  }
  & .CalendarMonth_table .CalendarDay {
    border: none;
  }
  & .DayPicker_weekHeader_ul{
    height: ${({ theme }) => theme.spacing[40]};;
    padding-bottom: 0;
  }
  & .DayPicker_weekHeader_li {
    visibility: hidden;
    font-size: 0;
    height: ${({ theme }) => theme.spacing[40]};
    width: ${({ theme }) => theme.spacing[40]};
    line-height: 4rem;
    padding: 0;
  }
  & .DayPicker_weekHeader {
    top: ${({ theme }) => theme.spacing[52]};
  }
  & .DayPicker_weekHeader_li::first-letter {
    visibility: visible;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
  & .CalendarMonth_table {
    margin: ${({ theme }) => `${theme.spacing['16']} 0`};
  }
  & .CalendarMonth {
     margin: ${({ theme }) => `-${theme.spacing['8']} 0`};
  }
  & .CalendarDay__selected_span {
    background: ${({ theme }) => theme.datepicker.datepickerSelectedDayRangeBackground};
    color: ${({ theme }) => theme.datepicker.datepickerSelectedDayRangeColor};  
  }
  & .DateInput {
    svg {
      display: none;
    }
  }
  & .CalendarDay {
    color: ${({ theme }) => theme.colors.grey700};
  }
  & .CalendarDay__selected {
    background: ${({ theme }) => theme.datepicker.datepickerSelectedDayEdgeBackground};
    color: ${({ theme }) => theme.datepicker.datepickerDayColorSelected};
    &:hover {
      background: ${({ theme }) => theme.datepicker.datepickerSelectedDayEdgeBackgroundHover};
      color: ${({ theme }) => theme.datepicker.datepickerDayColorSelected};
    }
  }
  & .SingleDatePicker_picker {
    top:  ${({ theme }) => theme.spacing[56]} !important;
  }
  & .SingleDatePickerInput_calendarIcon {
    position: absolute;
    top: 0;
    right: 0;
    z-index: ${({ theme }) => theme.zIndex[10]};
  }
  & .DayPicker__withBorder {
    box-shadow: ${({ theme }) => theme.boxShadow.box};
    border-radius: ${({ theme }) => theme.borderRadius.default};
  }
  & .CalendarMonth_caption {
    position: relative;
    padding-top: ${({ theme }) => theme.spacing.box};
    top:  ${({ theme }) => theme.spacing[8]};
    font-size: ${({ theme }) => theme.fontSize.xl};
 }
 & .CalendarDay__hovered_span {
    background: ${({ theme }) => theme.datepicker.datepickerSelectedDayRangeBackground}
 }
  & .CalendarDay__hovered_span:hover {
    background: ${({ theme }) => theme.datepicker.datepickerDayBackground};
    color: ${({ theme }) => theme.datepicker.datepickerDayColorSelected};
  }
`;

const StyledDateRangePickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export { StyledCalendar, StyledDateRangePickerContainer };

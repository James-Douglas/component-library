import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledDateRangePickerWrap = styled.div`
  max-width: 32rem;
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

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  max-width: ${({ theme }) => theme.spacing[16]};
  path {
    fill: ${({ theme }) => theme.datepicker.navigationButtonColor};
  }
`;

export const StyledTodayWrap = styled.div`
  color: ${({ theme, selected }) => (selected ? theme.colors.white : theme.colors.primary500)};
`;

export const StyledTodayDot = styled.div`
  position: absolute;
  margin: ${({ theme }) => `-${theme.spacing[8]} 0 0 ${theme.spacing[16]}`};
`;

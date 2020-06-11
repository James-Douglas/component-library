import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledDateRangePickerWrap = styled.div`
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

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  max-width: ${({ theme }) => theme.spacing[16]};
  path {
    fill: ${({ theme }) => theme.datepicker.navigationButtonColor};
  }
`;

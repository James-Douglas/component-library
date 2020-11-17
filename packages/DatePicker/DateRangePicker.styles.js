import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledDateRangePickerWrap = styled.div`
  margin-right: ${({ theme }) => theme.spacing[24]};
  width: 50%;
  input {
    ${({ theme, breakpoint }) => (breakpoint === 'xs') && css`
      padding-left: ${theme.spacing[8]};
      padding-right: 0rem;
    `};
  }
  
  .input-wrap {
    label {
      path {
         fill: ${({ theme }) => theme.datepicker.navigationButtonColor};
      }
    }
  }
`;

export const StyledDateRangePicker = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.spacing[44]};
  & div :last-child {
    margin-right: 0 !important;
  }
 
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  max-width: ${({ theme }) => theme.spacing[16]};
  path {
    fill: ${({ theme }) => theme.datepicker.navigationButtonColor};
  }
`;

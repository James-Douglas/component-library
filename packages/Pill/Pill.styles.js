import styled from 'styled-components';
import { Chip as MUIChip } from '@material-ui/core';
import { Typography } from '@comparethemarketau/manor-typography';
import React from 'react';

const ManorStyledPillToggle = styled.div`
  display: inline-flex;
`;

const ManorStyledPill = styled(({ ...otherProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MUIChip {...otherProps} />
))`
  & {
    height: ${({ size, theme }) => (size === 'medium' ? `${theme.spacing[40]} !important` : `${theme.spacing[32]} !important`)};
    border: ${({ theme }) => (`1px solid ${theme.colors.primary500} !important`)};
    background: ${({ theme, selected }) => `${selected ? theme.colors.primary50 : 'transparent'} !important`};
    border-radius: ${({ theme }) => `${theme.spacing[20]} !important`};
  }
   
  & .MuiChip-icon {
    color: ${({ theme }) => theme.colors.primary500};
  }

  & .MuiChip-deleteIcon {
    font-size: ${({ theme }) => theme.spacing[16]};
    margin-left: 0rem;
    margin-right: 1rem !important;
    color: ${({ theme }) => theme.colors.primary500};
    &:hover {
      color: ${({ theme }) => theme.colors.primary500};
    }
  }
`;

const StyledLabel = styled(Typography)`
  color: ${({ theme }) => theme.colors.primary500};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export { ManorStyledPillToggle, ManorStyledPill, StyledLabel };

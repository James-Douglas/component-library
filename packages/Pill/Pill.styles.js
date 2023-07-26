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
    border: ${({ theme, disabled }) => (disabled ? `1px solid ${theme.colors.grey800} !important` : `1px solid ${theme.colors.primary500} !important`)};
    background: ${({ theme, selected }) => `${selected ? theme.colors.primary50 : theme.colors.white} !important`};
    border-radius: ${({ theme }) => `${theme.spacing[20]} !important`};
    &:hover {
      border:  ${({ theme }) => `1px solid ${theme.colors.primary50} !important`};
      background: ${({ theme }) => `${theme.colors.primary50} !important`};
    }
  }

  & .MuiChip-icon {
    color: ${({ theme, disabled }) => (disabled ? theme.colors.grey800 : theme.colors.primary500)};
  }
  
  &.Mui-disabled {
    color: ${({ theme }) => theme.colors.grey800};
  }

  & .MuiChip-deleteIcon {
    font-size: ${({ theme }) => theme.spacing[16]};
    margin-left: 0rem;
    margin-right: 1rem !important;
    color: ${({ theme, disabled }) => (disabled ? theme.colors.grey800 : theme.colors.primary500)};
  }
`;

const StyledLabel = styled(Typography)`
  color: ${({ theme }) => theme.colors.grey800};
`;

export { ManorStyledPillToggle, ManorStyledPill, StyledLabel };

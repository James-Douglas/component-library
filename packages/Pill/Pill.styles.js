import styled from 'styled-components';
import { Chip as MUIChip } from '@material-ui/core';
import { Typography } from '@comparethemarketau/manor-typography';
import React from 'react';

const ManorStyledPill = styled(({ ...otherProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MUIChip {...otherProps} />
))`
  & {
    height: ${({ size, theme }) => (size === 'medium' ? `${theme.spacing[40]} !important` : `${theme.spacing[32]} !important`)};
    border: ${({ theme, selected }) => (`1px solid ${selected ? theme.colors.primary500 : theme.colors.grey500} !important`)};
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
    color: ${({ theme, selected }) => (selected ? theme.colors.primary500 : theme.colors.grey500)};
    &:hover {
      color: ${({ theme, selected }) => (selected ? theme.colors.primary500 : theme.colors.grey500)};
    }
  }
`;

const StyledLabel = styled(Typography)`
  color: ${({ theme, selected }) => (selected ? theme.colors.primary500 : theme.colors.grey800)};
`;

export { ManorStyledPill, StyledLabel };

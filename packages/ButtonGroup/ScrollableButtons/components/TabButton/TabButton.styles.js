import styled from 'styled-components';
import { Typography } from '@comparethemarketau/manor-typography';

export const TabButtonContainer = styled.li`
  display: inline-block;
  list-style: none;
  ${({ selected, theme }) => selected && `
    border-bottom: 0.2rem solid ${theme.colors.primary500};
  `}
`;

export const TextContainer = styled(Typography)`
  padding-top: ${({ theme }) => theme.spacing['12']};
  padding-right: ${({ theme }) => theme.spacing['24']};
  padding-bottom: ${({ theme }) => theme.spacing['12']};
  padding-left: ${({ theme }) => theme.spacing['24']};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.grey700};

  ${({ selected, theme }) => selected && `color: ${theme.colors.primary500};
      &:after {
        font-size: ${theme.fontWeight.bold};
      }`}
`;

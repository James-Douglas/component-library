import styled from 'styled-components';

export const StyledFeatureList = styled.ul`
  margin-left: 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding-inline-start: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
  margin-left: 0;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const StyledFeatureListItemIcon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.featureList.color};
`;

export const StyledFeatureListItemText = styled.div`
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.grey900};
    margin-left: ${({ theme }) => theme.spacing[8]};
  }
`;

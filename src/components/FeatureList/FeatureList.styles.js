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

export const StyledFeatureListItemText = styled.span`
  margin-left: ${({ theme }) => theme.spacing[8]};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.snug};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

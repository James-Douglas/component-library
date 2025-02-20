import styled from 'styled-components';

export const StyledEmptyState = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledEmptyStateWrap = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[16]};
  text-align: center;
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledPictureContainer = styled.div`
  max-height: ${({ theme }) => theme.emptyState.imgMaxHeight};
  max-width: ${({ theme }) => theme.emptyState.imgMaxWidth};
`;

export const StyledHeadingContainer = styled.div`
  color: ${({ theme }) => theme.colors.grey900};
`;

export const StyledContentContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[8]}
`;

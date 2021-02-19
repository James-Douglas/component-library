import styled from 'styled-components';

export const StyledEmptyState = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledEmptyStateWrap = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[16]};
  max-width: ${({ theme }) => theme.emptyState.containerMaxWidth};
  text-align: center;
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[32]};
  margin-bottom: ${({ theme, desktop }) => (desktop ? theme.spacing[24] : theme.spacing[8])};

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

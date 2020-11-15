import styled from 'styled-components';

export const StyledEmptyState = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledEmptyStateWrap = styled.div`
  max-width: ${({ theme }) => theme.emptyState.containerMaxWidth};
  text-align: center;
  & > * {
    margin-bottom: ${({ theme, desktop }) => (desktop ? theme.spacing[24] : theme.spacing[16])};
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[32]}
`;

export const StyledPictureContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[32]};
  max-height: ${({ theme }) => theme.emptyState.imgMaxHeight};
  max-width: ${({ theme }) => theme.emptyState.imgMaxWidth};
`;

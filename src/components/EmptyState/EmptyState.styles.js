import styled from 'styled-components';

export const StyledEmptyState = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledEmptyStateWrap = styled.div`
  max-width: ${({ theme }) => theme.emptyState.maxWidth};
  text-align: center;
  & > * {
    margin-bottom: ${({ theme, desktop }) => (desktop ? theme.spacing[32] : theme.spacing[16])};
  }
`;

export const StyledPictureContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[32]};
  height: 100%;
  max-height: ${({ theme }) => theme.emptyState.maxHeight};
  max-width: ${({ theme }) => theme.emptyState.maxWidth};
`;

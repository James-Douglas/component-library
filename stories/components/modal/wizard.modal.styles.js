import styled from 'styled-components';

export const StyledActions = styled.div`
  background: white;
  border-top-style: solid;
  border-width: 0.1rem;
  border-top-color: ${({ theme }) => theme.colors.primary200};
  padding: 1.6rem ${({ theme }) => theme.spacing[24]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledPreviousButton = styled.div`
  display: inline-block;
`;

export const StyledNextButton = styled.div`
  display: inline-block;
`;

export const StyledCompleteButton = styled.div`
  display: inline-block;
`;

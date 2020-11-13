import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledContent = styled.div`
  margin-top: ${({ topMargin }) => (topMargin ? '0.6rem' : '0')} ;
  margin-left: ${({ theme }) => theme.spacing[12]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const StyledFieldValidation = styled.div`
  margin-left: 4.2rem;
`;

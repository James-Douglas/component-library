import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledContent = styled.div`
  margin-top: 0.6rem;
  margin-left: ${({ theme }) => theme.spacing[12]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

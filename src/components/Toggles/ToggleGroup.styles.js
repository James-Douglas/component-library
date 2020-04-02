import styled from 'styled-components';

export const StyledToggleGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const StyledValidationWrapper = styled.div`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing[8]};
`;

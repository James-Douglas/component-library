import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-left: ${({ theme }) => theme.spacing[16]};
  padding-right: ${({ theme }) => theme.spacing[16]};
`;

export default StyledContainer;

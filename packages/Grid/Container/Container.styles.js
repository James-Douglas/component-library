import styled from 'styled-components';

const StyledContainer = styled.div`
  width: ${({ theme }) => theme.maxWidth.full};
  margin: auto;
  padding-left: ${({ theme }) => theme.spacing[16]};
  padding-right: ${({ theme }) => theme.spacing[16]};
  max-width: ${({ theme }) => theme.container.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default StyledContainer;

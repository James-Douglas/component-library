import styled from 'styled-components';

const StyledContainer = styled.div`
  width: ${({ theme }) => theme.maxWidth.full};
  margin: auto;
  padding-left: ${({ theme, padding }) => theme.spacing[padding]};
  padding-right: ${({ theme, padding }) => theme.spacing[padding]};
  max-width: ${({ theme }) => theme.container.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default StyledContainer;

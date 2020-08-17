import styled from 'styled-components';

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  padding-left: ${({ theme, padding }) => theme.spacing[padding]};
  padding-right: ${({ theme, padding }) => theme.spacing[padding]};
`;

export default StyledContainer;

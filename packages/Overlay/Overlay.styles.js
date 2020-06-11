import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex[30]};
  margin: 0;
  padding: 0;
`;

export default StyledOverlay;

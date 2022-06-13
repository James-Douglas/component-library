import styled from 'styled-components';

const StickyBarContainer = styled.nav`
  ${({ isSticky }) => isSticky && 'top: 0; left: 0; position: fixed;'} 
  width: 100%;
  overflow: hidden !important;
  background-color: white;
  z-index: ${({ zIndex }) => zIndex};
  &::-webkit-scrollbar {
    display: none !important;
  };
  `;

export default StickyBarContainer;

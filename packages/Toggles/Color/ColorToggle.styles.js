import styled from 'styled-components';

export const StyledColourToggle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.spacing['128']};
  height: ${({ theme }) => theme.spacing['128']};

  &:hover i {
    pointer-events: none;
    height: 100%;
  }
`;

export const StyledBorderColour = styled.i`
  font-style: normal;
  position: absolute;
  z-index: ${({ theme }) => (theme.zIndex['10'])};
  bottom: 0;
  left: 0;
  height: ${({ theme }) => (theme.spacing['12'])};
  width: 100%;
  transition: all 0.3s ease;
`;

export const StyledContent = styled.span`
  z-index: ${({ theme }) => (theme.zIndex['20'])};
`;

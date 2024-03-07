import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  background: ${({ theme, bgColor }) => bgColor || theme.header.background};
  z-index: ${({ theme }) => (theme.zIndex[10])};
  height: ${({ theme, stuck, desktop }) => ((stuck || !desktop) ? theme.header.heightStuck : theme.header.height)};
  box-shadow: ${({ theme, stuck }) => (stuck ? theme.header.shadow : 'none')};
  position: ${({ isSticky }) => (isSticky ? 'fixed' : 'inherit')};
  left: ${({ isSticky, stuck }) => (isSticky && !stuck ? '1rem' : 0)};
  top: ${({ isSticky, stuck }) => (isSticky && !stuck ? '1rem' : 0)};
  padding-left: ${({ theme }) => theme.spacing[16]};
  justify-content: ${({ justify }) => justify};
  align-items: center;
`;

export const StyledAdditionalContent = styled.div`
  display: flex;
  height: 100%;
  a {
    margin: 0;
  }
`;

export const StyledContactStrip = styled.div`
  ${({ isSticky, desktop }) => (isSticky) && css`
    margin-top: ${!desktop ? '4rem' : '6rem'};
  `};
  background: ${({ theme }) => theme.colors.primary50};
  height: ${({ theme }) => theme.spacing[44]};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.div`
  p {
    color: ${({ theme }) => theme.colors.grey800};
    padding-right: ${({ theme }) => theme.spacing[16]};
    margin: 0;
  }
`;

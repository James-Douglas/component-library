import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  background: ${({ theme }) => (theme.header.background)};
  z-index: ${({ theme }) => (theme.zIndex[10])};
  height: ${({ theme, stuck, desktop }) => ((stuck || !desktop) ? theme.header.heightStuck : theme.header.height)};
  transition: ${({ stuck }) => (stuck ? 'all 200ms ease' : 'none')};
  box-shadow: ${({ theme, stuck }) => (stuck ? theme.header.shadow : 'none')};
  position: ${({ isSticky }) => (isSticky ? 'fixed' : 'inherit')};
  left: 0;
  top: 0;
  padding-left: ${({ theme }) => theme.spacing[16]};
  padding-right: ${({ theme }) => theme.spacing[16]};
  justify-content: space-between;
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
  padding: ${({ theme }) => `${theme.spacing[12]} ${theme.spacing[8]}`};
  height: ${({ theme }) => theme.spacing[44]};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.grey800};
  margin-bottom: 0;
  padding-right: ${({ theme }) => theme.spacing[16]}
`;

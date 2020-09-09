import styled, { css } from 'styled-components';

export const StyledTabsContainer = styled.div`
  width: 100%;
  min-width: 18rem;
  ${({ theme, bordered }) => bordered
    && css`
      border: ${theme.borders.component};
    `}
`;

export const StyledTabButtonWrap = styled.div`
  display: flex;
  background: ${({ theme }) => theme.tabs.background};
  padding: ${({ theme }) => `0 ${theme.spacing[8]}`};
  box-shadow: ${({ theme }) => theme.tabs.buttonWrapShadow};
`;

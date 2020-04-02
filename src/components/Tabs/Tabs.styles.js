import styled, { css } from 'styled-components';

export const StyledTabsContainer = styled.div`
  width: 100%;
  min-width: 18rem;
  box-shadow: ${({ theme }) => theme.tabs.shadow};
  ${({ theme, bordered }) => bordered
    && css`
      border: ${theme.borders.component};
    `}
`;

export const StyledTabButtonWrap = styled.div`
  display: flex;
  background: ${({ theme }) => theme.tabs.background};
  button {
    color: ${({ theme }) => theme.tabs.titleColor};
    font-size: ${({ theme }) => theme.tabs.titleFontSize};
    font-weight: ${({ theme }) => theme.tabs.titleFontWeight};
  }
`;

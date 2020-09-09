import styled, { css } from 'styled-components';

const StyledTabButtonContent = styled.div`
  padding: ${({ theme }) => `${theme.spacing[16]} ${theme.spacing[8]}`};
  ${({ active }) => active && css`
    div {
     margin: 0;
    }
  `}
`;

const StyledTabButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-font: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.snug};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
  margin: 0;
  max-width: 100%;
  transition: .3s ease-out border;
  -ms-flex-preferred-size: 0;
  flex-basis: 0%;
  -ms-flex-positive: 1;
  flex-grow: 1;
  :not(:first-child) {
   margin-left: ${({ theme }) => theme.spacing[24]};
  }
  :focus {
    outline: none;
  }
  & div {
    text-transform: uppercase;
    line-height: ${({ theme }) => theme.lineHeight.snug};
    margin: 0;
  }

  ${({ theme, active }) => active && css`
    box-shadow: ${theme.tabs.selectedTabShadow};
    & div {
      color: ${theme.colors.primary500};
      font-weight: ${theme.fontWeight.bold};
    }
  `}
`;

export { StyledTabButton, StyledTabButtonContent };

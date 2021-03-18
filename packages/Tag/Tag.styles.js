import styled, { css } from 'styled-components';

export const StyledTag = styled.div`
  background: ${({ theme }) => (theme.tag.background)};
  ${({ alert, theme }) => alert && css`
    background: ${theme.tag.alert};
  `}
  &:hover, :focus {
    transition: ${({ theme }) => theme.transition.default};
    border: ${({ theme }) => (theme.tag.regHover)};
    outline: none;
    ${({ alert, theme }) => alert && css`
      border: ${theme.tag.alertHover};
    `}
  }
  padding-left: 0.8rem;
  height: 3.7rem;
  border-radius: ${({ theme }) => (theme.borderRadius.default)};
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  width: auto;
  margin-left: ${({ theme }) => (theme.spacing[4])};
  margin-top: ${({ theme }) => (theme.spacing[4])};
  margin-bottom: ${({ theme }) => (theme.spacing[4])};
  p {
    font-family: ${({ theme }) => (theme.fontFamily)};
    font-size: ${({ theme }) => (theme.fontSize.sm)};
    ::selection {
      color: none;
      background: none;
    }
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  border: 1px solid transparent;
  ${({ visible }) => !visible && css`
    display: none;
  `}
`;

export const StyledIconContainer = styled.div`
  padding-right: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => (theme.colors.primary500)};
  ${({ alert, theme }) => alert && css`
    color: ${theme.tag.alertTextColor};
  `}

`;

export const StyledTagP = styled.p`
  color: ${({ theme }) => (theme.colors.primary500)};
  ${({ alert, theme }) => alert && css`
    color: ${theme.tag.alertTextColor};
  `}
`;

export const StyledTagButton = styled.button`
  height: ${({ theme }) => (theme.spacing[36])};
  color: ${({ theme }) => (theme.colors.primary500)};
  ${({ alert, theme }) => alert && css`
    color: ${theme.tag.alertTextColor};
  `}
  &:focus {
    transition: ${({ theme }) => theme.transition.default};
    border: ${({ theme }) => (theme.tag.regHover)};
    border-radius: ${({ theme }) => (theme.borderRadius.default)};
    outline: none;
    ${({ alert, theme }) => alert && css`
      border: ${theme.tag.alertHover};
    `}
  }
`;

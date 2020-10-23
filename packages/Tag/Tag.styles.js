import styled, { css } from 'styled-components';

export const StyledTag = styled.div`
  background: ${({ theme }) => (theme.tag.background)};
  ${({ warning, alert, theme }) => (alert && !warning) && css`
    background: ${theme.tag.altAlert};
  `}
  ${({ warning, alert, theme }) => (alert && warning) && css`
    background: ${theme.tag.alert};
  `}
  &:hover {
    transition: ${({ theme }) => theme.transition.default};
    border: ${({ theme }) => (theme.tag.regHover)};
    ${({ warning, alert, theme }) => (alert && !warning) && css`
      border: ${theme.tag.altAlertHover};
    `}
    ${({ warning, alert, theme }) => (alert && warning) && css`
      border: ${theme.tag.alertHover};
    `}
  }
  margin-left: ${({ theme }) => (theme.spacing[4])};
  padding-left: ${({ theme }) => (theme.spacing[4])};
  height: ${({ theme }) => (theme.spacing[36])};
  border-radius: ${({ theme }) => (theme.borderRadius.default)};
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  margin-top: 0.3rem;
  align-items: center;
  width: auto;
  ${({ warning, theme }) => !warning && css`
    margin-top: ${theme.spacing[4]};
    margin-bottom: ${theme.spacing[4]};
  `}
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
`;

export const StyledIconContainer = styled.div`
  padding-right: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => (theme.colors.primary500)};
  ${({ warning, alert, theme }) => (alert && !warning) && css`
    color: ${theme.tag.altAlertTextColor};
  `}
  ${({ warning, alert, theme }) => (alert && warning) && css`
    color: ${theme.tag.alertTextColor};
  `}
`;

export const StyledTagP = styled.p`
  color: ${({ theme }) => (theme.colors.primary500)};
  ${({ warning, alert, theme }) => (alert && warning) && css`
    color: ${theme.tag.alertTextColor};
  `}
  ${({ warning, alert, theme }) => (alert && !warning) && css`
    color: ${theme.tag.altAlertTextColor};
  `}
`;

export const StyledTagButton = styled.button`
  color: ${({ theme }) => (theme.colors.primary500)};
  ${({ warning, alert, theme }) => (alert && warning) && css`
    color: ${theme.tag.alertTextColor};
  `}
  ${({ warning, alert, theme }) => (alert && !warning) && css`
    color: ${theme.tag.altAlertTextColor};
  `}
  margin-top: 2px;
`;

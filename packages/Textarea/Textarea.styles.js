import styled, { css } from 'styled-components';

export const StyledmaxlengthIndicator = styled.span`
  margin-right: ${({ theme }) => theme.spacing[4]};
`;

export const StyledTextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  display: block;
  padding: ${({ theme }) => theme.spacing[16]};
  border: ${({ theme }) => theme.borders.transparent};
  min-height: ${({ theme }) => theme.spacing[44]};
  font-size: ${({ theme }) => theme.fontSize.base};
  border: ${({ theme }) => theme.borders.component};
  &::placeholder {
    ${({ theme }) => ({ ...theme.placeholder })}
  }
  ${({ theme, isAutofill, disabled }) => isAutofill && !disabled && css`
    background: ${theme.colors.inputPrefilled};
  `}
  ${({
    theme, isAutofill, disabled,
  }) => (isAutofill && !disabled) && css`
    border: ${theme.borders.prefill};
  `}
  ${({ validation, textAreaRemainChars, theme }) => (validation || textAreaRemainChars < 0) && css`
    border: ${theme.borders.invalid};
  `}
  &:focus,
  &:hover {
    border: ${({ theme }) => theme.borders.hover};
  }
  ${({ disabled }) => disabled && css`
    opacity: ${({ theme }) => theme.opacity[50]};
  `}
`;

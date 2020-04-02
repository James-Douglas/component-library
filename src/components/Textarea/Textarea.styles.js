import styled, { css } from 'styled-components';

export const StyledmaxlengthIndicator = styled.span`
  margin-right: 0.4rem;
`;

export const StyledTextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  display: block;
  padding: 1.6rem;
  border: ${({ theme }) => theme.borders.transparent};
  min-height: ${({ theme }) => theme.spacing[44]};
  font-size: ${({ theme }) => theme.fontSize.base};

  &::placeholder {
    ${({ theme }) => ({ ...theme.placeholder })}
  }

  ${({ bordered, theme }) => bordered && css`
    border: ${theme.borders.component};
  `}
  ${({ theme, isAutofill, disabled }) => isAutofill && !disabled && css`
    background: ${theme.colors.inputPrefilled};
  `}
  ${({
    theme, bordered, isAutofill, disabled,
  }) => (bordered && isAutofill && !disabled) && css`
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
    opacity: 0.5;
  `}
`;

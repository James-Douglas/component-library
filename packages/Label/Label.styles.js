import styled, { css } from 'styled-components';

export const StyledLabelContainer = styled.div`
  position: relative;
  ${({ removeGutters }) => !removeGutters && css`
    margin-bottom: ${({ theme, inFieldLabel }) => (inFieldLabel ? 0 : theme.spacing[8])};
  `}
`;

export const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme, variant }) => (variant === 'default' ? theme.fontSize.base : theme.spacing[12])};
  color: ${({ theme }) => theme.label.color};
  display: flex;
  ${({
    theme, variant, breakpoint,
  }) => variant === 'compact' && css`
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.bold};
    letter-spacing: ${theme.spacing.px};
    font-size: ${breakpoint === 'lg' ? theme.fontSize.xs : theme.fontSize['2xs']};
    color: ${theme.colors.grey600};
  `}
    ${({
    theme, variant, breakpoint,
  }) => variant === 'description' && css`
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.grey700};
  `}
  ${({
    theme, inFieldLabel, breakpoint,
  }) => inFieldLabel && css`
    position: absolute;
    z-index: ${theme.zIndex[10]};
    visibility: hidden;
    padding-left: 9px;
    left: 0;
    text-transform: uppercase;
    color: ${theme.label.inField};
    font-weight: bold;
    font-size: ${breakpoint === 'lg' ? theme.fontSize.xs : theme.fontSize['2xs']};
    letter-spacing: 0.1em;
    line-height: 15px;
  `}
`;

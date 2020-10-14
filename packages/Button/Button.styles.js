import styled, { css } from 'styled-components';

export const StyledIcon = styled.div`
  pointer-events: none;
  display: inherit;
`;

const disabledStyles = css`
  cursor: not-allowed;
  background: ${({ theme }) => theme.button.disabledBackgound};
  color: ${({ theme }) => theme.button.disabledText};
  box-shadow: ${({ theme }) => theme.button.shadows.disabled};
  border: none;
  :hover {
    box-shadow: ${({ theme }) => theme.button.shadows.disabled};
    background: ${({ theme }) => theme.button.disabledBackgound};
  }
`;

const baseButtonStyles = css`
  font-family: ${({ theme }) => theme.fontFamily};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.tighter};
  box-shadow: ${({ theme }) => theme.button.shadows.default};
  border-radius: ${({ theme }) => theme.button.borderRadius};
  padding: ${({ theme }) => theme.spacing[16]};
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  transition: ${({ theme }) => theme.transition.default};
  font-weight: ${({ theme }) => theme.button.fontWeight};
  > ${StyledIcon} {
    margin-right: ${({ theme, iconButton }) => (iconButton ? 0 : theme.spacing[8])};
    ${({ theme, iconButton }) => iconButton && css`
    justify-content: center;
    min-width: ${theme.spacing[24]};
    `};
  }
  ${({ iconAlign, theme }) => iconAlign === 'right' && css`
    flex-direction: row-reverse;
    > ${StyledIcon} {
      margin-right: 0;
      margin-left: ${theme.spacing[8]};
    }
  `}
  :focus {
    outline: none;
  }
  :hover {
    box-shadow: ${({ theme }) => theme.button.shadows.hover};
  }
  :active, :focus {
    box-shadow: ${({ theme }) => theme.button.shadows.focused};
  }
`;

const heroVariant = css`
  color: ${({ theme }) => theme.button.hero.color};
  fill: ${({ theme }) => theme.button.hero.fill};
  background: ${({ theme }) => theme.button.hero.background};
  :hover {
    background: ${({ theme }) => theme.button.hero.backgroundHover};
  }
  ${({ inverted }) => inverted && css`
    background: ${({ theme }) => theme.button.hero.backgroundInverted};
    color: ${({ theme }) => theme.button.hero.colorInverted};
    fill: ${({ theme }) => theme.button.hero.fillInverted};
    box-shadow: ${({ theme }) => theme.button.shadows.default};
    :hover {
      background: ${({ theme }) => theme.button.hero.backgroundInvertedHover};
    }
  `}
`;

const primaryVariant = css`
  color: ${({ theme }) => theme.button.primary.color};
  fill: ${({ theme }) => theme.button.primary.fill};
  background: ${({ theme }) => theme.button.primary.background};
  :hover {
    background: ${({ theme }) => theme.button.primary.backgroundHover};
  }
  ${({ inverted }) => inverted && css`
    background: ${({ theme }) => theme.button.primary.backgroundInverted};
    color: ${({ theme }) => theme.button.primary.colorInverted};
    fill: ${({ theme }) => theme.button.primary.fillInverted};
    :hover {
      background: ${({ theme }) => theme.button.primary.backgroundInvertedHover};
    }
  `}
`;

const secondaryVariant = css`
  color: ${({ theme }) => theme.button.secondary.color};
  fill: ${({ theme }) => theme.button.secondary.fill};
  border: ${({ theme }) => theme.button.secondary.border};
  background: ${({ theme }) => theme.button.secondary.background};
  :hover {
    background: ${({ theme }) => theme.button.secondary.backgroundHover};
  }
  ${({ inverted }) => inverted && css`
    background: ${({ theme }) => theme.button.secondary.backgroundInverted};
    color: ${({ theme }) => theme.button.secondary.colorInverted};
    border: ${({ theme }) => theme.button.secondary.borderInverted};
    fill: ${({ theme }) => theme.button.secondary.fillInverted};
    :hover {
      background: ${({ theme }) => theme.button.secondary.backgroundInvertedHover};
    }
  `}
`;

const tertiaryVariant = css`
  box-shadow: none;
  padding: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.button.tertiary.color};
  fill: ${({ theme }) => theme.button.tertiary.fill};
  background: ${({ theme }) => theme.button.tertiary.background};
  :hover {
    background: ${({ theme }) => theme.button.tertiary.backgroundHover};
  }
  :focus {
    color: ${({ theme }) => theme.button.tertiary.colorhover};
    fill: ${({ theme }) => theme.button.tertiary.colorhover};
  }
`;

export const BaseTag = styled.div`
  ${baseButtonStyles}
  ${({ variant }) => {
    switch (variant) {
      case 'hero':
        return heroVariant;
      case 'primary':
        return primaryVariant;
      case 'secondary':
        return secondaryVariant;
      case 'tertiary':
        return tertiaryVariant;
      default:
        return heroVariant;
    }
  }}
  ${({ disabled, href }) => (disabled && !href) && disabledStyles};
`;

export const StyledButtonWrap = styled.span`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 100%;
  width: ${({ width }) => width};
  & {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

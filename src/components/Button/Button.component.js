import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIcon = styled.div`
  pointer-events: none;
  display: inherit;
`;

const shadowStyles = css`
  ${({ theme, variant }) => {
    const shadowTypes = ['primary', 'secondary', 'tertiary'];
    if (shadowTypes.includes(variant)) {
      return css`
        box-shadow: ${theme.button.shadows.default};
      `;
    }
    return null;
  }}
`;

const borderStyles = css`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const focusStyles = css`
  :focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.button.shadows.focused};
  }
`;

const disabledStyles = css`
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow:${({ theme }) => theme.button.shadows.disabled};
`;

const sizeStyles = {
  sm: css`
    min-height: 3.6rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.xs};
  `,
  md: css`
    min-width: 16rem;
    padding-top: ${({ theme }) => theme.spacing['4']};
    padding-bottom: ${({ theme }) => theme.spacing['4']};
  `,
  lg: css`
    min-width: 20rem;
    padding-top: ${({ theme }) => theme.spacing['20']};
    padding-bottom: ${({ theme }) => theme.spacing['20']};
  `,
};

const baseLinkStyles = css`
  color: ${({ theme }) => theme.button.link.color};
  fill: ${({ theme }) => theme.button.link.fill};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  > ${StyledIcon} {
    margin-left: 0;
    margin-right: ${({ theme }) => theme.spacing[8]};
    margin-top: 0.4rem;
  }
  ${({ iconAlignRight, theme }) => iconAlignRight && css`
    flex-direction: row-reverse;
    > ${StyledIcon} {
      margin-right: 0;
      margin-left: ${theme.spacing[8]};
      margin-top: 0.4rem;
    }
  `}
`;

const baseButtonStyles = css`
  ${shadowStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing[12]} ${theme.spacing[12]}`};
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-transform: Capitalize;
  transition : all 200ms ease-out;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  > ${StyledIcon} {
    margin-right: ${({ theme }) => theme.spacing[12]};
  }
  ${({ iconAlignRight, theme }) => iconAlignRight && css`
    flex-direction: row-reverse;
    > ${StyledIcon} {
      margin-right: 0;
      margin-left: ${theme.spacing[12]};
    }
  `}
  :focus {
    outline: none;
  }
`;

const primaryVariant = css`
  ${borderStyles}; 
  ${focusStyles};
  min-height: ${({ theme }) => theme.button.primary.minHeight};
  border: ${({ theme }) => theme.button.primary.border};
  background: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.color};
  fill: ${({ theme }) => theme.button.primary.fill};
  :hover {
    background: ${({ theme }) => theme.button.primary.backgroundHover};
  }
  line-height: ${({ theme }) => theme.lineHeight.snug};
  ${({ size }) => sizeStyles[size]}
`;

const secondaryVariant = css`
  ${borderStyles}; 
  ${focusStyles};
  background: ${({ theme }) => theme.button.secondary.background};
  border: ${({ theme }) => theme.button.secondary.border};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.button.secondary.color};
  fill: ${({ theme }) => theme.button.secondary.fill};
  min-height: ${({ theme }) => theme.button.secondary.minHeight};
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  line-height: ${({ theme }) => theme.lineHeight.snug};
  :hover {
    border: ${({ theme }) => theme.button.secondary.borderHover};
    fill: ${({ theme }) => theme.button.secondary.fillHover};
    color: ${({ theme }) => theme.button.secondary.colorHover};
  }
  ${({ darkMode, theme }) => darkMode && css`
    border: ${theme.button.secondary.borderDarkMode};
    :hover {
      border: ${theme.button.secondary.borderDarkMode};
    }
  `}
  ${({ size }) => sizeStyles[size]}
`;

const tertiaryVariant = css`
  ${borderStyles}; 
  ${focusStyles};
  background: ${({ theme }) => theme.button.tertiary.background};
  color: ${({ theme }) => theme.button.tertiary.color};
  fill: ${({ theme }) => theme.button.tertiary.fill};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-radius: ${({ theme }) => theme.button.tertiary.borderRadius};
  min-height: 3.4rem;
  line-height: ${({ theme }) => theme.lineHeight.snug};
  :hover {
    color: ${({ theme }) => theme.button.tertiary.colorHover};
    fill: ${({ theme }) => theme.button.tertiary.fillHover};
  }
  ${({ darkMode, theme }) => (darkMode) && css`
    background: ${theme.button.tertiary.backgroundDarkMode};
    border: ${theme.button.tertiary.borderDarkMode};
    color: ${theme.button.tertiary.colorDarkMode};
    fill: ${theme.button.tertiary.fillDarkMode};
    :hover {
      border-color: ${theme.button.tertiary.borderColorDarkMode};
      fill: ${theme.button.tertiary.fillDarkModeHover};
    }
  `}
  ${({ size }) => sizeStyles[size]}
`;

const textVariant = css`
  ${baseLinkStyles}
  padding: 0;
  border-radius: unset;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  :hover {
    color: ${({ theme }) => theme.button.text.colorHover};
    fill: ${({ theme }) => theme.button.text.fillHover};
  }
  ${({ darkMode, theme }) => darkMode && css`
    color: ${theme.button.text.colorDarkMode};
    fill: ${theme.button.text.fillDarkMode};
    :hover {
      color: ${theme.button.text.colorDarkModeHover};
      fill: ${theme.button.text.fillDarkModeHover};
    }
  `}
`;

const linkVariant = css`
  ${baseLinkStyles}
  padding: 0;
  border-radius: unset;
  margin-bottom: 0;
  text-decoration: underline;
  background: ${({ theme }) => theme.button.link.background};
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  :hover {
    color: ${({ theme }) => theme.button.link.colorHover};
    fill: ${({ theme }) => theme.button.link.fillHover};
  }
  ${({ theme, darkMode }) => (darkMode) && css`
    color: ${theme.button.link.colorDarkMode};
    fill: ${theme.button.link.fillDarkMode};
    :hover {
      color: ${theme.button.link.colorDarkModeHover};
      fill: ${theme.button.link.fillDarkModeHover};
    }
  `}
`;

const footerVariant = css`
  ${baseLinkStyles}
  padding: 0;
  text-align: left;
  border-radius: unset;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-decoration: none;
  display: block;
  margin-bottom: 1rem;
  :hover {
    color: ${({ theme }) => theme.button.footer.colorHover};
    text-decoration: underline;
  }
  ${({ darkMode, theme }) => (darkMode) && css`
    color: ${theme.button.footer.colorDarkMode};
    fill: ${theme.button.footer.fillDarkMode};
    :hover {
      color: ${theme.button.footer.colorDarkModeHover};
    }
  `}
`;

const BaseTag = styled.div`
  ${baseButtonStyles}
  
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return primaryVariant;
      case 'secondary':
        return secondaryVariant;
      case 'tertiary':
        return tertiaryVariant;
      case 'text':
        return textVariant;
      case 'link':
        return linkVariant;
      case 'footer-link':
        return footerVariant;
      default:
        return primaryVariant;
    }
  }}
  ${({ disabled }) => disabled && disabledStyles};
`;

const StyledButtonWrap = styled.span`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 100%;
  width: ${({ width }) => width};
  ${({ isInlineBlock }) => isInlineBlock && css`
    display: inline-block;
  `}
  ${({ isInlineBlock, variant }) => (isInlineBlock && variant === 'link') && css`
    width: auto;
  `}
`;

const Button = ({
  id,
  variant,
  darkMode,
  size,
  disabled,
  icon,
  iconSize,
  iconAlignRight,
  href,
  target,
  rel,
  handleClick,
  tagType,
  width,
  style,
  children,
}) => {
  const renderContent = () => {
    if (icon) {
      return (
        <>
          <StyledIcon>
            <FontAwesomeIcon icon={icon} size={iconSize} />
          </StyledIcon>
          {children}
        </>
      );
    }
    return <>{children}</>;
  };

  const renderButton = () => {
    const isButton = !href.length > 0;

    return (
      <ThemeProvider theme={getTheme()}>
        <BaseTag
          as={isButton ? 'button' : 'a'}
          onClick={handleClick}
          id={id}
          variant={variant}
          iconAlignRight={iconAlignRight}
          darkMode={darkMode}
          size={size}
          disabled={disabled}
          href={isButton ? null : href}
          target={isButton ? null : target}
          rel={isButton ? null : rel}
          type={isButton ? tagType : null}
          style={style}
        >
          {renderContent()}
        </BaseTag>
      </ThemeProvider>
    );
  };

  return (
    <StyledButtonWrap isInlineBlock={href && variant !== 'footer-link'} variant={variant} width={width}>
      {renderButton()}
    </StyledButtonWrap>
  );
};

Button.propTypes = {
  /**
   * Unique identifier for the button
   */
  id: PropTypes.string.isRequired,
  /**
   * The button/link contents
   */
  children: PropTypes.string,
  /**
   * Defines the type of button to be used. Defaults to `primary`. available types are `primary`, `secondary`,
   * `tertiary`, `text`, `link`, and `footer-link`.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text', 'link', 'footer-link']),
  /**
   * Defines the mode of the button. Change to `true` for `secondary`, `text`, `link` and `footer-link` to enable the
   * dark mode. `primary` does not have a `darkMode`.
   */
  darkMode: PropTypes.bool,
  /**
   * Defines the size of button to be used, `sm`, `md` and `lg`. Defaults to `md`.
   */
  size: PropTypes.string,
  /**
   * Defines if the button is disabled or not. Defaults to false.
   */
  disabled: PropTypes.bool,
  /**
   * The icon to be supplied with the button. Defaults to none.
   */
  icon: PropTypes.oneOfType([
    PropTypes.shape({
      prefix: PropTypes.string,
      iconName: PropTypes.string,
      icon: PropTypes.array,
    }),
    PropTypes.string,
  ]),
  /**
   * The icon sizing. Defaults to '2'
   */
  iconSize: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  /**
   * Shift the icon to the right, content to the left. Defaults to false.
   */
  iconAlignRight: PropTypes.bool,
  /**
   * Defines the `<a>` link. Defaults to `#`.
   */
  href: PropTypes.string,
  /**
   * Defines if the `<a>` should have a target attribute.
   */
  target: PropTypes.string,
  /**
   * Specifies the rel, for example "nofollow" can be supplied
   */
  rel: PropTypes.string,
  /**
   * Specifies the type attribute to add to a button tag
   */
  tagType: PropTypes.string,
  /**
   * Manually set the width of a button
   */
  width: PropTypes.string,
  /**
   * Overide the css with inline styles if needed
   */
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  /**
   * Pass the button a custom click function
   */
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  darkMode: false,
  size: 'md',
  children: '',
  disabled: false,
  icon: null,
  iconSize: '1x',
  iconAlignRight: false,
  href: '',
  target: '#',
  rel: '',
  tagType: '',
  style: {},
  width: '100%',
  handleClick: () => {},
};

export default Button;

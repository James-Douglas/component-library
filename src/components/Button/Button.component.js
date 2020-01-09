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
  ${(props) => {
    const shadowTypes = ['primary', 'secondary', 'tertiary'];
    if (shadowTypes.includes(props.variant)) {
      return css`
        box-shadow: ${props.theme.boxShadow.sm};
      `;
    }
    return null;
  }}
`;

const borderStyles = css`
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;

const focusStyles = css`
  :focus {
    outline: none;
    box-shadow: 0 0 2px 3px rgba(0, 123, 255, .3);
  }
`;

const disabledStyles = css`
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow: none;
`;

const sizeStyles = {
  sm: css`
    min-height: 3.6rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => props.theme.fontSize.xs};
  `,
  md: css`
    min-width: 16rem;
    padding-top: ${(props) => props.theme.spacing['4']};
    padding-bottom: ${(props) => props.theme.spacing['4']};
  `,
  lg: css`
    min-width: 20rem;
    padding-top: ${(props) => props.theme.spacing['20']};
    padding-bottom: ${(props) => props.theme.spacing['20']};
  `,
};

const baseLinkStyles = css`
  color: ${(props) => props.theme.colors.black};
  fill: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.relaxed};
  > ${StyledIcon} {
    margin-left: 0;
    margin-right: ${(props) => props.theme.spacing[8]};
    margin-top: 0.4rem;
  }
  ${(props) => props.iconAlignRight && css`
    flex-direction: row-reverse;
    > ${StyledIcon} {
      margin-right: 0;
      margin-left: ${props.theme.spacing[8]};
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
  padding: ${(props) => props.theme.spacing[12]} ${(props) => props.theme.spacing[12]};
  margin-bottom: ${(props) => props.theme.spacing[16]};
  font-size: ${(props) => props.theme.fontSize.lg};
  text-transform: Capitalize;
  transition : all 200ms ease-out;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  > ${StyledIcon} {
    margin-right: ${(props) => props.theme.spacing[12]};
  }
  ${(props) => props.iconAlignRight && css`
    flex-direction: row-reverse;
    > ${StyledIcon} {
      margin-right: 0;
      margin-left: ${props.theme.spacing[12]};
    }
  `}
  :focus {
    outline: none;
  }
`;

const primaryVariant = css`
  ${borderStyles}; 
  ${focusStyles};
  min-height: 5.4rem;
  border: 1px solid transparent;
  background: ${(props) => props.theme.colors.secondaryDarker};
  color: ${(props) => props.theme.colors.white};
  fill: ${(props) => props.theme.colors.white};
  :hover {
    background: ${(props) => props.theme.colors.secondaryDark};
  }
  line-height: ${(props) => props.theme.lineHeight.snug};
  ${(props) => sizeStyles[props.size]}
`;

const secondaryVariant = css`
  ${borderStyles}; 
  ${focusStyles};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.primaryAA};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  color: ${(props) => props.theme.colors.primaryAA};
  fill: ${(props) => props.theme.colors.primaryAA};
  min-height: 4.4rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  line-height: ${(props) => props.theme.lineHeight.snug};
  :hover {
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
    fill: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.primaryLight};
  }
  ${(props) => props.darkMode && css`
    border: 1px solid transparent;
    :hover {
      border: 1px solid transparent;
    }
  `}
  ${(props) => sizeStyles[props.size]}
`;

const tertiaryVariant = css`
  ${borderStyles}; 
  ${focusStyles};
  background: ${(props) => props.theme.colors.blueDark};
  color: ${(props) => props.theme.colors.white};
  fill: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-size: ${(props) => props.theme.fontSize.sm};
  border-radius: 0;
  min-height: 3.4rem;
  line-height: ${(props) => props.theme.lineHeight.snug};
  :hover {
    color: ${(props) => props.theme.colors.blueLighter};
    fill: ${(props) => props.theme.colors.blueLighter};
  }
  ${(props) => (props.darkMode) && css`
    background: ${props.theme.colors.white};
    border: 1px solid ${props.theme.colors.blueDark};
    color: ${props.theme.colors.blueDark};
    fill: ${props.theme.colors.blueDark};
    :hover {
      border-color: ${props.theme.colors.primaryLight};
      fill: ${props.theme.colors.primaryLight};
    }
  `}
  ${(props) => sizeStyles[props.size]}
`;

const textVariant = css`
  ${baseLinkStyles}
  padding: 0;
  border-radius: unset;
  text-decoration: none;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  :hover {
    color: ${(props) => props.theme.colors.primaryLight};
    fill: ${(props) => props.theme.colors.primaryLight};
  }
  ${(props) => props.darkMode && css`
    color: ${props.theme.colors.white};
    fill: ${props.theme.colors.white};
    :hover {
      color: ${props.theme.colors.blueLighter};
      fill: ${props.theme.colors.blueLighter};
    }
  `}
`;

const linkVariant = css`
  ${baseLinkStyles}
  padding: 0;
  border-radius: unset;
  margin-bottom: 0;
  text-decoration: underline;
  background: transparent;
  text-transform: underline;
  display: inline-block;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  :hover {
    color: ${(props) => props.theme.colors.primaryLight};
    fill: ${(props) => props.theme.colors.primaryLight};
  }
  ${(props) => (props.darkMode) && css`
    color: ${props.theme.colors.white};
    fill: ${props.theme.colors.white};
    :hover {
      color: ${props.theme.colors.blueLighter};
      fill: ${props.theme.colors.blueLighter};
    }
  `}
`;

const footerVariant = css`
  ${baseLinkStyles}
  padding: 0;
  text-align: left;
  border-radius: unset;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  text-decoration: none;
  display: block;
  margin-bottom: 1rem;
  :hover {
    color: ${(props) => props.theme.colors.black};
    text-decoration: underline;
  }
  ${(props) => (props.darkMode) && css`
    color: ${props.theme.colors.white};
    fill: ${props.theme.colors.white};
    :hover {
      color: ${props.theme.colors.white};
    }
  `}
`;

const BaseTag = styled.div`
  ${baseButtonStyles}
  
  ${(props) => {
    switch (props.variant) {
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
  ${(props) => props.disabled && disabledStyles};
`;

const StyledButtonWrap = styled.span`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 100%;
  width: ${(props) => props.width};
  ${(props) => props.isInlineBlock && css`
    display: inline-block;
  `}
  ${(props) => (props.isInlineBlock && props.variant === 'link') && css`
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

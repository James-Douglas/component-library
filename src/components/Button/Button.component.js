import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* ICONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const StyledIcon = styled.div`
  pointer-events: none;
  display: inherit;
`;

/* BUTTONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const StyledButtonWrap = styled.span`
 ${(props) => props.isInlineBlock && css`
    display: inline-block;
  `}
`;

const StyledButton = styled.button`
  box-shadow: ${(props) => props.theme.boxShadow.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 1.2rem ${(props) => props.theme.spacing[24]};
  margin-bottom: ${(props) => props.theme.spacing[16]};
  font-size: ${(props) => props.theme.fontSize.lg};
  text-transform: Capitalize;
  border: 2px solid transparent;
  min-height: 5.4rem;
  transition : all 200ms ease-out;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: ${(props) => props.theme.lineHeight.relaxed};
  > ${StyledIcon} {
    margin-right: ${(props) => props.theme.spacing[12]};
  }
  :focus {
    outline: none;
    box-shadow: 0 0 2px 3px rgba(0, 123, 255, .3);
  }
  ${(props) => props.iconAlignRight && css`
    flex-direction: row-reverse;
    > ${StyledIcon} {
      margin-right: 0;
      margin-left: ${props.theme.spacing[12]};
    }
  `}
  ${(props) => props.variant === 'primary' && css`
    background: ${props.theme.colors.secondaryDarker};
    color: ${props.theme.colors.white};
    fill: ${props.theme.colors.white};
    :hover {
      background: ${props.theme.colors.secondaryDark};
    }
  `}
  ${(props) => props.variant === 'secondary' && css`
    background: ${props.theme.colors.white};
    border: 1px solid ${props.theme.colors.primaryAA};
    font-weight: ${props.theme.fontWeight.semibold};
    color: ${props.theme.colors.primaryAA};
    fill: ${props.theme.colors.primaryAA};
    min-height: 4.4rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    :hover {
      border: 1px solid ${props.theme.colors.primaryLight};
      fill: ${props.theme.colors.primaryLight};
      color: ${props.theme.colors.primaryLight};
    }
  `}
  ${(props) => (props.variant === 'secondary' && props.darkMode) && css`
    border: 1px solid transparent;
    :hover {
      border: 1px solid transparent;
    }
  `}
  ${(props) => props.variant === 'tertiary' && css`
    background ${props.theme.colors.blueDark};
    color: ${props.theme.colors.white};
    fill: ${props.theme.colors.white};
    font-weight: ${props.theme.fontWeight.normal};
    font-size: ${props.theme.fontSize.sm};
    border-radius: 0;
    min-height: 2.8rem;
    :hover {
      color: ${props.theme.colors.blueLighter};
      fill: ${props.theme.colors.blueLighter};
    }
  `}
  ${(props) => (props.variant === 'tertiary' && props.darkMode) && css`
    background ${props.theme.colors.white};
    border: 1px solid ${props.theme.colors.blueDark};
    color: ${props.theme.colors.blueDark};
    fill: ${props.theme.colors.blueDark};
    :hover {
      border-color: ${props.theme.colors.primaryLight};
      fill: ${props.theme.colors.primaryLight};
    }
  `}

  ${(props) => props.size === 'lg' && css`
    width: 100%;
    min-width: 16rem;
  `}
  ${(props) => props.size === 'md' && css`
    min-width: 16rem;
    padding-top: ${props.theme.spacing['4']};
    padding-bottom: ${props.theme.spacing['4']};
  `}
  ${(props) => props.size === 'sm' && css`
    max-width: 12rem;
    min-height: 3.6rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    font-weight: ${props.theme.fontWeight.bold};
    font-size: ${props.theme.fontSize.xs};
  `}
  ${(props) => props.disabled && css`
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
  `}
`;

/* LINK BUTTONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const StyledAnchor = styled.a`
  display: flex;
  text-transform: Capitalize;
  transition : all 200ms ease-out;
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
  ${(props) => props.variant === 'text' && css`
    text-decoration: none;
    font-weight: ${props.theme.fontWeight.semibold};
    :hover {
      color: ${props.theme.colors.primaryLight};
      fill: ${props.theme.colors.primaryLight};
    }
  `}
  ${(props) => (props.variant === 'text' && props.darkMode) && css`
    color: ${props.theme.colors.white};
    fill: ${props.theme.colors.white};
    :hover {
      color: ${props.theme.colors.blueLighter};
      fill: ${props.theme.colors.blueLighter};
    }
  `}
  ${(props) => props.variant === 'link' && css`
    background: transparent;
    text-transform: underline;
    display: inline-block;
    font-weight: ${props.theme.fontWeight.semibold};
    :hover {
      color: ${props.theme.colors.primaryLight};
      fill: ${props.theme.colors.primaryLight};
    }
  `}
  ${(props) => (props.variant === 'link' && props.darkMode) && css`
    color: ${props.theme.colors.white};
    fill: ${props.theme.colors.white};
    :hover {
      color: ${props.theme.colors.blueLighter};
      fill: ${props.theme.colors.blueLighter};
    }
  `}
  ${(props) => props.variant === 'footer-link' && css`
    font-size: ${props.theme.fontSize.sm};
    font-weight: ${props.theme.fontWeight.semibold};
    text-decoration: none;
    display: block;
    margin-bottom: 1rem;
    :hover {
      color: ${props.theme.colors.black};
      text-decoration: underline;
    }
  `}
  ${(props) => (props.variant === 'footer-link' && props.darkMode) && css`
    color: ${props.theme.colors.white};
    fill: ${props.theme.colors.white};
    :hover {
      color: ${props.theme.colors.white};
    }
  `}
  ${(props) => props.disabled && css`
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
  `}
`;

/* BUTTON COMPONENT
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const Button = ({
  id,
  variant,
  darkMode,
  size,
  content,
  disabled,
  icon,
  iconSize,
  iconAlignRight,
  href,
  target,
  rel,
  handleClick,
  tagType,
}) => {
  const renderContent = () => {
    if (icon) {
      return (
        <>
          <StyledIcon>
            <FontAwesomeIcon icon={icon} size={iconSize} />
          </StyledIcon>
          {content}
        </>
      );
    }
    return <>{content}</>;
  };

  const renderButton = () => {
    const isButton = ['primary', 'secondary', 'tertiary'].includes(variant);
    const Tag = isButton ? StyledButton : StyledAnchor;

    return (
      <ThemeProvider theme={getTheme()}>
        <Tag
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
        >
          {renderContent()}
        </Tag>
      </ThemeProvider>
    );
  };
  return (
    <StyledButtonWrap isInlineBlock={href && variant !== 'footer-link'}>
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
   * Defines the type of button to be used, applied as a class. Defaults to `primary`, other valid types are `secondary`,
   * `text`, `link`, and `footer-link`
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
   * The button text. Can render html if required.
   */
  content: PropTypes.string,
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
   * Pass the button a custom click function
   */
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  darkMode: false,
  size: 'md',
  content: '',
  disabled: false,
  icon: null,
  iconSize: '1x',
  iconAlignRight: false,
  href: '',
  target: '#',
  rel: '',
  tagType: '',
  handleClick: () => {},
};

export default Button;

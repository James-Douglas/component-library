import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIcon = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  text-transform: Capitalize;
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
    margin-right: ${({ theme }) => theme.spacing[8]};
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
  background: ${({ theme }) => theme.button.hero.bg};
  :hover {
    background: ${({ theme }) => theme.button.hero.bgHover};
  }
  ${({ inverted }) => inverted && css`
    background: ${({ theme }) => theme.button.hero.bgInverted};
    color: ${({ theme }) => theme.button.hero.colorInverted};
    fill: ${({ theme }) => theme.button.hero.fillInverted};
    box-shadow: ${({ theme }) => theme.button.shadows.default};
    :hover {
      background: ${({ theme }) => theme.button.hero.bginvertedHover};
    }
  `}
`;

const primaryVariant = css`
  color: ${({ theme }) => theme.button.primary.color};
  fill: ${({ theme }) => theme.button.primary.fill};
  background: ${({ theme }) => theme.button.primary.bg};
  :hover {
    background: ${({ theme }) => theme.button.primary.bgHover};
  }
  ${({ inverted }) => inverted && css`
    background: ${({ theme }) => theme.button.primary.bgInverted};
    color: ${({ theme }) => theme.button.primary.colorInverted};
    fill: ${({ theme }) => theme.button.primary.fillInverted};
    :hover {
      background: ${({ theme }) => theme.button.primary.bgInvertedHover};
    }
  `}
`;

const secondaryVariant = css`
  color: ${({ theme }) => theme.button.secondary.color};
  fill: ${({ theme }) => theme.button.secondary.fill};
  border: ${({ theme }) => theme.button.secondary.border};
  background: ${({ theme }) => theme.button.secondary.bg};
  :hover {
    background: ${({ theme }) => theme.button.secondary.bgHover};
  }
  ${({ inverted }) => inverted && css`
    background: ${({ theme }) => theme.button.secondary.bgInverted};
    color: ${({ theme }) => theme.button.secondary.colorInverted};
    border: ${({ theme }) => theme.button.secondary.borderInverted};
    fill: ${({ theme }) => theme.button.secondary.fillInverted};
    :hover {
      background: ${({ theme }) => theme.button.secondary.bgInvertedHover};
    }
  `}
`;

const tertiaryVariant = css`
  box-shadow: none;
  padding: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.button.tertiary.color};
  fill: ${({ theme }) => theme.button.tertiary.fill};
  background: ${({ theme }) => theme.button.tertiary.bg};
  :hover {
    background: ${({ theme }) => theme.button.tertiary.bgHover};
  }
  :focus {
    color: ${({ theme }) => theme.button.tertiary.colorhover};
    fill: ${({ theme }) => theme.button.tertiary.colorhover}; 
  }
`;

const BaseTag = styled.div`
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

const StyledButtonWrap = styled.span`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 100%;
  width: ${({ width }) => width};
`;

const Button = ({
  id,
  variant,
  inverted,
  disabled,
  icon,
  iconAlign,
  href,
  target,
  rel,
  handleClick,
  tagType,
  width,
  style,
  children,
  className,
}) => {
  const renderContent = () => {
    if (icon) {
      return (
        <>
          <StyledIcon>
            <FontAwesomeIcon icon={icon} size="1x" />
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
      <BaseTag
        as={isButton ? 'button' : 'a'}
        onClick={handleClick}
        id={id}
        variant={variant}
        iconAlign={iconAlign}
        inverted={inverted}
        disabled={disabled}
        href={isButton ? null : href}
        target={isButton ? null : target}
        rel={isButton ? null : rel}
        type={isButton ? tagType : null}
        style={style}
        className={className}
      >
        {renderContent()}
      </BaseTag>
    );
  };

  return (
    <StyledButtonWrap variant={variant} width={width}>
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
  variant: PropTypes.oneOf(['hero', 'primary', 'secondary', 'tertiary']),
  /**
   * Inverts the button. Tertiary doesn't have an inverted mode as its a ghost button
   */
  inverted: PropTypes.bool,
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
   * Shift the icon to the right, content to the left. Defaults to false.
   */
  iconAlign: PropTypes.oneOf(['left', 'right']),
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
   * Classes to be applied to the Button component
   */
  className: PropTypes.string,
  /**
   * Pass the button a custom click function
   */
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'hero',
  inverted: false,
  children: '',
  disabled: false,
  icon: null,
  iconAlign: 'left',
  href: '',
  target: '#',
  rel: '',
  tagType: '',
  style: {},
  width: '100%',
  handleClick: null,
  className: '',
};

export default Button;

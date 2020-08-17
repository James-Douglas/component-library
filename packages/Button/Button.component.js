import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import {
  StyledIcon,
  BaseTag,
  StyledButtonWrap,
} from './Button.styles';

const Button = ({
  id: propsId,
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
  theme,
}) => {
  const id = useId(propsId);
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
    <ManorProvider theme={theme}>
      <StyledButtonWrap variant={variant} width={width}>
        {renderButton()}
      </StyledButtonWrap>
    </ManorProvider>
  );
};

Button.propTypes = {
  /**
   * Unique identifier for the button
   */
  id: PropTypes.string,
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
      icon: PropTypes.array, // eslint-disable-line
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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Button.defaultProps = {
  id: null,
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
  theme: undefined,
};

export default Button;

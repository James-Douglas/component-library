import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import {
  StyledIcon,
  BaseTag,
  StyledButtonWrap,
} from './Button.styles';

const Button = ({
  trackingLabel,
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
  iconButton,
}) => {
  const id = useId(propsId);
  const { trackInteraction } = useContext(ManorContext);

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

  const clickHandler = useCallback((e) => {
    trackInteraction('Click', 'Button', variant, trackingLabel, trackingLabel);
    if (handleClick) {
      handleClick(e);
    }
  }, [handleClick, trackingLabel, trackInteraction, variant]);

  const renderButton = () => {
    const isButton = !href.length > 0;
    return (
      <BaseTag
        as={isButton ? 'button' : 'a'}
        onClick={clickHandler}
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
        iconButton={iconButton}
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
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   * Unique identifier for the button
   */
  id: PropTypes.string,
  /**
   * The button/link contents
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
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
   * The FontAwesome icon to be supplied with the button. Defaults to none.
   */
  icon: PropTypes.oneOfType([
    PropTypes.object, // eslint-disable-line
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
  /**
   * Sets whether the button is purely icon only
   */
  iconButton: PropTypes.bool,
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
  iconButton: false,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.component';
import styles from './styles';

const Button = ({
  id, type, onDark, size, content, disabled, icon, iconSize, iconAlignRight, href, target, rel, handleClick,
}) => {
  const isInlineBlock = href && type !== 'footer-link' ? 'inline-block' : '';

  const renderContent = () => {
    if (icon) {
      return (
        <>
          <style jsx>{styles}</style>
          <div className="btn-icon">
            <Icon name={icon} size={iconSize} />
          </div>
          {content}
        </>
      );
    }
    return <>{content}</>;
  };

  const renderButton = () => {
    const isButton = type === 'primary' || type === 'secondary' || type === 'tertiary';
    const Tag = isButton ? 'button' : 'a';

    return (
      <>
        <style jsx>{styles}</style>
        <Tag
          onClick={handleClick}
          id={id}
          className={`
            manor-rich-text 
            ${size}
            ${type}
            ${isButton ? 'manor-button' : 'manor-button-link'} 
            ${onDark ? 'onDark' : ''}
            ${content === '' ? 'center' : ''}
            ${iconAlignRight ? 'align-right' : ''}
          `}
          disabled={disabled}
          href={isButton ? null : href}
          target={isButton ? null : target}
          rel={isButton ? null : rel}
        >
          {renderContent()}
        </Tag>
      </>
    );
  };

  return (
    <>
      <style jsx>{styles}</style>
      <span className={`manor-button-wrap ${isInlineBlock}`}>
        {renderButton()}
      </span>
    </>
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
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text', 'link', 'footer-link']),
  /**
   * Defines the mode of the button. Change to `true` for `secondary`, `text`, `link` and `footer-link` to enable the
   * dark mode. `primary` does not have a `onDark` mode.
   */
  onDark: PropTypes.bool,
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
  icon: PropTypes.string,
  /**
   * The icon sizing. Defaults to '2'
   */
  iconSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
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
   * Pass the button a custom click function
   */
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  onDark: false,
  size: 'md',
  content: '',
  disabled: false,
  icon: '',
  iconSize: 2,
  iconAlignRight: false,
  href: '',
  target: '#',
  rel: '',
  handleClick: () => {},
};

export default Button;

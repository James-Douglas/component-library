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
            <Icon name={icon} iconSize={iconSize} />
          </div>
          {content}
        </>
      );
    }
    return <>{content}</>;
  };

  const renderButton = () => {
    const isButton = type === 'primary' || type === 'secondary';
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
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  onDark: PropTypes.bool,
  size: PropTypes.string,
  content: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  iconAlignRight: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
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

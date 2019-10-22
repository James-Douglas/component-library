import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.component';
import styles from './styles';

const Button = ({
  id, btnType, btnMode, btnSize, content, disabled, icon, size, iconAlignRight, href, target, rel, handleClick,
}) => {
  const isInlineBlock = href && btnType !== 'footer-link' ? 'inline-block' : '';

  const renderContent = () => {
    if (icon) {
      return (
        <>
          <style jsx>{styles}</style>
          <div className="btn-icon">
            <Icon name={icon} size={size} />
          </div>
          {content}
        </>
      );
    }
    return <>{content}</>;
  };

  const renderButton = () => {
    const isButton = btnType === 'primary' || btnType === 'secondary';
    const Tag = isButton ? 'button' : 'a';

    return (
      <>
        <style jsx>{styles}</style>
        <Tag
          onClick={handleClick}
          id={id}
          className={`
            manor-rich-text 
            ${btnSize}
            ${btnType}
            ${isButton ? 'manor-button' : 'manor-button-link'} 
            ${btnMode ? `${btnMode}` : ''}
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
  btnType: PropTypes.string,
  btnMode: PropTypes.string,
  btnSize: PropTypes.string,
  content: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  size: PropTypes.oneOfType([
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
  btnType: 'primary',
  btnMode: '',
  btnSize: 'md',
  content: '',
  disabled: false,
  icon: '',
  size: 2,
  iconAlignRight: false,
  href: '',
  target: '#',
  rel: '',
  handleClick: () => {},
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.component';
import styles from './Button.module.css';

const Button = ({
  id, btnType, btnMode, btnSize, content, disabled, icon, size, iconAlignRight, href, target,
}) => {
  const isInlineBlock = href && btnType !== 'footer-link' ? 'inline-block' : '';

  const renderIcon = () => {
    let btnIcon;
    if (icon) {
      btnIcon = (
        <>
          {!iconAlignRight
        && <>{content}</>}
          <div className={`${styles['btn-icon']}`}>
            <Icon name={icon} size={size} />
          </div>
          {iconAlignRight
        && <>{content}</>}
        </>
      );
    } else {
      btnIcon = <>{content}</>;
    }
    return btnIcon;
  };

  const renderButton = () => {
    let btn;

    if (btnType === 'primary' || btnType === 'secondary') {
      btn = (
        <button
          id={id}
          btntype={btnType}
          btnmode={btnMode}
          className={`
          ${styles['manor-button']} 
          ${styles[btnSize]}
          ${content === '' ? styles.center : ''}
        `}
          disabled={disabled}
          type="button"
        >
          {renderIcon()}
        </button>
      );
    } else {
      btn = (
        <a
          id={id}
          btntype={btnType}
          btnmode={btnMode}
          href={href}
          target={target}
          disabled={disabled}
          className={`
          ${styles['manor-button-link']}
          ${content === '' ? styles.center : ''}
        `}
        >
          {renderIcon()}
        </a>
      );
    }
    return btn;
  };


  return (
    <span className={`manor-button-wrap ${isInlineBlock}`}>
      {renderButton()}
    </span>
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
  target: '',
};

export default Button;

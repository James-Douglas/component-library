import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.component';
import styles from './Button.module.css';

const Button = ({
  id, btnType, btnMode, btnSize, content, disabled, icon, size, iconAlignRight, href, target,
}) => (
  <span className={`manor-button-wrap ${href && btnType !== 'footer-link' ? 'inline-block' : ''} `}>
    {btnType === 'primary' || btnType === 'secondary'
      ? (
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
          {icon
            ? (
              <>
                {!iconAlignRight
                && <>{content}</>}
                <div className={`${styles['btn-icon']}`}>
                  <Icon name={icon} size={size} />
                </div>
                {iconAlignRight
                && <>{content}</>}
              </>
            )
            : (
              <>{content}</>
            )}

        </button>
      )

      : (
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
          {icon
            ? (
              <>
                {!iconAlignRight
                && <>{content}</>}
                <div className={`${styles['btn-icon']}`}>
                  <Icon name={icon} size={size} />
                </div>
                {iconAlignRight
                && <>{content}</>}
              </>
            )
            : (
              <>{content}</>
            )}
          {(target === '_blank' || target === 'blank')
            && <span className="sr-only">Opens in new window</span>}
        
        </a>
      )}
  </span>
);

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

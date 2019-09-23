import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.component';
import styles from './Button.module.css';

const Button = ({
  id, btnType, btnMode, btnSize, content, disabled, icon, size, iconAlignRight, href, target, rel,
}) => {
  const isInlineBlock = href && btnType !== 'footer-link' ? 'inline-block' : '';

  const renderContent = () => {
    if (icon) {
      return (
        <>
          <div className={`${styles['btn-icon']}`}>
            <Icon name={icon} size={size} />
          </div>
          {content}
        </>
      );
    } else {
      return <>{content}</>;
    }
  };

  const renderButton = () => {

    const isButton = btnType === 'primary' || btnType === 'secondary';
    const Tag = isButton ? 'button' : 'a';

    return ( 
      <Tag
        id={id}
        className={`
          ${styles[`${isButton ? 'manor-button': 'manor-button-link'}`]} 
          ${styles[btnSize]}
          ${styles[btnType]}
          ${styles[btnMode]}
          ${content === '' ? styles.center : ''}
          ${styles[`${iconAlignRight ? 'align-right' : ''}`]}
        ` 
      }
        disabled={disabled}
        href={ isButton ? null: href}
        target={isButton ? null : target}
        rel={isButton ? null : rel}
      >
        {renderContent()}
    </Tag>
  );
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
  rel: PropTypes.string,
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
  rel: '',
};

export default Button;

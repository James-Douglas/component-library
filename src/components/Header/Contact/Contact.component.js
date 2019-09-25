import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';
import Icon from '../../Icon/Icon.component';
import useIsDesktop from '../../../hooks/useIsDesktop';


const Contact = ({ number, size }) => {
  const mobileLabel = useIsDesktop() ? number : 'Need help?';
  const mobileClassName = !useIsDesktop() ? 'mobile' : '';
  return (
    <div>
      <a className={`${styles[size]} ${styles[mobileClassName]} ${styles.contact}`} href={`tel:${number}`} target="link-target">
        <span className={`${styles['mx-4']}`}><Icon name="contact" size={2} /></span>
        { mobileLabel }
      </a>
      <iframe title="link iframe" name="link-target" className={`${styles['link-iframe']}`} />
    </div>
  );
};

Contact.propTypes = {
  number: PropTypes.string,
  size: PropTypes.string,
};

Contact.defaultProps = {
  number: '1800 123 456',
  size: 'large',
};


export default Contact;

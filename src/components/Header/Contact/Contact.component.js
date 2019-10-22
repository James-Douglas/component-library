import React from 'react';
import PropTypes from 'prop-types';
import useIsDesktop from 'hooks/useIsDesktop';
import styles from './styles';
import Icon from '../../Icon/Icon.component';


const Contact = ({ number, size }) => {
  const isDesktop = useIsDesktop();
  const mobileLabel = isDesktop ? number : 'Need help?';
  const mobileClassName = !isDesktop ? 'mobile' : '';
  return (
    <div>
      <style jsx>{styles}</style>
      <a className={`contact ${size} ${mobileClassName}`} href={`tel:${number}`} target="link-target">
        <span className="mx-4"><Icon name="contact" iconSize={2} /></span>
        { mobileLabel }
      </a>
      <iframe title="link iframe" name="link-target" className="link-iframe" />
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

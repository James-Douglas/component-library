import React from 'react';
import PropTypes from 'prop-types';
import useIsDesktop from 'hooks/useIsDesktop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/pro-regular-svg-icons/faPhone';
import { StyledContact, StyledIconWrap, StylesdIframe } from './Contact.styles';

const Contact = ({ number, size }) => {
  const isDesktop = useIsDesktop();
  return (
    <>
      <StyledContact isDesktop={isDesktop} size={size} href={`tel:${number}`} target="link-target">
        <StyledIconWrap>
          <FontAwesomeIcon icon={faPhone} size="sm" />
        </StyledIconWrap>
        { isDesktop && number }
      </StyledContact>
      <StylesdIframe title="link iframe" name="link-target" />
    </>
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

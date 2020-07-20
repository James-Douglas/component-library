import React from 'react';
import PropTypes from 'prop-types';
import { useIsDesktop } from '@comparethemarketau/manor-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/pro-regular-svg-icons/faPhone';
import { StyledContact, StyledIconWrap, StyledIframe } from './Contact.styles';

const Contact = ({ number, size, contactStrip }) => {
  const isDesktop = useIsDesktop();
  return (
    <>
      <StyledContact isDesktop={isDesktop} contactStrip={contactStrip} size={size} href={`tel:${number}`} target="link-target">
        <StyledIconWrap>
          <FontAwesomeIcon icon={faPhone} size="xs" flip="horizontal" />
        </StyledIconWrap>
        { (isDesktop || contactStrip) && number }
      </StyledContact>
      <StyledIframe title="link iframe" name="link-target" />
    </>
  );
};

Contact.propTypes = {
  number: PropTypes.string,
  size: PropTypes.string,
  contactStrip: PropTypes.bool,
};

Contact.defaultProps = {
  number: '1800 123 456',
  size: 'large',
  contactStrip: false,
};

export default Contact;

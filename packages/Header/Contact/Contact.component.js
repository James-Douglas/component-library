import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/pro-regular-svg-icons/faPhone';
import { StyledContact, StyledIconWrap, StyledIframe } from './Contact.styles';

const Contact = ({
  number, size, contactStrip, iconSize,
}) => {
  const { isDesktop, trackInteraction } = useContext(ManorContext);

  const trackContactClick = () => trackInteraction('Click', 'Header', 'Contact', '', '');

  return (
    <>
      <StyledContact onClick={trackContactClick} isDesktop={isDesktop} contactStrip={contactStrip} size={size} href={`tel:${number}`} target="link-target">
        <StyledIconWrap>
          <FontAwesomeIcon icon={faPhone} size={iconSize} flip="horizontal" />
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
  iconSize: PropTypes.string,
  contactStrip: PropTypes.bool,
};

Contact.defaultProps = {
  number: '1800 123 456',
  size: 'large',
  iconSize: 'xs',
  contactStrip: false,
};

export default Contact;

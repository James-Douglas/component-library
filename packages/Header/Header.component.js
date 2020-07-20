import React from 'react';
import PropTypes from 'prop-types';
import { useIsDesktop } from '@comparethemarketau/manor-hooks';
import Contact from './Contact/Contact.component';
import {
  StyledAdditionalContent,
  StyledHeader,
  StyledContactStrip,
  StyledText,
} from './Header.styles';

const Header = ({
  isSticky, stuck, number, logo, contactStrip, authui,
}) => {
  const desktop = useIsDesktop();
  const size = (stuck || !desktop) ? 'small' : 'large';

  return (
    <>
      <StyledHeader stuck={stuck} isSticky={isSticky} desktop={desktop}>
        {React.cloneElement(logo, { size })}
        <StyledAdditionalContent>
          {(number && !contactStrip)
          && <Contact number={number} size={size} />}
          {authui
          && <div id="auth-ui" />}
        </StyledAdditionalContent>

      </StyledHeader>
      {(number && contactStrip)
        && (
        <StyledContactStrip isSticky={isSticky} desktop={desktop}>
          <StyledText>Looking for help?</StyledText>
          <Contact number={number} contactStrip />
        </StyledContactStrip>
        )}
    </>
  );
};

Header.propTypes = {
  /**
   * Defines if the header is sticky via boolean (used by StickyHeader)
   */
  isSticky: PropTypes.bool,
  /**
   * Defines the sizing of the logo and number depending on the stuck prop (used by StickyHeader)
   */
  stuck: PropTypes.bool,
  /**
   * Defines if the header displays a number on the right-hand side of the Header
   */
  number: PropTypes.string,
  /**
   * The Logo component to be rendered
   */
  logo: PropTypes.node.isRequired,
  /**
   * Render the contact strip
   */
  contactStrip: PropTypes.bool,
  /**
   * Div for authui micro ui
   */
  authui: PropTypes.node,
};

Header.defaultProps = {
  isSticky: false,
  stuck: false,
  number: '',
  contactStrip: false,
  authui: null,
};

export default Header;

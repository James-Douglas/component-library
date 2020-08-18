import React from 'react';
import PropTypes from 'prop-types';
import { MicroUIComponent } from '@sackrin/react-micro-ui-hooks/lib/Components';
import { useIsDesktop } from '@comparethemarketau/manor-hooks';
import { Typography } from '@comparethemarketau/manor-typography';
import Contact from './Contact/Contact.component';
import {
  StyledAdditionalContent,
  StyledHeader,
  StyledContactStrip,
  StyledText,
} from './Header.styles';

const Header = ({
  isSticky, stuck, number, logo, contactStrip, authuiURL,
}) => {
  const desktop = useIsDesktop();
  const size = (stuck || !desktop) ? 'small' : 'large';

  return (
    <>
      <StyledHeader stuck={stuck} isSticky={isSticky} desktop={desktop} authuiURL={authuiURL}>
        {React.cloneElement(logo, { size })}
        <StyledAdditionalContent>
          {(number && !contactStrip)
          && <Contact number={number} size={size} iconSize={!desktop ? 'lg' : 'xs'} authuiURL={authuiURL} />}
          {authuiURL
          && (
          <MicroUIComponent
            microUi={{
              url: authuiURL,
              library: 'customerAccountsMicroUI',
              name: 'AuthHeader',
            }}
            visible="true"
            id="auth"
          />
          )}
        </StyledAdditionalContent>

      </StyledHeader>
      {(number && contactStrip)
        && (
        <StyledContactStrip isSticky={isSticky} desktop={desktop}>
          <StyledText><Typography variant="body1">Looking for help?</Typography></StyledText>
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
   * URL for micro component to be loaded
   */
  authuiURL: PropTypes.string,
};

Header.defaultProps = {
  isSticky: false,
  stuck: false,
  number: '',
  contactStrip: false,
  authuiURL: null,
};

export default Header;

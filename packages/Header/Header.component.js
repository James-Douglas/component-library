import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MicroUIComponent } from '@sackrin/react-micro-ui/lib/Components';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { Typography } from '@comparethemarketau/manor-typography';
import Contact from './Contact/Contact.component';
import {
  StyledAdditionalContent,
  StyledHeader,
  StyledContactStrip,
  StyledText,
} from './Header.styles';

const Header = ({
  isSticky, stuck, number, logo, contactStrip, authuiURL, authuiComponentName, doSignOutSuccess, authVerifyMobile, microUIProps, bgColor, justify,
}) => {
  const { isDesktop } = useContext(ManorContext);
  const size = (stuck || !isDesktop) ? 'small' : 'large';

  return (
    <>
      <StyledHeader stuck={stuck} isSticky={isSticky} desktop={isDesktop} authuiURL={authuiURL} bgColor={bgColor} justify={justify}>
        {React.cloneElement(logo, { size })}
        <StyledAdditionalContent>
          {(number && !contactStrip)
          && <Contact number={number} size={size} iconSize={!isDesktop ? 'lg' : 'xs'} authuiURL={authuiURL} />}
          {authuiURL
          && (
          <MicroUIComponent
            microUi={{
              url: authuiURL,
              library: 'customerAccountsMicroUI',
              name: authuiComponentName,
            }}
            visible="true"
            id="auth"
            doSignOutSuccess={doSignOutSuccess}
            microUIProps={microUIProps}
            verifyMobile={authVerifyMobile}
          />
          )}
        </StyledAdditionalContent>

      </StyledHeader>
      {(number && contactStrip)
        && (
        <StyledContactStrip isSticky={isSticky} desktop={isDesktop}>
          <StyledText><Typography variant="body1">Looking for help?</Typography></StyledText>
          <Contact number={number} contactStrip />
        </StyledContactStrip>
        )}
    </>
  );
};

Header.propTypes = {
  /**
   * Defines the placement of items inside the header component
   */
  justify: PropTypes.string,
  /**
   * Defines the background color of component
   */
  bgColor: PropTypes.string,
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
  /**
   * Name of the micro component to be loaded
   */
  authuiComponentName: PropTypes.string,
  /**
   * Callback when the auth header successfully signs out
   */
  doSignOutSuccess: PropTypes.func,
  /**
   * Should we ask the user to verify their mobile on sign in or sign up
   */
  authVerifyMobile: PropTypes.bool,
  /**
   * If anything is needed to be passed on to the MicroUI, use this.
   */
  // eslint-disable-next-line react/forbid-prop-types
  microUIProps: PropTypes.any,
};

Header.defaultProps = {
  bgColor: '',
  justify: 'space-between',
  isSticky: false,
  stuck: false,
  number: '',
  contactStrip: false,
  authuiURL: null,
  authuiComponentName: 'AuthHeader',
  doSignOutSuccess: null,
  authVerifyMobile: false,
  microUIProps: null,
};

export default Header;

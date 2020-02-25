import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Logo from '../Logo/Logo.component';
import Contact from './Contact/Contact.component';
import { picturePropTypes } from '../Picture/Picture.component';
import logoDesktop from '../../images/ctm-logo-desktop.svg';
import screens from '../../../config/screens';
import logoMobile from '../../images/ctm-logo-mobile.svg';

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  background: ${({ theme }) => (theme.header.background)};
  z-index: ${({ theme }) => (theme.zIndex[50])};
  height: ${({ theme, stuck }) => (stuck ? theme.header.heightStuck : theme.header.height)};
  transition: ${({ stuck }) => (stuck ? 'all 200ms ease' : 'none')};
  box-shadow: ${({ stuck }) => (stuck ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : 'none')};
  ${({ isSticky }) => isSticky && css`
    position: fixed;
  `};
  left: 0;
  padding-left: ${({ theme }) => theme.spacing[16]};
  padding-right: ${({ theme }) => theme.spacing[16]};
  top: ${({ isSticky }) => (isSticky ? '0' : 'inherit')};
  justify-content: space-between;
  align-items: center;
`;

const StyledAdditionalContent = styled.div`
  display: flex;
  height: 100%;
`;

const Header = ({
  isSticky, stuck, number, logoLink, logoPicture,
}) => {
  const size = stuck ? 'small' : 'large';
  return (
    <StyledHeader stuck={stuck} isSticky={isSticky}>
      <Logo size={size} link={logoLink} logoPicture={logoPicture} />
      <StyledAdditionalContent>
        {number && <Contact number={number} size={size} />}
      </StyledAdditionalContent>
    </StyledHeader>
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
   * Link for the logo anchor
   */
  logoLink: PropTypes.string,
  /**
   * Picture props for the logo displayed in the header, defaults to CTM logo
   */
  logoPicture: PropTypes.shape(picturePropTypes),
};

Header.defaultProps = {
  isSticky: false,
  stuck: false,
  number: '',
  logoLink: null,
  logoPicture: {
    src: logoDesktop,
    srcsets: [
      {
        srcset: logoDesktop,
        media: `(min-width: ${screens.md})`,
      },
      {
        srcset: logoMobile,
      },
    ],
  },
};

export default Header;

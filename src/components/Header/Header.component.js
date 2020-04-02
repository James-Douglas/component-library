import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact/Contact.component';
import { StyledAdditionalContent, StyledHeader } from './Header.styles';

const Header = ({
  isSticky, stuck, number, logo,
}) => {
  const size = stuck ? 'small' : 'large';
  return (
    <StyledHeader stuck={stuck} isSticky={isSticky}>
      {React.cloneElement(logo, { size })}
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
   * The Logo component to be rendered
   */
  logo: PropTypes.node.isRequired,
};

Header.defaultProps = {
  isSticky: false,
  stuck: false,
  number: '',
};

export default Header;

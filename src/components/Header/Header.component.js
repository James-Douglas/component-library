import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Contact from './Contact/Contact.component';

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  background: ${({ theme }) => (theme.header.background)};
  z-index: ${({ theme }) => (theme.zIndex[10])};
  height: ${({ theme, stuck }) => (stuck ? theme.header.heightStuck : theme.header.height)};
  transition: ${({ stuck }) => (stuck ? 'all 200ms ease' : 'none')};
  box-shadow: ${({ stuck }) => (stuck ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : 'none')};
  position: ${({ isSticky }) => (isSticky ? 'fixed' : 'inherit')};
  left: 0;
  top: 0;
  padding-left: ${({ theme }) => theme.spacing[16]};
  padding-right: ${({ theme }) => theme.spacing[16]};
  justify-content: space-between;
  align-items: center;
`;

const StyledAdditionalContent = styled.div`
  display: flex;
  height: 100%;
  a {
    margin: 0;
  }
`;

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

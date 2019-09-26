import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Logo from '../Logo/Logo.component';

import FluidContainer from '../Grid/Container/Fluid.component';
import Contact from './Contact/Contact.component';

const Header = ({ isSticky, stuck, number }) => {
  const size = stuck ? 'small' : 'large';
  return (
    <header className={`${isSticky ? 'sticky' : ''}  ${stuck ? 'stuck' : ''}`}>
      <style jsx>{styles}</style>
      <FluidContainer>
        <div className="wrap">
          <Logo size={size} />
          <Contact number={number} size={size} />
        </div>
      </FluidContainer>
    </header>
  );
};

Header.propTypes = {
  isSticky: PropTypes.bool,
  stuck: PropTypes.bool,
  number: PropTypes.string.isRequired,
};

Header.defaultProps = {
  isSticky: false,
  stuck: false,
};


export default Header;

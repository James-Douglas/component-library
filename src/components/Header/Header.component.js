import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Logo from '../Logo/Logo.component';

import FluidContainer from '../Grid/Container/Fluid.component';
import Contact from './Contact/Contact.component';

const Header = ({ isSticky, stuck, number }) => {
  const size = stuck ? 'small' : 'large';
  return (
    <header className={`${isSticky ? `${styles.sticky}` : ''}  ${stuck ? `${styles.stuck}` : ''}`}>
      <FluidContainer>
        <div className={styles.wrap}>
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

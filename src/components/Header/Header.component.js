import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import Logo from '../Logo/Logo.component';
import FluidContainer from '../Grid/Container/Fluid.component';
import Contact from './Contact/Contact.component';

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  background: ${({ theme }) => (theme.header.background)}; 
  z-index: ${({ theme }) => (theme.zIndex[50])}; 
  height: ${({ theme, stuck }) => (stuck ? theme.header.heightStuck : theme.header.height)}; 
  transition: ${({ theme, stuck }) => (stuck ? 'all 200ms ease' : 'none')}; 
  box-shadow: ${({ theme, stuck }) => (stuck ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : 'none')};
  position: ${({ isSticky }) => (isSticky ? 'fixed' : 'inherit')}; 
  top: ${({ isSticky }) => (isSticky ? '0' : 'inherit')};
`;

const StyledLogoWrap = styled.header`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;  
`;

const Header = ({ isSticky, stuck, number }) => {
  const size = stuck ? 'small' : 'large';
  return (
    <ThemeProvider theme={getTheme()}>
      <StyledHeader stuck={stuck} isSticky={isSticky}>
        <FluidContainer>
          <StyledLogoWrap>
            <Logo size={size} />
            {number && <Contact number={number} size={size} />}
          </StyledLogoWrap>
        </FluidContainer>
      </StyledHeader>
    </ThemeProvider>
  );
};

Header.propTypes = {
  /**
   * Defines if the header is sticky via boolean
   */
  isSticky: PropTypes.bool,
  /**
   * Defines the sizing of the logo and number depending on the stuck prop
   */
  stuck: PropTypes.bool,
  /**
   * Defines if the header displays a number on the right handside
   */
  number: PropTypes.string,
};

Header.defaultProps = {
  isSticky: false,
  stuck: false,
  number: '',
};

export default Header;

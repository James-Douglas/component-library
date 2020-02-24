import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Column from '../Grid/Column/Column.component';
import Row from '../Grid/Row/Row.component';
import Container from '../Grid/Container/Container.component';
import MicroCopy from '../Typography/Microcopy/Microcopy.component';
import throttle from '../../utils/throttle';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledPosition = styled.div`
  ${({ sticky }) => sticky && css`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
  `}
  background: ${({ theme, background }) => (background ? theme.footer.background : theme.footer.transparent)};  
`;

const StyledFooterBar = styled.div`
  min-height: 5.4rem;
  width: 100%;
  text-align: center; 
  padding: ${({ theme }) => `${theme.spacing[24]} 0`};
`;

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const Footer = ({
  children, background, sticky, className,
}) => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState();
  const [footerHeight, setFooterHeight] = useState();

  useLayoutEffect(() => {
    if (sticky) {
      const handleResize = () => setWindowWidth(window.innerWidth);
      const throttledResize = throttle(handleResize, 25);
      setFooterHeight(footerRef.current.offsetHeight);
      window.addEventListener('resize', throttledResize);
      return () => {
        window.removeEventListener('resize', throttledResize);
      };
    }
    return null;
  }, [sticky, windowWidth]);

  return (
    <StyledWrapper style={{ paddingTop: footerHeight }}>
      <StyledPosition background={background} sticky={sticky}>
        <Container className={className}>
          <Row removeMarginBottom>
            <Column cols={12}>
              <StyledFooterBar ref={footerRef}>
                {children && <MicroCopy>{children}</MicroCopy>}
                <StyledP>&copy; {currentYear} Compare The Market. All rights reserved. ACN: 117323 378 AFSL 422926</StyledP>
              </StyledFooterBar>
            </Column>
          </Row>
        </Container>
      </StyledPosition>
    </StyledWrapper>
  );
};

Footer.propTypes = {
  /**
   * The children of the footer component (text and links, microcopy)
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * White background on, or set to transparent
   */
  background: PropTypes.bool,
  /**
   * Classes to be applied to the Footer component
   */
  className: PropTypes.string,
  /**
   * Set the footer to stick to the bottom of the page, regardless of content
   */
  sticky: PropTypes.bool,
};

Footer.defaultProps = {
  children: '',
  background: true,
  sticky: true,
  className: '',
};

export default Footer;

import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Column, Row, Container } from '@comparethemarketau/manor-grid';
import { Microcopy } from '@comparethemarketau/manor-typography';
import { throttle } from '@comparethemarketau/manor-utils';

import {
  StyledFooterBar, StyledP, StyledPosition, StyledWrapper,
} from './Footer.styles';

const Footer = ({
  children, background, sticky, type, className,
}) => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState();
  const [footerHeight, setFooterHeight] = useState();

  const copyRightText = 'Compare The Market. All rights reserved. ACN: 117323 378 AFSL 422926';

  // switch here to add more cases if necessary
  const renderVariant = () => {
    switch (type) {
      case 'customer-accounts':
        return (
          <>
            <StyledP>&copy; {currentYear} {copyRightText}</StyledP>
            {children && <Microcopy>{children}</Microcopy>}
          </>
        );
      default:
        return (
          <>
            {children && <Microcopy>{children}</Microcopy>}
            <StyledP>&copy; {currentYear} {copyRightText}</StyledP>
          </>
        );
    }
  };

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
                {renderVariant()}
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
   * Set the footer to stick to the bottom of the page, regardless of content
   */
  sticky: PropTypes.bool,
  /**
   * Type of footer, currently just the default and customer-accounts
   */
  type: PropTypes.oneOf(['default', 'customer-accounts']),
  /**
   * Classes to be applied to the Footer component
   */
  className: PropTypes.string,
};

Footer.defaultProps = {
  children: '',
  background: true,
  sticky: true,
  type: 'default',
  className: '',
};

export default Footer;

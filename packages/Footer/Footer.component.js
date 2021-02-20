import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@comparethemarketau/manor-typography';
import { Column, Row, Container } from '@comparethemarketau/manor-grid';
import { throttle } from '@comparethemarketau/manor-utils';

import {
  StyledFooterBar, StyledPosition, StyledWrapper, StyledCustomerAccounts, StyledMicrocopy,
} from './Footer.styles';

const Footer = ({
  children, background, sticky, type, className,
}) => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const throttledResize = useRef(null);

  const [windowWidth, setWindowWidth] = useState();
  const [footerHeight, setFooterHeight] = useState();

  const copyRightText = 'Compare The Market. All rights reserved. ACN: 117 323 378. AFSL 422926.';

  // switch here to add more cases if necessary
  const renderVariant = () => {
    switch (type) {
      case 'customer-accounts':
        return (
          <StyledCustomerAccounts>
            <Typography variant="body1" component="span"><b>&copy; {currentYear} {copyRightText}</b></Typography>
            {children && <Typography variant="body1" component="span">{children}</Typography>}
          </StyledCustomerAccounts>
        );
      default:
        return (
          <>
            {children && <StyledMicrocopy><Typography variant="body2" component="span">{children}</Typography></StyledMicrocopy>}
            <Typography variant="body1" component="span">&copy; {currentYear} {copyRightText}</Typography>
          </>
        );
    }
  };

  useLayoutEffect(() => {
    if (sticky) {
      const handleResize = () => setWindowWidth(window.innerWidth);
      if (!throttledResize.current) {
        throttledResize.current = throttle(handleResize, 25);
      }
      setFooterHeight(footerRef.current.offsetHeight);
      window.addEventListener('resize', throttledResize.current);
    }
    return () => {
      window.removeEventListener('resize', throttledResize.current);
    };
  }, [sticky, windowWidth]);

  return (
    <StyledWrapper className={className} style={{ paddingTop: footerHeight }}>
      <StyledPosition background={background} sticky={sticky}>
        <Container padding={['16']}>
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
  type: PropTypes.oneOf(['', 'customer-accounts']),
  /**
   * Classes to be applied to the Footer component
   */
  className: PropTypes.string,
};

Footer.defaultProps = {
  children: '',
  background: true,
  sticky: true,
  type: '',
  className: '',
};

export default Footer;

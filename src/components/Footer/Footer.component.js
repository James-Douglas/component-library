import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import Icon from '../Icon/Icon.component';
import Column from '../Grid/Column/Column.component';
import Row from '../Grid/Row/Row.component';
import FluidContainer from '../Grid/Container/Fluid.component';

const styles = css`
  .footer-container {
    @apply w-full bg-grey-light;
    flex-grow: 1;
    flex-shrink: 0;
    
  }
  .footer-disclaimer {
    @apply pt-32 pb-16 flex w-full;
  }
  .footer-bar {
    @apply w-full flex flex-col items-center py-8 justify-between;
    min-height: 5.4rem;
  }
  .footer-bar-contents {
    @apply w-full flex items-center justify-between;
  }
  .scroll-top-icon {
    @apply flex items-center justify-center border border-black rounded-full p-8 cursor-pointer;
    width: 3rem;
    height: 3rem;
  }
`;

const Footer = ({ disclaimer }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <style jsx>{styles}</style>
      <FluidContainer>
        <Row>
          <Column md={12} xl={10} offsetXl={1}>
            <div className="footer-bar">
              {disclaimer && (
              <div className="footer-disclaimer manor-microcopy">
                {disclaimer}
              </div>
              )}
              <div className="footer-bar-contents">
                <div className="manor-body2">
                    &copy; {currentYear} Compare The Market. All rights reserved. ACN: 117323 378 AFSL 422926
                </div>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div className="scroll-top-icon fill-current" onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
                  <Icon name="angleUp" size={2} />
                </div>
              </div>
            </div>
          </Column>
        </Row>
      </FluidContainer>
    </div>
  );
};

Footer.propTypes = {
  /**
   * The disclaimer text to display
   */
  disclaimer: PropTypes.string,
};

Footer.defaultProps = {
  disclaimer: null,
};

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons/faChevronDown';
import Column from '../Grid/Column/Column.component';
import Row from '../Grid/Row/Row.component';
import FluidContainer from '../Grid/Container/FluidContainer.component';

const StyledFooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.footer.background};
  flex-grow: 1;
  flex-shrink: 0;
`;

const StyledFooterDisclaimer = styled.div`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => `${theme.spacing['32']} 0 ${theme.spacing['16']} 0`};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: ${({ theme }) => theme.lineHeight.snug};
`;

const StyledFooterCopy = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.snug};
`;

const StyledFooterBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing['8']} 0 ${theme.spacing['8']} 0`};
  min-height: 5.4rem;
`;

const StyledFooterBarContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledScrollTop = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => (theme.borderRadius.full)};
  padding: ${({ theme }) => (theme.spacing['8'])};
  cursor: pointer;
  border: ${({ theme }) => theme.footer.scrollTopBorder};
  fill: currentColor;
`;

const Footer = ({ disclaimer, className }) => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooterContainer className={className}>
      <FluidContainer>
        <Row removeMarginBottom>
          <Column md={12} xl={10} offsetXl={1}>
            <StyledFooterBar>
              {disclaimer && (
              <StyledFooterDisclaimer>
                {disclaimer}
              </StyledFooterDisclaimer>
              )}
              <StyledFooterBarContent>
                <StyledFooterCopy className="manor-body2">
                  &copy; {currentYear} Compare The Market. All rights reserved. ACN: 117323 378 AFSL 422926
                </StyledFooterCopy>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <StyledScrollTop onClick={() => window.scroll({ top: 0, behavior: 'smooth' })} role="scrollIcon">
                  <FontAwesomeIcon icon={faChevronDown} size="lg" flip="vertical" />
                </StyledScrollTop>
              </StyledFooterBarContent>
            </StyledFooterBar>
          </Column>
        </Row>
      </FluidContainer>
    </StyledFooterContainer>
  );
};

Footer.propTypes = {
  /**
   * The disclaimer text to display
   */
  disclaimer: PropTypes.string,
  /**
   * Classes to be applied to the Footer component
   */
  className: PropTypes.string,
};

Footer.defaultProps = {
  disclaimer: null,
  className: '',
};

export default Footer;

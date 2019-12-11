import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import Icon from '../Icon/Icon.component';
import Column from '../Grid/Column/Column.component';
import Row from '../Grid/Row/Row.component';
import FluidContainer from '../Grid/Container/Fluid.component';

const StyledFooterContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.greyLighterAA}; 
  flex-grow: 1;
  flex-shrink: 0;
`;

const StyledFooterDisclaimer = styled.div`
  width: 100%;
  display: flex;
  padding: ${(props) => (`${props.theme.spacing['32']} 0 ${props.theme.spacing['16']} 0`)};
  font-weight: ${(props) => props.theme.fontWeight.normal}; 
  font-size: ${(props) => props.theme.fontSize.xs}; 
  line-height: ${(props) => props.theme.lineHeight.snug}; 
`;

const StyledFooterCopy = styled.div`
  font-weight: ${(props) => props.theme.fontWeight.normal}; 
  font-size: ${(props) => props.theme.fontSize.sm}; 
  line-height: ${(props) => props.theme.lineHeight.snug}; 
`;


const StyledFooterBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (`${props.theme.spacing['8']} 0 ${props.theme.spacing['8']} 0`)};
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
  border-radius: 9999px;
  padding: ${(props) => (props.theme.spacing['8'])};
  cursor: pointer;
  border: ${(props) => (`1px solid ${props.theme.colors.black}`)};
  fill: currentColor;
`;

const Footer = ({ disclaimer }) => {
  const currentYear = new Date().getFullYear();
  return (
    <ThemeProvider theme={getTheme()}>
      <StyledFooterContainer>
        <FluidContainer>
          <Row>
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
                    <Icon name="angleUp" size={2} />
                  </StyledScrollTop>
                </StyledFooterBarContent>
              </StyledFooterBar>
            </Column>
          </Row>
        </FluidContainer>
      </StyledFooterContainer>
    </ThemeProvider>
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

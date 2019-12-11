import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';
import Icon from '../Icon/Icon.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import FluidContainer from '../Grid/Container/Fluid.component';

const StyledAccordionPanel = styled.div`
  overflow: hidden;
  border: ${(props) => (props.isFocus ? `1px solid ${props.theme.colors.primaryLight}` : '1px solid transparent')};
  border-bottom: ${(props) => {
    const { isFocus, isVisible } = props;
    let borderBottom;
    if ((isVisible && isFocus) || (!isVisible && isFocus)) {
      borderBottom = `1px solid ${props.theme.colors.primaryLight}`;
    } else if (isVisible && !isFocus) {
      borderBottom = `2px solid ${props.theme.colors.greyDark}`;
    } else {
      borderBottom = '1px solid rgba(0,0,0,.1)';
    }
    return borderBottom;
  }};
  background: ${(props) => props.theme.colors.white}; 
  transition: color 2s linear;
  &:focus,
  &:active,  
  &:hover {
    outline: 0;
  }
`;

const StyledAccordionBody = styled.div`
  line-height: ${(props) => props.theme.lineHeight.normal};
  margin: ${(props) => props.theme.spacing['0']}; 
  background: ${(props) => props.theme.colors.white}; 
  color: rgba(0,0,0,0.8);
  transform-origin: top;
  transition: transform 0.25s;
  transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(-100%)')}; 
  height:  ${(props) => (props.isVisible ? 'auto' : 0)};                   
  padding: ${(props) => (props.isVisible ? `0 0 ${props.theme.spacing['40']}` : 0)};
  &:focus,
  &:active,  
  &:hover {
    outline: 0;
  }
`;

const StyledAccordionHead = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: ${(props) => (props.theme.colors.white)}; 
  z-index: ${(props) => (props.theme.zIndex[10])}; 
  transition: font-size 0.25s;
  padding: ${(props) => (`${props.theme.spacing['24']} 0`)};
  font-size: ${(props) => (props.isVisible ? props.theme.fontSize['2xl'] : props.theme.fontSize.xl)}; 
  &:focus,
  &:active,  
  &:hover {
    outline: 0;
  }
`;

const AccordionPanel = ({
  title,
  children,
  show,
  iconSize,
  onClickGroup,
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const [isFocus, setIsFocus] = useState(false);
  const angleName = isVisible ? 'Up' : 'Down';

  const toggleTrueFalse = () => {
    setTimeout(() => {
      if (onClickGroup) {
        onClickGroup(!isVisible);
      }
      return setIsVisible(!isVisible);
    }, 1);
  };

  const toggleTrueFalseOnKey = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      toggleTrueFalse();
    }
  };

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <StyledAccordionPanel isVisible={isVisible} isFocus={isFocus} className="manor-rich-text" role="tablist" aria-label="Information tabs">
        <StyledAccordionHead
          isVisible={isVisible}
          onClick={toggleTrueFalse}
          onKeyDown={toggleTrueFalseOnKey}
          role="tab"
          aria-selected="true"
          tabIndex="0"
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <FluidContainer>
            <Row>
              <Column cols="11">{title}</Column>
              <Column cols="1">
                <Icon name={`angle${angleName}`} size={iconSize} />
              </Column>
            </Row>
          </FluidContainer>
        </StyledAccordionHead>
        <StyledAccordionBody isVisible={isVisible} role="tabpanel">
          <FluidContainer>
            <Row className="row-view">
              <Column cols="12">{children}</Column>
            </Row>
          </FluidContainer>
        </StyledAccordionBody>
      </StyledAccordionPanel>
    </ThemeProvider>
  );
};

AccordionPanel.propTypes = {
  /**
   * The accordion's content
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * The title text for the accordion
   */
  title: PropTypes.node,
  /**
   * Defines visibility of the content block
   */
  show: PropTypes.bool,
  /**
   * The size of the show/hide icon
   */
  iconSize: PropTypes.number,
  /**
   * Used to AccordionGroup to control visibility
   */
  onClickGroup: PropTypes.func,
};

AccordionPanel.defaultProps = {
  children: '',
  title: '',
  show: false,
  iconSize: 1.5,
  onClickGroup: null,
};

export default AccordionPanel;

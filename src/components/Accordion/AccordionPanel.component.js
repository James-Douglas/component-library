import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons/faChevronDown';
import PropTypes from 'prop-types';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import FluidContainer from '../Grid/Container/FluidContainer.component';

const StyledAccordionPanel = styled.div`
  overflow: hidden;
  border: ${({ theme, isFocus }) => (isFocus ? `1px solid ${theme.colors.primaryLight}` : theme.borders.transparent)};
  border-bottom: ${(props) => {
    const { theme, isFocus, isVisible } = props;
    if (isFocus) {
      return `1px solid ${theme.colors.primaryLight}`;
    }
    if (isVisible) {
      return `2px solid ${theme.colors.greyDark}`;
    }
    return '1px solid rgba(0,0,0,.1)';
  }};
  background: ${({ theme }) => theme.accordion.background}; 
  transition: color 2s linear;
  &:focus,
  &:active,  
  &:hover {
    outline: 0;
  }
`;

const StyledAccordionBody = styled.div`
  line-height: ${({ theme }) => theme.lineHeight.normal};
  margin: ${({ theme }) => theme.spacing['0']}; 
  background: ${({ theme }) => theme.accordion.background}; 
  color: ${({ theme }) => theme.accordion.color};
  transform-origin: top;
  transition: transform 0.25s;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(-100%)')}; 
  height:  ${({ isVisible }) => (isVisible ? 'auto' : 0)};                   
  padding: ${({ isVisible, theme }) => (isVisible ? `0 0 ${theme.spacing['40']}` : 0)};
  width: 100%;
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
  background: ${({ theme }) => (theme.accordion.background)}; 
  z-index: ${(props) => (props.theme.zIndex[10])}; 
  transition: font-size 0.25s;
  padding: ${({ theme }) => `${theme.spacing[24]} 0`};
  font-size: ${({ isVisible, theme }) => (isVisible ? theme.fontSize['2xl'] : theme.fontSize.xl)}; 
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
  handleClickGroup,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const [isFocus, setIsFocus] = useState(false);
  const direction = isVisible ? 'vertical' : null;

  const toggleTrueFalse = () => {
    setTimeout(() => {
      if (handleClickGroup) {
        handleClickGroup(!isVisible);
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
    <StyledAccordionPanel isVisible={isVisible} isFocus={isFocus} className={className} role="tablist" aria-label="Information tabs">
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
              <FontAwesomeIcon icon={faChevronDown} size={iconSize} flip={direction} />
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
  iconSize: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  /**
   * Used to AccordionGroup to control visibility
   */
  handleClickGroup: PropTypes.func,
  /**
   * Classes to be applied to the Accordion panel component
   */
  className: PropTypes.string,
};

AccordionPanel.defaultProps = {
  children: '',
  title: '',
  show: false,
  iconSize: '1x',
  handleClickGroup: null,
  className: '',
};

export default AccordionPanel;

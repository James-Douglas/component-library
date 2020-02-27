import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons/faChevronDown';
import PropTypes from 'prop-types';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import FluidContainer from '../Grid/Container/FluidContainer.component';
import useIsDesktop from '../../hooks/useIsDesktop';

const StyledAccordionPanel = styled.div`
  overflow: hidden;
  border: ${({ theme, isFocus }) => (isFocus ? `${theme.borders.focus}` : theme.borders.transparent)};
  border-top: ${({ theme, isFocus }) => (isFocus ? `${theme.borders.focus}` : '1px solid rgba(0,0,0,.1)')};
  margin-bottom: -1px;
  &:focus,
  &:active,
  &:hover {
    outline: 0;
  }
`;

const StyledAccordionBody = styled.div`
  line-height: ${({ theme }) => theme.lineHeight.normal};
  margin: ${({ theme }) => theme.spacing['0']};
  background: ${({ theme }) => theme.accordion.backgroundBody};
  color: ${({ theme }) => theme.accordion.color};
  padding: ${({ theme, isVisible }) => (isVisible ? `${theme.spacing['32']} 0` : 0)};
  height: 0;
  transition-property: none;
  overflow: hidden;
  ${({ isVisible }) => isVisible && css`
    height: 100%;
    transition: all 0.3s ease-out;
  `}
    
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
  padding: ${({ theme }) => `${theme.spacing[20]} 0`};
  font-size: ${({ theme }) => `${theme.fontSize['2xl']}`};
  ${({ desktop }) => !desktop && css`
     font-size: ${({ theme }) => `${theme.fontSize.lg}`};
  `}
  &:focus,
  &:active,
  &:hover {
    outline: 0;
  }
`;
const StyledChevronWrap = styled.div`
  text-align: right;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => `${theme.accordion.chevronColor}`};
  svg {
    transform: rotate(0deg);
    transition: transform 0.2s linear;
    
  }
  svg.fa-flip-vertical {
    transform: rotate(180deg);
    transition: transform 0.2s linear;
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
  const desktop = useIsDesktop();
  const [isVisible, setIsVisible] = useState(show);
  const [isFocus, setIsFocus] = useState(false);
  const direction = isVisible ? 'vertical' : null;

  const toggleTrueFalse = () => {
    setTimeout(() => {
      if (handleClickGroup) {
        handleClickGroup(!isVisible);
      }
      return setIsVisible(!isVisible);
    }, 110);
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
    <StyledAccordionPanel isFocus={isFocus} className={className} role="tablist" aria-label="Information tabs">
      <StyledAccordionHead
        isVisible={isVisible}
        onClick={toggleTrueFalse}
        onKeyDown={toggleTrueFalseOnKey}
        desktop={desktop}
        role="tab"
        aria-selected="true"
        tabIndex="0"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <FluidContainer>
          <Row removeMarginBottom flexWrap="nowrap">
            <Column cols="11">{title}</Column>
            <Column cols="1">
              <StyledChevronWrap>
                <FontAwesomeIcon icon={faChevronDown} size={iconSize} flip={direction} />
              </StyledChevronWrap>
            </Column>
          </Row>
        </FluidContainer>

      </StyledAccordionHead>
      <StyledAccordionBody isVisible={isVisible} role="tabpanel">
        <FluidContainer>
          <Row className="row-view" removeMarginBottom>
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

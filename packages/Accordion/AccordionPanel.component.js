import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons/faChevronDown';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { Row, Column, FluidContainer } from '@comparethemarketau/manor-grid';
import PropTypes from 'prop-types';

import {
  StyledAccordionPanel,
  StyledAccordionHead,
  StyledChevronWrap,
  StyledAccordionBody,
} from './AccordionPanel.styles';

const AccordionPanel = ({
  trackingLabel,
  title,
  children,
  show,
  iconSize,
  handleClickGroup,
  className,
}) => {
  const { isDesktop, trackInteraction } = useContext(ManorContext);
  const [isVisible, setIsVisible] = useState(show);
  const [isFocus, setIsFocus] = useState(false);
  const direction = isVisible ? 'vertical' : null;

  const toggleTrueFalse = () => {
    setTimeout(() => {
      if (handleClickGroup) {
        handleClickGroup(!isVisible);
      }
      trackInteraction(!isVisible ? 'Expand' : 'Contract', 'Accordion', 'Accordion', trackingLabel, trackingLabel);
      setIsVisible(!isVisible);
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
        desktop={isDesktop}
        role="tab"
        aria-selected="true"
        tabIndex="0"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <FluidContainer>
          <Row removeMarginBottom flexWrap="nowrap">
            <Column cols={11}>{title}</Column>
            <Column cols={1}>
              <StyledChevronWrap>
                <FontAwesomeIcon icon={faChevronDown} size={iconSize} flip={direction} />
              </StyledChevronWrap>
            </Column>
          </Row>
        </FluidContainer>
      </StyledAccordionHead>
      <StyledAccordionBody isVisible={isVisible} role="tabpanel">
        <FluidContainer padding={['16']}>
          <Row className="row-view" removeMarginBottom>
            <Column cols={12}>
              {children}
            </Column>
          </Row>
        </FluidContainer>
      </StyledAccordionBody>
    </StyledAccordionPanel>
  );
};

AccordionPanel.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
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

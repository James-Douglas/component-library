import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons/faChevronDown';
import { useIsDesktop } from '@comparethemarketau/manor-hooks';
import { Row, Column, FluidContainer } from '@comparethemarketau/manor-grid';
import { ManorProvider } from '@comparethemarketau/manor-provider';

import PropTypes from 'prop-types';

import {
  StyledAccordionPanel,
  StyledAccordionHead,
  StyledChevronWrap,
  StyledAccordionBody,
} from './AccordionPanel.styles';

const AccordionPanel = ({
  title,
  children,
  show,
  iconSize,
  handleClickGroup,
  className,
  theme,
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
    <ManorProvider theme={theme}>
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
    </ManorProvider>
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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

AccordionPanel.defaultProps = {
  children: '',
  title: '',
  show: false,
  iconSize: '1x',
  handleClickGroup: null,
  className: '',
  theme: undefined,
};

export default AccordionPanel;

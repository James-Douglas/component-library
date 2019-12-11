import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import useIsDesktop from '../../hooks/useIsDesktop';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import Tooltip, { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Label from '../Label/Label.component';
import FieldValidation from '../FieldValidation/FieldValidation.component';

const GlobalStyle = createGlobalStyle`
  .fieldset {
    width: 100%;
    margin-bottom: 2.4rem;
  }
`;

const StyledTooltipContainer = styled.div`
  min-height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledValidationWrap = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
`;

const StyledValidationMessage = styled.div`
  position: absolute;
  width: 100%;
  justify-content: flex-start;
`;

/**
 * Determine whether a tooltip has been provided
 *
 * @param title {string} - (Optional)the tooltip title
 * @param body {string} - (Optional) the tooltip body
 * @returns {boolean} - true if a title or body exists
 */
export function hasTooltipContent(title, body) {
  return !!((body && body.length) || (title && title.length));
}

/**
 * Determine whether the label tooltip should be displayed
 *  By default on desktop the form element (input, etc) is constrained to 10 columns so that layout
 *  is uniform and all form elements are aligned. The tooltip is aligned with the form component
 *  in the remaining 2 columsn.
 *  On mobile the elements are expanded to full width and tooltips are aligned with their label.
 *
 * @param forceFullWidth {boolean} - Flag to override default behaviour
 * @param desktop {boolean} - Whether we are at desktop resolution
 * @returns {boolean} - true if the label tooltip
 */
export function shouldEnableLabelTooltip(forceFullWidth, desktop) {
  return forceFullWidth || !desktop;
}

/**
 * Gets the label for the sr-only element
 * @param screenReaderLabel {string} - (Optional) the provided screenReaderLabel, if exists
 * @param label {string} - (Optional) The label text for the form element, if exists
 * @returns {string} - Text for the sr-only element
 */
export function getScreenReaderLabel(screenReaderLabel, label) {
  if (!screenReaderLabel || screenReaderLabel === '') {
    return label ? `Click here for additional information about ${label}` : 'tooltip';
  }
  return screenReaderLabel;
}

export function getContentColumnSize(forceFullWidth, desktop) {
  if (forceFullWidth) {
    return '12';
  }
  if (desktop) {
    return '11';
  }
  return '12';
}

export function getTooltipColumnSize(desktop) {
  return desktop ? '1' : '2';
}

export function renderTooltip(enableLabelTooltip, desktop, hasTooltip, title, body, boundingElementSelector, srLabel, justifyEnd) {
  const colSize = getTooltipColumnSize(desktop);

  if (!enableLabelTooltip && hasTooltip) {
    return (
      <Column col={colSize}>
        <StyledTooltipContainer>
          <Tooltip
            title={title}
            body={body}
            boundingElementSelector={boundingElementSelector || '.fieldset'}
            screenReaderLabel={srLabel}
            justifyEnd={justifyEnd}
          />
        </StyledTooltipContainer>
      </Column>
    );
  }
  return null;
}

const Fieldset = ({
  label, tooltip, forceFullWidth, validationMessage, children, supportingElements,
}) => {
  const [hasTooltip, setHasTooltip] = useState(false);
  const [enableLabelTooltip, setEnableLabelTooltip] = useState(false);
  const [srLabel, setSrLabel] = useState(tooltip.screenReaderLabel);
  const desktop = useIsDesktop(false);
  const {
    title, body, boundingElementSelector, justifyEnd,
  } = tooltip;
  const { screenReaderLabel } = tooltip;

  useEffect(() => {
    setHasTooltip(hasTooltipContent(title, body));
  }, [title, body]);

  useEffect(() => {
    setEnableLabelTooltip(shouldEnableLabelTooltip(forceFullWidth, desktop));
  }, [forceFullWidth, desktop]);

  useEffect(() => {
    setSrLabel(getScreenReaderLabel(screenReaderLabel, label));
  }, [screenReaderLabel, label]);

  const contentSize = getContentColumnSize(forceFullWidth, desktop);

  const tooltipOptions = tooltip;
  tooltipOptions.justifyEnd = !tooltipOptions.justifyEnd && desktop && enableLabelTooltip;

  return (
    <div className="fieldset">
      <GlobalStyle />
      <Label text={label} tooltipEnabled={enableLabelTooltip} tooltip={tooltipOptions} forceFullWidth={forceFullWidth} />
      <Row>
        <Column sm={contentSize} xs="12">
          {children}
        </Column>
        {renderTooltip(enableLabelTooltip, desktop, hasTooltip, title, body, boundingElementSelector, srLabel, justifyEnd)}
      </Row>
      <Row>
        <Column sm={contentSize} xs="12">
          <StyledValidationWrap>
            <StyledValidationMessage><FieldValidation message={validationMessage} /></StyledValidationMessage>
            {supportingElements}
          </StyledValidationWrap>
        </Column>
      </Row>
    </div>
  );
};

Fieldset.propTypes = {
  /**
   * The label for the field element
   */
  label: PropTypes.string,
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Forces the ToggleGroup to expand to 12 columns (default true for ToggleGroup)
   */
  forceFullWidth: PropTypes.bool,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * The component to be placed in the fieldset
   */
  children: PropTypes.node,
  /**
   * Supporting elements to be added below the component in the fieldset (e.g. "OPTIONAL" text)
   */
  supportingElements: PropTypes.node,
};

Fieldset.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: false,
  validationMessage: null,
  children: [],
  supportingElements: [],
};

export default Fieldset;

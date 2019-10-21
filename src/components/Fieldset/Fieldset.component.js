import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

import useIsDesktop from '../../hooks/useIsDesktop';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import Tooltip, { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Label from '../Label/Label.component';
import useBreakpoint from '../../hooks/useBreakpoint';
import FieldValidation from '../FieldValidation/FieldValidation.component';

const styles = css`
.fieldset {
  @apply w-full mb-24;
}
.tooltip-container {
  @apply flex items-center justify-center;
  min-height: 4.4rem;
}
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

export function getContentColumnSize(forceFullWidth, breakpoint) {
  if (forceFullWidth) {
    return '12';
  }
  if (breakpoint === 'xxl' || breakpoint === 'xl') {
    return '11';
  }
  return '10';
}

export function getTooltipColumnSize(breakpoint) {
  if (breakpoint === 'xxl' || breakpoint === 'xl') {
    return '1';
  }
  return '2';
}

export function renderTooltip(enableLabelTooltip, breakpoint, hasTooltip, title, body, boundingElementSelector, srLabel, justifyEnd) {
  const colSize = getTooltipColumnSize(breakpoint);

  if (!enableLabelTooltip && hasTooltip) {
    return (
      <Column col={colSize}>
        <style jsx>{styles}</style>
        <div className="tooltip-container">
          <Tooltip
            title={title}
            body={body}
            boundingElementSelector={boundingElementSelector || '.fieldset'}
            screenReaderLabel={srLabel}
            justifyEnd={justifyEnd}
          />
        </div>
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
  const breakpoint = useBreakpoint(false);
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

  const contentSize = getContentColumnSize(forceFullWidth, breakpoint);

  const tooltipOptions = tooltip;

  if (!tooltipOptions.justifyEnd && desktop && enableLabelTooltip) {
    tooltipOptions.justifyEnd = true;
  }

  return (
    <div className="fieldset" jsx="true">
      <style jsx="true">{styles}</style>
      <Label text={label} tooltipEnabled={enableLabelTooltip} tooltip={tooltipOptions} forceFullWidth={forceFullWidth} />
      <Row>
        <Column sm={contentSize} xs="12">
          {children}
        </Column>
        {renderTooltip(enableLabelTooltip, breakpoint, hasTooltip, title, body, boundingElementSelector, srLabel, justifyEnd)}
      </Row>
      <Row>
        <Column sm={contentSize} xs="12">
          <div className="relative w-full h-16 mb-8">
            <span className="absolute w-full justify-start">
              <FieldValidation message={validationMessage} />
            </span>
            {supportingElements}
          </div>
        </Column>
      </Row>
    </div>
  );
};

Fieldset.propTypes = {
  label: PropTypes.string,
  tooltip: PropTypes.shape(tooltipPropTypes),
  forceFullWidth: PropTypes.bool,
  validationMessage: PropTypes.string,
  children: PropTypes.node,
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

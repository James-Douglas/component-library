import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

import useIsDesktop from '../../hooks/useIsDesktop';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import Tooltip from '../Tooltip/Tooltip.component';
import Label from '../Label/Label.component';

const styles = css`
.fieldset {
  @apply w-full;
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

export function renderTooltip(enableLabelTooltip, hasTooltip, title, body, boundingElementSelector, srLabel) {
  if (!enableLabelTooltip && hasTooltip) {
    return (
      <Column col="2">
        <div className="tooltip-container">
          <Tooltip
            title={title}
            body={body}
            boundingElementSelector={boundingElementSelector || '.fieldset'}
            screenReaderLabel={srLabel}
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
  const { title, body, boundingElementSelector } = tooltip;
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

  return (
    <div className="fieldset">
      <style jsx>{styles}</style>
      <Label text={label} tooltipEnabled={enableLabelTooltip} tooltip={tooltip} forceFullWidth={forceFullWidth} />
      <Row>
        <Column sm={forceFullWidth ? '12' : '10'} xs="12">
          {children}
        </Column>
        {renderTooltip(enableLabelTooltip, hasTooltip, title, body, boundingElementSelector, srLabel)}
      </Row>
      <Row>
        <Column xs="12" sm="10">
          <div className="relative w-full">
            {/* <FieldValidation message={validationMessage} /> */}
            {supportingElements}
          </div>
        </Column>
      </Row>
    </div>
  );
};

Fieldset.propTypes = {
  label: PropTypes.string,
  tooltip: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    boundingElementSelector: PropTypes.string,
    screenReaderLabel: PropTypes.string,
  }),
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

import React from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../components/Fieldset/Fieldset.component';
import { tooltipPropTypes } from '../components/Tooltip/Tooltip.component';

const UseFieldset = ({
  disableFieldset,
  children,
  label,
  tooltip,
  forceFullWidth,
  validationMessage,
  supportingElements,
}) => (!disableFieldset
  ? (
    <Fieldset
      label={label}
      tooltip={tooltip}
      forceFullWidth={forceFullWidth}
      validationMessage={validationMessage}
      supportingElements={supportingElements}
    >
      {children}
    </Fieldset>
  ) : children);


UseFieldset.propTypes = {
  label: PropTypes.string,
  tooltip: PropTypes.shape(tooltipPropTypes),
  forceFullWidth: PropTypes.bool,
  validationMessage: PropTypes.string,
  disableFieldset: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOf([
      PropTypes.string,
      PropTypes.array,
      PropTypes.node,
    ])),
  ]),
  supportingElements: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOf([
      PropTypes.string,
      PropTypes.array,
      PropTypes.node,
    ])),
  ]),
};
UseFieldset.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: true,
  validationMessage: null,
  children: [],
  disableFieldset: true,
  supportingElements: '',
};


export default UseFieldset;

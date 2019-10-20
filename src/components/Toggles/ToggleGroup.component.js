import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

import Fieldset from '../Fieldset/Fieldset.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';
import usePrefill from '../../hooks/usePrefill';

const styles = css`
  .toggle-group {
    @apply w-full flex flex-wrap justify-start;
  }
`;

export const getType = (children) => {
  for (let i = 0; i < children.length; i += 1) {
    const child = children[i];
    if (child.props && child.props.label) {
      const { length } = child.props.label;
      if (length > 25) {
        return 'rectangle';
      }
    }
  }
  return 'square';
};

export const getChildren = (children, type, name, selectedToggleValue, isUsePrefill, handleToggle, rectOptions, validationMessage) => (
  children.map((child, index) => {
    const key = `toggle-${child.props.id || index}`;
    const propsToAdd = {
      key,
      name,
      selectedValue: selectedToggleValue,
      isPrefill: isUsePrefill,
      onToggle: handleToggle,
      type,
      invalid: !!validationMessage && validationMessage.length > 0,
    };
    if (!child.props.id) propsToAdd.id = key;
    if (type === 'rectangle') propsToAdd.rectOptions = rectOptions;
    return React.cloneElement(child, propsToAdd);
  })
);

const ToggleGroup = ({
  label, tooltip, forceFullWidth, validationMessage, id, prefillValue, name, onToggle, selectedValue, children, rectOptions,
}) => {
  const [selectedToggleValue, setSelectedToggleValue] = useState(selectedValue);
  const [isDirty, setIsDirty] = useState(false);
  const isUsePrefill = usePrefill(prefillValue, selectedValue, isDirty);
  const type = getType(children);
  const handleToggle = (value) => {
    setIsDirty(true);
    setSelectedToggleValue(value);
  };

  useDidUpdateEffect(onToggle, [selectedToggleValue], [onToggle, selectedToggleValue]);

  const tooltipOptions = tooltip;
  if (tooltip) {
    tooltipOptions.justifyEnd = true;
  }

  const value = isUsePrefill ? prefillValue : selectedToggleValue;
  return (
    <Fieldset label={label} tooltip={tooltipOptions} forceFullWidth={forceFullWidth} validationMessage={validationMessage}>
      <style jsx>{styles}</style>
      <div className="toggle-group" id={id}>
        {getChildren(children, type, name, value, isUsePrefill, handleToggle, rectOptions, validationMessage)}
      </div>
    </Fieldset>
  );
};

ToggleGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  label: PropTypes.string,
  tooltip: PropTypes.shape(tooltipPropTypes),
  forceFullWidth: PropTypes.bool,
  validationMessage: PropTypes.string,
  id: PropTypes.string,
  prefillValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rectOptions: PropTypes.shape({
    align: PropTypes.oneOf(['center', 'left', 'right']),
    col: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    height: PropTypes.number,
  }),
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
};

ToggleGroup.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: true,
  validationMessage: null,
  id: null,
  prefillValue: null,
  selectedValue: null,
  rectOptions: {
    align: 'center',
    col: 1,
    height: 8,
  },
  children: [],
};

export default ToggleGroup;

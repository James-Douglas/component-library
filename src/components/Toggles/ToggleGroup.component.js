import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

import Fieldset from '../Fieldset/Fieldset.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';

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

export const getChildren = (children, type, dirty, name, selectedId, didToggle, rectOptions) => (
  children.map((child, index) => {
    const key = `toggle-${child.props.id || index}`;
    const propsToAdd = {
      key,
      name,
      selectedId,
      handleChange: didToggle,
      type,
      dirty,
    };
    if (!child.props.id) propsToAdd.id = key;
    if (type === 'rectangle') propsToAdd.rectOptions = rectOptions;
    return React.cloneElement(child, propsToAdd);
  })
);

const ToggleGroup = ({
  id, name, label, tooltip, handleChange, children, rectOptions,
}) => {
  const [selectedId, setSelectedId] = useState();
  const [dirty, setDirty] = useState();
  const type = getType(children);
  const didToggle = (toggleId) => {
    setSelectedId(toggleId);
    setDirty(true);
  };

  useDidUpdateEffect(handleChange, [selectedId], [handleChange, selectedId]);

  if (tooltip) {
    // eslint-disable-next-line no-param-reassign
    tooltip.justifyEnd = true;
  }

  return (
    <Fieldset label={label} tooltip={tooltip} forceFullWidth>
      <style jsx>{styles}</style>
      <div className="toggle-group" id={id}>
        {getChildren(children, type, dirty, name, selectedId, didToggle, rectOptions)}
      </div>
    </Fieldset>
  );
};

ToggleGroup.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  tooltip: PropTypes.shape(tooltipPropTypes),
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
  label: null,
  id: null,
  tooltip: {},
  rectOptions: {
    align: 'center',
    col: 1,
    height: 8,
  },
  children: [],
};

export default ToggleGroup;

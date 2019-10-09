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

export const getChildren = (children, type, dirty, name, selectedToggleId, handleToggle, rectOptions) => (
  children.map((child, index) => {
    const key = `toggle-${child.props.id || index}`;
    const propsToAdd = {
      key,
      name,
      selectedId: selectedToggleId,
      onToggle: handleToggle,
      type,
      dirty,
    };
    if (!child.props.id) propsToAdd.id = key;
    if (type === 'rectangle') propsToAdd.rectOptions = rectOptions;
    return React.cloneElement(child, propsToAdd);
  })
);

const ToggleGroup = ({
  id, name, label, tooltip, onToggle, children, rectOptions,
}) => {
  const [selectedToggle, setSelectedToggle] = useState({});
  const [dirty, setDirty] = useState();
  const type = getType(children);
  const handleToggle = (toggle) => {
    setSelectedToggle({ id: toggle.id, value: toggle.value });
    setDirty(true);
  };

  useDidUpdateEffect(onToggle, [selectedToggle], [onToggle, selectedToggle]);

  const tooltipOptions = tooltip;
  if (tooltip) {
    tooltipOptions.justifyEnd = true;
  }

  return (
    <Fieldset label={label} tooltip={tooltipOptions} forceFullWidth>
      <style jsx>{styles}</style>
      <div className="toggle-group" id={id}>
        {getChildren(children, type, dirty, name, selectedToggle.id, handleToggle, rectOptions)}
      </div>
    </Fieldset>
  );
};

ToggleGroup.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
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

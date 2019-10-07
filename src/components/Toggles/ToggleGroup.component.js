import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

import Fieldset from '../Fieldset/Fieldset.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';

const styles = css`
  .toggle-group {
    @apply w-full flex flex-wrap justify-start;
  }
`;

export const getType = (children) => {
  let maxContentLength = 0;
  children.forEach((child) => {
    if (child.props && child.props.label) {
      if (child.props.label.length > maxContentLength) {
        maxContentLength = child.props.label.length;
      }
    }
  });
  return maxContentLength > 25 ? 'rectangle' : 'square';
};

export const getChildren = (children, type, name, selectedId, didToggle, rectOptions) => (
  children.map((child, index) => {
    const key = `toggle-${child.props.id}`;
    const propsToAdd = {
      key,
      name,
      selectedId,
      handleChange: didToggle,
      type,
    };
    if (!child.props.id) propsToAdd.id = key;
    if (!child.props.idx) propsToAdd.idx = index;
    if (type === 'rectangle') propsToAdd.rectOptions = rectOptions;
    return React.cloneElement(child, propsToAdd);
  })
);

const ToggleGroup = ({
  id, name, label, tooltip, handleChange, children, rectOptions,
}) => {
  const [selectedId, setSelectedId] = useState();
  const type = getType(children);
  const didToggle = (toggleId) => {
    setSelectedId(toggleId);
    if (handleChange) {
      handleChange(toggleId);
    }
  };

  if (tooltip) {
    // eslint-disable-next-line no-param-reassign
    tooltip.justifyEnd = true;
  }

  return (
    <Fieldset label={label} tooltip={tooltip} forceFullWidth>
      <style jsx>{styles}</style>
      <div className="toggle-group" id={id}>
        {getChildren(children, type, name, selectedId, didToggle, rectOptions)}
      </div>
    </Fieldset>
  );
};

ToggleGroup.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  tooltip: PropTypes.shape(tooltipPropTypes),
  handleChange: PropTypes.func,
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
  handleChange: null,
  children: [],
};

export default ToggleGroup;

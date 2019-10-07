import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';

const styles = css`
 .colour-toggle {
    @apply w-128 h-128 flex justify-around flex-col items-center;
  }
  .border-colour {
    @apply absolute z-10 bottom-0 left-0 h-12 w-full;
    transition: all 0.3s ease;
  }
  .colour-toggle:hover .border-colour {
    @apply pointer-events-none h-full;
  }
  .content {
    @apply z-20;
  }
  .scoped-toggle.black :global(:hover),
  .scoped-toggle.black :global(input:checked + label) {
    @apply text-black;
  }
  .scoped-toggle.white :global(:hover),
  .scoped-toggle.white :global(input:checked + label) {
    @apply text-white;
  }
`;

export function getDisplayBackgroundColor(backgroundColor) {
  return backgroundColor === 'white' ? 'ivory' : backgroundColor;
}

export function getAnimationStyle(id, selectedId, displayBackgroundColor) {
  if (selectedId === id) {
    return {
      backgroundColor: displayBackgroundColor,
      height: '100%',
    };
  }
  return {
    backgroundColor: displayBackgroundColor,
  };
}

export function getDisplayLabel(label, backgroundColor) {
  if (!label) {
    return backgroundColor.includes('ivory') ? 'White' : backgroundColor.charAt(0).toUpperCase() + backgroundColor.slice(1);
  }
  return label;
}

const ColorToggle = ({
  id, label, backgroundColor, fontColor, value, name, selectedId, invalid, disabled, autofill, handleChange, children,
}) => {
  const [dirty, setDirty] = useState(false);
  const handleClick = () => {
    setDirty(true);
    if (handleChange) {
      handleChange(id);
    }
  };

  const displayBackgroundColor = getDisplayBackgroundColor(backgroundColor);
  const animationStyle = getAnimationStyle(id, selectedId, displayBackgroundColor);
  const displayLabel = getDisplayLabel(label, backgroundColor);

  return (
    <div className={`scoped-toggle ${fontColor}`}>
      <style jsx>{styles}</style>
      <BaseToggle
        id={id}
        type="custom"
        value={value}
        name={name}
        selectedId={selectedId}
        invalid={invalid}
        disabled={disabled}
        autofill={autofill}
        handleChange={handleClick}
      >
        <ToggleLabel dirty={dirty} autofill={autofill} id={id}>
          <span className="colour-toggle">
            <span className="content">{displayLabel}</span>
            <span className="border-colour" style={animationStyle} />
            {children}
          </span>
        </ToggleLabel>
      </BaseToggle>
    </div>
  );
};

ColorToggle.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string,
  value: PropTypes.string,
  selectedId: PropTypes.string,
  name: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  autofill: PropTypes.bool,
  handleChange: PropTypes.func,
  children: PropTypes.node,
};

ColorToggle.defaultProps = {
  value: '',
  label: null,
  fontColor: 'black',
  name: '',
  selectedId: null,
  invalid: false,
  disabled: false,
  autofill: false,
  handleChange: null,
  children: [],
};

export default ColorToggle;

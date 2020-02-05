import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledToggle = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  border: ${({ theme, invalid }) => (invalid ? theme.borders.invalid : theme.borders.component)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: ${({ theme }) => `0 ${theme.spacing['8']} ${theme.spacing['16']} ${theme.spacing['8']}`};
  background: ${({ theme }) => theme.toggle.base.background};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  min-width: 12.8rem;
`;

const StyledToggleInput = styled.input`
  opacity: 0;
  width:0;
  height: 0;
  position: absolute;
  &:checked + label svg {
    color: ${({ theme }) => theme.toggle.base.background}};
    fill: currentColor;
    box-shadow: none;
     transition : all 200ms ease-out;
  } 
  &:disabled + label:hover {
    cursor: not-allowed;
  }
  &:disabled + label {
    color: ${({ theme }) => theme.colors.disabled};
    border: ${({ theme }) => theme.borders.transparent};
    fill: currentColor;
  }
  &:checked + label {
    background: ${({ theme }) => theme.toggle.base.backgroundChecked};
    color: ${({ theme }) => theme.toggle.base.color};
    box-shadow: none;
  }
  &:focus + label {
    box-shadow: 0 0 2px 3px rgba(0, 123, 255, .3);
  }
  ${({ invalid, theme }) => invalid && css`
     & + label {
      color: ${theme.colors.invalid};
      fill: currentColor;
     }
     &:checked + label {
      color:  ${theme.colors.invalid};
      fill: currentColor;
    }
  `}
`;

const columns = {
  1: '100%', 2: '50%', 3: '33.33%', 4: '25%', 5: '20%',
};

export function getInlineStyles(type, rectOptions) {
  if (type !== 'rectangle') return {};

  const { col, height, align } = rectOptions;

  const inlineStyles = {
    height: `${height}rem`,
    alignItems: `${align}`,
  };

  if (col > 0) {
    inlineStyles.width = columns[col];
    inlineStyles.flexBasis = columns[col];
  }

  return inlineStyles;
}

const BaseToggle = ({
  id,
  type,
  value,
  name,
  selectedValue,
  invalid,
  disabled,
  handleToggle,
  handleFocus,
  handleBlur,
  rectOptions,
  children,
  className,
}) => {
  const wrapperElement = useRef(null);
  const toggleElement = useRef(null);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <ThemeProvider theme={getTheme()}>
      <StyledToggle
        style={getInlineStyles(type, rectOptions)}
        onClick={() => {
          toggleElement.current.click();
          toggleElement.current.focus();
        }}
        invalid={invalid}
        ref={wrapperElement}
        className={className}
      >
        <StyledToggleInput
          tabIndex={0}
          ref={toggleElement}
          invalid={invalid}
          id={id}
          type="radio"
          onChange={() => handleToggle(value)}
          checked={selectedValue === value}
          disabled={disabled}
          name={name}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {children}
      </StyledToggle>
    </ThemeProvider>

  );
};

BaseToggle.propTypes = {
  /**
   * Unique identifier for the toggle
   */
  id: PropTypes.string.isRequired,
  /**
   * Type of the toggle
   */
  type: PropTypes.oneOf(['square', 'rectangle', 'custom']).isRequired,
  /**
   * Value applied to the input field
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The value of the currently selected (toggled on) toggle.
   */
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The name to be applied to the input field.
   */
  name: PropTypes.string,
  /**
   * Applies invalid styling when true.
   */
  invalid: PropTypes.bool,
  /**
   * Disables the toggle when true.
   */
  disabled: PropTypes.bool,
  /**
   * Handler function called when a toggle is toggled on with the value of the toggle.
   */
  handleToggle: PropTypes.func.isRequired,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  /**
   * Options object for rendering rectangular toggles]
   */
  rectOptions: PropTypes.shape({
    align: PropTypes.oneOf(['center', 'left', 'right']),
    col: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    height: PropTypes.number,
  }),
  children: PropTypes.node,
  className: PropTypes.string,
};

BaseToggle.defaultProps = {
  name: '',
  selectedValue: null,
  invalid: false,
  disabled: false,
  rectOptions: {
    align: 'center',
    col: 1,
    height: 8,
  },
  children: [],
  className: '',
  handleFocus: null,
  handleBlur: null,
};

export default BaseToggle;

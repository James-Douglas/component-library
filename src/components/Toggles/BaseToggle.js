import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledToggle = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.greyLight};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin: ${(props) => `0 ${props.theme.spacing['8']} ${props.theme.spacing['16']} ${props.theme.spacing['8']}`};
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.boxShadow.sm};
  line-height: ${(props) => props.theme.lineHeight.normal};
  min-width: 12.8rem;
`;

const StyledToggleInput = styled.input`
  opacity: 0;
  width:0;
  height: 0;
  position: absolute;
  &:checked + label svg {
    color: ${(props) => props.theme.colors.white};
    fill: currentColor;
    box-shadow: none;
     transition : all 200ms ease-out;
  } 
  &:disabled + label:hover {
    cursor: not-allowed;
  }
  &:disabled + label {
    color: ${(props) => props.theme.colors.disabled};
    border: 1px solid ${(props) => props.theme.colors.disabled};
    fill: currentColor;
  }
  &:checked + label {
    background: ${(props) => props.theme.colors.blueDark};
    color: ${(props) => props.theme.colors.white};
    box-shadow: none;
  }
  &:focus + label {
    box-shadow: 0 0 2px 3px rgba(0, 123, 255, .3);
  }
  ${(props) => props.invalid && css`
     & + label {
      border: 1px solid ${props.theme.colors.invalid};
      color:  ${props.theme.colors.invalid};
      fill: currentColor;
     }
     &:checked + label {
      border: 2px solid ${props.theme.colors.invalid};
      color:  ${props.theme.colors.invalid};
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
  id, type, value, name, selectedValue, invalid, disabled, onToggle, rectOptions, children,
}) => {
  const wrapperElement = useRef(null);
  const toggleElement = useRef(null);

  const handleToggle = () => {
    onToggle(value);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <ThemeProvider theme={getTheme()}>
      <StyledToggle
        style={getInlineStyles(type, rectOptions)}
        onClick={() => {
          toggleElement.current.click();
          toggleElement.current.focus();
        }}
        ref={wrapperElement}
      >
        <StyledToggleInput
          tabIndex={0}
          ref={toggleElement}
          invalid={invalid}
          id={id}
          type="radio"
          onChange={handleToggle}
          checked={selectedValue === value}
          disabled={disabled}
          name={name}
          value={value}
        />
        {children}
      </StyledToggle>
    </ThemeProvider>

  );
};


BaseToggle.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['square', 'rectangle', 'custom']).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  rectOptions: PropTypes.shape({
    align: PropTypes.oneOf(['center', 'left', 'right']),
    col: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    height: PropTypes.number,
  }),
  children: PropTypes.node,
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
};

export default BaseToggle;

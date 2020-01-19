import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';

const StyledColourToggle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.spacing['128']}; 
  height: ${({ theme }) => theme.spacing['128']};
  &:hover i {
    pointer-events: none;
    height: 100%;
  }
`;

const StyledBorderColour = styled.i`
  font-style: normal;
  position: absolute;
  z-index: ${({ theme }) => (theme.zIndex['10'])}; 
  bottom: 0;
  left: 0;
  height: ${({ theme }) => (theme.spacing['12'])}; 
  width: 100%;
  transition: all 0.3s ease;
`;

const StyledContent = styled.span`
  z-index: ${({ theme }) => (theme.zIndex['20'])}; 
`;

const GlobalStyle = createGlobalStyle`
  .scoped-toggle.white input:checked + label {
    color: white; 
  }
`;

export function getDisplayBackgroundColor(backgroundColor) {
  return backgroundColor === 'white' ? 'ivory' : backgroundColor;
}

export function getAnimationStyle(value, selectedValue, displayBackgroundColor) {
  if (selectedValue === value) {
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
  id, label, backgroundColor, fontColor, value, name, selectedValue, invalid, disabled, onToggle,
}) => {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(value);
    }
  };

  const displayBackgroundColor = getDisplayBackgroundColor(backgroundColor);
  const animationStyle = getAnimationStyle(value, selectedValue, displayBackgroundColor);
  const displayLabel = getDisplayLabel(label, backgroundColor);

  return (
    <ThemeProvider theme={getTheme()}>
      <>
        <GlobalStyle />
        <div className={`scoped-toggle ${fontColor}`}>
          <BaseToggle
            id={id}
            type="custom"
            value={value}
            name={name}
            selectedValue={selectedValue}
            invalid={invalid}
            disabled={disabled}
            onToggle={handleToggle}
          >
            <ToggleLabel id={id}>
              <StyledColourToggle>
                <StyledContent>{displayLabel}</StyledContent>
                <StyledBorderColour style={animationStyle} />
              </StyledColourToggle>
            </ToggleLabel>
          </BaseToggle>
        </div>
      </>
    </ThemeProvider>
  );
};

ColorToggle.propTypes = {
  id: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  fontColor: PropTypes.string,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
};

ColorToggle.defaultProps = {
  label: null,
  fontColor: 'black',
  name: '',
  selectedValue: null,
  invalid: false,
  disabled: false,
  onToggle: null,
};

export default ColorToggle;

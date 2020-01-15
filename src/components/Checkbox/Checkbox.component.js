import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

const StyledHiddenInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: ${({ theme }) => theme.spacing.px};
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: ${({ theme }) => theme.spacing.px};
`;

const StyledWrap = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  min-width: 3rem;
`;

const StyledLabel = styled.label`
  display: flex;
  cursor: pointer;
  margin-top: 0.4rem;
  ${({ children }) => children[1] === null && css`
    position: absolute;
  `}
  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
  `};
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => theme.checkbox.border};
  background: ${({ checked, theme }) => (checked ? `${theme.checkbox.backgroundChecked}` : `${theme.checkbox.background}`)};
  color: ${({ theme }) => theme.checkbox.color};
  min-width: ${({ theme }) => theme.checkbox.size};
  height: ${({ theme }) => theme.checkbox.size};
  pointer-events: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.px};

  ${StyledHiddenInput}:focus + label & {
    box-shadow: ${({ theme }) => theme.checkbox.borderRadius};
  }

  ${({ invertColour, theme }) => invertColour && css`
    background: ${theme.checkbox.background};
    color: ${theme.checkbox.backgroundChecked};
  `}

  ${({ invalid, theme }) => invalid && css`
    border: ${theme.borders.invalid};
  `}

  ${({ disabled, theme }) => disabled && css`
    pointer-events: none;
    background: ${theme.checkbox.backgroundDisabled};
    border: ${theme.borders.disabled};
    color: ${theme.checkbox.colorDisabled};
    opacity:${theme.checkbox.disabledOpacity};
  `}
`;

const StyledContent = styled.div`
  margin: ${({ theme }) => theme.checkbox.contentMargin};
  pointer-evemts: none;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const renderIcon = (icon, value) => {
  if (value) {
    return (
      <FontAwesomeIcon icon={icon} size="1x" />
    );
  }
  return null;
};

const renderContent = (children) => {
  if (children) {
    return (
      <>
        <StyledContent className="checkbox-content">
          {children}
        </StyledContent>
      </>
    );
  }
  return null;
};

const Checkbox = ({
  id,
  icon,
  disabled,
  invalid,
  invertColour,
  handleChange,
  isSelected,
  children,
}) => {
  const [value, setValue] = useState(isSelected);
  useEffect(() => {
    setValue(isSelected);
  }, [isSelected]);
  const toggleEventHandler = () => {
    setValue(!value);
  };

  useEffect(() => {
    handleChange({ id, value });
  }, [handleChange, id, value]);

  return (
    <>
      <ThemeProvider theme={getTheme()}>
        <StyledWrap>
          <StyledHiddenInput
            id={id}
            name={id}
            type="checkbox"
            disabled={disabled}
            onChange={toggleEventHandler}
            checked={value}
          />
          <StyledLabel
            disabled={disabled}
            htmlFor={id}
          >
            <StyledCheckbox
              invertColour={invertColour}
              checked={value}
              disabled={disabled}
              invalid={invalid}
            >
              {renderIcon(icon, value)}
            </StyledCheckbox>
            {renderContent(children)}
          </StyledLabel>
        </StyledWrap>
      </ThemeProvider>
    </>
  );
};

Checkbox.propTypes = {
  /**
   * The checkbox ID. This is required, as it informs the label and the value of the checkbox.
   */
  id: PropTypes.string.isRequired,
  /**
   * Defines the icon needed for the checkbox.
   */
  icon: PropTypes.oneOfType([
    PropTypes.shape({
      prefix: PropTypes.string,
      iconName: PropTypes.string,
      icon: PropTypes.array,
    }),
    PropTypes.string,
  ]),
  /**
   * Defines if the checkbox is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * Defines the checkbox checked state.
   */
  isSelected: PropTypes.bool,
  /**
   * Defines the invalid state for the checkbox which applies appropriate styles.
   */
  invalid: PropTypes.bool,
  /**
   * Changes the color of the checked state - blue bg, white tick, or white bg, blue tick.
   */
  invertColour: PropTypes.bool,
  /**
   * Called on change with { id, value }.
   */
  handleChange: PropTypes.func,
  /**
   * Defines the associated content for the checkbox, used by the wrapper component, `<CheckboxGroup/>`.
   * Not required for the singular checkbox.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Checkbox.defaultProps = {
  icon: faCheck,
  disabled: false,
  isSelected: false,
  invalid: false,
  invertColour: false,
  handleChange: () => { },
  children: null,
};

export default Checkbox;

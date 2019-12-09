import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';
import useToggleState from '../../hooks/useToggleState';
import Icon from '../Icon/Icon.component';

const StyledHiddenInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledWrap = styled.div`
  margin-bottom: 1.2rem;
  min-width: 3rem;
`;

const StyledLabel = styled.label`
  display: flex;
  cursor: pointer;
  margin-top: 0.4rem;
  ${(props) => props.children[1] === null && css`
    position: absolute;
  `}
  ${(props) => props.disabled && css`
    cursor: not-allowed;
  `};
`;

const StyledCheckbox = styled.div`
  border: 1px solid ${(props) => props.theme.colors.blueDark};
  background: ${(props) => (props.checked ? `${props.theme.colors.blueDark}` : `${props.theme.colors.white}`)};
  color: ${(props) => props.theme.colors.white};
  min-width: 2.4rem;
  height: 2.4rem;
  pointer-events: none;
  border-radius: 0.2rem;
  padding: 1px;

  ${StyledHiddenInput}:focus + label & {
    box-shadow: 0 0 0 1px rgba(0, 123, 255, .5);
  }

  ${(props) => props.invertColour && css`
    background: ${props.theme.colors.white};
    color: ${props.theme.colors.blueDark};
  `}

  ${(props) => props.invalid && css`
    border: 1px solid ${props.theme.colors.invalid};
  `}

  ${(props) => props.disabled && css`
    pointer-events: none;
    background: ${props.theme.colors.greyLight};
    border: 1px solid transparent;
    color: ${props.theme.colors.blueDark};
    opacity: 0.5;
  `}
`;

const StyledContent = styled.div`
  margin: 0 0 0 1rem;
  pointer-evemts: none;
  font-size: ${(props) => props.theme.fontSize.base};
`;

export const renderIcon = (icon, value) => {
  if (value) {
    return (
      <Icon name={icon} size={2} />
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
  const [value, toggle] = useToggleState(isSelected);

  const toggleEventHandler = () => {
    toggle(value);
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
  icon: PropTypes.string,
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
  icon: 'check',
  disabled: false,
  isSelected: false,
  invalid: false,
  invertColour: false,
  handleChange: () => { },
  children: null,
};

export default Checkbox;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';
import useId from '../../../hooks/useId';

const StyledIconToggleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: ${({ theme }) => theme.spacing['160']};
  height: ${({ theme }) => theme.spacing['160']};
  padding: ${({ theme }) => theme.spacing['16']};
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize['2xs']};
  height: ${({ theme }) => theme.spacing['80']};
  width: ${({ theme }) => theme.spacing['80']};
`;

const StyledIconContent = styled.div`
  padding-top: ${({ theme }) => theme.spacing['8']};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: ${({ theme }) => theme.lineHeight.tight};
`;

const StyledTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const StyledDescription = styled.div`
  color: ${({ theme }) => theme.colors.grey800};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export function getToggleContent(id, icon, title, description) {
  return (
    <ToggleLabel id={id}>
      <StyledIconToggleContent>
        <StyledIcon>
          {icon && <FontAwesomeIcon icon={icon} size="4x" />}
        </StyledIcon>
        <StyledIconContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledIconContent>
      </StyledIconToggleContent>
    </ToggleLabel>
  );
}

const IconToggle = ({
  id: propsId,
  title,
  description,
  value,
  name,
  selectedValue,
  invalid,
  disabled,
  handleToggle,
  handleFocus,
  handleBlur,
  handleClick,
  icon,
}) => {
  const id = useId(propsId);
  const toggleHandler = () => {
    if (handleToggle) {
      handleToggle(value);
    }
  };
  return (
    <BaseToggle
      id={id}
      type="square"
      value={value}
      name={name}
      selectedValue={selectedValue}
      invalid={invalid}
      disabled={disabled}
      handleToggle={toggleHandler}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      handleClick={handleClick}
    >
      {getToggleContent(id, icon, title, description)}
    </BaseToggle>
  );
};


IconToggle.propTypes = {
  /**
   * Unique identifier for the IconToggle
   */
  id: PropTypes.string,
  /**
   * Label for the toggle
   */
  title: PropTypes.string.isRequired,
  /**
   * Optional description text displayed undernearth the title
   */
  description: PropTypes.string,
  /**
   * The value to be applied to the input field.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The value of the currently selected (toggled on) toggle.
   * (`ToggleGroup` will override any value provided to this prop if in use)
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
  handleToggle: PropTypes.func,
  /**
   * Handler function call on focus of the toggle
   */
  handleFocus: PropTypes.func,
  /**
   * Handler function call on blur of the toggle
   */
  handleBlur: PropTypes.func,
  /**
   * Handler function called on click of the toggle
   */
  handleClick: PropTypes.func,
  /**
   * Icon from fontAweseom to be rendered on the toggle. (Note if a pictureOptions object is also passed this prop will be overridden).
   */
  icon: PropTypes.oneOfType([
    PropTypes.shape({
      prefix: PropTypes.string,
      iconName: PropTypes.string,
      icon: PropTypes.array,
    }),
    PropTypes.string,
  ]),
};

IconToggle.defaultProps = {
  id: null,
  name: '',
  description: '',
  selectedValue: null,
  invalid: false,
  disabled: false,
  handleToggle: null,
  handleFocus: null,
  handleBlur: null,
  handleClick: null,
  icon: null,
};

export default IconToggle;

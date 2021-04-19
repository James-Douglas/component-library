import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@comparethemarketau/manor-typography';
import { useId } from '@comparethemarketau/manor-hooks';
import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';
import {
  StyledDescription, StyledIcon, StyledIconContent, StyledIconToggleContent, StyledTitle,
} from './IconToggle.styles';

export function getToggleContent(id, icon, title, description) {
  return (
    <ToggleLabel id={id}>
      <StyledIconToggleContent>
        <StyledIcon>
          {icon && <FontAwesomeIcon icon={icon} size="4x" />}
        </StyledIcon>
        <StyledIconContent>
          <StyledTitle><Typography variant="body1">{title}</Typography></StyledTitle>
          <StyledDescription><Typography variant="body1">{description}</Typography></StyledDescription>
        </StyledIconContent>
      </StyledIconToggleContent>
    </ToggleLabel>
  );
}

const IconToggle = ({
  trackingLabel,
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
  toggleGroupLabel,
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
      trackingLabel={trackingLabel}
      toggleGroupLabel={toggleGroupLabel}
      variant="IconToggle"
    >
      {getToggleContent(id, icon, title, description)}
    </BaseToggle>
  );
};

IconToggle.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
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
   * Icon from FontAwesome to be rendered on the toggle. (Note if a pictureOptions object is also passed this prop will be overridden).
   */
  icon: PropTypes.oneOfType([
    PropTypes.object, // eslint-disable-line
    PropTypes.string,
  ]),
  /**
   * Label of the toggle group, the ToggleGroup automatically populates this
   */
  toggleGroupLabel: PropTypes.string,
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
  toggleGroupLabel: '',
};

export default IconToggle;

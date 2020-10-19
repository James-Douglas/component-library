import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@comparethemarketau/manor-typography';
import { Picture } from '@comparethemarketau/manor-picture';
import { useId } from '@comparethemarketau/manor-hooks';
import ToggleLabel from '../ToggleLabel';
import {
  StyledBaseToggle,
  StyledDescription,
  StyledIcon,
  StyledIconContent,
  StyledIconToggleContent,
  StyledTitle,
  StyledCheck,
  StyledPicture,
} from './MultiSelect.styles';

const MultiSelectToggle = ({
  id: propsId,
  title,
  description,
  value,
  name,
  selectedValues,
  invalid,
  disabled,
  handleToggle,
  handleFocus,
  handleBlur,
  handleClick,
  icon,
  image,
}) => {
  const id = useId(propsId);
  const toggleHandler = () => {
    if (handleToggle) {
      handleToggle(value);
    }
  };

  const getIconImageContent = () => {
    if (icon) {
      return (
        <StyledIcon>
          <FontAwesomeIcon icon={icon} size="4x" />
        </StyledIcon>
      );
    }
    if (image) {
      const {
        src, srcsets, alt, title: pictureTitle,
      } = image;
      return (
        <StyledPicture>
          <Picture
            src={src}
            srcsets={srcsets}
            alt={alt}
            title={pictureTitle}
          />
        </StyledPicture>
      );
    }
    return null;
  };

  const getCheckIcon = () => {
    if (!selectedValues.includes(value)) {
      return <FontAwesomeIcon icon={faPlusCircle} size="2x" />;
    }
    return <FontAwesomeIcon icon={faCheck} size="2x" />;
  };

  return (
    <StyledBaseToggle
      id={id}
      value={value}
      name={name}
      selectedValue={selectedValues.includes(value) ? value : ''}
      invalid={invalid}
      disabled={disabled}
      handleToggle={toggleHandler}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      handleClick={handleClick}
      inputType="checkbox"
    >
      <ToggleLabel id={id}>
        <StyledIconToggleContent>
          <StyledCheck>
            {getCheckIcon()}
          </StyledCheck>
          {getIconImageContent()}
          <StyledIconContent>
            <StyledTitle><Typography variant="body1" align="center">{title}</Typography></StyledTitle>
            <StyledDescription disabled={disabled}><Typography variant="body2" align="center">{description}</Typography></StyledDescription>
          </StyledIconContent>
        </StyledIconToggleContent>
      </ToggleLabel>
    </StyledBaseToggle>
  );
};

MultiSelectToggle.propTypes = {
  /**
   * Unique identifier for the toggle
   */
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /**
   * The text content to render in the toggle
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]),
  /**
   * Optional description text displayed undernearth the title
   */
  description: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  /**
   * The value to be applied to the input field.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Values of the currently selected toggles
   */
  selectedValues: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
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
   * Icon from fontAweseom to be rendered on the toggle. (Note if a pictureOptions object is also passed this prop will take precedence).
   */
  icon: PropTypes.oneOfType([
    PropTypes.shape({
      prefix: PropTypes.string,
      iconName: PropTypes.string,
      icon: PropTypes.array, // eslint-disable-line
    }),
    PropTypes.string,
  ]),
  /**
   * Image to be rendered on the toggle (note that if an icon is also passed, the icon will take precedence)
   */
  image: PropTypes.shape({
    src: PropTypes.string,
    srcsets: PropTypes.arrayOf(PropTypes.shape({
      srcset: PropTypes.string,
      media: PropTypes.string,
    })),
    alt: PropTypes.string,
    title: PropTypes.string,
  }),
};

MultiSelectToggle.defaultProps = {
  id: null,
  name: '',
  title: '',
  description: '',
  selectedValues: [],
  invalid: false,
  disabled: false,
  handleToggle: null,
  handleFocus: null,
  handleBlur: null,
  handleClick: null,
  icon: null,
  image: null,
};

export default MultiSelectToggle;

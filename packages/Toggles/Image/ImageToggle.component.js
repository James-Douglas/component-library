import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import { Picture } from '@comparethemarketau/manor-picture';
import { Typography } from '@comparethemarketau/manor-typography';
import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';

import {
  StyledDescription, StyledIconContent, StyledImageToggle, StyledPicture, StyledTitle,
} from './ImageToggle.styles';

export function getImageToggleContent(src, srcsets, alt, pictureTitle, id, toggleTitle, description, theme) {
  return (
    <ToggleLabel id={id} theme={theme}>
      <StyledImageToggle>
        <StyledPicture>
          <Picture
            src={src}
            srcsets={srcsets}
            alt={alt}
            title={pictureTitle}
          />
        </StyledPicture>
        <StyledIconContent>
          <StyledTitle><Typography variant="body1">{toggleTitle}</Typography></StyledTitle>
          <StyledDescription><Typography variant="body2">{description}</Typography></StyledDescription>
        </StyledIconContent>
      </StyledImageToggle>
    </ToggleLabel>
  );
}

const ImageToggle = ({
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
  src,
  srcsets,
  alt,
  pictureTitle,
  theme,
}) => {
  const toggleHandler = () => {
    if (handleToggle) {
      handleToggle(value);
    }
  };
  const id = useId(propsId);
  return (
    <ManorProvider theme={theme}>
      <BaseToggle
        id={id}
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
        {getImageToggleContent(src, srcsets, alt, pictureTitle, id, title, description, theme)}
      </BaseToggle>
    </ManorProvider>
  );
};

ImageToggle.propTypes = {
  /**
   * Unique identifier for the ImageToggle
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
   * src attribute passed to the Picture component
   * (see `Picture` component documentation - this attribute is a fallback for
   * older browsers)
   */
  src: PropTypes.string,
  /**
   * srcset's passed to Picture component - see `Picture` docs
   */
  srcsets: PropTypes.arrayOf(PropTypes.shape({
    srcset: PropTypes.string,
    media: PropTypes.string,
  })),
  /**
   * alt text for the rendered picture
   */
  alt: PropTypes.string,
  /**
   * title attribute for the image
   */
  pictureTitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

ImageToggle.defaultProps = {
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
  src: '',
  srcsets: [],
  alt: '',
  pictureTitle: '',
  theme: undefined,
};

export default ImageToggle;

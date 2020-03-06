import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';
import Picture from '../../Picture/Picture.component';

const StyledImageToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.spacing['160']};
  height: ${({ theme }) => theme.spacing['160']};
  padding: ${({ theme }) => theme.spacing['16']};
`;

const StyledPicture = styled.div`
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

export function getImageToggleContent(src, srcsets, alt, pictureTitle, id, toggleTitle, description) {
  return (
    <ToggleLabel id={id}>
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
          <StyledTitle>{toggleTitle}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledIconContent>
      </StyledImageToggle>
    </ToggleLabel>
  );
}

const ImageToggle = ({
  id,
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
  src,
  srcsets,
  alt,
  pictureTitle,
}) => {
  const toggleHandler = () => {
    if (handleToggle) {
      handleToggle(value);
    }
  };
  return (
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
    >
      {getImageToggleContent(src, srcsets, alt, pictureTitle, id, title, description)}
    </BaseToggle>
  );
};


ImageToggle.propTypes = {
  /**
   * Unique identifier for the toggle
   */
  id: PropTypes.string.isRequired,
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
};

ImageToggle.defaultProps = {
  name: '',
  description: '',
  selectedValue: null,
  invalid: false,
  disabled: false,
  handleToggle: null,
  handleFocus: null,
  handleBlur: null,
  src: '',
  srcsets: [],
  alt: '',
  pictureTitle: '',
};

export default ImageToggle;

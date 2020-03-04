import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseToggle from './BaseToggle';
import ToggleLabel from './ToggleLabel';
import Picture from '../Picture/Picture.component';

const StyledTextToggleContent = styled.div`
  height: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing['16']};
  align-items: center;
  text-align: center;
  min-height: 2.4rem;

  ${({ rectOptions }) => rectOptions && rectOptions.align && css`
    justify-content: ${rectOptions.align};
  `}

  ${({ type, theme }) => type === 'square' && css`
    justify-content: space-around;
    width: ${theme.spacing['128']};
    height: ${theme.spacing['128']};
    min-height: 12.8rem;
    padding: ${theme.spacing['8']};
  `}
`;

const StyledIconToggleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: ${({ theme }) => theme.spacing['128']};
  height: ${({ theme }) => theme.spacing['128']};
  transition : all 200ms ease-out;
`;

const StyledImageToggle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  width: ${({ theme }) => theme.spacing['128']};
  height: ${({ theme }) => theme.spacing['128']};
`;

const StyledIconContent = styled.div`
  padding-top: ${({ theme }) => theme.spacing['32']};
`;

const StyledPicture = styled.div`
   width: ${({ theme }) => theme.spacing['48']};
   height: ${({ theme }) => theme.spacing['48']};
   text-align: center;
`;

export function getPictureToggleContent(pictureOptions, label) {
  const {
    src,
    srcsets,
    alt,
    title,
  } = pictureOptions;
  return (
    <StyledImageToggle>
      <StyledPicture>
        <Picture
          src={src}
          srcsets={srcsets}
          alt={alt}
          title={title}
        />
      </StyledPicture>
      <span>{label}</span>
    </StyledImageToggle>
  );
}


export function getIconToggleContent(icon, iconSize, label) {
  return (
    <StyledIconToggleContent>
      <FontAwesomeIcon icon={icon} size={iconSize} />
      <StyledIconContent>{label}</StyledIconContent>
    </StyledIconToggleContent>
  );
}

export function getTextToggleContent(type, rectOptions, label) {
  return (
    <StyledTextToggleContent type={type} rectOptions={rectOptions}>
      {label}
    </StyledTextToggleContent>
  );
}

export function getToggleContent(icon, iconSize, pictureOptions, id, type, rectOptions, label) {
  let content;
  if (pictureOptions) {
    content = getPictureToggleContent(pictureOptions, label);
  } else if (icon) {
    content = getIconToggleContent(icon, iconSize, label);
  } else {
    content = getTextToggleContent(type, rectOptions, label);
  }
  return (
    <ToggleLabel id={id}>
      {content}
    </ToggleLabel>
  );
}

const Toggle = ({
  id,
  type,
  label,
  value,
  name,
  selectedValue,
  invalid,
  disabled,
  handleToggle,
  handleFocus,
  handleBlur,
  icon,
  iconSize,
  pictureOptions,
  rectOptions,
}) => {
  const toggleHandler = () => {
    if (handleToggle) {
      handleToggle(value);
    }
  };
  return (
    <BaseToggle
      id={id}
      type={type}
      value={value}
      name={name}
      selectedValue={selectedValue}
      invalid={invalid}
      disabled={disabled}
      handleToggle={toggleHandler}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      rectOptions={rectOptions}
    >
      {getToggleContent(icon, iconSize, pictureOptions, id, type, rectOptions, label)}
    </BaseToggle>
  );
};


Toggle.propTypes = {
  /**
   * Unique identifier for the toggle
   */
  id: PropTypes.string.isRequired,
  /**
   * Label for the toggle
   */
  label: PropTypes.string.isRequired,
  /**
   * The value to be applied to the input field.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The type of toggle to render
   */
  type: PropTypes.oneOf(['square', 'rectangle']),
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
  /**
   * Size of the icon to be rendered on the toggle.
   */
  iconSize: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  /**
   *  Options object for rendering a picture on a toggle, attributes match those of the Picture component.
   */
  pictureOptions: PropTypes.shape({
    src: PropTypes.string,
    srcsets: PropTypes.arrayOf(PropTypes.shape({
      srcset: PropTypes.string,
      media: PropTypes.string,
    })),
    alt: PropTypes.string,
    title: PropTypes.string,
  }),
  /**
   * Options object for rendering rectangular toggles]
   */
  rectOptions: PropTypes.shape({
    align: PropTypes.oneOf(['center', 'left', 'right']),
    col: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    height: PropTypes.number,
  }),
};

Toggle.defaultProps = {
  name: '',
  type: 'square',
  selectedValue: null,
  invalid: false,
  disabled: false,
  handleToggle: null,
  handleFocus: null,
  handleBlur: null,
  icon: null,
  iconSize: '3x',
  rectOptions: {
    align: 'center',
    col: 1,
    height: 8,
  },
  pictureOptions: null,
};

export default Toggle;

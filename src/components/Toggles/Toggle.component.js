import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseToggle from './BaseToggle';
import ToggleLabel from './ToggleLabel';
import Picture from '../Picture/Picture.component';

const StyledTextToggleContent = styled.div`
  height: 100%;
  display: flex;
  padding: ${(props) => props.theme.spacing['16']}; 
  align-items: center;
  text-align: center;
  min-height: 2.4rem;
   ${(props) => props.rectOptions && props.rectOptions.align && css`
    justify-content: ${props.rectOptions.align};
  `}
  ${(props) => props.type === 'square' && css`
    justify-content: space-around;
    width: ${props.theme.spacing['128']}; 
    height: ${props.theme.spacing['128']}; 
    min-height: 12.8rem;
    padding: ${props.theme.spacing['8']};
  `}
`;

const StyledIconToggleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: ${(props) => props.theme.spacing['128']}; 
  height: ${(props) => props.theme.spacing['128']}; 
  transition : all 200ms ease-out;
`;
const StyledImageToggle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  
  width: ${(props) => props.theme.spacing['128']}; 
  height: ${(props) => props.theme.spacing['128']};  
`;
const StyledIconContent = styled.div`
  padding-top: ${(props) => props.theme.spacing['32']}; 
`;

const StyledPicture = styled.div`
   width: ${(props) => props.theme.spacing['48']};
   height: ${(props) => props.theme.spacing['48']};
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
    <ThemeProvider theme={getTheme()}>
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
    </ThemeProvider>
  );
}


export function getIconToggleContent(icon, iconSize, label) {
  return (
    <ThemeProvider theme={getTheme()}>
      <StyledIconToggleContent>
        <FontAwesomeIcon icon={icon} size={iconSize} />
        <StyledIconContent>{label}</StyledIconContent>
      </StyledIconToggleContent>
    </ThemeProvider>
  );
}

export function getTextToggleContent(type, rectOptions, label) {
  return (
    <ThemeProvider theme={getTheme()}>
      <StyledTextToggleContent type={type} rectOptions={rectOptions}>
        {label}
      </StyledTextToggleContent>
    </ThemeProvider>
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
  onToggle,
  icon,
  iconSize,
  pictureOptions,
  rectOptions,
}) => {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(value);
    }
  };
  return (
    <ThemeProvider theme={getTheme()}>
      <BaseToggle
        id={id}
        type={type}
        value={value}
        name={name}
        selectedValue={selectedValue}
        invalid={invalid}
        disabled={disabled}
        onToggle={handleToggle}
        rectOptions={rectOptions}
      >
        {getToggleContent(icon, iconSize, pictureOptions, id, type, rectOptions, label)}
      </BaseToggle>
    </ThemeProvider>
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
   * Handler function called when a toggle is toggled on (called with object: { id, value } of the toggle).
   */
  onToggle: PropTypes.func,
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
  onToggle: null,
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

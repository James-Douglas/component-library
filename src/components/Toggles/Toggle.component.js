import React from 'react';
import PropTypes from 'prop-types';

import BaseToggle from './BaseToggle';
import ToggleLabel from './ToggleLabel';
import Icon from '../Icon/Icon.component';
import styles from './toggle.styles';
import Picture from '../Picture/Picture.component';

export function getAlignment({ align }) {
  return align ? `align-${align}` : '';
}

export function getTypeClasses(type, rectOptions) {
  return type === 'square' ? 'square-toggle' : `rect-toggle ${getAlignment(rectOptions)}`;
}

export function getPictureToggleContent(pictureOptions, label) {
  const {
    src, srcsets, alt, title,
  } = pictureOptions;
  return (
    <>
      <style jsx>{styles}</style>
      <div className="image-toggle">
        <span className="picture-size">
          <Picture
            src={src}
            srcsets={srcsets}
            alt={alt}
            title={title}
          />
        </span>
        <span>
          {label}
        </span>
      </div>
    </>
  );
}


export function getIconToggleContent(icon, iconSize, label) {
  return (
    <>
      <div className="icon-toggle transition">
        <style jsx>{styles}</style>
        <Icon name={icon} size={iconSize} />
        <span className="icon-label">
          {label}
        </span>
      </div>
    </>
  );
}

export function getTextToggleContent(type, rectOptions, label) {
  return (
    <>
      <span className={getTypeClasses(type, rectOptions)}>
        <style jsx>{styles}</style>
        {label}
      </span>
    </>
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
      <style jsx>{styles}</style>
      {content}
    </ToggleLabel>
  );
}

const Toggle = ({
  id, type, label, value, name, selectedValue, invalid, disabled, onToggle, icon, iconSize, pictureOptions, rectOptions,
}) => {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(value);
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
      onToggle={handleToggle}
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
   * Name of the icon to be rendered on the toggle. (Note if a pictureOptions object is also passed this prop will be overridden).
   */
  icon: PropTypes.string,
  /**
   * Size of the icon to be rendered on the toggle.
   */
  iconSize: PropTypes.number,
  /**
   *  Options object for rendering a picture on a toggle, attributes match those of the Picture component.
   */
  pictureOptions: PropTypes.shape({
    src: PropTypes.string,
    srcsets: PropTypes.arrayOf(PropTypes.string),
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
  iconSize: 10,
  rectOptions: {
    align: 'center',
    col: 1,
    height: 8,
  },
  pictureOptions: null,
};

export default Toggle;

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
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(['square', 'rectangle']),
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  pictureOptions: PropTypes.shape({
    src: PropTypes.string,
    srcsets: PropTypes.arrayOf(PropTypes.string),
    alt: PropTypes.string,
    title: PropTypes.string,
  }),
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

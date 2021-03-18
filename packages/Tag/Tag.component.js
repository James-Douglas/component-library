import React from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyledTag, StyledTagP, StyledTagButton, StyledIconContainer,
} from './Tag.styles';

const Tag = React.forwardRef(({
  value, alert, onClickDelete, icon, onKeyDown, elementRef, visible,
}, ref) => {
  const deleteHandler = () => {
    if (onClickDelete) {
      onClickDelete();
      if (elementRef) {
        elementRef.focus();
      }
    }
  };

  const keyDownHandler = (e) => {
    if (onKeyDown && e.key === 'Backspace') {
      onKeyDown();
      if (elementRef) {
        elementRef.focus();
      }
    }
  };

  return (
    <StyledTag ref={ref} alert={alert} onKeyDown={keyDownHandler} visible={visible} tabIndex="-1">
      {icon
        && (
        <StyledIconContainer alert={alert}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </StyledIconContainer>
        )}
      <StyledTagP alert={alert}>{value}</StyledTagP>
      <StyledTagButton onClick={deleteHandler} alert={alert}>
        <FontAwesomeIcon icon={faTimes} size="sm" />
      </StyledTagButton>
    </StyledTag>
  );
});

Tag.displayName = 'Tag';

Tag.propTypes = {
  /**
   * The value to display
   */
  value: PropTypes.string,
  /**
   * Renders the given FontAwesome icon before the text
   */
  icon: PropTypes.oneOfType([
    PropTypes.object, // eslint-disable-line
    PropTypes.string,
  ]),
  /**
   * Renders the icon in its alert state if true
   */
  alert: PropTypes.bool,
  /**
   * Func to delete tags
   */
  onClickDelete: PropTypes.func.isRequired,
  /**
   * Keydown to fire custom event
   */
  onKeyDown: PropTypes.func,
  /**
   * a ref to the element (usually an input) that the tags are used with, to fire a focus event on
   */
  elementRef: PropTypes.oneOfType([
    PropTypes.element,
    // eslint-disable-next-line react/forbid-prop-types
    PropTypes.object,
  ]),
  /**
   * decides if the tag is visible or not
   */
  visible: PropTypes.bool,
};

Tag.defaultProps = {
  value: '',
  icon: null,
  alert: false,
  elementRef: null,
  onKeyDown: null,
  visible: true,

};

export default Tag;

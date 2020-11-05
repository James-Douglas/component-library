import React from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyledTag, StyledTagP, StyledTagButton, StyledIconContainer,
} from './Tag.styles';

const Tag = React.forwardRef(({
  value, alert, warning, onClickDelete, icon, onKeyDown, elementRef,
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
    <StyledTag ref={ref} alert={alert} warning={warning} onKeyDown={keyDownHandler} tabIndex="0">
      {icon
        && (
        <StyledIconContainer warning={warning} alert={alert}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </StyledIconContainer>
        )}
      <StyledTagP alert={alert} warning={warning}>{value}</StyledTagP>
      <StyledTagButton onClick={deleteHandler} alert={alert} warning={warning}>
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
   * Renders the given (FontAwesome) before the text
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
   * set the alert style to warning, else its an error style
   */
  warning: PropTypes.bool,
  /**
   * a ref to the element (usually an input) that the tags are used with, to fire a focus event on
   */
  elementRef: PropTypes.element,
};

Tag.defaultProps = {
  value: '',
  icon: null,
  alert: false,
  warning: true,
  elementRef: null,
  onKeyDown: null,
};

export default Tag;

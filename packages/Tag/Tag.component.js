import React from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyledTag, StyledTagP, StyledTagButton, StyledIconContainer,
} from './Tag.styles';

const Tag = React.forwardRef(({
  value, alert, warning, onClickDelete, icon,
}, ref) => (
  <StyledTag ref={ref} alert={alert} warning={warning}>
    {icon
      && (
      <StyledIconContainer warning={warning} alert={alert}>
        <FontAwesomeIcon icon={icon} size="lg" />
      </StyledIconContainer>
      )}
    <StyledTagP alert={alert} warning={warning}>{value}</StyledTagP>
    <StyledTagButton onClick={onClickDelete} alert={alert} warning={warning}>
      <FontAwesomeIcon icon={faTimes} size="sm" />
    </StyledTagButton>
  </StyledTag>
));

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
   * set the alert style to warning, else its an error style
   */
  warning: PropTypes.bool,
};

Tag.defaultProps = {
  value: '',
  icon: null,
  alert: false,
  warning: true,
};

export default Tag;

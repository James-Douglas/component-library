import React from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledTag, StyledTagP, StyledTagButton } from './Tag.styles';

const Tag = React.forwardRef(({ value, alert, onClickDelete }, ref) => (
  <StyledTag ref={ref} alert={alert}>
    <StyledTagP alert={alert}>{value}</StyledTagP>
    <StyledTagButton onClick={onClickDelete} alert={alert}>
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
   * The associated code from the received data
   */
  alert: PropTypes.bool,
  /**
   * Func to delete tags
   */
  onClickDelete: PropTypes.func.isRequired,
};

Tag.defaultProps = {
  value: '',
  alert: false,
};

export default Tag;

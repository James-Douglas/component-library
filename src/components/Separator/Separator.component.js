import React from 'react';
import PropTypes from 'prop-types';
import StyledHR from './Separator.styles';

const Separator = ({ type, className }) => (
  <StyledHR type={type} className={className} />
);

Separator.propTypes = {
  /**
   * Direction of the Separator
   */
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Classes to be applied to the Separator element
   */
  className: PropTypes.string,
};

Separator.defaultProps = {
  type: 'horizontal',
  className: '',
};

export default Separator;

import React from 'react';
import PropTypes from 'prop-types';
import StyledHR from './Separator.styles';

const Separator = ({
  type, noSpacing, className,
}) => (
  <StyledHR type={type} noSpacing={noSpacing} className={className} />
);

Separator.propTypes = {
  /**
   * Direction of the Separator
   */
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Remove spacing from the Separator
   */
  noSpacing: PropTypes.bool,
  /**
   * Classes to be applied to the Separator element
   */
  className: PropTypes.string,
};

Separator.defaultProps = {
  type: 'horizontal',
  noSpacing: false,
  className: '',
};

export default Separator;

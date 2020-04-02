import React from 'react';
import PropTypes from 'prop-types';
import StyledRow from './Row.styles';

const Row = ({
  children, className, reverse, removeMarginBottom, flexWrap,
}) => (
  <StyledRow className={`row ${className}`} reverse={reverse} removeMarginBottom={removeMarginBottom} flexWrap={flexWrap}>
    {children}
  </StyledRow>
);

Row.propTypes = {
  /**
   * Classes to be applied to the row element
   */
  className: PropTypes.string,
  /**
   * Flex-direction: reverse bool for the row
   */
  reverse: PropTypes.bool,
  /**
   * The children of the component
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /**
   * Remove the default margin-bottom
   */
  removeMarginBottom: PropTypes.bool,
  /**
    * It defines whether the flex items are forced in a single line or can be flowed into multiple lines.
  */
  flexWrap: PropTypes.oneOf([
    'nowrap',
    'wrap',
    'wrap-reverse',
  ]),
};

Row.defaultProps = {
  className: '',
  children: [],
  removeMarginBottom: false,
  reverse: false,
  flexWrap: 'wrap',
};

export default Row;

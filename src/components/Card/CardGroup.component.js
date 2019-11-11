import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.component';

const getChildren = (children, cols, id) => {
  const childStyles = { width: cols === 1 ? '100%' : `${100 / cols}%` };
  return children.map((child) => (
    // eslint-disable-next-line react/no-array-index-key
    <div className="px-4" style={childStyles} key={`card-group-${id}-${child.props.id}`}>
      {child}
    </div>
  ));
};

const CardGroup = ({ cols, children, id }) => (
  <div className="flex w-full flex-wrap justify-start -mx-4">
    {getChildren(children, cols, id)}
  </div>
);

CardGroup.propTypes = {
  /**
   * Unique identifier for the CardGroup element
   */
  id: PropTypes.string.isRequired,
  /**
   * Number of cols to spread cards into
   */
  cols: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Card Components to be contained in this CardGroup
   */
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([Card]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([Card]),
      }),
    ),
  ]),
};

CardGroup.defaultProps = {
  cols: 1,
  children: [],
};

export default CardGroup;

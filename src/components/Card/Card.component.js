import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

const styles = css`
  .card {
    @apply flex bg-white shadow-progress border mx-4 mb-16 w-full;
    min-width: 8rem;
    min-height: 8rem;
  }
`;

const Card = ({ id, children }) => (
  <div className="card" id={id}>
    <style jsx>{styles}</style>
    {children}
  </div>
);

Card.propTypes = {
  /**
   * Unique identifier for the card
   */
  id: PropTypes.string.isRequired,
  /**
   * Card content
   */
  children: PropTypes.node,
};

Card.defaultProps = {
  children: [],
};

export default Card;

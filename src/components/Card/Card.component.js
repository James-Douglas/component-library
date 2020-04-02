import React from 'react';
import PropTypes from 'prop-types';
import { spacingPropTypes } from 'utils/applySpacing';
import StyledCard from './Card.styles';
import useId from '../../hooks/useId';

const Card = ({
  id: propsId,
  children,
  margin,
  padding,
  className,
}) => {
  const id = useId(propsId);
  return (
    <StyledCard id={id} margin={margin} padding={padding} className={className}>
      {children}
    </StyledCard>
  );
};

Card.propTypes = {
  /**
   * Unique identifier for the card
   */
  id: PropTypes.string,
  /**
   * Card content
   */
  children: PropTypes.node,
  /**
   * Allows setting of margin values for the card
   */
  margin: spacingPropTypes,
  /**
   * Allows setting of padding values for the card
   */
  padding: spacingPropTypes,
  /**
   * Classes to be applied to the Card component
   */
  className: PropTypes.string,
};

Card.defaultProps = {
  id: null,
  children: [],
  margin: ['4', '4', '16'],
  padding: ['16'],
  className: '',
};

export default Card;

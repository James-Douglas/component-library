import React from 'react';
import PropTypes from 'prop-types';
import { spacingPropTypes } from '@comparethemarketau/manor-utils';
import { useId } from '@comparethemarketau/manor-hooks';
import StyledCard from './Card.styles';

const Card = ({
  id: propsId,
  children,
  margin,
  padding,
  className,
  boxShadow,
}) => {
  const id = useId(propsId);
  const shadow = boxShadow !== false;
  return (
    <StyledCard id={id} margin={margin} padding={padding} className={className} shadow={shadow}>
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
  /**
   * Allow setting of box shadow to true or false for the card
   */
  boxShadow: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
};

Card.defaultProps = {
  id: null,
  children: [],
  margin: ['4', '4', '16'],
  padding: ['16'],
  className: '',
  boxShadow: true,
};

export default Card;

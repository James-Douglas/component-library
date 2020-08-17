import React from 'react';
import PropTypes from 'prop-types';
import { spacingPropTypes } from '@comparethemarketau/manor-utils';
import { useId } from '@comparethemarketau/manor-hooks';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import StyledCard from './Card.styles';

const Card = ({
  id: propsId,
  children,
  margin,
  padding,
  className,
  theme,
}) => {
  const id = useId(propsId);
  return (
    <ManorProvider theme={theme}>
      <StyledCard id={id} margin={margin} padding={padding} className={className}>
        {children}
      </StyledCard>
    </ManorProvider>
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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Card.defaultProps = {
  id: null,
  children: [],
  margin: ['4', '4', '16'],
  padding: ['16'],
  className: '',
  theme: undefined,
};

export default Card;

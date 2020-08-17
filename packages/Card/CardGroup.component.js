import React from 'react';
import PropTypes from 'prop-types';
import { useId } from '@comparethemarketau/manor-hooks';
import { spacingPropTypes } from '@comparethemarketau/manor-utils';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import Card from './Card.component';
import { StyledCardGroup, StyledCardGroupChildren } from './CardGroup.styles';

const getChildren = (children, cols, { margin, padding }, className) => children.map((child, index) => (
  // eslint-disable-next-line react/no-array-index-key
  <StyledCardGroupChildren cols={cols} key={`card-group-${index}`}>
    {React.cloneElement(child, { margin, padding, className })}
  </StyledCardGroupChildren>
));

const CardGroup = ({
  id: propsId,
  cols,
  children,
  cardProps,
  className,
  theme,
}) => {
  const id = useId(propsId);
  return (
    <ManorProvider theme={theme}>
      <StyledCardGroup id={id}>
        {getChildren(children, cols, cardProps, className)}
      </StyledCardGroup>
    </ManorProvider>
  );
};

CardGroup.propTypes = {
  /**
   * Unique identifier for the CardGroup
   */
  id: PropTypes.string,
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
  /**
   * Can be used to set margin & padding on all cards within the CardGroup.
   */
  cardProps: PropTypes.shape({
    margin: spacingPropTypes,
    padding: spacingPropTypes,
  }),
  /**
   * Classes to be applied to the CardGroup component
   */
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

CardGroup.defaultProps = {
  id: null,
  cols: 1,
  children: [],
  cardProps: {},
  className: '',
  theme: undefined,
};

export default CardGroup;

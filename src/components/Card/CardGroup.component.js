import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card.component';
import { spacingPropTypes } from '../../utils/applySpacing';
import useId from '../../hooks/useId';

const StyledCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin: ${({ theme }) => `0 -${theme.spacing['4']}`};
`;

const StyledCardGroupChildren = styled.div`
  display: flex;
  width: ${({ cols }) => (cols === 1 ? '100%' : `${100 / cols}%`)};
  padding-right: ${({ theme }) => theme.spacing['8']};
  padding-left: ${({ theme }) => theme.spacing['8']};
`;

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
}) => {
  const id = useId(propsId);
  return (
    <StyledCardGroup id={id}>
      {getChildren(children, cols, cardProps, className)}
    </StyledCardGroup>
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
};

CardGroup.defaultProps = {
  id: null,
  cols: 1,
  children: [],
  cardProps: {},
  className: '',
};

export default CardGroup;

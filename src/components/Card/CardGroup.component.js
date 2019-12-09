import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import Card from './Card.component';

const StyledCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin: ${(props) => `0 -${props.theme.spacing['4']}`};
`;

const StyledCardGroupChildren = styled.div`
  padding-right: ${(props) => props.theme.spacing['8']};
  padding-left: ${(props) => props.theme.spacing['8']};
`;

const getChildren = (children, cols, id) => {
  const childStyles = { width: cols === 1 ? '100%' : `${100 / cols}%` };
  return children.map((child) => (
    // eslint-disable-next-line react/no-array-index-key
    <StyledCardGroupChildren id={`card-group-${id}`} style={childStyles} key={`card-group-${id}-${child.props.id}`}>
      {child}
    </StyledCardGroupChildren>
  ));
};

const CardGroup = ({ cols, children, id }) => (
  <ThemeProvider theme={getTheme()}>
    <StyledCardGroup>
      {getChildren(children, cols, id)}
    </StyledCardGroup>
  </ThemeProvider>
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

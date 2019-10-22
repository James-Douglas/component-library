import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Grid/Container/Container.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';

const getChildren = (children, cols, id) => children.map((child, index) => (
  // eslint-disable-next-line react/no-array-index-key
  <Column col={Math.floor(12 / cols)} key={`card-group-${id}-${index}`}>
    {child}
  </Column>
));

const CardGroup = ({ cols, children, id }) => (
  <Container>
    <Row>
      {getChildren(children, cols, id)}
    </Row>
  </Container>
);

CardGroup.propTypes = {
  id: PropTypes.string.isRequired,
  cols: PropTypes.oneOf([1, 2, 3, 4, 6]),
  children: PropTypes.node,
};

CardGroup.defaultProps = {
  cols: 1,
  children: [],
};

export default CardGroup;

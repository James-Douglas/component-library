import React from 'react';
import { Button } from '@comparethemarketau/manor-button';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  max-width: 15rem;
`;

const ProductSelect = ({ className = '', onSelect }) => (
  <Wrapper classname={className}>
    <Button onClick={onSelect} style={{ marginBottom: 0 }}>Select</Button>
  </Wrapper>
);

ProductSelect.propTypes = {
  className: PropTypes.string,
  onSelect: PropTypes.func,
};

ProductSelect.defaultProps = {
  className: '',
  onSelect: () => {},
};

export default ProductSelect;

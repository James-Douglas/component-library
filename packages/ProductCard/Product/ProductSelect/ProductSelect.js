import React from 'react';
import { Button } from '@comparethemarketau/manor-button';
import PropTypes from 'prop-types';
import Wrapper from './ProductSelect.styles';

const ProductSelect = ({ className = '', buttonText, onSelect }) => (
  <Wrapper className={className}>
    <Button handleClick={onSelect} style={{ marginBottom: 0 }}>{buttonText}</Button>
  </Wrapper>
);

ProductSelect.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  onSelect: PropTypes.func,
};

ProductSelect.defaultProps = {
  className: '',
  buttonText: 'Select',
  onSelect: () => {},
};

export default ProductSelect;

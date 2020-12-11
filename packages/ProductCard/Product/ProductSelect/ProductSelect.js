import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledButton } from './ProductSelect.styles';

const ProductSelect = ({
  className = '', buttonText, slimButton, onSelect,
}) => (
  <Wrapper className={className}>
    <StyledButton handleClick={onSelect} slimButton={slimButton} style={{ marginBottom: 0 }}>{buttonText}</StyledButton>
  </Wrapper>
);

ProductSelect.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  onSelect: PropTypes.func,
  slimButton: PropTypes.bool,
};

ProductSelect.defaultProps = {
  className: '',
  buttonText: 'Select',
  onSelect: () => {},
  slimButton: false,
};

export default ProductSelect;

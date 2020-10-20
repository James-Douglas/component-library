import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveLayout } from '@comparethemarketau/manor-layout';
import { useId } from '@comparethemarketau/manor-hooks';
import { Pill } from '@comparethemarketau/manor-pill';
import ProductContext from '../../Context/ProductContext';
import { Wrapper, StyledCheckbox, StyledLabel } from './ProductCompareToggle.styles';

const ProductCompareToggle = ({
  disabled, isSelected, handleChange, className,
}) => {
  const [selected, setSelected] = useState(isSelected);
  const { product } = useContext(ProductContext);
  const id = useId();

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  const handleCheckboxClick = (e) => {
    handleChange(e.target.checked);
  };
  return (
    <>
      <ResponsiveLayout upTo="md">
        <Wrapper className={className}>
          <Pill
            label="Compare"
            size="medium"
            disabled={disabled}
            handleClick={handleChange}
            selected={selected}
          />
        </Wrapper>
      </ResponsiveLayout>
      <ResponsiveLayout isFrom="lg">
        <Wrapper className={className}>
          <StyledLabel htmlFor={`compare-${product.name}`}>
            <StyledCheckbox
              id={id}
              isSelected={selected}
              handleClick={handleCheckboxClick}
              disabled={disabled}
              label="Compare"
            />
          </StyledLabel>
        </Wrapper>
      </ResponsiveLayout>
    </>
  );
};

ProductCompareToggle.propTypes = {
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  handleChange: PropTypes.func,
  className: PropTypes.string,
};

ProductCompareToggle.defaultProps = {
  disabled: false,
  isSelected: false,
  handleChange: null,
  className: '',
};

export default ProductCompareToggle;

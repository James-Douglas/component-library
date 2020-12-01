import React, { useCallback, useContext } from 'react';
import { faFileAlt } from '@fortawesome/pro-regular-svg-icons';
import { Button } from '@comparethemarketau/manor-button';
import PropTypes from 'prop-types';
import ProductContext from '../../Context/ProductContext';
import { Wrapper } from './ProductDetails.styles';

const ProductDetails = ({ className = '' }) => {
  const { onDetails, product } = useContext(ProductContext);

  const doClick = useCallback(
    (e) => {
      e.preventDefault();
      onDetails(product);
    },
    [onDetails, product],
  );

  return (
    <Wrapper className={className}>
      <Button variant="tertiary" handleClick={doClick} icon={faFileAlt} iconAlign="right">
        Product details
      </Button>
    </Wrapper>
  );
};

ProductDetails.propTypes = {
  className: PropTypes.string,
};

ProductDetails.defaultProps = {
  className: '',
};

export default ProductDetails;

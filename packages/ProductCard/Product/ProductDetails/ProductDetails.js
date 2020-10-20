import React, { useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/pro-regular-svg-icons';
import { Link } from '@comparethemarketau/manor-link';
import { Typography } from '@comparethemarketau/manor-typography';
import PropTypes from 'prop-types';
import ProductContext from '../../Context/ProductContext';
import Wrapper from './ProductDetails.styles';

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
      <Typography variant="body1" style={{ fontWeight: 'fontWeightBold', fontSize: 'h6.fontSize' }}>
        <Link onClick={doClick} href="#" style={{ textDecoration: 'none' }}>
          Product details <FontAwesomeIcon icon={faFileAlt} />
        </Link>
      </Typography>
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

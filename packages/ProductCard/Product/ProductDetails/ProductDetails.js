import React, { useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/pro-regular-svg-icons';
import { Link } from '@comparethemarketau/manor-link';
import PropTypes from 'prop-types';
import ProductContext from '../../Context/ProductContext';
import { Wrapper, StyledTypography } from './ProductDetails.styles';

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
      <StyledTypography variant="body1">
        <Link onClick={doClick} href="#" underline="none">
          Product details <FontAwesomeIcon icon={faFileAlt} />
        </Link>
      </StyledTypography>
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

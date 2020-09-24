import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/pro-regular-svg-icons';
import { useIsDesktop } from '@comparethemarketau/manor-hooks';
import { Link } from '@comparethemarketau/manor-link';
import { Typography } from '@comparethemarketau/manor-typography';
import PropTypes from 'prop-types';
import ProductContext from '../Context/ProductContext';

const Wrapper = styled.div``;

const ProductDetails = ({ className = '' }) => {
  const isDesktop = useIsDesktop();
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
      <Typography variant="inherit" style={{ fontWeight: 'fontWeightBold', fontSize: 'h6.fontSize' }}>
        <Link onClick={doClick} isDesktop={isDesktop} href="#">
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

import React from 'react';
import PropTypes from 'prop-types';
import { useIsSticky } from '@comparethemarketau/manor-hooks';
import Header from './Header.component';

const StickyHeader = ({
  number, logo, contactStrip,
}) => {
  const isStuck = useIsSticky(5);
  return (
    <Header number={number} isSticky stuck={isStuck} logo={logo} contactStrip={contactStrip} />
  );
};

StickyHeader.propTypes = {
  logo: PropTypes.node.isRequired,
  number: PropTypes.string,
  contactStrip: PropTypes.bool,
};
StickyHeader.defaultProps = {
  number: '',
  contactStrip: false,
};

export default StickyHeader;

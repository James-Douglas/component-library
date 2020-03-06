import React from 'react';
import PropTypes from 'prop-types';
import useIsSticky from 'hooks/useIsSticky';
import Header from './Header.component';

const StickyHeader = ({ number, logo }) => {
  const isStuck = useIsSticky(5);
  return (
    <Header number={number} isSticky stuck={isStuck} logo={logo} />
  );
};

StickyHeader.propTypes = {
  logo: PropTypes.node.isRequired,
  number: PropTypes.string,
};
StickyHeader.defaultProps = {
  number: '',
};

export default StickyHeader;

import React from 'react';
import PropTypes from 'prop-types';
import useIsSticky from 'hooks/useIsSticky';
import Header from './Header.component';

const StickyHeader = ({ number }) => {
  const isStuck = useIsSticky(5);
  return (
    <Header number={number} isSticky stuck={isStuck} />
  );
};

StickyHeader.propTypes = {
  number: PropTypes.string.isRequired,
};

export default StickyHeader;

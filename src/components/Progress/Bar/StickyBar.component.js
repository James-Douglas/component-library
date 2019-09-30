import React from 'react';
import PropTypes from 'prop-types';
import useIsSticky from '../../../hooks/useIsSticky';
import Bar from './Bar.component';

const StickyBar = ({
  value,
}) => {
  const isStuck = useIsSticky(60);
  return (
    <Bar value={value} isSticky={isStuck} stuck={isStuck} />
  );
};

StickyBar.propTypes = {
  value: PropTypes.string,
};

StickyBar.defaultProps = {
  value: '70',
};

export default StickyBar;

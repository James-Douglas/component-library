import React from 'react';
import PropTypes from 'prop-types';
import { useIsDesktop } from '@comparethemarketau/manor-hooks';

const MobileLayout = ({
  children,
  className,
}) => {
  const renderChildren = () => {
    if (className === '') return children;
    return (
      <div className={className}>
        {children}
      </div>
    );
  };
  if (useIsDesktop()) return null;
  return (
    <>
      {renderChildren()}
    </>
  );
};

MobileLayout.propTypes = {
  /**
   * Classes to be applied to the mobile layout element
   */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

MobileLayout.defaultProps = {
  className: '',
};

export default MobileLayout;

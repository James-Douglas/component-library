import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useIsDesktop } from '@comparethemarketau/manor-hooks';

const DesktopLayout = ({
  children,
  className,
}) => {
  const renderedChildren = useMemo(() => {
    if (className === '') return children;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }, [className, children]);
  if (!useIsDesktop()) return null;
  return (
    <>
      {renderedChildren}
    </>
  );
};

DesktopLayout.propTypes = {
  /**
   * Classes to be applied to the desktop layout element
   */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

DesktopLayout.defaultProps = {
  className: '',
};

export default DesktopLayout;

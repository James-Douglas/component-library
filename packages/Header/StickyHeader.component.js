import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { useIsSticky } from '@comparethemarketau/manor-hooks';
import Header from './Header.component';

const StickyHeader = ({
  number, logo, contactStrip, theme,
}) => {
  const isStuck = useIsSticky(5);
  return (
    <ManorProvider theme={theme}>
      <Header number={number} isSticky stuck={isStuck} logo={logo} contactStrip={contactStrip} />
    </ManorProvider>
  );
};

StickyHeader.propTypes = {
  logo: PropTypes.node.isRequired,
  number: PropTypes.string,
  contactStrip: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};
StickyHeader.defaultProps = {
  number: '',
  contactStrip: false,
  theme: undefined,
};

export default StickyHeader;

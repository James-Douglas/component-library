import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import StyledHR from './Separator.styles';

const Separator = ({
  type, noSpacing, className, theme,
}) => (
  <ManorProvider theme={theme}>
    <StyledHR type={type} noSpacing={noSpacing} className={className} />
  </ManorProvider>
);

Separator.propTypes = {
  /**
   * Direction of the Separator
   */
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Remove spacing from the Separator
   */
  noSpacing: PropTypes.bool,
  /**
   * Classes to be applied to the Separator element
   */
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Separator.defaultProps = {
  type: 'horizontal',
  noSpacing: false,
  className: '',
  theme: undefined,
};

export default Separator;

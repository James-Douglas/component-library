import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import StyledFlexRow from './Row.styles';

const Row = ({
  children,
  className,
  reverse,
  removeMarginBottom,
  flexWrap,
  justify,
  theme,
}) => (
  <ManorProvider theme={theme}>
    <StyledFlexRow
      justify={justify}
      className={`row ${className}`}
      reverse={reverse}
      removeMarginBottom={removeMarginBottom}
      flexWrap={flexWrap}
    >
      {children}
    </StyledFlexRow>
  </ManorProvider>
);

Row.propTypes = {
  /**
   * Classes to be applied to the row element
   */
  className: PropTypes.string,
  /**
   * Flex-direction: reverse bool for the row
   */
  reverse: PropTypes.bool,
  /**
   * The children of the component
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /**
   * Remove the default margin-bottom
   */
  removeMarginBottom: PropTypes.bool,
  /**
   * It defines whether the flex items are forced in a single line or can be flowed into multiple lines.
   */
  flexWrap: PropTypes.oneOf([
    'nowrap',
    'wrap',
    'wrap-reverse',
  ]),
  /**
   * Defines alignment of a column
   */
  justify: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-around',
    'space-between',
    'initial',
    'inherit',
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Row.defaultProps = {
  className: '',
  children: [],
  removeMarginBottom: false,
  reverse: false,
  flexWrap: 'wrap',
  justify: 'flex-start',
  theme: undefined,
};

export default Row;

import React from 'react';
import PropTypes from 'prop-types';
import StyledColumn from './Column.styles';

const Column = ({
  cols,
  xs,
  sm,
  md,
  lg,
  offset,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  children,
  className,
  valign,
  halign,
}) => {
  const colMode = (prop) => {
    // if cols has been defined, and the xs - lg prop is not false or a number, set via cols prop
    if (cols && prop !== false && typeof prop !== 'number') {
      return (cols);
    }
    // take the prop xs - lg prop if it exists
    if (prop || prop === false) {
      return prop;
    }
    // default to auto sizing columns
    return true;
  };

  const offsetMode = (prop) => {
    if (offset && prop === null) {
      return (offset);
    }
    return prop;
  };

  return (
    <StyledColumn
      xs={colMode(xs)}
      sm={colMode(sm)}
      md={colMode(md)}
      lg={colMode(lg)}
      xsOffset={offsetMode(xsOffset)}
      smOffset={offsetMode(smOffset)}
      mdOffset={offsetMode(mdOffset)}
      lgOffset={offsetMode(lgOffset)}
      valign={valign}
      halign={halign}
      className={`
        ${className}
      `}
    >
      {children}
    </StyledColumn>
  );
};

Column.propTypes = {
  /**
   * Classes to be applied to the container element
   */
  className: PropTypes.string,
  /**
   * Col size for all breakpoints
   */
  cols: PropTypes.number,
  /**
   * Width in columns at xs screen sizes.
   * if true - enable auto sizing. If false, hide column otherwise specifiy amount of cols
   */
  xs: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  /**
   * Width in columns at sm screen sizes.
   * if true - enable auto sizing. If false, hide column otherwise specifiy amount of cols
   */
  sm: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  /**
   * Width in columns at md screen sizes.
   * if true - enable auto sizing. If false, hide column otherwise specifiy amount of cols
   */
  md: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  /**
   * Width in columns at lg screen sizes.
   * if true - enable auto sizing. If false, hide column otherwise specifiy amount of cols
   */
  lg: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  /**
   * offset for all breakpoints
   */
  offset: PropTypes.number,
  /**
   * Offset in columns at the xs screen size.
   */
  xsOffset: PropTypes.number,
  /**
   * Offset in columns at the sm screen size.
   */
  smOffset: PropTypes.number,
  /**
   * Offset in columns at the md screen size.
   */
  mdOffset: PropTypes.number,
  /**
   * Offset in columns at the lg screen size.
   */
  lgOffset: PropTypes.number,
  /**
   * The column contents.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * The align-items property is related to CSS layout.
   */
  valign: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  /**
   * The justify-content property is related to CSS layout.
   */
  halign: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'initial',
    'inherit',
  ]),
};

Column.defaultProps = {
  className: '',
  cols: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  offset: null,
  xsOffset: null,
  smOffset: null,
  mdOffset: null,
  lgOffset: null,
  valign: 'stretch',
  halign: 'initial',
  children: [],
};

export default Column;

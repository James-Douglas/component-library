import React from 'react';
import PropTypes from 'prop-types';
import StyledColumn from './Column.styles';

const Column = ({
  cols,
  sm,
  md,
  lg,
  xl,
  xxl,
  offset,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  offsetXxl,
  children,
  className,
  valign,
  halign,
}) => (
  <StyledColumn
    cols={cols}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    xxl={xxl}
    baseOffset={offset}
    offsetSm={offsetSm}
    offsetMd={offsetMd}
    offsetLg={offsetLg}
    offsetXl={offsetXl}
    offsetXxl={offsetXxl}
    valign={valign}
    halign={halign}
    className={`
        ${className}
      `}
  >
    {children}
  </StyledColumn>
);

Column.propTypes = {
  /**
   * Classes to be applied to the container element
   */
  className: PropTypes.string,
  /**
   * Width in columns (across all breakpoints where a specific width [sm, md, lg, xl, xxl] has not been given)
   */
  cols: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Width in columns at sm screen sizes.
   */
  sm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Width in columns at md screen sizes.
   */
  md: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Width in columns at lg screen sizes.
   */
  lg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Width in columns at xl screen sizes.
   */
  xl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Width in columns at xxl screen sizes.
   */
  xxl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Offset in columns (across all breakpoints where a specific offset [sm, md, lg, xl, xxl] has not been given)
   */
  offset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Offset in columns at the sm screen size.
   */
  offsetSm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Offset in columns at the md screen size.
   */
  offsetMd: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Offset in columns at the lg screen size.
   */
  offsetLg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Offset in columns at the xl screen size.
   */
  offsetXl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Offset in columns at the xxl screen size.
   */
  offsetXxl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
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
  cols: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  xxl: 0,
  offset: 0,
  offsetSm: 0,
  offsetMd: 0,
  offsetLg: 0,
  offsetXl: 0,
  offsetXxl: 0,
  children: [],
  valign: 'stretch',
  halign: 'initial',
};

export default Column;

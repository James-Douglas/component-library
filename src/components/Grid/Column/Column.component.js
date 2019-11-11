import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Column = ({
  col,
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
}) => {
  const generateClass = (prop, value) => {
    const classNames = `${prop}-${value}`;

    if (prop.includes('offset')) {
      if (prop.length > 6) {
        return `offset-${prop.substr(6).toLowerCase()}-${value}`;
      }
      return `${prop}-${value}`;
    }

    if (prop !== 'col') {
      return `col-${classNames}`;
    }

    return classNames;
  };

  const generateClassList = () => {
    const classList = [];

    [{ col }, { sm }, { md }, { lg }, { xl }, { xxl }, { offset }, { offsetSm }, { offsetMd }, { offsetLg }, { offsetXl }, { offsetXxl }].forEach((val) => {
      const prop = Object.keys(val)[0];
      const value = Object.values(val)[0];
      if (value) {
        classList.push(generateClass(prop, value));
      }
    });

    // if no props have been supplied, default to auto size column "col"
    if (!col && !sm && !md && !lg && !xl && !xxl) {
      const defaultStyle = 'col';
      classList.push(defaultStyle);
    }

    return classList.join(' ');
  };

  const generatedClasses = generateClassList();

  return (
    <>
      <style jsx>{styles}</style>
      <div className={`${generatedClasses} ${className}`}>
        {children}
      </div>
    </>
  );
};

Column.propTypes = {
  /**
   * Classes to be applied to the container element
   */
  className: PropTypes.string,
  /**
   * Width in columns (across all breakpoints where a specific width [sm, md, lg, xl, xxl] has not been given)
   */
  col: PropTypes.oneOfType([
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Column.defaultProps = {
  className: '',
  col: 0,
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
};

export default Column;

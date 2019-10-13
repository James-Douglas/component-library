import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Column = ({
  col, sm, md, lg, xl, xxl, offset, children, className,
}) => {
  const generateClass = (prop, value) => {
    let classNames = `${prop}-${value}`;

    switch (prop) {
      case 'col':
      case 'offset':
        break;
      default:
        classNames = `col-${classNames}`;
    }
    return classNames;
  };

  const generateClassList = () => {
    const classList = [];

    [{ col }, { sm }, { md }, { lg }, { xl }, { xxl }, { offset }].forEach((val) => {
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
  className: PropTypes.string,
  col: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  md: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  xl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  xxl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  offset: PropTypes.oneOfType([
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
  children: [],
};

export default Column;

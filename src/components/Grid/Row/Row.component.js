import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.module.css';

const Row = (props) => {

  return (
    <div className={`${styles.row} ${props.classes}`}>
      {props.column}
    </div>
  )
}

Row.propTypes = {
  column: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default Row;


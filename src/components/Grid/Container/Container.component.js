import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

const Container = (props) => {

  return ( 
    <div className={`${styles.container} ${styles.fixed} ${props.classes}`}>
      {props.children}
    </div>
  );
}

Container.propTypes = {
  row: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default Container;
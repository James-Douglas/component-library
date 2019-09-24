import React from 'react';
import PropTypes from 'prop-types';
import useCheckedState from '../../hooks/useCheckedState';
import Icon from '../Icon/Icon.component';
import styles from './Checkbox.module.css';

const Checkbox = ({
  id, content
}) => {
  
  const { value, onChange } = useCheckedState(false);

  return ( 
    <div className={`${styles['manor-checkbox-wrap']}`}>
      <input
        id={id}
        name={'temp'}
        type={'checkbox'}
        onChange={onChange}
        checked={value}
        className={`
          hidden
          ${styles['manor-checkbox-input']}
        `}
      />

      <label
        for={id}
        className={`
          ${styles['manor-checkbox']}
        `}
      >
        
      </label>   
    </div>
  )
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {

};

export default Checkbox;

import React from 'react';
import PropTypes from 'prop-types';
import useValueState from '../../hooks/useValueState';
import Icon from '../Icon/Icon.component';
import styles from './styles.js';

/* 
  Requires fieldset to handle the label, fieldset not in master yet
*/

const Input = ({
  id, autoFill, disabled
}) => {

  const { value, onChange } = useValueState('');

  return (
    <>
      <style jsx>{styles}</style>
      <div className='input-wrap-default'>
        <div className={`
          fix-wrap
          ${autoFill && !disabled ? 'manor-prefilled-border' : ''}
        `}>
          
        
          <input
            id={id}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired
};

Input.defaultProps = {
 
};

export default Input;

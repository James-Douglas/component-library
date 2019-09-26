import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tracker.module.css';
import FluidContainer from '../../Grid/Container/Fluid.component';

const Tracker = ({ value, steps }) => (
  <div className={`${styles['progress-container']}`}>
    <progress className={`${styles.progress} ${(value === 100) ? 'complete' : ''}`} max="100" value={value} />
    <FluidContainer>
      <div className={styles.steps}>
        <div> { steps }
          {/* {effectLogs.map((effect, index) => (
              <div key={index}>{'🍔'.repeat(index) + effect}</div>
            ))} */}
        </div>
      </div>
    </FluidContainer>
  </div>
);


Tracker.propTypes = {
  value: PropTypes.string,
  steps: PropTypes,
};

Tracker.defaultProps = {
  value: '70',
  steps: [{ label: 'About You', url: '#label' }],
};

export default Tracker;

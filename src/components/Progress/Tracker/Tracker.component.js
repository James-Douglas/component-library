import React from 'react';
import PropTypes from 'prop-types';
import useIsDesktop from 'hooks/useIsDesktop';
import styles from './styles';
import Container from '../../Grid/Container/Container.component';
import TrackerItem from '../TrackerItem/TrackerItem.component';

/**
 * Output progress item depending from active and disable props
 * @param steps {array} - Required array
 * @returns {*}
 */

export function processTrackerItems(steps) {
  return (
    <>
      <style jsx>{styles}</style>
      {steps.map((progressItem, index) => (progressItem.active || progressItem.disabled
        ? (
          <div className={`progress-step ${(progressItem.active) ? 'active' : ''} ${(progressItem.disabled) ? 'disabled' : ''}`} key={progressItem.label}>
            <TrackerItem index={index + 1} mobile={useIsDesktop()} label={progressItem.label} active={Boolean(progressItem.active)} disabled={Boolean(progressItem.disabled)} />
          </div>
        )
        : (
          <a className="progress-link scale-on-hover" href={progressItem.url} key={progressItem.label}>
            <TrackerItem index={index + 1} mobile={useIsDesktop()} label={progressItem.label} active={Boolean(progressItem.active)} disabled={Boolean(progressItem.disabled)} />
          </a>
        )))}
    </>
  );
}


const Tracker = ({
  value,
  steps,
  isSticky,
  stuck,
}) => {
  const stickyClass = isSticky ? 'sticky' : '';
  const stuckClass = stuck ? 'stuck' : '';
  return (
    <div className={`progress-container ${stickyClass} ${stuckClass}`}>
      <style jsx>{styles}</style>
      <progress className={`progress ${(value === 100) ? 'complete' : ''}`} max="100" value={value} />
      <Container>
        <div className="steps">
          {processTrackerItems(steps)}
        </div>
      </Container>
    </div>
  );
};


Tracker.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  steps: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
  })),
  isSticky: PropTypes.bool,
  stuck: PropTypes.bool,
};

Tracker.defaultProps = {
  value: 70,
  steps: [{ label: 'About You', url: '#label' }],
  isSticky: false,
  stuck: false,
};

export default Tracker;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Container from '../../Grid/Container/Container.component';
import useIsDesktop from '../../../hooks/useIsDesktop';
import TrackerItem from '../TrackerItem/TrackerItem.component';


const Tracker = ({
  value,
  steps,
  isSticky,
  stuck,
}) => {
  const isDesktop = useIsDesktop();
  return (
    <div className={`progress-container ${isSticky ? 'sticky' : ''} ${stuck ? 'stuck' : ''}`}>
      <style jsx>{styles}</style>
      <progress className={`progress ${(value === 100) ? 'complete' : ''}`} max="100" value={value} />
      <Container>
        <div className="steps">
          {steps.map((progressItem, index) => (progressItem.active || progressItem.disabled
            ? (
              <div className={`progress-step ${(progressItem.active) ? 'active' : ''} ${(progressItem.disabled) ? 'disabled' : ''}`} key={progressItem.label}>
                <TrackerItem index={index + 1} mobile={isDesktop} label={progressItem.label} active={Boolean(progressItem.active)} disabled={Boolean(progressItem.disabled)} />
              </div>
            )
            : (
              <a className="progress-link scale-on-hover" href={progressItem.url} key={progressItem.label}>
                <TrackerItem index={index + 1} mobile={isDesktop} label={progressItem.label} active={Boolean(progressItem.active)} disabled={Boolean(progressItem.disabled)} />
              </a>
            )))}
        </div>
      </Container>
    </div>
  );
};


Tracker.propTypes = {
  value: PropTypes.string,
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
  value: '70',
  steps: [{ label: 'About You', url: '#label' }],
  isSticky: false,
  stuck: false,
};

export default Tracker;

import React from 'react';
import PropTypes from 'prop-types';
import useIsDesktop from 'hooks/useIsDesktop';
import Container from '../../Grid/Container/Container.component';
import TrackerItem from '../TrackerItem/TrackerItem';
import {
  StyledProcessTrackerItemLink, StyledProgress, StyledProgressStep, StyledSteps, StyledTracker,
} from './ProgressTracker.styles';

/**
 * Output progress item depending from active and disable props
 * @param steps {array} - Required array
 * @returns {*}
 */

export function processTrackerItemLink(isDesktop, progressItem, index) {
  return (
    <StyledProcessTrackerItemLink href={progressItem.url} key={progressItem.label}>
      <TrackerItem index={index + 1} mobile={isDesktop} label={progressItem.label} key={`${progressItem.label}item`} active={Boolean(progressItem.active)} disabled={Boolean(progressItem.disabled)} />
    </StyledProcessTrackerItemLink>
  );
}

export function processTrackerItem(isDesktop, progressItem, index) {
  return (
    <StyledProgressStep active={progressItem.active} disabled={progressItem.disabled} key={progressItem.label} role="progress-step">
      <TrackerItem index={index + 1} mobile={isDesktop} label={progressItem.label} key={`${progressItem.label}item`} active={Boolean(progressItem.active)} disabled={Boolean(progressItem.disabled)} />
    </StyledProgressStep>
  );
}

export function processTrackerItems(steps, isDesktop) {
  return (
    <>
      {steps.map((progressItem, index) => (progressItem.active || progressItem.disabled
        ? (processTrackerItem(isDesktop, progressItem, index))
        : (processTrackerItemLink(isDesktop, progressItem, index))
      ))}
    </>
  );
}


const Tracker = ({
  steps,
  isSticky,
  stuck,
}) => {
  const isDesktop = useIsDesktop();
  const activeProperty = steps.findIndex((element) => element.active);
  const value = (activeProperty === -1) ? 100 : ((activeProperty + 1) / steps.length) * 100;
  return (
    <StyledTracker isSticky={isSticky} stuck={stuck}>
      <StyledProgress max="100" value={value} />
      <Container>
        <StyledSteps>{processTrackerItems(steps, isDesktop)}</StyledSteps>
      </Container>
    </StyledTracker>
  );
};

Tracker.propTypes = {
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
  steps: [{ label: 'About You', url: '#label' }],
  isSticky: false,
  stuck: false,
};

export default Tracker;

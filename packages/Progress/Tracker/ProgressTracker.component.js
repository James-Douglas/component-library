import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { useIsDesktop } from '@comparethemarketau/manor-hooks';
import { Container } from '@comparethemarketau/manor-grid';
import TrackerItem from '../TrackerItem/TrackerItem';
import {
  StyledProcessTrackerItemLink, StyledProgress, StyledProgressStep, StyledSteps, StyledTracker,
} from './ProgressTracker.styles';

/**
 * Output progress item depending from active and disable props
 * @param steps {array} - Required array
 * @returns {*}
 */

export function processTrackerItemLink(isDesktop, progressItem, theme, index) {
  return (
    <StyledProcessTrackerItemLink href={progressItem.url} key={progressItem.label}>
      <TrackerItem index={index + 1} mobile={isDesktop} label={progressItem.label} key={`${progressItem.label}item`} active={Boolean(progressItem.active)} disabled={Boolean(progressItem.disabled)} theme={theme} />
    </StyledProcessTrackerItemLink>
  );
}

export function processTrackerItem(isDesktop, progressItem, theme, index) {
  return (
    <StyledProgressStep active={progressItem.active} disabled={progressItem.disabled} key={progressItem.label} role="progress-step">
      <TrackerItem index={index + 1} mobile={isDesktop} label={progressItem.label} key={`${progressItem.label}item`} active={Boolean(progressItem.active)} disabled={Boolean(progressItem.disabled)} theme={theme} />
    </StyledProgressStep>
  );
}

export function processTrackerItems(steps, isDesktop, theme) {
  return (
    <>
      {steps.map((progressItem, index) => (progressItem.active || progressItem.disabled
        ? (processTrackerItem(isDesktop, progressItem, theme, index))
        : (processTrackerItemLink(isDesktop, progressItem, theme, index))
      ))}
    </>
  );
}

const Tracker = ({
  steps,
  isSticky,
  stuck,
  theme,
}) => {
  const isDesktop = useIsDesktop();
  const activeProperty = steps.findIndex((element) => element.active);
  const value = (activeProperty === -1) ? 100 : ((activeProperty + 1) / steps.length) * 100;
  return (
    <ManorProvider theme={theme}>
      <StyledTracker isSticky={isSticky} stuck={stuck}>
        <StyledProgress max="100" value={value} />
        <Container>
          <StyledSteps>{processTrackerItems(steps, isDesktop, theme)}</StyledSteps>
        </Container>
      </StyledTracker>
    </ManorProvider>
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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Tracker.defaultProps = {
  steps: [{ label: 'About You', url: '#label' }],
  isSticky: false,
  stuck: false,
  theme: undefined,
};

export default Tracker;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import useIsDesktop from 'hooks/useIsDesktop';
import Container from '../../Grid/Container/Container.component';
import TrackerItem from '../TrackerItem/TrackerItem';

/**
 * Output progress item depending from active and disable props
 * @param steps {array} - Required array
 * @returns {*}
 */

const StyledProcessTrackerItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.progress.tracker.itemLinkColor};
  div {
    transition: all 0.1s ease-out;
  }
  &:hover div {
    transform: scale(1.1) translate(0.3rem, 0);
  }
`;

const StyledProgressStep = styled.div`
  color: ${({ theme }) => theme.progress.tracker.progressStep.color};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ active, theme }) => active && css`
    font-weight: ${theme.fontWeight.bold};
  `}
  ${({ disabled, theme }) => disabled && css`
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.progress.tracker.progressStep.disabledColor};
  `}
`;

const StyledTracker = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow.progress};
  font-size: ${({ theme }) => theme.fontSize.sm};
  z-index: ${({ theme }) => theme.zIndex[30]};
  position: ${({ isSticky, stuck }) => (isSticky || stuck ? 'fixed' : 'relative')};
  top: ${({ isSticky, stuck }) => (isSticky || stuck ? '0' : 'inherit')};
  height:  ${({ stuck }) => (stuck ? 'auto' : 'none')};
`;

const sharedStyleProgress = css`
  ${({ theme }) => theme.progress.tracker.backgroundCss};
  transition: width 0.4s ease-in-out;
  border-radius:  ${(props) => ((props.value === 100 || props.value === '100') ? props.theme.borderRadius.none : `0 ${props.theme.borderRadius.full} ${props.theme.borderRadius.full} 0`)};
`;

const StyledProgress = styled.progress`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.progress.tracker.background};
  /* ie11 */
  &[value]  {
    background:  ${({ theme }) => theme.progress.tracker.background};
    color: ${({ theme }) => theme.progress.tracker.colorValue};
    /* Reset the default appearance */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Get rid of default border in IE. */
    border: none;
  }

  /* ie11 & edge remove black right border */
  &::-ms-fill {
    border-color: currentColor;
  }

  &::-webkit-progress-bar {
    background: ${({ theme }) => theme.progress.tracker.backgroundValue};
    transition: background-color 300ms ease-in-out;
  }

  ::-webkit-progress-value {
    ${sharedStyleProgress}
  }
  ::-moz-progress-bar {
    ${sharedStyleProgress}
  }
`;

const StyledSteps = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.spacing[44]};
`;

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

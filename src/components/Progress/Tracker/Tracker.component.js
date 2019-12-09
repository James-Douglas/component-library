import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';
import useIsDesktop from 'hooks/useIsDesktop';
import Container from '../../Grid/Container/Container.component';
import TrackerItem from '../TrackerItem/TrackerItem.component';

/**
 * Output progress item depending from active and disable props
 * @param steps {array} - Required array
 * @returns {*}
 */

const StyledProcessTrackerItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.black};  
  div {
    transition: all 0.1s ease-out;
  }
  &:hover div {
    transform: scale(1.1) translate(0.3rem, 0);
  }
`;
const StyledProgressStep = styled.div`
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.active && css`
    font-weight: ${props.theme.fontWeight.bold};
  `}
  ${(props) => props.disabled && css`
    font-weight: ${props.theme.fontWeight.bold};
    color: ${props.theme.colors.greyDark};
  `}
`;

const StyledTracker = styled.div`
  width: 100%;
  box-shadow: ${(props) => props.theme.boxShadow.progress}; 
  font-size: ${(props) => props.theme.fontSize.sm}; 
  z-index: ${(props) => (props.theme.zIndex[50])}; 
  position: ${(props) => (props.isSticky || props.stuck ? 'fixed' : 'relative')}; 
  top: ${(props) => (props.isSticky || props.stuck ? '0' : 'inherit')};
  height:  ${(props) => (props.stuck ? 'auto' : 'none')};
`;

const sharedStyleProgress = css`
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfefc2+0,c3e4cf+100 */
  background: ${(props) => (props.theme.colors.secondaryLight)};  /* Old browsers */
  background ${(props) => (`-moz-linear-gradient(left, ${props.theme.colors.secondaryLight} 0%, ${props.theme.colors.secondaryLighter}  100%)`)}; /* FF3.6-15 */   
  background: ${(props) => (`-webkit-linear-gradient(left, ${props.theme.colors.secondaryLight} 0%, ${props.theme.colors.secondaryLighter}  100%)`)}; /* Chrome10-25,Safari5.1-6 */
  background: ${(props) => (`linear-gradient(to right, ${props.theme.colors.secondaryLight} 0%, ${props.theme.colors.secondaryLighter}  100%)`)}; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: ${(props) => (`progid:DXImageTransform.Microsoft.gradient( startColorstr=${props.theme.colors.secondaryLight}, endColorstr=${props.theme.colors.secondaryLighter},GradientType=1 )`)};  /* IE6-9 */
  transition : width 0.4s ease-in-out;
  border-radius:  ${(props) => ((props.value === 100 || props.value === '100') ? props.theme.borderRadius.none : `0 ${props.theme.borderRadius.full} ${props.theme.borderRadius.full} 0`)};  
`;

const StyledProgress = styled.progress`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${(props) => (props.theme.colors.white)}; 
  /* ie11 */
  &[value]  {
    background: ${(props) => (props.theme.colors.greyLighterAA)}; 
    color: ${(props) => (props.theme.colors.secondaryLight)}; 
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
    background: ${(props) => (props.theme.colors.greyLighterAA)}; 
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
  height: 4.4rem; /* 44px */
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
    <ThemeProvider theme={getTheme()}>
      <StyledTracker isSticky={isSticky} stuck={stuck}>
        <StyledProgress max="100" value={value} />
        <Container>
          <StyledSteps>{processTrackerItems(steps, isDesktop)}</StyledSteps>
        </Container>
      </StyledTracker>
    </ThemeProvider>
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

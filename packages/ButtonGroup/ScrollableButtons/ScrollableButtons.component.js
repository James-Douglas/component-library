import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { faAngleRight, faAngleLeft } from '@fortawesome/pro-regular-svg-icons';
import { ManorContext } from '@comparethemarketau/manor-provider';

import {
  ScrollableButtonsContainer, Tabs, ArrowIcon, ControlledButton,
} from './ScrollableButtons.style';
import useArrowControl from './hooks/useArrowControl';
import TabButton from './components/TabButton';

const ScrollableButtons = ({ trackingLabel, selectedId, buttons }) => {
  const { breakpoint } = useContext(ManorContext);

  const {
    showLeftArrow,
    showRightArrow,
    disableAllArrows,
    contentRef,
    leftArrowRef,
    rightArrowRef,
    handleLeftClick,
    handleRightClick,
    handleScroll,
    handleTabRefReady,
    handleTabMoveAround,
  } = useArrowControl(selectedId, trackingLabel);

  const defaultHref = '';

  // https://reactjs.org/docs/events.html
  // Starting with React 17, the onScroll event does not bubble in React.
  return (
    <ScrollableButtonsContainer>
      <ControlledButton
        direction="left"
        hidden={(breakpoint !== 'xs' || !showLeftArrow || disableAllArrows)}
        onClick={handleLeftClick}
        onKeyDown={handleLeftClick}
        role="button"
        tabIndex={0}
        ref={leftArrowRef}
      >
        <ArrowIcon icon={faAngleLeft} arrowdirection="Left" />
      </ControlledButton>
      <Tabs ref={contentRef} onScroll={handleScroll}>
        {
          buttons.map((button) => {
            const {
              label, id, handleClick, href,
            } = button;
            return (
              <TabButton
                key={`tab-${id}`}
                id={`tab-${id}`}
                selected={selectedId === id}
                label={label}
                href={href || defaultHref}
                handleClick={handleClick}
                onClick={() => { handleTabMoveAround(id); }}
                onRef={(tabRef) => handleTabRefReady(id, tabRef)}
              />
            );
          })
        }
      </Tabs>
      <ControlledButton
        direction="right"
        hidden={(breakpoint !== 'xs' || !showRightArrow || disableAllArrows)}
        onClick={handleRightClick}
        onKeyDown={handleRightClick}
        role="button"
        tabIndex={0}
        ref={rightArrowRef}
      >
        <ArrowIcon icon={faAngleRight} arrowdirection="Right" />
      </ControlledButton>
    </ScrollableButtonsContainer>
  );
};

ScrollableButtons.defaultProps = {
  selectedId: '',

};

ScrollableButtons.propTypes = {
  /** A descriptive label used in tracking user interactions with this component */
  trackingLabel: PropTypes.string.isRequired,
  /** The id of the focused button */
  selectedId: PropTypes.string,
  /** An array of buttons config */
  buttons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    handleClick: PropTypes.func,
    href: PropTypes.string,
  })).isRequired,
};
export default ScrollableButtons;

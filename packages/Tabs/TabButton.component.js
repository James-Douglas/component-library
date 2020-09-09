import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@comparethemarketau/manor-typography';
import TabsContext from './TabsContext';
import { StyledTabButton, StyledTabButtonContent } from './TabButton.styles';

const TabButton = ({
  name, label, handleClick,
}) => {
  const tabContext = useContext(TabsContext);

  const clickHandler = (e) => {
    tabContext.changeTab(name);
    if (handleClick) {
      handleClick(e);
    }
  };

  const classNames = `
    tab-button
    ${tabContext.activeTab === name ? 'active' : ''}
  `;

  const active = tabContext.activeTab === name;

  return (
    <StyledTabButton
      type="button"
      className={classNames}
      active={active}
      onClick={clickHandler}
    >
      <StyledTabButtonContent active={active}>
        <Typography variant="body1" component="div" color="inherit">{label}</Typography>
      </StyledTabButtonContent>
    </StyledTabButton>
  );
};

TabButton.propTypes = {
  /**
   * The name of the tab button, this required prop links the `TabButton` and the `TabPanel`
   */
  name: PropTypes.string.isRequired,
  /**
   * The label for the tab button
   */
  label: PropTypes.string.isRequired,
  /**
   * Add a custom click handler
   */
  handleClick: PropTypes.func,
};

TabButton.defaultProps = {
  handleClick: null,
};

export default TabButton;

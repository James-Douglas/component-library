import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TabsContext from './TabsContext';
import StyledTabButton from './TabButton.styles';

const TabButton = ({
  name, handleClick, children,
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

  return (
    <StyledTabButton type="button" className={classNames} activeTab={tabContext.activeTab} name={name} onClick={clickHandler}>
      {children}
    </StyledTabButton>
  );
};

TabButton.propTypes = {
  /**
   * The name of the tab button, this required prop links the `TabButton` and the `TabPanel`
   */
  name: PropTypes.string.isRequired,
  /**
   * Add a custom click handler
   */
  handleClick: PropTypes.func,
  /**
   * The child content of the button
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

TabButton.defaultProps = {
  handleClick: null,
  children: '',
};

export default TabButton;

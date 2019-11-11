import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TabsContext from './TabsContext';
import styles from './styles';

const TabButton = ({ name, handleClick, children }) => {
  const tabContext = useContext(TabsContext);

  const onClick = (e) => {
    tabContext.changeTab(name);

    if (handleClick) {
      handleClick(e);
    }
  };

  const classNames = `
    tab-button
    manor-h6
    ${tabContext.activeTab === name ? 'active' : ''}
  `;

  return (
    <>
      <style jsx>{styles}</style>
      <button type="button" className={classNames} onClick={onClick}>
        {children}
      </button>
    </>
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

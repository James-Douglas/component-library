import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TabsContext from './TabsContext';
import styles from './styles';

const TabPanel = ({ name, className, children }) => {
  const tabContext = useContext(TabsContext);

  const classNames = `
    tab-panel
    ${tabContext.activeTab === name ? '' : 'hidden'}
    ${className || ''}
  `;

  return (
    <>
      <style jsx>{styles}</style>
      <div className={classNames}>
        {children}
      </div>
    </>
  );
};

TabPanel.propTypes = {
  /**
   * The name of the tab panel, this required prop links the `TabPanel` and the `TabButton`
   */
  name: PropTypes.string.isRequired,
  /**
   * Extend styles with additional classNames
   */
  className: PropTypes.string,
  /**
   * The child content of the TabPanel
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

TabPanel.defaultProps = {
  className: '',
  children: '',
};


export default TabPanel;

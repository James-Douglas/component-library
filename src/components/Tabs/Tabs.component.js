import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabButton from './TabButton.component';
import TabsContext from './TabsContext';
import styles from './styles';

export const renderChildren = (children) => {
  const tabButton = [];
  const rest = [];

  React.Children.forEach(children, ((child) => {
    child.type === TabButton ? tabButton.push(child) : rest.push(child);
  }));

  return (
    <>
      <style jsx>{styles}</style>
      <div className="tab-button-wrap">
        {tabButton}
      </div>

      {rest}
    </>
  );
};

const Tabs = ({
  startingTab, bordered, className, minHeight, children,
}) => {
  const [activeTab, changeTab] = useState(startingTab);
  const tabProviderValue = { activeTab, changeTab };
  const classNames = `
    tabs-container manor-rich-text
    ${bordered ? 'tab-border' : ''}
    ${className || ''}
  `;

  return (
    <TabsContext.Provider value={tabProviderValue}>
      <style jsx>{styles}</style>
      <div className={classNames} style={{ minHeight: `${minHeight}` }}>
        {renderChildren(children)}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  /**
   * The name of the tab to be visible on init, required prop
   */
  startingTab: PropTypes.string.isRequired,
  /**
   * Defines if the Tabs should have a border
   */
  bordered: PropTypes.bool,
  /**
   * Extend styles with additional classNames
   */
  className: PropTypes.string,
  /**
   * The child content of the Tabs, `TabButtons` and associated `TabPanels`
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Set a min height for the tabs
   */
  minHeight: PropTypes.string,
};

Tabs.defaultProps = {
  bordered: false,
  className: '',
  children: '',
  minHeight: 'initial',
};

export default Tabs;

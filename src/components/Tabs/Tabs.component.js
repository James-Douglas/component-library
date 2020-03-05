import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TabButton from './TabButton.component';
import TabsContext from './TabsContext';

const StyledTabsContainer = styled.div`
  width: 100%;
  min-width: 18rem;
  box-shadow: ${({ theme }) => theme.tabs.shadow};
  ${({ theme, bordered }) => bordered && css`
    border: ${theme.borders.component};
  `}
`;

const StyledTabButtonWrap = styled.div`
  display: flex;
  background: ${({ theme }) => theme.tabs.background};
  button {
    color: ${({ theme }) => theme.tabs.titleColor};
    font-size: ${({ theme }) => theme.tabs.titleFontSize};
    font-weight: ${({ theme }) => theme.tabs.titleFontWeight};
  }
`;

export const renderChildren = (children) => {
  const tabButton = [];
  const rest = [];

  React.Children.forEach(children, ((child) => {
    child.type === TabButton ? tabButton.push(child) : rest.push(child);
  }));

  return (
    <>
      <StyledTabButtonWrap className="tab-button-wrap">
        {tabButton}
      </StyledTabButtonWrap>
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
    tabs-container
    ${className || ''}
  `;

  return (
    <TabsContext.Provider value={tabProviderValue}>
      <StyledTabsContainer className={classNames} bordered={bordered} style={{ minHeight: `${minHeight}` }}>
        {renderChildren(children)}
      </StyledTabsContainer>
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

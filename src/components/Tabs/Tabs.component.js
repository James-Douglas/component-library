import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';
import TabButton from './TabButton.component';
import TabsContext from './TabsContext';

const StyledTabsContainer = styled.div`
  width: 100%;
  min-width: 18rem;
  box-shadow: ${(props) => props.theme.boxShadow.sm};
  ${(props) => props.bordered && css`
    border: 1px solid ${props.theme.colors.greyLight};
  `}
`;

const StyledTabButtonWrap = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.primaryAA};
  background: ${(props) => props.theme.colors.white};
`;

export const renderChildren = (children) => {
  const tabButton = [];
  const rest = [];

  React.Children.forEach(children, ((child) => {
    child.type === TabButton ? tabButton.push(child) : rest.push(child);
  }));

  return (
    <>
      <ThemeProvider theme={getTheme()}>
        <StyledTabButtonWrap className="tab-button-wrap">
          {tabButton}
        </StyledTabButtonWrap>
      </ThemeProvider>
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
    ${className || ''}
  `;

  return (
    <TabsContext.Provider value={tabProviderValue}>
      <ThemeProvider theme={getTheme()}>
        <StyledTabsContainer className={classNames} bordered style={{ minHeight: `${minHeight}` }}>
          {renderChildren(children)}
        </StyledTabsContainer>
      </ThemeProvider>
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

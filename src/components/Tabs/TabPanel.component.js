import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TabsContext from './TabsContext';

const StyledPanel = styled.div`
  margin-top: 0;
  height: 100%;
  ${({ activeTab, name }) => activeTab !== name && css`
    display: none;
  `}
`;

const TabPanel = ({ name, className, children }) => {
  const tabContext = useContext(TabsContext);

  const classNames = `
    tab-panel
    ${className || ''}
  `;

  return (
    <StyledPanel className={classNames} activeTab={tabContext.activeTab} name={name}>
      {children}
    </StyledPanel>
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

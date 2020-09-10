import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { spacingPropTypes } from '@comparethemarketau/manor-utils';
import TabsContext from './TabsContext';
import StyledTabPanel from './TabPanel.styles';

const TabPanel = ({
  name,
  padding,
  className,
  children,
}) => {
  const tabContext = useContext(TabsContext);

  const classNames = `
    tab-panel
    ${className || ''}
  `;

  return (
    <StyledTabPanel
      className={classNames}
      activeTab={tabContext.activeTab}
      name={name}
      padding={padding}
    >
      {children}
    </StyledTabPanel>
  );
};

TabPanel.propTypes = {
  /**
   * The name of the tab panel, this required prop links the `TabPanel` and the `TabButton`
   */
  name: PropTypes.string.isRequired,
  /**
   * Padding to be applied to the TabPanel
   */
  padding: spacingPropTypes,
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
  padding: ['24'],
  className: '',
  children: '',
};

export default TabPanel;

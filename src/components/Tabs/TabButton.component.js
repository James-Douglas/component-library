import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TabsContext from './TabsContext';

const StyledTabButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing[20]} 0 ${theme.spacing[12]} 0`};
  border-bottom: 0.5rem solid transparent;
  max-width: 100%;
  transition: .3s ease-out border;
  -ms-flex-preferred-size: 0;
  flex-basis: 0%;
  -ms-flex-positive: 1;
  flex-grow: 1;
  :not(:first-child) {
   margin-left: ${({ theme }) => theme.spacing[24]};
  }
  :focus {
    outline: none;
  }
  & h1, h2, h3, h4, h5, h6, p {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.snug};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize.base};
    margin: 0;
  }

  ${({ theme, activeTab, name }) => activeTab === name && css`
    border-bottom: 0.5rem solid ${theme.colors.brandMidnightBlue};
  `}
`;

const TabButton = ({ name, handleClick, children }) => {
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

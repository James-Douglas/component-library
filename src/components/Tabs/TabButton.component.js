import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TabsContext from './TabsContext';

const StyledTabButton = styled.button`
  padding: 2rem 0 1.2rem 0;
  border-bottom: 0.5rem solid transparent;
  max-width: 100%;
  transition: .3s ease-out border;
  -ms-flex-preferred-size: 0;
  flex-basis: 0%;
  -ms-flex-positive: 1;
  flex-grow: 1;
  :not(:first-child) {
    margin-left: 2.4rem;
  }
  :focus {
    outline: none;
  }
  & h1, h2, h3, h4, h5, h6, p {
    font-weight: 700;
    line-height: 1.4;
    font-family: SourceSansPro, Arial, sans-serif;
    font-size: 1.6rem;
    margin: 0;
  }

  ${({ theme, activeTab, name }) => activeTab === name && css`
    border-bottom: 0.5rem solid ${theme.colors.primaryAA};
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
    <>
      <StyledTabButton type="button" className={classNames} activeTab={tabContext.activeTab} name={name} onClick={clickHandler}>
        {children}
      </StyledTabButton>
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

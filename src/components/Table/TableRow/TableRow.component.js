import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledComponent = styled.div`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  &:hover {
    background: ${(props) => (props.hover ? props.theme.colors.greyLighter : 'none')}; 
  }
`;
const TableRow = ({
  className,
  component,
  hover,
  children,
}) => {
  const Component = component || 'tr';
  return (
    <ThemeProvider theme={getTheme()}>
      <StyledComponent
        as={Component}
        hover={hover}
        className={className}
      >
        {children || null}
      </StyledComponent>
    </ThemeProvider>
  );
};


TableRow.propTypes = {
  /**
   * Extend the styles applied to the component.
   */
  className: PropTypes.string,
  /**
   * The content of the table, normally `td` ot `th`.
   */
  component: PropTypes.elementType,
  /**
   * hover on tr.
   */
  hover: PropTypes.bool,
  /**
   * The content of the tr, normally `td`.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
TableRow.defaultProps = {
  className: '',
  component: 'tr',
  hover: false,
  children: '',
};

export default TableRow;

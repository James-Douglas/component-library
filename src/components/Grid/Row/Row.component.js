import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: -1.6rem;
  margin-right: -1.6rem;
`;

const Row = ({ children, className }) => (
  <StyledRow className={`row ${className}`}>
    {children}
  </StyledRow>
);

Row.propTypes = {
  /**
   * Classes to be applied to the row element
   */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

Row.defaultProps = {
  className: '',
  children: [],
};

export default Row;

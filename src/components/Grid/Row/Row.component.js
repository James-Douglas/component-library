import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.6rem;
  margin-right: -1.6rem;
  ${(props) => (props.reverse) && css`
    flex-direction: row-reverse;
  `}
  ${(props) => (props.flexWrap) && css`
    flex-wrap: ${props.flexWrap};
  `}
  margin-bottom: ${({ theme, removeMarginBottom }) => (removeMarginBottom ? 0 : theme.spacing[24])};
  width: 100%;
`;

const Row = ({
  children, className, reverse, removeMarginBottom, flexWrap,
}) => (
  <StyledRow className={`row ${className}`} reverse={reverse} removeMarginBottom={removeMarginBottom} flexWrap={flexWrap}>
    {children}
  </StyledRow>
);

Row.propTypes = {
  /**
   * Classes to be applied to the row element
   */
  className: PropTypes.string,
  /**
   * Flex-direction: reverse bool for the row
   */
  reverse: PropTypes.bool,
  /**
   * The children of the component
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /**
   * Remove the default margin-bottom
   */
  removeMarginBottom: PropTypes.bool,
  /**
    * It defines whether the flex items are forced in a single line or can be flowed into multiple lines.
  */
  flexWrap: PropTypes.oneOf([
    'nowrap',
    'wrap',
    'wrap-reverse',
  ]),
};

Row.defaultProps = {
  className: '',
  children: [],
  removeMarginBottom: false,
  reverse: false,
  flexWrap: 'wrap',
};

export default Row;

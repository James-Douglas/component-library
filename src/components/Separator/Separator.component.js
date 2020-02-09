import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHR = styled.hr`
  border: none;
  margin: 0;
  padding: 0;
  height: ${({ type }) => ((type === 'horizontal') ? 0 : '100%')}; 
  width: ${({ type }) => ((type === 'horizontal') ? '100%' : 0)}; 
  margin: ${({ type, theme }) => ((type === 'horizontal') ? `${theme.spacing['32']} 0` : `0 ${theme.spacing['32']}`)}; 
  border-bottom: ${({ type, theme }) => ((type === 'horizontal') ? theme.progress.tracker.item.border : 'auto')}; 
  border-right: ${({ type, theme }) => ((type === 'vertical') ? theme.progress.tracker.item.border : 'auto')}; 
`;

const Separator = ({ type, className }) => (
  <StyledHR type={type} className={className} />
);

Separator.propTypes = {
  /**
   * Direction of the Separator
   */
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Classes to be applied to the Separator element
   */
  className: PropTypes.string,
};

Separator.defaultProps = {
  type: 'horizontal',
  className: '',
};

export default Separator;

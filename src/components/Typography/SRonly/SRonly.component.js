import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSr = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const SRonly = ({
  children,
}) => (
  <StyledSr>
    {children}
  </StyledSr>
);

SRonly.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

SRonly.defaultProps = {
  children: '',
};

export default SRonly;

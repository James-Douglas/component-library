import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMicrocopy = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: ${({ theme }) => theme.lineHeight.snug};
`;

const Microcopy = ({
  children,
}) => (
  <StyledMicrocopy>
    {children}
  </StyledMicrocopy>
);

Microcopy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Microcopy.defaultProps = {
  children: '',
};

export default Microcopy;

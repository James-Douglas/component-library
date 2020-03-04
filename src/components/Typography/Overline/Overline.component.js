import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledOverline = styled.p`
  line-height: ${({ theme }) => theme.lineHeight.snug};
  font-size: ${({ theme }) => theme.fontSize['2xs']};
  letter-spacing: 0.15rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.placeholderText};
`;

const Overline = ({
  children,
}) => (
  <StyledOverline>
    {children}
  </StyledOverline>
);

Overline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Overline.defaultProps = {
  children: '',
};

export default Overline;

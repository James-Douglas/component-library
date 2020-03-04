import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledSubtitle = styled.p`
  ${({ variant, theme }) => variant === 'primary' && css`
    font-weight: ${theme.fontWeight.normal};
    line-height: ${theme.lineHeight.snug};
    font-size: ${theme.fontSize.lg};
  `}
  ${({ theme, variant }) => variant === 'secondary' && css`
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.base};
    line-height: ${theme.lineHeight.normal};
  `}
`;

const Subtitle = ({
  variant,
  children,
}) => (
  <StyledSubtitle variant={variant}>
    {children}
  </StyledSubtitle>
);

Subtitle.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

Subtitle.defaultProps = {
  variant: 'primary',
  children: '',
};

export default Subtitle;

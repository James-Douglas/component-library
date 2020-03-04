import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledBodyText = styled.p`
  line-height: ${({ theme }) => theme.lineHeight.snug};
  margin: 0 0 ${({ theme }) => theme.spacing[12]};

  ${({ theme, variant }) => variant === 'primary' && css`
    font-size: ${theme.fontSize.base};
  `}

  ${({ theme, variant }) => variant === 'secondary' && css`
    font-size: ${theme.fontSize.sm};
  `}
`;

const BodyText = ({
  variant,
  children,
}) => (
  <StyledBodyText variant={variant}>
    {children}
  </StyledBodyText>
);

BodyText.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

BodyText.defaultProps = {
  variant: 'primary',
  children: '',
};

export default BodyText;

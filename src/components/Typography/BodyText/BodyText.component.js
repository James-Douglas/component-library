import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';

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
  <ThemeProvider theme={getTheme()}>
    <StyledBodyText variant={variant}>
      {children}
    </StyledBodyText>
  </ThemeProvider>
);

BodyText.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

BodyText.defaultProps = {
  variant: 'primary',
  children: '',
};

export default BodyText;

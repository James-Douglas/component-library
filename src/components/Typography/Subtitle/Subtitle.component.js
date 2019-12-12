import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';

const StyledSubtitle = styled.p`
  ${(props) => props.variant === 'primary' && css`
    font-weight: ${props.theme.fontWeight.normal};
    line-height: ${props.theme.lineHeight.snug};
    font-size: ${props.theme.fontSize.lg};
  `}
  ${(props) => props.variant === 'secondary' && css`
    font-weight: ${props.theme.fontWeight.bold};
    font-size: ${props.theme.fontSize.base};
    line-height: ${props.theme.lineHeight.normal};
  `}
`;

const Subtitle = ({
  variant,
  children,
}) => (
  <ThemeProvider theme={getTheme()}>
    <StyledSubtitle variant={variant}>
      {children}
    </StyledSubtitle>
  </ThemeProvider>
);

Subtitle.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
};

Subtitle.defaultProps = {
  variant: 'primary',
  children: '',
};

export default Subtitle;

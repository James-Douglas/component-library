import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';

const StyledBodyText = styled.p`
  line-height: ${(props) => props.theme.lineHeight.snug};
  margin: 0 0 ${(props) => props.theme.spacing[12]};
  ${(props) => props.variant === 'primary' && css`
    font-size: ${props.theme.fontSize.base};
  `}
  ${(props) => props.variant === 'secondary' && css`
    font-size: ${props.theme.fontSize.sm};
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
  children: PropTypes.string,
};

BodyText.defaultProps = {
  variant: 'primary',
  children: '',
};

export default BodyText;

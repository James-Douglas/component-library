import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import applySpacing, { spacingPropTypes } from 'utils/applySpacing';

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  min-width: ${({ theme }) => theme.spacing['80']};
  min-height: ${({ theme }) => theme.spacing['80']};
  background: ${({ theme }) => theme.colors.white}; 
  box-shadow: ${({ theme }) => theme.boxShadow.progress}; 
  border: ${({ theme }) => `1px solid ${theme.colors.greyLight}`};   
  ${(props) => applySpacing('margin', props.margin)};
  ${(props) => applySpacing('padding', props.padding)}; 
`;

const Card = ({
  id, children, margin, padding,
}) => (
  <ThemeProvider theme={getTheme()}>
    <StyledCard id={id} margin={margin} padding={padding}>
      {children}
    </StyledCard>
  </ThemeProvider>
);

Card.propTypes = {
  /**
   * Unique identifier for the card
   */
  id: PropTypes.string.isRequired,
  /**
   * Card content
   */
  children: PropTypes.node,
  /**
   * Allows setting of margin values for the card
   */
  margin: spacingPropTypes,
  /**
   * Allows setting of padding values for the card
   */
  padding: spacingPropTypes,
};

Card.defaultProps = {
  children: [],
  margin: ['4', '4', '16'],
  padding: ['16'],
};

export default Card;

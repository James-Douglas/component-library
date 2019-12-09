import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  min-width: 8rem;
  min-height: 8rem;
  background: ${(props) => props.theme.colors.white}; 
  box-shadow: ${(props) => props.theme.boxShadow.progress}; 
  border: ${(props) => `1px solid ${props.theme.colors.greyLight}`};   
  margin: ${(props) => `${props.theme.spacing['4']} ${props.theme.spacing['4']} ${props.theme.spacing['16']}`};
`;


const Card = ({ id, children }) => (
  <ThemeProvider theme={getTheme()}>
    <StyledCard id={id}>
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
};

Card.defaultProps = {
  children: [],
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import applySpacing, { spacingPropTypes } from 'utils/applySpacing';
import useId from '../../hooks/useId';

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  min-width: ${({ theme }) => theme.spacing['80']};
  min-height: ${({ theme }) => theme.spacing['80']};
  background: ${({ theme }) => theme.card.background};
  box-shadow: ${({ theme }) => theme.card.shadow};
  border: ${({ theme }) => theme.card.border};
  ${({ margin, theme }) => applySpacing(theme, 'margin', margin)};
  ${({ padding, theme }) => applySpacing(theme, 'padding', padding)};
`;

const Card = ({
  id: propsId,
  children,
  margin,
  padding,
  className,
}) => {
  const id = useId(propsId);
  return (
    <StyledCard id={id} margin={margin} padding={padding} className={className}>
      {children}
    </StyledCard>
  );
};

Card.propTypes = {
  /**
   * Unique identifier for the card
   */
  id: PropTypes.string,
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
  /**
   * Classes to be applied to the Card component
   */
  className: PropTypes.string,
};

Card.defaultProps = {
  id: null,
  children: [],
  margin: ['4', '4', '16'],
  padding: ['16'],
  className: '',
};

export default Card;

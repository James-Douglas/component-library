import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-bottom: 25px;
  background: #FFFFFF;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  height: 216px;
  width: 180px;
`;

const StyledColorDisplay = styled.div`
  background: ${({ color }) => color};
  height: 140px;
  width: 180px;
  border-radius: 12px 12px 0px 0px;
`;

const StyledLabel = styled.div`
  height: 76px;
  padding-top: 15px;
  width: 180px;
  border-radius: 0px 0px 12px 12px;
  align-items: center;
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 0;
  }
`;

const StyledColorName = styled.p`
  font-weight: 600;
`;

const StyledColorCode = styled.p`
  text-transform: uppercase;
`;


const ColorDisplay = ({ name, color }) => (
  <StyledContainer>
    <StyledColorDisplay color={color} />
    <StyledLabel>
      <StyledColorName>{ name }</StyledColorName>
      <StyledColorCode>{ color }</StyledColorCode>
    </StyledLabel>
  </StyledContainer>
);

ColorDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ColorDisplay;

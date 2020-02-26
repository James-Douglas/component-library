import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledColorRow = styled.div`
  height: 45px;
  display: flex;
`;

const StyledPreview = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  background: ${({ color }) => color};
  color: ${({ textColor }) => textColor};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  p {
    padding-top: 8px;
  }
`;

const StyledUsage = styled.p`
  width: 100%;
  height: 100%;
  margin-left: 20px;
`;

const ColorUsageTable = ({ colors }) => (
  <div>
    {colors.map(({
      name, color, usage, textColor,
    }) => (
      <StyledColorRow key={`row_${name}`}>
        <StyledPreview color={color} textColor={textColor}>
          <p>{name}</p>
          <p>{color}</p>
        </StyledPreview>
        <StyledUsage>
          {usage}
        </StyledUsage>
      </StyledColorRow>
    ))}
  </div>
);

ColorUsageTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  colors: PropTypes.array.isRequired,
};

export default ColorUsageTable;

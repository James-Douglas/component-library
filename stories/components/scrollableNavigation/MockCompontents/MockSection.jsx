import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 86px 20px 20px;
  padding-bottom: 500px;
`;

// eslint-disable-next-line react/prop-types
const MockSection = ({ id, label }) => <StyledSection id={id}>{label}</StyledSection>;

export default MockSection;

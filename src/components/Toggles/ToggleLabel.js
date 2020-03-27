import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useId from '../../hooks/useId';

const StyledToggleLabel = styled.label`
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: block;
  position: relative;
  transition : all 200ms ease-out;
  &:hover {
    color: ${({ theme }) => theme.toggle.base.labelColorHover};
  }
`;

const StyledContent = styled.div`
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-bottom: 0;
  &:hover {
    box-shadow: ${({ theme }) => theme.toggle.base.shadowHover};
  }
`;

const ToggleLabel = ({ id: propsId, children }) => {
  const id = useId(propsId);
  return (
    <StyledToggleLabel htmlFor={id}>
      <StyledContent>{children}</StyledContent>
    </StyledToggleLabel>
  );
};

ToggleLabel.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
};
ToggleLabel.defaultProps = {
  id: null,
};

export default ToggleLabel;

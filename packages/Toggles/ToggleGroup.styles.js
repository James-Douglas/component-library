import styled, { css } from 'styled-components';

const buttonOverrides = css`
  width: auto;
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  display: ${({ buttons }) => (buttons === 'flex' ? 'flex' : 'inline-flex')};
`;

export const StyledToggleGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${({ buttons }) => buttons && buttonOverrides}
`;

export const StyledValidationWrapper = styled.div`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing[8]};
`;

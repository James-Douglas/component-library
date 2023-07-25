import styled from 'styled-components';

export const StyledListItem = styled.li`
  svg {
    position: absolute;
    left: 1rem;
    top: 1rem;
  }
`;

export const StyledItemContent = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.grey900};
`;

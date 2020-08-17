import styled, { css } from 'styled-components';

export const StyledListItem = styled.li`
  svg {
    position: absolute;
    left: 1rem;
    top: 1rem;
  }

  ${({ active, desktop }) => (active && !desktop) && css`
    color: ${({ theme }) => theme.dropdown.colorActive};
    background: ${({ theme }) => theme.dropdown.backgroundActive};
     svg {
      display: none;
     }
  `}
`;

export const StyledItemContent = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.grey900};
`;

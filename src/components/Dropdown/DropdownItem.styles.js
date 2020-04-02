import styled, { css } from 'styled-components';

const StyledListItem = styled.li`
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

export default StyledListItem;

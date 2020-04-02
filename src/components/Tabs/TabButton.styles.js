import styled, { css } from 'styled-components';

const StyledTabButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing[20]} 0 ${theme.spacing[12]} 0`};
  border-bottom: 0.5rem solid transparent;
  max-width: 100%;
  transition: .3s ease-out border;
  -ms-flex-preferred-size: 0;
  flex-basis: 0%;
  -ms-flex-positive: 1;
  flex-grow: 1;
  :not(:first-child) {
   margin-left: ${({ theme }) => theme.spacing[24]};
  }
  :focus {
    outline: none;
  }
  & h1, h2, h3, h4, h5, h6, p {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.snug};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize.base};
    margin: 0;
  }

  ${({ theme, activeTab, name }) => activeTab === name && css`
    border-bottom: 0.5rem solid ${theme.colors.brandMidnightBlue};
  `}
`;

export default StyledTabButton;

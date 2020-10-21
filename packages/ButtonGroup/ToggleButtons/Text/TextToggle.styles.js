import styled, { css } from 'styled-components';

const buttonOverrides = css`
  padding: ${({ theme }) => theme.spacing[16]};
  color: ${({ theme }) => theme.toggle.button.text};
`;

export const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[36]};
  ${({ button }) => button && buttonOverrides}

  ${({ greyed }) => greyed && css`
    background: ${({ theme }) => theme.toggle.greyed.background};
    color: ${({ theme }) => theme.toggle.greyed.color};
  `};
`;

export const StyledTextToggleContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  min-height: ${({ theme }) => theme.spacing[20]};
  text-align: center;
  
  ${({ contentWidth }) => contentWidth && css`
    width: ${contentWidth};
  `};
  
  ${({ contentHeight }) => contentHeight && css`
    height: ${contentHeight};
  `};
`;

export const StyledContent = styled.div`
  p {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    ${({ theme, button }) => button && css`
      font-weight: ${theme.fontWeight.normal}
    `};
    margin: 0;
  }
`;

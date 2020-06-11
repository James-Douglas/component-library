import styled from 'styled-components';

export const StyledContact = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: ${({ theme }) => theme.header.contact.color};
  transition: ${({ theme }) => theme.header.transition};
  font-size: ${({ theme, size, isDesktop }) => {
    let fontSize;
    if (size === 'small' && !isDesktop) {
      fontSize = theme.fontSize.sm;
    } else if (size === 'large' && !isDesktop) {
      fontSize = theme.fontSize.lg;
    } else if (size === 'small') {
      fontSize = theme.fontSize.base;
    } else {
      fontSize = theme.fontSize.xl;
    }
    return fontSize;
  }};

  &:hover {
    color: ${({ theme }) => theme.header.contact.hoverColor};
    fill: ${({ theme }) => theme.header.contact.hoverColor};
  }
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  visibility: hidden;
  height: 0px;
  width: 0px;
`;

export const StyledIconWrap = styled.span`
  display: flex;
  margin-top: ${(props) => props.theme.spacing[2]};
  margin-left: ${(props) => props.theme.spacing[4]};
  margin-right: ${(props) => props.theme.spacing[4]};
`;

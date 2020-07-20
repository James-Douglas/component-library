import styled, { css } from 'styled-components';

export const StyledContact = styled.a`
  display: flex;
  margin-bottom: 0;
  text-decoration: none;
  align-items: center;
  color: ${({ theme }) => theme.header.contact.color};
  transition: ${({ theme }) => theme.header.transition};
  font-size: ${({ theme }) => theme.fontSize.base};
  ${({ theme, contactStrip }) => contactStrip && css`
    font-weight: ${theme.fontWeight.bold};
  `};
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

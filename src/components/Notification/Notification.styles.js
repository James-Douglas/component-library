import styled, { css } from 'styled-components';

export const StyledNotification = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  border-left: ${({ theme, variant }) => `${theme.spacing[4]} solid ${theme.notification[variant]}`};
  padding: ${({ theme, icon, type }) => `${theme.spacing[8]} ${theme.spacing[20]} ${theme.spacing[8]} ${(icon && type !== 'hint') ? 0 : theme.spacing[20]}`};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  ${({ theme, type }) => type === 'toast' && css`
    width: ${theme.minWidth.xs};
    margin-bottom: ${theme.spacing[16]};
  `};
  ${({ theme, type }) => type !== 'hint' && css`box-shadow: ${theme.notification.shadow};`}
  color: ${({ theme }) => theme.notification.color};
`;

export const StyledNotificationImage = styled.div`
  margin: ${({ theme }) => `0 ${theme.spacing[12]} 0 ${theme.spacing[12]}`};
  width: ${({ theme }) => theme.spacing[16]};
  svg {
    width: ${({ theme }) => theme.spacing[24]};
    height: ${({ theme }) => theme.spacing[24]};
    path {
      fill: ${({ theme, variant }) => theme.notification[variant]};
    }
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing[20]}; 
  top:  ${({ theme }) => theme.spacing[16]};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex[10]};
  opacity: 0.5;
`;

export const StyledNotificationContentWrap = styled.div`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing[8]};
`;

export const StyledHeading = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  ${({ theme, type }) => type === 'hint' && css` 
    color: ${theme.colors.primary500};
    font-weight: ${theme.fontWeight.semibold};
  `};
`;

export const StyledContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.grey800};
  width: 95%;
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const StyledFontAwesomeWrap = styled.div`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing[4]};
`;

export const StyledSpan = styled.span`
  margin-right: ${({ theme }) => theme.spacing[8]};
`;

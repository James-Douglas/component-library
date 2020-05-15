import styled, { css } from 'styled-components';

export const StyledNotification = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  border-left: ${({ theme, variant }) => `${theme.spacing[4]} solid ${theme.notification[variant].color}`};
  display: flex;
  background: ${({ theme }) => theme.colors.white};
  ${({
    theme, type, background, variant,
  }) => (type === 'hint' && background) && css`
    background: ${theme.notification[variant].background};
  `};
  ${({ theme, type }) => type === 'toast' && css`
    width: ${theme.minWidth.xs};
    margin-bottom: ${theme.spacing[16]};
  `};
  ${({ theme, type }) => type !== 'hint' && css`
    box-shadow: ${theme.notification.shadow};
    padding: ${({ icon }) => `${theme.spacing[16]} ${theme.spacing[16]} ${theme.spacing[12]} ${icon ? 0 : theme.spacing[16]}`};
  `};
  ${({ type }) => type === 'hint' && css`
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[16]} ${theme.spacing[4]} ${theme.spacing[16]}`};
  `}
  color: ${({ theme }) => theme.notification.color};
`;

export const StyledNotificationImage = styled.div`
  margin: ${({ theme }) => `0 ${theme.spacing[12]} 0 ${theme.spacing[12]}`};
  width: ${({ theme }) => theme.spacing[16]};
  svg {
    width: ${({ theme }) => theme.spacing[24]};
    height: ${({ theme }) => theme.spacing[24]};
    path {
      fill: ${({ theme, variant }) => theme.notification[variant].color};
    }
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing[20]}; 
  top: '1.8rem'; /* custom alignment for icon */
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
  ${({ theme, type, variant }) => type === 'hint' && css` 
    color: ${(variant === 'warning') ? `${theme.notification.aaColor}` : `${theme.notification[variant].color}`};
    font-weight: ${theme.fontWeight.semibold};
  `};
`;

export const StyledContent = styled.p`
  ${({ theme, title }) => title === '' && css`padding-top: ${theme.spacing[4]};`} 
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.grey800};
  width: 95%;
  ${({ type }) => type === 'hint' && css`
    margin-bottom: 0;
  `}
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    font-size: ${({ theme }) => theme.fontSize.sm};
    margin-bottom: 0;
  }
`;

export const StyledFontAwesomeWrap = styled.div`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing[4]};
`;

export const StyledSpan = styled.span`
  margin-right: ${({ theme }) => theme.spacing[8]};
`;

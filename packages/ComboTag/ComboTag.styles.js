import styled, { css } from 'styled-components';

export const StyledTagContainer = styled.div`
  width: 100%;
  ${({ hasList, theme }) => !hasList && css`
    display: flex;
    background: ${theme.colors.white};
    flex-direction: column;
  `}
`;

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledPrefix = styled.div`
  height: inherit;
  width: ${({ theme }) => theme.spacing[20]};
  margin-top: ${({ theme }) => theme.spacing[16]};
  margin-left: ${({ theme }) => theme.spacing[20]};
  margin-right: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.primary500};
  z-index: 2000;
  float: left;
`;

export const StyledInputWrap = styled.div`
  width: 100%;
  background: ${({ theme }) => (theme.colors.white)};
`;

export const StyledBorder = styled.div`
  position: absolute;
  top: ${({ theme }) => (`${theme.spacing[44]}0.1rem`)};
  border-bottom: ${({ theme }) => (theme.borders.active)};
  width: 100%;
`;

export const StyledTagHolder = styled.div`
  position: relative;
  height: ${({ theme }) => (theme.spacing[44])};
  display: flex;
  float: left;
  align-items: center;
  z-index: ${({ theme }) => (theme.zIndex[10])};
  padding-right: 15px;
  ${({ hasList }) => hasList && css`
    max-width: 60%;
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar { 
      display: none;  /* Safari and Chrome */
    }
  `}
  ${({ hasList }) => !hasList && css`
    flex-wrap: wrap;
    height: auto;
  `}
`;

export const StyledFade = styled.div`
  position: absolute;
  height: ${({ theme }) => theme.spacing[44]};
  width: 10rem;
  left: ${({ theme }) => theme.spacing[40]};
  z-index: ${({ theme }) => (theme.zIndex[20])};
  pointer-events: none;
  ${({ fade, tagsVisible }) => (fade && tagsVisible) && css`
    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      pointer-events: none;
      background-image: linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255, 1) 100%);
      width: 10rem;
      height: 100%;
    }
  `};
`;

export const StyledDropdownList = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display:  ${({ position }) => (position === 'hidden' ? 'none' : 'block')};
  background: ${({ theme }) => (theme.combo.list.background)};
  box-shadow: ${({ theme }) => (theme.combo.list.shadow)};
  margin-top: ${({ theme }) => (theme.spacing[8])};
  &:focus {
    outline: none;
  }
  z-index: ${({ theme }) => (theme.zIndex[40])};
`;

export const StyledList = styled.ul`
  margin: 0;
  width: ${({ theme }) => (theme.maxWidth.full)};
  padding: 0;
  color: ${({ theme }) => (theme.combo.list.color)};
  z-index: ${({ theme }) => (theme.zIndex[30])};
`;

export const StyledDefault = styled.div`
  width: ${({ theme }) => (theme.maxWidth.full)};
`;

export const StyledListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  min-height: ${({ theme }) => theme.spacing[52]};
  border: ${({ theme }) => theme.borders.transparent};
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[40]}`};
  color: ${({ theme }) => (theme.combo.list.item.color)};
  transition: background-color 0.4s ease;
  &:hover {
    background: ${({ theme }) => theme.combo.list.item.backgroundHover};
  }
  &:focus {
    outline: none;
    border: ${({ theme }) => theme.combo.list.item.borderFocus};
  }
`;

export const StyledIconWrap = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.spacing[16]};
  margin-top: ${({ theme }) => `-${theme.spacing[8]}`};
  margin-right: ${({ theme }) => theme.spacing[16]};
  color: ${({ theme }) => theme.colors.grey400};
`;

export const StyledButtonWrap = styled.div`
  justify-content: space-around;
  text-align: center;
  border: ${({ theme }) => theme.combo.list.border};
  padding:  ${({ theme }) => `${theme.spacing[8]} 0`};
  background: ${({ theme }) => (theme.combo.button.background)};
  &:focus {
    outline: none;
    border: ${({ theme }) => theme.combo.button.borderFocus};
    border-width: ${({ theme }) => theme.spacing.px}; /* IE 11 specific fix */
  }
  &:hover {
    background: ${({ theme }) => (theme.combo.button.backgroundHover)};
  }
  font-size: ${({ theme }) => theme.fontSize.base};
  p {
    margin: 0;
  }
`;

export const WrapList = styled.div`
    position: relative;
`;

export const StyledComboListWrap = styled.div`
  max-height: ${({ renderView }) => `${renderView * 52}px`};
  overflow-y: auto;
`;

export const StyledComboList = styled.div``;

export const StyledEmptyStateMessage = styled.div`
  position: relative;
  box-shadow: ${({ theme }) => (theme.combo.list.shadow)};
  width: ${({ theme }) => (theme.maxWidth.full)};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.combo.list.item.color};
  text-align: center;
  z-index: ${({ theme }) => (theme.zIndex[50])};
`;

export const StyledAlertText = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.grey700};
  margin-bottom ${({ theme }) => theme.spacing[8]};
`;

export const StyledAlertIcon = styled.div`
  float: left;
  margin: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]} 0 0`};
  color: ${({ theme }) => theme.colors.warning700};
`;

export const StyledLink = styled.div`
  display: inline;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.primary500};
  cursor: pointer;
`;

export const StyledErrorToolTip = styled.div`
  height: 0;
  pointer-events: none;
`;

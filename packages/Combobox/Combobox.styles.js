import styled, { css } from 'styled-components';

export const StyledDropdownList = styled.div`
  position: ${({ position }) => (position === 'absolute' ? 'absolute' : 'relative')};
  width: ${({ theme }) => (theme.maxWidth.full)};
  display:  ${({ position }) => (position === 'hidden' ? 'none' : 'block')};
  background: ${({ theme }) => (theme.combo.list.background)};
  box-shadow: ${({ theme, desktop }) => (desktop ? theme.combo.list.shadow : '')};
  margin-top: ${({ theme }) => (theme.spacing[8])};
  &:focus {
    outline: none;
  }
  ${({ desktop }) => !desktop && css`
    height: 100%;
    max-height: ${({ theme }) => (theme.minHeight.full)};;
    margin: 0;
  `}
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
  &:nth-last-child(1) {
    padding-bottom:  ${({ theme }) => theme.spacing[20]};
  }
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

export const StyledDiv = styled.div`
  ${({ desktop }) => !desktop && css`
    width: ${({ theme }) => (theme.maxWidth.full)};
    top: ${({ theme }) => theme.spacing[136]};
    position: fixed;
    right: ${({ theme }) => theme.spacing[16]};
    left: ${({ theme }) => theme.spacing[16]};
    max-width: ${({ theme }) => `calc(100% - ${theme.spacing[8]})`};
    .label {
      visibility: hidden;
    }
    .input-wrap {
      width: auto;
      right: ${({ theme }) => theme.spacing[16]};
      left: ${({ theme }) => theme.spacing[16]};
      position: fixed;
      top: ${({ theme }) => theme.spacing[162]};
      p {
        display: none;
      }
    }
    z-index: ${({ theme }) => (theme.zIndex[40])};
  `}
`;

export const WrapList = styled.div`
  position: relative;
  ${({ desktop }) => !desktop && css`
    width: auto;
    right: ${({ theme }) => theme.spacing[8]};
    left: ${({ theme }) => theme.spacing[8]};
    position: fixed;
    bottom: ${({ theme }) => theme.spacing[32]};
    top: ${({ theme }) => theme.spacing[148]};
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding-top: ${({ theme }) => theme.spacing[72]};
    max-height: initial;
    overflow: hidden;
    &:after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      width: ${({ theme }) => (theme.maxWidth.full)};
      height: ${({ theme }) => (theme.spacing[72])};
      background: ${({ theme }) => theme.combo.button.background};
    }
    z-index: ${({ theme }) => (theme.zIndex.entry)};
  `}
`;

export const StyledComboListWrap = styled.div`
  ${({ desktop }) => !desktop && css`
    display: flex;
    flex-direction: column;
    width: ${({ theme }) => (theme.maxWidth.full)};
    max-width: ${({ theme }) => (theme.maxWidth.full)};
    height: ${({ theme }) => (theme.minHeight.full)};
  `}
`;

export const StyledComboList = styled.div`
  ${({ desktop }) => !desktop && css`
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    flex-grow: 1;
    overflow: auto;
  `}
`;

export const StyledEmptyStateMessage = styled.div`
  position: fixed;
  width: ${({ theme }) => (theme.maxWidth.full)};
  max-width: ${({ theme }) => `calc(100% - ${theme.spacing[32]})`};
  right: ${({ theme }) => theme.spacing[16]};
  left: ${({ theme }) => theme.spacing[16]};
  max-height: ${({ theme }) => (theme.spacing[200])};
  top: ${({ theme }) => theme.spacing[280]};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.combo.list.item.color};
  text-align: center;
  img {
    max-width: ${({ theme }) => (theme.spacing[100])};
    margin-bottom: ${({ theme }) => (theme.spacing[20])};
  }
  .empty-state-wrap {
    max-height: ${({ theme }) => (theme.spacing[100])};
  }
  z-index: ${({ theme }) => (theme.zIndex[50])};
`;

import styled, { css } from 'styled-components';

export const StyledOuterWrapper = styled.div`
  width: 100%;
  ${({ hasList }) => hasList && css`
    display: flex;
  `}
`;

export const StyledContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  background: ${({ theme }) => (theme.colors.white)};
  border: ${({ theme }) => (theme.borders.transparent)};
  border-bottom: ${({ theme, hasList }) => hasList && (theme.borders.active)};
  ${({ hasList, componentFocused, theme }) => (hasList && componentFocused) && css`
    border: ${theme.borders.active};
  `}
`;

export const StyledPresentationLayer = styled.div`
  height: 100%;
  width: 100%;
  ${({ hasList }) => hasList && css`
  display: flex;
`}
`;

export const StyledTagContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: ${({ theme, hasList }) => (hasList ? theme.spacing[60] : theme.spacing[44])};
  ${({ hasList, theme }) => !hasList && css`
    background: ${theme.colors.white};
  `}
  ${({ theme, bordered }) => bordered && css`
    border: ${theme.borders.component};
  `}
`;

export const StyledPrefixContainer = styled.div`
  display: flex;
  float: left;
  height: 100%;
  flex-direction: column;
`;

export const StyledPrefix = styled.div`
  position: relative;
  height: ${({ theme, hasList }) => (hasList ? theme.spacing[60] : theme.spacing[44])};
  width: ${({ theme }) => theme.spacing[44]};
  color: ${({ theme }) => theme.colors.primary500};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: inherit;
  flex: 1;
  ${({ onClick }) => onClick && css`
    cursor: pointer;
  `}
`;

export const StyledInputWrap = styled.div`
  flex: 1;
  & input {
    width: 100%;
    min-width: 100px;
    margin-top: 0.4rem;
    height: 3.7rem;
  }
`;

export const StyledTagHolder = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  width: 100%;
  flex-wrap: wrap;
  height: auto;
  max-height: 11.4rem;
  overflow-x: hidden;
`;

export const StyledDropdownList = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display:  ${({ position }) => (position === 'hidden' ? 'none' : 'block')};
  background: ${({ theme }) => (theme.combo.list.background)};
  box-shadow: ${({ theme }) => (theme.combo.list.shadow)};
  margin-top: ${({ theme }) => (theme.spacing.px)};
  ${({ theme, comboListSpacing }) => comboListSpacing && css`
    margin-top: ${theme.spacing[8]};
  `}
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
  min-height: ${({ theme }) => theme.spacing[28]};
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

export const StyledEmptyStateMessage = styled.div`
  position: relative;
  box-shadow: ${({ theme }) => (theme.combo.list.shadow)};
  width: ${({ theme }) => (theme.maxWidth.full)};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.combo.list.item.color};
  text-align: center;
  z-index: ${({ theme }) => (theme.zIndex[50])};
`;

export const StyledErrorToolTip = styled.div`
  height: 0;
  pointer-events: none;
`;

export const StyledComboListContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

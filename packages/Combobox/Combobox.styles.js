import styled from 'styled-components';

export const StyledDropdownList = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.maxWidth.full};
  display:  ${({ position }) => (position === 'hidden' ? 'none' : 'block')};
  background: ${({ theme }) => theme.combo.list.background};
  box-shadow: ${({ theme }) => theme.combo.list.shadow};
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
  .input-wrap {
    width: 80%;
  }
`;

export const WrapList = styled.div`
  position: relative;
`;

export const StyledComboListWrap = styled.div`
  max-height: ${({ renderView }) => `${renderView * 52}px`};
  overflow-y: auto;
`;

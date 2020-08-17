import styled, { css } from 'styled-components';

export const StyledAccordionPanel = styled.div`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fontFamily};
  overflow: hidden;
  border: ${({ theme, isFocus }) => (isFocus ? `${theme.borders.focus}` : theme.borders.transparent)};
  border-top: ${({ theme, isFocus }) => (isFocus ? `${theme.borders.focus}` : `${theme.borders.component}`)};
  margin-bottom: -1px;
  &:focus,
  &:active,
  &:hover {
    outline: 0;
  }
`;

export const StyledAccordionBody = styled.div`
  line-height: ${({ theme }) => theme.lineHeight.normal};
  margin: ${({ theme }) => theme.spacing['0']};
  background: ${({ theme }) => theme.accordion.backgroundBody};
  color: ${({ theme }) => theme.accordion.color};
  padding: ${({ theme, isVisible }) => (isVisible ? `${theme.spacing['16']} 0` : 0)};
  height: 0;
  transition-property: none;
  overflow: hidden;
  ${({ isVisible }) => isVisible
    && css`
      height: 100%;
      transition: all 0.3s ease-out;
    `}

  width: 100%;
  &:focus,
  &:active,
  &:hover {
    outline: 0;
  }
`;

export const StyledAccordionHead = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.accordion.background};
  color: ${({ theme }) => theme.accordion.color};
  z-index: ${(props) => props.theme.zIndex[10]};
  transition: font-size 0.25s;
  padding: ${({ theme }) => `${theme.spacing[16]}`};
  font-size: ${({ theme }) => `${theme.fontSize['3xl']}`};
  ${({ desktop }) => !desktop
    && css`
      font-size: ${({ theme }) => `${theme.fontSize.lg}`};
    `}
  &:focus,
  &:active,
  &:hover {
    outline: 0;
  }
`;

export const StyledChevronWrap = styled.div`
  text-align: right;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => `${theme.accordion.chevronColor}`};
  svg {
    transform: rotate(0deg);
    transition: transform 0.2s linear;
  }
  svg.fa-flip-vertical {
    transform: rotate(180deg);
    transition: transform 0.2s linear;
  }
`;

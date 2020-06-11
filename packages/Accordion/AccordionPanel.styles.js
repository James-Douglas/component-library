import styled, { css } from 'styled-components';

export const StyledAccordionPanel = styled.div`
  overflow: hidden;
  border: ${({ theme, isFocus }) => (isFocus ? `${theme.borders.focus}` : theme.borders.transparent)};
  border-top: ${({ theme, isFocus }) => (isFocus ? `${theme.borders.focus}` : '1px solid rgba(0,0,0,.1)')};
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
  padding: ${({ theme, isVisible }) => (isVisible ? `${theme.spacing['32']} 0` : 0)};
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
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.accordion.background};
  z-index: ${(props) => props.theme.zIndex[10]};
  transition: font-size 0.25s;
  padding: ${({ theme }) => `${theme.spacing[20]} 0`};
  font-size: ${({ theme }) => `${theme.fontSize['2xl']}`};
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

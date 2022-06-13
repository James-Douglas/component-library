import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ScrollableButtonsContainer = styled.div`
  position: relative;
`;

export const Tabs = styled.ul`
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: ${({ theme }) => theme.colors.white};
  display: block;
  white-space: nowrap;
  padding-inline-start: 0;

  &::-webkit-scrollbar {
    display: none;
  };
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.primary500};
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-left: ${({ arrowdirection, theme }) => (arrowdirection === 'Left' ? theme.spacing[8] : '')};
  margin-right: ${({ arrowdirection, theme }) => (arrowdirection === 'Right' ? theme.spacing[8] : '')};
`;

export const ControlledButton = styled.div`
  cursor: pointer;
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4.8rem;
  ${({ direction }) => {
    switch (direction) {
      case 'left':
        return 'background: linear-gradient(91.03deg, #FFFFFF 35.83%, rgba(255, 255, 255, 0) 62.63%, rgba(255, 255, 255, 0) 72.01%); left: 0; justify-content: flex-start;';
      case 'right':
        return 'background: linear-gradient(271.03deg, #FFFFFF 21.83%, rgba(255, 255, 255, 0) 62.63%, rgba(255, 255, 255, 0) 72.01%); right: 0; justify-content: flex-end;';
      default:
        return '';
    }
  }};
`;

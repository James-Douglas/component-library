import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import useIsDesktop from '../../hooks/useIsDesktop';

const StyledListItem = styled.li`
  svg {
    position: absolute;
    left: 1rem;
    top: 1rem;
  }

  ${({ active, desktop }) => (active && !desktop) && css`
    color: ${({ theme }) => theme.colors.blueLight};
    background: ${({ theme }) => theme.colors.greyLighter};
     svg {
      display: none;
     }
  `}
`;

const DropdownItem = React.forwardRef(({
  id, value, handleClick, handleKeyDown, selectedValue,
}, ref) => {
  const desktop = useIsDesktop();

  const clickHandler = (event) => {
    if (handleClick) {
      handleClick(event, value);
    }
  };

  const keyDownHandler = (event) => {
    if (handleKeyDown) {
      handleKeyDown(event, value);
    }
  };

  return (
    <StyledListItem ref={ref} id={id} role="listbox" onClick={clickHandler} onKeyDown={keyDownHandler} active={selectedValue === value} desktop={desktop} tabIndex="0">
      {selectedValue === value && <FontAwesomeIcon icon={faCheck} size="xs" />}
      {value}
    </StyledListItem>
  );
});

DropdownItem.displayName = 'DropdownItem';

DropdownItem.propTypes = {
  /**
   * Unique identifier for the dropdown item
   */
  id: PropTypes.string,
  /**
   * THe content to be rendered
   */
  value: PropTypes.string.isRequired,
  /**
   * The currently selected Dropdown value. Set by the `Dropdown` component.
   */
  selectedValue: PropTypes.string,
  /**
   * Click handler. Set by the `Dropdown` component.
   */
  handleClick: PropTypes.func,
  /**
   * KeyDown handler. Set by the `Dropdown` component.
   */
  handleKeyDown: PropTypes.func,
};

DropdownItem.defaultProps = {
  id: null,
  selectedValue: null,
  handleClick: null,
  handleKeyDown: null,
};

export default DropdownItem;

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { useIsDesktop, useId } from '@comparethemarketau/manor-hooks';
import StyledListItem from './DropdownItem.styles';

const DropdownItem = React.forwardRef(({
  id: propsId,
  value,
  children,
  handleClick,
  handleKeyDown,
  selectedValue,
}, ref) => {
  const id = useId(propsId);
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
    <StyledListItem
      ref={ref}
      id={id}
      role="listbox"
      value={value}
      onClick={clickHandler}
      onKeyDown={keyDownHandler}
      active={selectedValue === value}
      desktop={desktop}
      tabIndex="0"
    >
      {selectedValue === value && <FontAwesomeIcon icon={faCheck} size="xs" />}
      {children}
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
   * The content to be rendered
   */
  children: PropTypes.string.isRequired,
  /**
   * The value associated with the content
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

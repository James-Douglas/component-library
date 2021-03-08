import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import { StyledListItem, StyledItemContent } from './DropdownItem.styles';

const DropdownItem = React.forwardRef(({
  id: propsId,
  value,
  children,
  handleClick,
  handleKeyDown,
  selectedValue,
  theme,
}, ref) => {
  const id = useId(propsId);
  const { isDesktop } = useContext(ManorContext);

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
      desktop={isDesktop}
      tabIndex="0"
    >
      {selectedValue === value && <FontAwesomeIcon icon={faCheck} size="xs" />}
      <StyledItemContent>{children}</StyledItemContent>
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  /**
   * The currently selected Dropdown value. Set by the `Dropdown` component.
   */
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Click handler. Set by the `Dropdown` component.
   */
  handleClick: PropTypes.func,
  /**
   * KeyDown handler. Set by the `Dropdown` component.
   */
  handleKeyDown: PropTypes.func,
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

DropdownItem.defaultProps = {
  id: null,
  selectedValue: null,
  handleClick: null,
  handleKeyDown: null,
  theme: undefined,
};

export default DropdownItem;

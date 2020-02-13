import React from 'react';
import 'jest-styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '../../../testUtils';
import getTheme from '../../../utils/getTheme';
import Dropdown from '../Dropdown.component';


const theme = getTheme();
let mockUseIsDesktopValue = true;
jest.mock('../../../hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));


describe('Dropdown', () => {
  it('accessibility check for arrow down', () => {
    const options = [
      {
        checkboxId: 'A-2',
        title: '1Default Item - Title',
        checkboxDisabled: false,
        selected: true,
        ref: React.createRef(),
      },
      {
        checkboxId: 'A-3',
        title: '2First Item - Title',
        checkboxDisabled: false,
        selected: false,
        ref: React.createRef(),
      },
      {
        checkboxId: 'A-4',
        title: '3First Item - Title',
        checkboxDisabled: false,
        selected: false,
        ref: React.createRef(),
      },
    ];
    const onItemClick = jest.fn();
    const onItemKeyDown = jest.fn();
    const { container, getByText } = render(
      <Dropdown
        id="input-one"
        options={options}
        supportingElements
        forceFullWidth
        label="Dropdown Label"
        selectedValue="3First Item - Title"
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li option={option} aria-selected={option.selected} key={index} onClick={(e) => onItemClick(e, index)} onKeyDown={(e) => onItemKeyDown(e, index)} ref={option.ref} role="option" tabIndex={index}>
            {(option.selected || Boolean(option.selected)) && <FontAwesomeIcon icon={faCheck} size="xs" />}
            {option.title}
          </li>
        ))}
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    fireEvent.keyDown(buttonDropdown, { key: 'Tab', keyCode: 9 });
    buttonDropdown.focus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowDown', keyCode: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(getByText('2First Item - Title')).toBeInTheDocument();
    const ulList = container.querySelector('ul');
    expect(ulList).toHaveStyleRule('max-height', '25.2rem');
    expect(focusItem).toHaveFocus();

    fireEvent.keyDown(buttonDropdown, { key: 'ArrowDown', keyCode: 40 });
    const focusItem2 = container.getElementsByTagName('li')[1];
    expect(focusItem2).toHaveFocus();
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(3);
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowDown', keyCode: 40 });
    const focusItem3 = container.getElementsByTagName('li')[2];
    expect(focusItem3).toHaveFocus();
    focusItem3.click();
    const listItemsUpdated = container.querySelectorAll('li');
    expect(listItemsUpdated.length).toBe(0);
  });
  it('accessibility check for arrow up', () => {
    const options = [
      {
        checkboxId: 'A-2',
        title: '1Default Item - Title',
        checkboxDisabled: false,
        selected: true,
        ref: React.createRef(),
      },
      {
        checkboxId: 'A-3',
        title: '2First Item - Title',
        checkboxDisabled: false,
        selected: false,
        ref: React.createRef(),
      },
    ];
    const { container, getByText } = render(
      <Dropdown
        id="input-one"
        options={options}
        supportingElements
        forceFullWidth
        label="Dropdown Label"
        selectedValue="3First Item - Title"
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li option={option} aria-selected={option.selected} key={index} ref={option.ref} role="option" tabIndex={index}>
            {(option.selected || Boolean(option.selected)) && <FontAwesomeIcon icon={faCheck} size="xs" />}
            {option.title}
          </li>
        ))}
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    fireEvent.keyDown(buttonDropdown, { key: 'Tab', keyCode: 9 });
    buttonDropdown.focus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowUp', keyCode: 38 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(getByText('2First Item - Title')).toBeInTheDocument();
    expect(focusItem).toHaveFocus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowUp', keyCode: 38 });
    const focusItem2 = container.getElementsByTagName('li')[1];
    expect(focusItem2).toHaveFocus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowUp', keyCode: 38 });
    const focusItem3 = container.getElementsByTagName('li')[0];
    expect(focusItem3).toHaveFocus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowUp', keyCode: 38 });
    const focusItem4 = container.getElementsByTagName('li')[1];
    expect(focusItem4).toHaveFocus();
  });
  it('click outside of dropdown', () => {
    const options = [
      {
        checkboxId: 'A-2',
        title: '1Default Item - Title',
        checkboxDisabled: false,
        selected: true,
        ref: React.createRef(),
      },
      {
        checkboxId: 'A-3',
        title: '2First Item - Title',
        checkboxDisabled: false,
        selected: false,
        ref: React.createRef(),
      },
    ];
    const { container } = render(
      <Dropdown
        id="input-one"
        options={options}
        supportingElements
        forceFullWidth
        label="Dropdown Label"
        selectedValue="3First Item - Title"
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li option={option} aria-selected={option.selected} ref={option.ref} role="option" key={index} tabIndex={index}>
            {(option.selected || Boolean(option.selected)) && <FontAwesomeIcon icon={faCheck} size="xs" />}
            {option.title}
          </li>
        ))}
      </Dropdown>,
    );
    const evt = new Event('mousedown', { bubbles: false, cancelable: false, composed: false });
    const DropdownTriggerElement = container.querySelector('[role="button"]');
    fireEvent.click(DropdownTriggerElement);
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(2);
    act(() => {
      document.dispatchEvent(evt);
    });
    const listItemsUpdated = container.querySelectorAll('li');
    expect(listItemsUpdated.length).toBe(0);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    const icon = container.getElementsByClassName('svgArrowWrap')[0];
    expect(icon).toHaveStyle('right: 1.2rem');
  });

  it('click on dropdown ', () => {
    const options = [
      {
        checkboxId: 'A-2',
        title: '1Default Item - Title',
        checkboxDisabled: false,
        selected: true,
        ref: React.createRef(),
      },
      {
        checkboxId: 'A-3',
        title: '2First Item - Title',
        checkboxDisabled: false,
        selected: false,
        ref: React.createRef(),
      },
    ];
    const onItemClick = jest.fn();
    const onItemKeyDown = jest.fn();
    const { container } = render(
      <Dropdown
        id="input-one"
        options={options}
        supportingElements
        forceFullWidth
        label="Dropdown Label"
        selectedValue="3First Item - Title"
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li option={option} aria-selected={option.selected} key={index} onClick={(e) => onItemClick(e, index)} onKeyDown={(e) => onItemKeyDown(e, index)} ref={option.ref} role="option" tabIndex={index}>
            {(option.selected || Boolean(option.selected)) && <FontAwesomeIcon icon={faCheck} size="xs" />}
            {option.title}
          </li>
        ))}
      </Dropdown>,
    );

    const buttonDrop = container.querySelector('[role="button"]');
    fireEvent.keyDown(buttonDrop, { key: 'Tab', keyCode: 9 });
    buttonDrop.focus();
    buttonDrop.click();
    const listItemsFirst = container.querySelectorAll('li');
    expect(listItemsFirst.length).toBe(2);
    const label = container.getElementsByClassName('label')[0];
    label.click();
    buttonDrop.blur();
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(2);
  });

  it('accessibility check for arrow down if nothing selected', () => {
    const options = [
      {
        checkboxId: 'A-2',
        title: '1Default Item - Title',
        checkboxDisabled: false,
        selected: false,
        ref: React.createRef(),
      },
      {
        checkboxId: 'A-3',
        title: '2First Item - Title',
        checkboxDisabled: false,
        selected: false,
        ref: React.createRef(),
      },
      {
        checkboxId: 'A-4',
        title: '3First Item - Title',
        checkboxDisabled: false,
        selected: false,
        ref: React.createRef(),
      },
    ];
    const onItemClick = jest.fn();
    const onItemKeyDown = jest.fn();
    const { container, getByText } = render(
      <Dropdown
        id="input-one"
        options={options}
        supportingElements
        forceFullWidth
        label="Dropdown Label"
        selectedValue="3First Item - Title"
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li option={option} aria-selected={option.selected} key={index} onClick={(e) => onItemClick(e, index)} onKeyDown={(e) => onItemKeyDown(e, index)} ref={option.ref} role="option" tabIndex={index}>
            {(option.selected || Boolean(option.selected)) && <FontAwesomeIcon icon={faCheck} size="xs" />}
            {option.title}
          </li>
        ))}
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    fireEvent.keyDown(buttonDropdown, { key: 'Tab', keyCode: 9 });
    buttonDropdown.focus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowDown', keyCode: 40 });
    buttonDropdown.focus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowDown', keyCode: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(getByText('2First Item - Title')).toBeInTheDocument();
    expect(focusItem).toHaveFocus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowDown', keyCode: 40 });
    const focusItem2 = container.getElementsByTagName('li')[1];
    expect(focusItem2).toHaveFocus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowDown', keyCode: 40 });
    const focusItem3 = container.getElementsByTagName('li')[2];
    expect(focusItem3).toHaveFocus();
    fireEvent.keyDown(focusItem3, { key: 'Enter', keyCode: 13 });
    const AllItems = container.querySelectorAll('li');
    expect(AllItems.length).toBe(0);
  });


  it('accessibility check for edgecase', () => {
    const options = [
      {
        checkboxId: 'A-2', title: '1Default Item - Title', checkboxDisabled: false, selected: false,
      },
      {
        checkboxId: 'A-3', title: '2First Item - Title', checkboxDisabled: false, selected: true,
      },
    ];
    const { container } = render(
      <Dropdown
        id="input-one"
        options={options}
        supportingElements
        forceFullWidth
        label="Dropdown Label"
        selectedValue="3First Item - Title"
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li option={option} aria-selected={option.selected} key={index} ref={option.ref} role="option" tabIndex={index}>
            {(option.selected || Boolean(option.selected)) && <FontAwesomeIcon icon={faCheck} size="xs" />}
            {option.title}
          </li>
        ))}
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');

    fireEvent.keyDown(buttonDropdown, { key: 'Tab', keyCode: 9 });
    buttonDropdown.focus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowRight', keyCode: 39 });
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(0);
  });
  it('accessibility check for enter', () => {
    const options = [
      {
        checkboxId: 'A-2', title: '1Default Item - Title', checkboxDisabled: false, selected: false,
      },
      {
        checkboxId: 'A-3', title: '2First Item - Title', checkboxDisabled: false, selected: true,
      },
    ];
    const { container, getByText } = render(
      <Dropdown
        id="input-one"
        options={options}
        supportingElements
        forceFullWidth
        label="Dropdown Label"
        selectedValue="3First Item - Title"
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li option={option} aria-selected={option.selected} key={index} ref={option.ref} role="option" tabIndex={index}>
            {(option.selected || Boolean(option.selected)) && <FontAwesomeIcon icon={faCheck} size="xs" />}
            {option.title}
          </li>
        ))}
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');

    fireEvent.keyDown(buttonDropdown, { key: 'Tab', keyCode: 9 });
    buttonDropdown.focus();
    fireEvent.keyDown(buttonDropdown, { key: 'Enter', keyCode: 13 });
    expect(getByText('1Default Item - Title')).toBeInTheDocument();
    expect(buttonDropdown).toHaveFocus();
    const AllItems = container.querySelectorAll('li');
    expect(AllItems.length).toBe(2);
    fireEvent.keyDown(buttonDropdown, { key: 'Enter', keyCode: 13 });
    expect(buttonDropdown).toHaveFocus();
    const updatedListItems = container.querySelectorAll('li');
    expect(updatedListItems.length).toBe(0);
    fireEvent.keyDown(buttonDropdown, { key: 'Escape', keyCode: 27 });
    expect(buttonDropdown).toHaveFocus();
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(0);
  });

  it('check mobile version', () => {
    mockUseIsDesktopValue = false;
    const onItemClick = jest.fn();
    const onItemKeyDown = jest.fn();
    const options = [
      {
        checkboxId: 'A-2', title: '1Default Item - Title', checkboxDisabled: false, selected: false,
      },
      {
        checkboxId: 'A-3', title: '2First Item - Title', checkboxDisabled: false, selected: true,
      },
    ];
    let selectedValue;
    const { container } = render(
      <Dropdown
        id="input-one"
        options={options}
        supportingElements
        forceFullWidth
        label="Dropdown Label"
        selectedValue={selectedValue}
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li option={option} aria-selected={option.selected} key={index} onClick={(e) => onItemClick(e, index)} onKeyDown={(e) => onItemKeyDown(e, index)} ref={option.ref} role="option" tabIndex={index}>
            {(option.selected || Boolean(option.selected)) && <FontAwesomeIcon icon={faCheck} size="xs" />}
            {option.title}
          </li>
        ))}
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    fireEvent.keyDown(buttonDropdown, { key: 'Tab', keyCode: 9 });
    buttonDropdown.focus();
    const overlay = container.querySelector('[role="option"]');
    overlay.click();
    expect(overlay).not.toBeInTheDocument();
  });
  it('check disbaled property for dropdown', () => {
    mockUseIsDesktopValue = false;
    const options = [
      {
        checkboxId: 'A-2', title: '1Default Item - Title', checkboxDisabled: false, selected: false,
      },
      {
        checkboxId: 'A-3', title: '2First Item - Title', checkboxDisabled: false, selected: true,
      },
    ];
    const onItemClick = jest.fn();
    const onItemKeyDown = jest.fn();
    const { container } = render(
      <Dropdown
        id="input-one"
        options={options}
        supportingElements
        forceFullWidth
        label="Dropdown Label"
        selectedValue="1Default Item - Title"
        disabled
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li option={option} aria-selected={option.selected} key={index} onClick={(e) => onItemClick(e, index)} onKeyDown={(e) => onItemKeyDown(e, index)} ref={option.ref} role="option" tabIndex={index}>
            {(option.selected || Boolean(option.selected)) && <FontAwesomeIcon icon={faCheck} size="xs" />}
            {option.title}
          </li>
        ))}
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    expect(buttonDropdown).toHaveStyleRule('background', `${theme.colors.greyLight}`);
    expect(buttonDropdown).toHaveStyleRule('border', `${theme.borders.disabled}`);
    buttonDropdown.focus();
    buttonDropdown.click();
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(0);
  });
  it('check affixContent property for dropdown', () => {
    mockUseIsDesktopValue = false;
    const options = [
      {
        checkboxId: 'A-2', title: '1Default Item - Title', checkboxDisabled: false, selected: false,
      },
      {
        checkboxId: 'A-3', title: '2First Item - Title', checkboxDisabled: false, selected: true,
      },
    ];
    const { getByText } = render(
      <Dropdown
        id="input-one"
        options={options}
        supportingElements
        forceFullWidth
        label="Dropdown Label"
        selectedValue="1Default Item - Title"
        prefixContent="Prefix"
        disabled
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li option={option} aria-selected={option.selected} key={index} ref={option.ref} role="option" tabIndex={index}>
            {(option.selected || Boolean(option.selected)) && <FontAwesomeIcon icon={faCheck} size="xs" />}
            {option.title}
          </li>
        ))}
      </Dropdown>,
    );
    expect(getByText('Prefix')).toBeInTheDocument();
  });
  it('check invalid property for dropdown', () => {
    mockUseIsDesktopValue = false;
    const options = [
      {
        checkboxId: 'A-2', title: '1Default Item - Title', checkboxDisabled: false, selected: false,
      },
      {
        checkboxId: 'A-3', title: '2First Item - Title', checkboxDisabled: false, selected: true,
      },
    ];
    const { container } = render(
      <Dropdown
        id="input-one"
        options={options}
        supportingElements
        forceFullWidth
        label="Dropdown Label"
        selectedValue="1Default Item - Title"
        prefixContent="Prefix"
        validationMessage="sfsdfsdf"
      >
        {options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li option={option} aria-selected={option.selected} key={index} ref={option.ref} role="option" tabIndex={index}>
            {(option.selected || Boolean(option.selected)) && <FontAwesomeIcon icon={faCheck} size="xs" />}
            {option.title}
          </li>
        ))}
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    expect(buttonDropdown).toHaveStyleRule('border', `${theme.borders.invalid}`);
  });
});

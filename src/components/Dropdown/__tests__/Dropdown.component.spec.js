import React from 'react';
import 'jest-styled-components';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '../../../testUtils';
import getTheme from '../../../utils/getTheme';
import Dropdown from '../Dropdown.component';
import DropdownItem from '../DropdownItem.component';

const theme = getTheme();
let mockUseIsDesktopValue = true;
jest.mock('../../../hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

describe('Dropdown', () => {
  it('accessibility check for arrow down', async () => {
    const { container, getByText } = render(
      <Dropdown
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default Item - Title" id="1" />
        <DropdownItem value="2First Item - Title" id="2" />
        <DropdownItem value="3First Item - Title" id="3" />
      </Dropdown>,
    );

    const buttonDropdown = container.querySelector('[role="button"]');
    fireEvent.keyDown(buttonDropdown, { key: 'Tab', keyCode: 9 });
    buttonDropdown.focus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowDown', keyCode: 40 });

    expect(getByText('2First Item - Title')).toBeInTheDocument();

    const ulList = container.querySelector('ul');
    expect(ulList).toHaveStyleRule('max-height', '25.2rem');

    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(3);

    const focusItem = listItems[0];
    expect(focusItem).toHaveFocus();

    fireEvent.keyDown(buttonDropdown, { key: 'ArrowDown', keyCode: 40 });
    const focusItem2 = listItems[1];
    expect(focusItem2).toHaveFocus();


    fireEvent.keyDown(buttonDropdown, { key: 'ArrowDown', keyCode: 40 });
    const focusItem3 = listItems[2];
    expect(focusItem3).toHaveFocus();
    focusItem3.click();
    const listItemsUpdated = container.querySelectorAll('li');
    expect(listItemsUpdated.length).toBe(0);
  });

  it('accessibility check for arrow up', () => {
    const { container, getByText } = render(
      <Dropdown
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default Item - Title" id="1" />
        <DropdownItem value="2First Item - Title" id="2" />
        <DropdownItem value="3First Item - Title" id="3" />
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    fireEvent.keyDown(buttonDropdown, { key: 'Tab', keyCode: 9 });
    buttonDropdown.focus();

    fireEvent.keyDown(buttonDropdown, { key: 'ArrowUp', keyCode: 38 });
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(3);

    const focusItem = listItems[2];
    expect(getByText('3First Item - Title')).toBeInTheDocument();
    expect(focusItem).toHaveFocus();

    fireEvent.keyDown(buttonDropdown, { key: 'ArrowUp', keyCode: 38 });
    const focusItem2 = listItems[1];
    expect(focusItem2).toHaveFocus();

    fireEvent.keyDown(buttonDropdown, { key: 'ArrowUp', keyCode: 38 });
    const focusItem3 = listItems[0];
    expect(focusItem3).toHaveFocus();

    fireEvent.keyDown(buttonDropdown, { key: 'ArrowUp', keyCode: 38 });
    const focusItem4 = listItems[2];
    expect(focusItem4).toHaveFocus();
  });

  it('click outside of dropdown', () => {
    const { container } = render(
      <Dropdown
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default Item - Title" id="1" />
        <DropdownItem value="2First Item - Title" id="2" />
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
    const { container } = render(
      <Dropdown
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default Item - Title" id="1" />
        <DropdownItem value="2First Item - Title" id="2" />
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
    const { container, getByText } = render(
      <Dropdown
        id="input-one"
        forceFullWidth
        label="Dropdown Label"
      >
        <DropdownItem value="1Default Item - Title" id="1" />
        <DropdownItem value="2First Item - Title" id="2" />
        <DropdownItem value="3First Item - Title" id="3" />
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    fireEvent.keyDown(buttonDropdown, { key: 'Tab', keyCode: 9 });
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
    const { container } = render(
      <Dropdown
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default Item - Title" id="1" />
        <DropdownItem value="2First Item - Title" id="2" />
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
    const { container, getByText } = render(
      <Dropdown
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default Item - Title" id="1" />
        <DropdownItem value="2First Item - Title" id="2" />
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
    const { container } = render(
      <Dropdown
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default Item - Title" id="1" />
        <DropdownItem value="2First Item - Title" id="2" />
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
    const { container } = render(
      <Dropdown
        id="input-one"
        label="Dropdown Label"
        disabled
      >
        <DropdownItem value="1Default Item - Title" id="1" />
        <DropdownItem value="2First Item - Title" id="2" />
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
    const { getByText } = render(
      <Dropdown
        id="input-one"
        label="Dropdown Label"
        prefixContent="Prefix"
      >
        <DropdownItem value="1Default Item - Title" id="1" />
        <DropdownItem value="2First Item - Title" id="2" />
      </Dropdown>,
    );
    expect(getByText('Prefix')).toBeInTheDocument();
  });

  it('check invalid property for dropdown', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(
      <Dropdown
        id="input-one"
        label="Dropdown Label"
        prefixContent="Prefix"
        validationMessage="sfsdfsdf"
      >
        <DropdownItem value="1Default Item - Title" id="1" />
        <DropdownItem value="2First Item - Title" id="2" />
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    expect(buttonDropdown).toHaveStyleRule('border', `${theme.borders.invalid}`);
  });
});

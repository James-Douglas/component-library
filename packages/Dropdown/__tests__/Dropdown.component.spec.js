import React from 'react';
import 'jest-styled-components';
import { act } from 'react-dom/test-utils';
import { useTracking } from 'react-tracking';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { fireEvent, render } from '../../../testUtils';
import Dropdown from '../Dropdown.component';
import DropdownItem from '../DropdownItem.component';

let mockUseIsDesktopValue = true;
jest.mock('../../Hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

jest.mock('../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => ''),
  isDesktop: jest.fn(() => mockUseIsDesktopValue),
}));

describe('Dropdown', () => {
  it('accessibility check for arrow down', async () => {
    const { container, getByText } = render(
      <Dropdown
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
        <DropdownItem value="3First" id="3">3First Item - Title</DropdownItem>
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
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
        <DropdownItem value="3First" id="3">3First Item - Title</DropdownItem>
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
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
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
    const iconWrap = container.querySelector('svg').parentElement;
    expect(iconWrap).toHaveStyle('right: 1.6rem');
  });

  it('click on dropdown ', () => {
    const { container } = render(
      <Dropdown
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
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
        trackingLabel="input-one"
        id="input-one"
        forceFullWidth
        label="Dropdown Label"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
        <DropdownItem value="3First" id="3">3First Item - Title</DropdownItem>
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
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
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
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
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
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    fireEvent.keyDown(buttonDropdown, { key: 'Tab', keyCode: 9 });
    buttonDropdown.focus();
  });

  it('check disabled property for dropdown', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(
      <Dropdown
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
        disabled
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    expect(buttonDropdown).toHaveStyleRule('background', `${ctmTheme.dropdown.backgroundDisabled}`);
    expect(buttonDropdown).toHaveStyleRule('border', `${ctmTheme.borders.disabled}`);
    buttonDropdown.focus();
    buttonDropdown.click();
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(0);
  });

  it('check affixContent property for dropdown', () => {
    mockUseIsDesktopValue = false;
    const { getByText } = render(
      <Dropdown
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
        prefixContent="Prefix"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
      </Dropdown>,
    );
    expect(getByText('Prefix')).toBeInTheDocument();
  });

  it('check invalid property for dropdown', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(
      <Dropdown
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
        prefixContent="Prefix"
        validationMessage="sfsdfsdf"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');
    expect(buttonDropdown).toHaveStyleRule('border', `${ctmTheme.borders.invalid}`);
  });

  it('renders with a selectedValue', () => {
    const { getByText } = render(
      <Dropdown
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
        selectedValue="2First"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
      </Dropdown>,
    );

    expect(getByText('2First Item - Title')).toBeInTheDocument();
  });
  it('renders selected a new value after initial prefill', () => {
    const valueCb = jest.fn();
    const { getByText, container } = render(
      <Dropdown
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
        selectedValue="2First"
        handleChange={valueCb}
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
      </Dropdown>,
    );

    expect(getByText('2First Item - Title')).toBeInTheDocument();

    const buttonDropdown = container.querySelector('[role="button"]');
    fireEvent.click(buttonDropdown);
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(2);
    fireEvent.click(listItems[0]);
    expect(getByText('1Default Item - Title')).toBeInTheDocument();
    expect(valueCb.mock.calls.length).toBe(1);
    expect(valueCb.mock.calls[0][1]).toBe('1Default');
  });

  it('check keyboard functionality  - letters', () => {
    const valueCb = jest.fn();
    const { getByText, container } = render(
      <Dropdown
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
        selectedValue="2First"
        handleChange={valueCb}
      >
        <DropdownItem value="Default">Default Item - Title</DropdownItem>
        <DropdownItem value="First">First Item - Title</DropdownItem>
        <DropdownItem value="Second">Second Item - Title</DropdownItem>
        <DropdownItem value="Third">Third Item - Title</DropdownItem>
        <DropdownItem value="TRex">Tyrannosaurus Rex</DropdownItem>
        <DropdownItem value="Tutu">Tutu Train</DropdownItem>
      </Dropdown>,
    );
    const buttonDropdown = container.querySelector('[role="button"]');

    fireEvent.keyDown(buttonDropdown, { key: 'Tab', keyCode: 9 });
    buttonDropdown.focus();
    fireEvent.keyDown(buttonDropdown, { key: 'ArrowDown', keyCode: 40 });
    // when we type t first time
    fireEvent.keyDown(buttonDropdown, { key: 't', keyCode: 84 });
    expect(getByText('Third Item - Title').parentNode).toHaveFocus();
    // when we type t second time
    fireEvent.keyDown(buttonDropdown, { key: 'T', keyCode: 84 });
    expect(getByText('Tyrannosaurus Rex').parentNode).toHaveFocus();
    // when we type t third time
    fireEvent.keyDown(buttonDropdown, { key: 't', keyCode: 84 });
    expect(getByText('Tutu Train').parentNode).toHaveFocus();
    // when we type t 4th time
    fireEvent.keyDown(buttonDropdown, { key: 't', keyCode: 84 });
    expect(getByText('Third Item - Title').parentNode).toHaveFocus();
  });

  it('renders the variant "text" with a selectedValue', () => {
    const { getByText } = render(
      <Dropdown
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
        selectedValue="2First"
        variant="text"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
      </Dropdown>,
    );

    expect(getByText('2First Item - Title')).toBeInTheDocument();
  });

  it('renders the variant "text-fixed-chevron" with a selectedValue', () => {
    const { getByText } = render(
      <Dropdown
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
        selectedValue="2First"
        variant="text-fixed-chevron"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
      </Dropdown>,
    );

    expect(getByText('2First Item - Title')).toBeInTheDocument();
  });

  it('renders the variant "text" with correct styles', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(
      <Dropdown
        trackingLabel="input-one"
        id="input-one"
        label="Dropdown Label"
        variant="text"
      >
        <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
        <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
      </Dropdown>,
    );
    const dropdownWrapper = container.querySelector('[role="button"]').parentElement;
    expect(dropdownWrapper).toHaveStyleRule('margin-left', `-${ctmTheme.spacing[8]}`);
    expect(dropdownWrapper).toHaveStyleRule('margin-right', `-${ctmTheme.spacing[8]}`);
    expect(dropdownWrapper).toHaveStyleRule('width', 'auto');
    const buttonDropdown = container.querySelector('[role="button"]');
    expect(buttonDropdown).toHaveStyleRule('background', 'transparent');
  });

  describe('interaction tracking', () => {
    it('tracks focus events', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <Dropdown
          trackingLabel="input-one"
          id="input-one"
          label="Dropdown Label"
        >
          <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
          <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
        </Dropdown>,
      );

      const dropdown = container.querySelector('[role="button"]');
      dropdown.focus();
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Focus',
          ixn_label: 'input-one',
          ixn_object: 'Dropdown',
          ixn_type: 'Dropdown',
          ixn_value: '',
        },
      });
    });

    it('tracks selection events', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <Dropdown
          trackingLabel="input-one"
          id="input-one"
          label="Dropdown Label"
          selectedValue="2First"
        >
          <DropdownItem value="1Default" id="1">1Default Item - Title</DropdownItem>
          <DropdownItem value="2First" id="2">2First Item - Title</DropdownItem>
        </Dropdown>,
      );

      const buttonDropdown = container.querySelector('[role="button"]');
      fireEvent.click(buttonDropdown);
      const listItems = container.querySelectorAll('li');
      fireEvent.click(listItems[0]);

      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Selection',
          ixn_label: 'input-one',
          ixn_object: 'Dropdown',
          ixn_type: 'Dropdown',
          ixn_value: '1Default',
        },
      });
    });
  });
});

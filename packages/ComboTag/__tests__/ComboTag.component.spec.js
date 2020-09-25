import React from 'react';
import 'jest-styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { fireEvent, render } from '../../../testUtils';
import ComboTag from '../ComboTag.component';

const apiData = [
  { name: 'Australia', code: 'AU', alert: false },
  { name: 'Belarus', code: 'BY', alert: false },
  { name: 'Cambodia', code: 'KH', alert: false },
  { name: 'Dominican Republic', code: 'DO', alert: false },
  { name: 'Greenland', code: 'GL', alert: false },
  { name: 'Ireland', code: 'IE', alert: false },
  { name: 'Japan', code: 'JP', alert: false },
  { name: 'New Zealand', code: 'NZ', alert: false },
  { name: 'Slovakia', code: 'SK', alert: false },
  { name: 'Turkey', code: 'TR', alert: false },
  { name: 'United Kingdom', code: 'GB', alert: false },
  { name: 'Yemen', code: 'YE', alert: false },
];

const emptyApiData = [];

describe('ComboTag', () => {
  it('renders options', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        apiData={apiData}
        id="combo-tag"
        value="a"
        placeholder="Select or start typing destination(s)..."
        keys={['name', 'code', 'alert']}
      />,
    );
    const inputField = container.querySelector('#combo-tag');
    expect(inputField).toHaveStyleRule('border: transparent');
    inputField.focus();
    const list = container.getElementsByTagName('li');
    expect(list.length).toBe(12);
  });

  it('renders no options', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        apiData={emptyApiData}
        id="combo-tag"
        value="xsdfc"
        placeholder="Select or start typing destination(s)..."
        keys={['name', 'code', 'alert']}
      />,
    );
    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    const list = container.getElementsByTagName('li');
    expect(list.length).toBe(0);
  });

  it('renders no options if character minimum is not met', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        apiData={apiData}
        value="a"
        id="combo-tag"
        characterMinimum={5}
        keys={['name', 'code', 'alert']}
      />,
    );
    const list = container.getElementsByTagName('li')[0];
    expect(list).toBeUndefined();
  });

  it('on input, set value func is called', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        apiData={apiData}
        keys={['name', 'code', 'alert']}
      />,
    );
    const inputField = container.querySelector('input');
    fireEvent.change(inputField, { target: { value: 'prese' } });
    expect(inputField).toHaveValue('prese');
    fireEvent.change(inputField, { target: { value: 'present' } });
    expect(inputField).toHaveValue('present');
  });

  it('calls focus and blur handlers when provided', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const { container } = render(
      <ComboTag
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleChange={() => {}}
        apiData={apiData}
        id="combo-tag"
        keys={['name', 'code', 'alert']}
      />,
    );
    const inputField = container.querySelector('input');
    fireEvent.focus(inputField);
    expect(handleFocus).toHaveBeenCalled();
    fireEvent.blur(inputField);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('renders with value', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        value="presentation dfsdf que ffgddfg"
        apiData={apiData}
        id="combo-tag"
        keys={['name', 'code', 'alert']}
      />,
    );
    const { value } = container.querySelector('#combo-tag');
    expect(value).toEqual('presentation dfsdf que ffgddfg');
  });

  it('renders a tag when li is selected', () => {
    const { container, getByText } = render(
      <ComboTag
        handleChange={() => {}}
        value="aus"
        apiData={apiData}
        id="combo-tag"
        keys={['name', 'code', 'alert']}
      />,
    );

    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    const firstLi = container.getElementsByTagName('li')[0];
    fireEvent.mouseDown(firstLi);
    expect(getByText('Australia')).toBeInTheDocument();
    expect(getByText('Australia').closest('div')).toHaveStyleRule('background', `${ctmTheme.colors.primary50}`);
  });

  it('selects an item passed it via callback - via handleChange', () => {
    const onSelectCb = jest.fn();
    const { container } = render(
      <ComboTag
        handleChange={onSelectCb}
        apiData={apiData}
        value="a"
        id="combo-tag"
        keys={['name', 'code', 'alert']}
      />,
    );
    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    const currentItem = container.getElementsByTagName('li')[0];
    fireEvent.mouseDown(currentItem);
    expect(onSelectCb.mock.calls[0][0]).toBe('Australia');
  });

  it('selects an item passed it via callback - via handleInput', () => {
    const onInputCb = jest.fn();
    const { container } = render(
      <ComboTag
        handleInput={onInputCb}
        handleChange={() => {}}
        apiData={apiData}
        value="a"
        id="combo-tag"
        keys={['name', 'code', 'alert']}
      />,
    );
    const inputField = container.querySelector('input');
    fireEvent.change(inputField, { target: { value: 'present' } });
    expect(inputField.value).toBe('present');
  });

  it('accessibility - arrow up', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        apiData={apiData}
        value="a"
        id="combo-tag"
        keys={['name', 'code', 'alert']}
      />,
    );
    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusItem = container.getElementsByTagName('li')[11];
    expect(focusItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const nextFocusItem = container.getElementsByTagName('li')[10];
    expect(nextFocusItem).toHaveFocus();
  });

  it('accessibility - arrow down', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        apiData={apiData}
        value="a"
        id="combo-tag"
        keys={['name', 'code', 'alert']}
      />,
    );
    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(focusItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const nextFocusItem = container.getElementsByTagName('li')[1];
    expect(nextFocusItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const nextNextFocusItem = container.getElementsByTagName('li')[2];
    expect(nextNextFocusItem).toHaveFocus();
  });

  it('accessibility - arrow down then click enter', () => {
    const { container, getByText } = render(
      <ComboTag
        handleChange={() => {}}
        apiData={apiData}
        value="a"
        id="combo-tag"
        keys={['name', 'code', 'alert']}
      />,
    );
    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    fireEvent.keyDown(focusItem, { key: 'Enter', code: 13 });
    expect(getByText('Australia')).toBeInTheDocument();
    expect(getByText('Australia').closest('div')).toHaveStyleRule('background', `${ctmTheme.colors.primary50}`);
  });

  xit('accessibility - click tab', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('input');
    const clearButton = container.querySelector('.input-clear-button');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'Tab', code: 9 });
    clearButton.focus();
    expect(clearButton).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'Tab', code: 9 });
    clearButton.focus();
    expect(clearButton).toHaveFocus();
  });

  xit('accessibility - default case ', () => {
    const { container, getByText } = render(
      <ComboTag
        handleChange={() => {}}
        prefillValue="pr"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('input');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'e', code: 69 });
    expect(getByText('et presentation tempora')).toBeInTheDocument();
  });

  xit('check mobile version exit on esc', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        prefillValue="pr"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('#mobilecombo-id-first');
    inputField.click();
    const overlay = container.querySelector('[role="option"]');
    expect(container.firstChild).toHaveClass('overlay');
    const input = container.querySelector('#combo-id-first');
    fireEvent.keyDown(input, { key: 'Escape', keyCode: 27 });
    expect(overlay).not.toBeInTheDocument();
  });

  xit('check padding', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        prefillValue="pr"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('#mobilecombo-id-first');
    inputField.click();
    const inputDefaultField = container.querySelector('#combo-id-first');
    inputDefaultField.focus();
    expect(inputDefaultField).toHaveFocus();
    const listitem = container.querySelectorAll('[role="listitem"]')[0];
    expect(listitem).toHaveStyleRule('padding', `${ctmTheme.spacing[8]} ${ctmTheme.spacing[40]}`);
    expect(listitem).toHaveStyleRule('cursor', 'pointer');
  });

  xit('empty state check condition ', () => {
    const { getByText, container } = render(
      <ComboTag
        handleChange={() => {}}
        prefillValue=""
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        helperMessage="Please start typing"
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('#mobilecombo-id-first');
    inputField.click();
    const emptyState = getByText('Please start typing');
    expect(emptyState).toBeInTheDocument();
  });

  xit('no results check condition ', () => {
    const { getByText, container } = render(
      <ComboTag
        handleChange={() => {}}
        prefillValue="random"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        tooltip={{ title: 'Combo component' }}
        emptyStateHeading="Sorry, no results found"
      />,
    );
    const inputField = container.querySelector('#mobilecombo-id-first');
    inputField.click();
    const emptyState = getByText('Sorry, no results found');
    expect(emptyState).toBeInTheDocument();
  });
});

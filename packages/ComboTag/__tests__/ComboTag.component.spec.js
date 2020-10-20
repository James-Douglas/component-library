import React from 'react';
import 'jest-styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { fireEvent, render } from '../../../testUtils';
import ComboTag from '../ComboTag.component';

// expected format of api data
const apiData = [
  { label: 'Australia', code: 'AU', alert: false },
  { label: 'Belarus', code: 'BY', alert: false },
  { label: 'Cambodia', code: 'KH', alert: false },
  { label: 'Dominican Republic', code: 'DO', alert: false },
  { label: 'Greenland', code: 'GL', alert: false },
  { label: 'Ireland', code: 'IE', alert: false },
  { label: 'Japan', code: 'JP', alert: false },
  { label: 'New Zealand', code: 'NZ', alert: false },
  { label: 'Slovakia', code: 'SK', alert: false },
  { label: 'Turkey', code: 'TR', alert: false },
  { label: 'United Kingdom', code: 'GB', alert: false },
  { label: 'Yemen', code: 'YE', alert: false },
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
      />,
    );
    const { value } = container.querySelector('#combo-tag');
    expect(value).toEqual('presentation dfsdf que ffgddfg');
  });

  it('renders a tag when li is selected', () => {
    const { container, getByText } = render(
      <ComboTag
        apiData={apiData}
        id="combo-tag"
        placeholder="Select or start typing destination(s)..."
        handleInput={(value) => {
          // eslint-disable-next-line no-console
          console.log(value);
        }}
        handleChange={(tags) => {
          // eslint-disable-next-line no-console
          console.log('the current tags are:', tags);
        }}
      />,
    );

    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    fireEvent.input(inputField, { target: { value: 'aus' } });
    const firstLi = container.getElementsByTagName('li')[0];
    fireEvent.mouseDown(firstLi);
    expect(getByText('Australia')).toBeInTheDocument();
    expect(getByText('Australia').closest('div')).toHaveStyleRule('background', `${ctmTheme.colors.primary50}`);
  });

  it('fires handle change callback', () => {
    const onSelectCb = jest.fn();
    const { container } = render(
      <ComboTag
        handleChange={onSelectCb}
        apiData={apiData}
        value="a"
        id="combo-tag"
      />,
    );
    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    const currentItem = container.getElementsByTagName('li')[0];
    fireEvent.mouseDown(currentItem);
    expect(onSelectCb).toHaveBeenCalled();
  });

  it('fires handle input callback', () => {
    const onInputCb = jest.fn();
    const { container } = render(
      <ComboTag
        handleInput={onInputCb}
        handleChange={() => {}}
        apiData={apiData}
        value="a"
        id="combo-tag"
      />,
    );
    const inputField = container.querySelector('input');
    fireEvent.change(inputField, { target: { value: 'present' } });
    expect(inputField.value).toBe('present');
    expect(onInputCb).toHaveBeenCalled();
  });

  it('accessibility - arrow up', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        apiData={apiData}
        value="a"
        id="combo-tag"
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

  it('accessibility - click tab', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        apiData={apiData}
        id="combo-tag"
      />,
    );
    const inputField = container.querySelector('input');
    inputField.focus();
    fireEvent.input(inputField, { target: { value: 'aus' } });
    const clearButton = container.querySelector('.input-clear-button');
    fireEvent.keyDown(inputField, { key: 'Tab', code: 9 });
    clearButton.focus();
    expect(clearButton).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'Tab', code: 9 });
    clearButton.focus();
    expect(clearButton).toHaveFocus();
  });

  // raw input (no list) variant
  it('does not render a dropdown list', () => {
    const { container } = render(
      <ComboTag
        handleChange={() => {}}
        id="combo-tag"
        value="a"
        placeholder="start typing"
      />,
    );

    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    const listElems = container.getElementsByTagName('li');
    expect(listElems.length).toBe(0);
  });

  it('adds a tag on keypress (enter)', () => {
    const { container, getByText } = render(
      <ComboTag
        handleChange={() => {}}
        id="combo-tag"
        placeholder="start typing"
      />,
    );

    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    fireEvent.change(inputField, { target: { value: 'new tag' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 13 });
    expect(getByText('new tag')).toBeInTheDocument();
  });

  it('accepts a custom validity check of the input', () => {
    const condition = (x, y) => x > 100;
    const { container, getByText } = render(
      <ComboTag
        handleChange={() => {}}
        id="combo-tag"
        placeholder="start typing"
        invalidTagCondition={condition}
      />,
    );

    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    fireEvent.change(inputField, { target: { value: 'new tag' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 13 });
    expect(getByText('new tag')).toBeInTheDocument();
    fireEvent.change(inputField, { target: { value: '111' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 13 });
    expect(getByText('111')).toBeInTheDocument();
  });

  it('if an item is invalid, renders the error state for the tag', () => {
    const condition = (x, y) => x > 100;
    const { container, getByText } = render(
      <ComboTag
        handleChange={() => {}}
        id="combo-tag"
        placeholder="start typing"
        invalidTagCondition={condition}
      />,
    );

    const inputField = container.querySelector('#combo-tag');
    inputField.focus();
    fireEvent.change(inputField, { target: { value: '111' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 13 });
    expect(getByText('111')).toBeInTheDocument();
    const invalidTag = getByText('111');
    expect(invalidTag.parentElement).toHaveStyleRule('background', `${ctmTheme.colors.error50}`);
  });
});

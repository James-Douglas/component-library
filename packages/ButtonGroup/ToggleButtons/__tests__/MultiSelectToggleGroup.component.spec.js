import React from 'react';
import { render, fireEvent } from '../../../../testUtils';
import MultiSelectToggleGroup, { getChildren } from '../MultiSelectToggleGroup.component';
import MultiSelectToggle from '../MultiSelect/MultiSelect.component';
import 'jest-styled-components';

describe('getChildren()', () => {
  const tempID = 'temp-id';
  const getTestChildren = (data) => data.map((child) => React.cloneElement(
    <MultiSelectToggle id={tempID} title="test-label" value="test-value" />,
    { ...child },
  ));
  const didToggleCb = jest.fn();
  const clickCb = jest.fn();
  it('returns cloned children with base props added', () => {
    const testChildren = getTestChildren([
      {
        label: 'test toggle a',
        id: 'a',
        value: 'val-a',
      },
    ]);
    const result = getChildren(
      'group-id',
      testChildren,
      'test-group',
      null,
      didToggleCb,
      clickCb,
      null,
    );
    const {
      name,
      id,
      selectedValues,
      handleToggle,
      handleClick,
      value,
    } = result[0].props;

    expect(name).toEqual('test-group');
    expect(value).toEqual('val-a');
    expect(id).toEqual('a');
    expect(selectedValues).toEqual(null);
    expect(handleToggle).toEqual(didToggleCb);
    expect(handleClick).toEqual(clickCb);
  });
});

describe('MultiSelectToggleGroup', () => {
  it('renders with minimal props', () => {
    const { container } = render(
      <MultiSelectToggleGroup
        id="toggle-group"
        name="test-toggle-group"
        handleToggle={() => {}}
      />,
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('calls handleToggle on toggle selection', () => {
    const onToggleCb = jest.fn();
    const { container } = render(
      <MultiSelectToggleGroup name="test-toggle-group-b" handleToggle={onToggleCb}>
        <MultiSelectToggle title="test toggle a" value="a" id="a" />
        <MultiSelectToggle title="test toggle b" value="b" id="b" />
      </MultiSelectToggleGroup>,
    );
    const toggleA = container.querySelector('#a');
    fireEvent.click(toggleA);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual(['a']);
    fireEvent.click(toggleA);
    expect(onToggleCb.mock.calls[1][0]).toEqual([]);
  });

  it('calls handleClick on toggle click', () => {
    const onToggleCb = jest.fn();
    const onClickCb = jest.fn();
    const { container } = render(
      <MultiSelectToggleGroup
        name="test-toggle-group-b"
        handleToggle={onToggleCb}
        handleClick={onClickCb}
      >
        <MultiSelectToggle label="test toggle a" value="a" id="a" />
        <MultiSelectToggle label="test toggle b" value="b" id="b" />
      </MultiSelectToggleGroup>,
    );
    const toggleA = container.querySelector('#a');
    fireEvent.click(toggleA);
    fireEvent.click(toggleA);
    expect(onToggleCb).toHaveBeenCalledTimes(2);
    expect(onClickCb).toHaveBeenCalledTimes(2);
  });

  it('renders with tooltip', () => {
    const handleChangeCb = jest.fn();
    const tooltip = { title: 'test' };
    const { container } = render(
      <MultiSelectToggleGroup
        name="test-toggle-group-b"
        handleToggle={handleChangeCb}
        tooltip={tooltip}
      >
        <MultiSelectToggle title="test toggle a" id="a" value="val-1" />
        <MultiSelectToggle title="test toggle b" id="b" value="val-2" />
      </MultiSelectToggleGroup>,
    );
    const tooltipWrapper = container.querySelector('[role="tooltip"]');
    expect(tooltipWrapper).toBeInTheDocument();
  });
});

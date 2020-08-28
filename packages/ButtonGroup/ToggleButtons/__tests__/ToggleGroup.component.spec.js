import React from 'react';
import { render, fireEvent } from '../../../../testUtils';
import ToggleGroup, { getChildren } from '../ToggleGroup.component';
import TextToggle from '../Text/TextToggle.component';
import 'jest-styled-components';

describe('getChildren()', () => {
  const tempID = 'temp-id';
  const getTestChildren = (data) => data.map((child) => React.cloneElement(
    <TextToggle id={tempID} title="test-label" value="test-value" />,
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
      '10rem',
      '10rem',
    );
    const {
      name,
      id,
      selectedValue,
      handleToggle,
      handleClick,
      value,
      contentWidth,
      contentHeight,
    } = result[0].props;

    expect(name).toEqual('test-group');
    expect(value).toEqual('val-a');
    expect(id).toEqual('a');
    expect(selectedValue).toEqual(null);
    expect(handleToggle).toEqual(didToggleCb);
    expect(handleClick).toEqual(clickCb);
    expect(contentWidth).toEqual('10rem');
    expect(contentHeight).toEqual('10rem');
  });
});

describe('ToggleGroup', () => {
  it('renders with minimal props', () => {
    const { container } = render(
      <ToggleGroup
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
      <ToggleGroup name="test-toggle-group-b" handleToggle={onToggleCb}>
        <TextToggle title="test toggle a" value="a" id="a" />
        <TextToggle title="test toggle b" value="b" id="b" />
      </ToggleGroup>,
    );
    const toggleA = container.querySelector('#a');
    fireEvent.click(toggleA);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual('a');
  });

  it('calls handleClick on toggle click', () => {
    const onToggleCb = jest.fn();
    const onClickCb = jest.fn();
    const { container } = render(
      <ToggleGroup
        name="test-toggle-group-b"
        handleToggle={onToggleCb}
        handleClick={onClickCb}
      >
        <TextToggle label="test toggle a" value="a" id="a" />
        <TextToggle label="test toggle b" value="b" id="b" />
      </ToggleGroup>,
    );
    const toggleA = container.querySelector('#a');
    fireEvent.click(toggleA);
    fireEvent.click(toggleA);
    expect(onToggleCb).toHaveBeenCalledTimes(1);
    expect(onClickCb).toHaveBeenCalledTimes(2);
  });

  it('renders with tooltip', () => {
    const handleChangeCb = jest.fn();
    const tooltip = { title: 'test' };
    const { container } = render(
      <ToggleGroup
        name="test-toggle-group-b"
        handleToggle={handleChangeCb}
        tooltip={tooltip}
      >
        <TextToggle title="test toggle a" id="a" value="val-1" />
        <TextToggle title="test toggle b" id="b" value="val-2" />
      </ToggleGroup>,
    );
    const tooltipWrapper = container.querySelector('[role="tooltip"]');
    expect(tooltipWrapper).toBeInTheDocument();
  });
});

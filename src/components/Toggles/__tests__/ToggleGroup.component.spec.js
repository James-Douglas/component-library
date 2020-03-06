import React from 'react';
import { render, fireEvent } from '../../../testUtils';
import ToggleGroup, { getChildren } from '../ToggleGroup.component';
import TextToggle from '../Text/TextToggle.component';
import 'jest-styled-components';

describe('getChildren()', () => {
  let tempID = 'temp-id';
  const getTestChildren = (data) => data.map((child) => React.cloneElement(<TextToggle id={tempID} label="test-label" value="test-value" />, { ...child }));
  const didToggleCb = jest.fn();

  it('returns cloned children with base props added', () => {
    const testChildren = getTestChildren([
      {
        label: 'test toggle a',
        id: 'a',
        value: 'val-a',
      },
    ]);
    const result = getChildren(testChildren, 'test-group', null, didToggleCb, null, '10rem', '10rem');
    const {
      name, id, selectedValue, handleToggle, value, contentWidth, contentHeight,
    } = result[0].props;

    expect(name).toEqual('test-group');
    expect(value).toEqual('val-a');
    expect(id).toEqual('a');
    expect(selectedValue).toEqual(null);
    expect(handleToggle).toEqual(didToggleCb);
    expect(contentWidth).toEqual('10rem');
    expect(contentHeight).toEqual('10rem');
  });

  it('adds id if none provided', () => {
    tempID = '';
    const testChildren = getTestChildren([
      {
        label: 'test toggle a',
      },
    ]);
    const result = getChildren(testChildren, 'test-group', null, didToggleCb, null, null, null);
    const { id } = result[0].props;
    expect(id).toEqual('toggle-0');
  });
});


describe('ToggleGroup', () => {
  it('renders with minimal props', () => {
    const { container } = render(<ToggleGroup
      name="test-toggle-group"
      handleToggle={() => {}}
    />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('calls handleToggle on toggle selection', () => {
    const onToggleCb = jest.fn();
    const { container } = render(
      <ToggleGroup name="test-toggle-group-b" handleToggle={onToggleCb}>
        <TextToggle label="test toggle a" value="a" id="a" />
        <TextToggle label="test toggle b" value="b" id="b" />
      </ToggleGroup>,
    );
    const toggleA = container.querySelector('#a');
    fireEvent.click(toggleA);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual('a');
  });

  it('renders with tooltip', () => {
    const handleChangeCb = jest.fn();
    const tooltip = { title: 'test' };
    const { container } = render(
      <ToggleGroup name="test-toggle-group-b" handleToggle={handleChangeCb} tooltip={tooltip}>
        <TextToggle label="test toggle a" id="a" value="val-1" />
        <TextToggle label="test toggle b" id="b" value="val-2" />
      </ToggleGroup>,
    );
    const tooltipWrapper = container.querySelector('[role="tooltip"]');
    expect(tooltipWrapper).toBeInTheDocument();
  });
});

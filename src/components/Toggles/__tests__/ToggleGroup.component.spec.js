import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToggleGroup, { getType, getChildren } from '../ToggleGroup.component';
import Toggle from '../Toggle.component';

describe('getType()', () => {
  it('returns square when all labels have length <= 25 chars', () => {
    const children = [
      { label: 'test a' },
      { label: 'test b' },
      { label: 'test c' },
    ];
    expect(getType(children)).toBe('square');
  });

  it('returns rectangle when a label has length > 25 chars', () => {
    const children = [
      { props: { label: 'test a' } },
      { props: { label: 'test b' } },
      { props: { label: 'test ccccccccccccccccccccc' } },
    ];
    expect(getType(children)).toBe('rectangle');
  });
});

describe('getChildren()', () => {
  const getTestChildren = (data) => data.map((child) => React.createElement(<Toggle />, { ...child }));
  const didToggleCb = jest.fn();

  it('returns cloned children with base props added', () => {
    const testChildren = getTestChildren([
      {
        label: 'test toggle a',
        id: 'a',
      },
    ]);
    const result = getChildren(testChildren, 'square', 'test-group', null, didToggleCb, null);
    const {
      name, id, selectedValue, onToggle, type,
    } = result[0].props;

    expect(name).toEqual('test-group');
    expect(id).toEqual('a');
    expect(selectedValue).toEqual(null);
    expect(onToggle).toEqual(didToggleCb);
    expect(type).toEqual('square');
  });

  it('adds id if none provided', () => {
    const testChildren = getTestChildren([
      {
        label: 'test toggle a',
      },
    ]);
    const result = getChildren(testChildren, 'square', 'test-group', null, didToggleCb, null);
    const { id } = result[0].props;
    expect(id).toEqual('toggle-0');
  });

  it('adds rectOptions if required', () => {
    const expectedRectOptions = { align: 'left' };
    const testChildren = getTestChildren([
      {
        label: 'test toggle a',
      },
    ]);
    const result = getChildren(testChildren, 'rectangle', 'test-group', null, didToggleCb, expectedRectOptions);
    const { rectOptions } = result[0].props;
    expect(rectOptions).toEqual(expectedRectOptions);
  });
});


describe('ToggleGroup', () => {
  it('renders with minimal props', () => {
    const { container } = render(<ToggleGroup name="test-toggle-group" onToggle={() => {}} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('calls onToggle on toggle selection', () => {
    const onToggleCb = jest.fn();
    const { container } = render(
      <ToggleGroup name="test-toggle-group-b" onToggle={onToggleCb}>
        <Toggle label="test toggle a" value="a" id="a" />
        <Toggle label="test toggle b" value="b" id="b" />
      </ToggleGroup>,
    );
    const toggleA = container.querySelector('#a');
    fireEvent.click(toggleA);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual('a');
  });

  it('adds justifyEnd property to tooltip when exists', () => {
    const handleChangeCb = jest.fn();
    const tooltip = { title: 'test' };
    const { container } = render(
      <ToggleGroup name="test-toggle-group-b" onToggle={handleChangeCb} tooltip={tooltip}>
        <Toggle label="test toggle a" id="a" />
        <Toggle label="test toggle b" id="b" />
      </ToggleGroup>,
    );

    const tooltipWrapper = container.querySelector('.tooltip-wrapper');
    expect(tooltipWrapper).toHaveClass('justify-end');
  });
});

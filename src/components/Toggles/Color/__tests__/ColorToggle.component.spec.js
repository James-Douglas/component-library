import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ColorToggle, { getDisplayBackgroundColor, getAnimationStyle, getDisplayLabel } from '../ColorToggle.component';

describe('getDisplayBackgroundColor()', () => {
  it('returns background color for non-white', () => {
    expect(getDisplayBackgroundColor('black')).toEqual('black');
  });

  it('returns ivory for white background', () => {
    expect(getDisplayBackgroundColor('white')).toEqual('ivory');
  });
});

describe('getAnimationStyle', () => {
  it('returns correct style for un-selected toggle', () => {
    expect(getAnimationStyle('test-a', 'test-b', 'yellow')).toEqual({ backgroundColor: 'yellow' });
  });

  it('returns correct style for selected toggle', () => {
    const result = getAnimationStyle('test-a', 'test-a', 'yellow');
    expect(result).toEqual({ backgroundColor: 'yellow', height: '100%' });
  });
});

describe('getDisplayLabel', () => {
  it('returns label when label provided', () => {
    expect(getDisplayLabel('test label', null)).toEqual('test label');
  });

  it('returns correct color label when no label provided (non-white)', () => {
    expect(getDisplayLabel(null, 'black')).toEqual('Black');
  });

  it('returns correct color label when no label provided (white)', () => {
    expect(getDisplayLabel(null, 'ivory')).toEqual('White');
  });
});

describe('ColorToggle', () => {
  it('renders with minimal props', () => {
    const { getByText, container } = render(<ColorToggle backgroundColor="black" id="test-a" />);
    expect(container.innerHTML).toMatchSnapshot();
    expect(getByText('Black')).toBeInTheDocument();
    const wrapper = container.querySelector('.scoped-toggle');
    expect(wrapper).toHaveClass('black');
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('id', 'test-a');
    expect(input).toHaveAttribute('tabIndex', '0');
  });

  it('applies fontColor when provided', () => {
    const { container } = render(<ColorToggle backgroundColor="black" id="test-a" fontColor="white" />);
    expect(container.querySelector('.scoped-toggle')).toHaveClass('white');
  });

  it('calls onToggle when change event fires', () => {
    const onToggleCb = jest.fn();
    const { container } = render(<ColorToggle backgroundColor="black" id="test-a" fontColor="white" onToggle={onToggleCb} />);
    const element = container.querySelector('.toggle');
    fireEvent.click(element);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual({ id: 'test-a', value: '' });
  });
});

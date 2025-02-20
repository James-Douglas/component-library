import React from 'react';
import { render, fireEvent } from '../../../../testUtils';
import 'jest-styled-components';
import BaseButton from '../BaseButton';

describe('BaseButton', () => {
  it('renders with minimal props', () => {
    const { container } = render(
      <BaseButton
        type="square"
        id="test-square"
        value="test"
        handleToggle={() => {}}
      />,
    );
    expect(container).toBeDefined();
  });

  it('sets checked when selectedId equals id', () => {
    const { container } = render(
      <BaseButton
        type="square"
        id="test-selected-id"
        value="test"
        selectedValue="test"
        autofill
        handleToggle={() => {}}
      />,
    );
    expect(container.querySelector('input')).toHaveAttribute('checked');
  });

  it('calls onToggle when toggled', () => {
    const onToggleCb = jest.fn();
    const { container } = render(
      <BaseButton
        type="square"
        id="test-square"
        value="testt"
        handleToggle={onToggleCb}
      />,
    );
    const input = container.querySelector('input');
    fireEvent.click(input);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual('testt');
  });

  it('calls focus and blur handlers', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const { container } = render(
      <BaseButton
        type="square"
        handleToggle={() => {}}
        id="test"
        value="testt"
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />,
    );
    const input = container.querySelector('input');
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('calls click handler', () => {
    const handleClick = jest.fn();
    const handleToggle = jest.fn();
    const { container } = render(
      <BaseButton
        handleToggle={handleToggle}
        id="test"
        value="test"
        handleClick={handleClick}
      />,
    );
    const input = container.querySelector('input');
    fireEvent.click(input);
    fireEvent.click(input);
    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});

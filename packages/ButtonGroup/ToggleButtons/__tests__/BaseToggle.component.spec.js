import React from 'react';
import { useTracking } from 'react-tracking';
import { render, fireEvent } from '../../../../testUtils';
import 'jest-styled-components';
import BaseToggle from '../BaseToggle';

describe('BaseToggle', () => {
  it('renders with minimal props', () => {
    const { container } = render(
      <BaseToggle
        toggleGroupLabel="test-group-label"
        trackingLabel="test-tracking-label"
        type="square"
        id="test-square"
        value="test"
        handleToggle={() => {}}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('sets checked when selectedId equals id', () => {
    const { container } = render(
      <BaseToggle
        toggleGroupLabel="test-group-label"
        trackingLabel="test-tracking-label"
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
      <BaseToggle
        toggleGroupLabel="test-group-label"
        trackingLabel="test-tracking-label"
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
      <BaseToggle
        type="square"
        toggleGroupLabel="test-group-label"
        trackingLabel="test-tracking-label"
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
      <BaseToggle
        handleToggle={handleToggle}
        toggleGroupLabel="test-group-label"
        trackingLabel="test-tracking-label"
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

  describe('interaction tracking', () => {
    it('tracks clicks', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <BaseToggle
          id="test"
          toggleGroupLabel="test-group-label"
          trackingLabel="test-tracking-label"
          value="test"
          variant="ColorToggle"
          handleToggle={() => {}}
        />,
      );
      const input = container.querySelector('input');
      fireEvent.click(input);
      expect(trackEvent.mock.calls[0][0]).toStrictEqual({
        interaction: {
          ixn_action: 'Click',
          ixn_label: 'test-group-label',
          ixn_object: 'Toggle Buttons',
          ixn_type: 'ColorToggle',
          ixn_value: 'test-tracking-label',
        },
      });
    });
  });
});

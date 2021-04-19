import React from 'react';
import { useTracking } from 'react-tracking';
import { render, fireEvent } from '../../../../../testUtils';
import ColorToggle, {
  getDisplayBackgroundColor,
  getAnimationStyle,
  getDisplayLabel,
} from '../ColorToggle.component';
import 'jest-styled-components';

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
    expect(getAnimationStyle('test-a', 'test-b', 'yellow')).toEqual({
      backgroundColor: 'yellow',
    });
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
    const { getByText, container } = render(
      <ColorToggle backgroundColor="black" trackingLabel="test-tracking-label" id="test-a" value="ttt" />,
    );
    expect(container.innerHTML).toMatchSnapshot();
    expect(getByText('Black')).toBeInTheDocument();
    expect(container.querySelector('i')).toHaveStyle('background-color: black');
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('id', 'test-a');
    expect(input).toHaveAttribute('tabIndex', '0');
  });

  it('renders with #333333 fontColor', () => {
    const { getByText, container } = render(
      <ColorToggle
        trackingLabel="test-tracking-label"
        backgroundColor="black"
        id="test-a"
        fontColor="#333333"
        value="ttt"
      />,
    );
    expect(container.innerHTML).toMatchSnapshot();
    expect(getByText('Black')).toBeInTheDocument();
    expect(container.querySelector('i')).toHaveStyle('background-color: black');
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('id', 'test-a');
    expect(input).toHaveAttribute('tabIndex', '0');
    expect(container.querySelector('span')).toHaveStyle(
      'color: rgb(51, 51, 51',
    );
    expect();
  });

  it('renders with #FFFFFF fontColor', () => {
    const { getByText, container } = render(
      <ColorToggle
        trackingLabel="test-tracking-label"
        backgroundColor="black"
        id="test-a"
        fontColor="#FFFFFF"
        value="ttt"
      />,
    );
    expect(container.innerHTML).toMatchSnapshot();
    expect(getByText('Black')).toBeInTheDocument();
    expect(container.querySelector('i')).toHaveStyle('background-color: black');
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('id', 'test-a');
    expect(input).toHaveAttribute('tabIndex', '0');
    expect(container.querySelector('span')).toHaveStyle(
      'color: rgb(255, 255, 255',
    );
    expect();
  });

  it('calls handleToggle when change event fires', () => {
    const onToggleCb = jest.fn();
    const { container } = render(
      <ColorToggle
        backgroundColor="black"
        trackingLabel="test-tracking-label"
        id="test-a"
        value="ttt"
        fontColor="white"
        handleToggle={onToggleCb}
      />,
    );
    const element = container.querySelector('input');
    fireEvent.click(element);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual('ttt');
  });

  describe('interaction tracking', () => {
    it('tracks clicks', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <ColorToggle
          id="test"
          backgroundColor="black"
          trackingLabel="test-tracking-label"
          value="test"
          handleToggle={() => {}}
        />,
      );
      const input = container.querySelector('input');
      fireEvent.click(input);
      expect(trackEvent.mock.calls[0][0]).toStrictEqual({
        interaction: {
          ixn_action: 'Click',
          ixn_label: '',
          ixn_object: 'Toggle Buttons',
          ixn_type: 'ColorToggle',
          ixn_value: 'test-tracking-label',
        },
      });
    });
  });
});

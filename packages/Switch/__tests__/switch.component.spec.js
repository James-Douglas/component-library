import React from 'react';
import { useTracking } from 'react-tracking';
import { fireEvent, render } from '../../../testUtils';
import 'jest-styled-components';
import Switch from '../Switch.component';

describe('Switch', () => {
  it('renders with minimal props', () => {
    const { container } = render(<Switch trackingLabel="test" />);
    expect(container).toBeDefined();
  });

  it('renders with label', () => {
    const { container, getByText } = render(<Switch trackingLabel="test" label="This is a test" />);
    expect(container).toBeDefined();
    expect(getByText('This is a test')).toBeDefined();
  });

  it('renders with validation error', () => {
    const { getByText } = render(<Switch trackingLabel="test" validationMessage="This is required" />);
    expect(getByText('This is required')).toBeDefined();
  });

  it('renders checked', () => {
    const { container } = render(<Switch trackingLabel="test" checked />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('checked', '');
  });

  it('renders disabled', () => {
    const { container } = render(<Switch trackingLabel="test" disabled />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('disabled', '');
  });

  describe('interaction tracking', () => {
    it('tracks select and unselect actions', () => {
      const { trackEvent } = useTracking();
      const { container } = render(<Switch trackingLabel="test" />);
      const input = container.querySelector('input');
      fireEvent.click(input);
      fireEvent.click(input);
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Select',
          ixn_label: 'test',
          ixn_object: 'Switch',
          ixn_type: 'Switch',
          ixn_value: 'On',
        },
      });
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Unselect',
          ixn_label: 'test',
          ixn_object: 'Switch',
          ixn_type: 'Switch',
          ixn_value: 'Off',
        },
      });
    });
  });
});

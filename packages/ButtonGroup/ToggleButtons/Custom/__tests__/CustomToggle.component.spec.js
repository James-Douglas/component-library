import React from 'react';
import { useTracking } from 'react-tracking';
import { fireEvent, render } from '../../../../../testUtils';
import CustomToggle from '../CustomToggle.component';
import 'jest-styled-components';

describe('CustomToggle', () => {
  it('renders with minimal props', () => {
    const { container } = render(
      <CustomToggle id="test-a" trackingLabel="test" value="test-a" handleToggle={() => {}} />,
    );
    expect(container).toMatchSnapshot();
    expect(container.querySelector('input')).toHaveAttribute('id', 'test-a');
  });

  it('renders with content', () => {
    const { getByText } = render(
      <CustomToggle id="test-b" value="test-b" trackingLabel="test">
        <span id="test-content">this is a test</span>
      </CustomToggle>,
    );
    expect(getByText('this is a test')).toBeInTheDocument();
  });

  describe('interaction tracking', () => {
    it('tracks clicks', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <CustomToggle
          id="test"
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
          ixn_type: 'CustomToggle',
          ixn_value: 'test-tracking-label',
        },
      });
    });
  });
});

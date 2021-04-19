import React from 'react';
import { useTracking } from 'react-tracking';
import { fireEvent, render } from '../../../../../testUtils';
import TextToggle from '../TextToggle.component';

describe('TextToggle', () => {
  it('renders with props', () => {
    const { container } = render(
      <TextToggle id="test" trackingLabel="test" value="test" title="hello" />,
    );
    expect(container.innerHTML).toMatchSnapshot();
  });
  describe('interaction tracking', () => {
    it('tracks clicks', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <TextToggle id="test" trackingLabel="test" value="test" title="hello" />,
      );
      const input = container.querySelector('input');
      fireEvent.click(input);
      expect(trackEvent.mock.calls[0][0]).toStrictEqual({
        interaction: {
          ixn_action: 'Click',
          ixn_label: '',
          ixn_object: 'Toggle Buttons',
          ixn_type: 'TextToggle',
          ixn_value: 'test',
        },
      });
    });
  });
});

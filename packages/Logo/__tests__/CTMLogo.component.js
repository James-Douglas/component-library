import React from 'react';
import { useTracking } from 'react-tracking';
import { fireEvent, render } from '../../../testUtils';
import CTMLogo from '../CTMLogo.component';

describe('CTMLogo', () => {
  describe('interaction tracking', () => {
    it('tracks click events', () => {
      const { trackEvent } = useTracking();
      const { container } = render(<CTMLogo />);
      const link = container.querySelector('a');
      fireEvent.click(link);
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Click',
          ixn_label: '',
          ixn_object: 'Logo',
          ixn_type: 'CTM Logo',
          ixn_value: 'https://www.comparethemarket.com.au',
        },
      });
    });
  });
});

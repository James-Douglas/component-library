import React from 'react';
import { useTracking } from 'react-tracking';
import { render, fireEvent } from '../../../testUtils';
import Link from '../Link.component';

describe('Link', () => {
  it('calls click handler', () => {
    const clickHandler = jest.fn();
    const { getByText } = render(<Link trackingLabel="test link" handleClick={clickHandler}>test</Link>);
    const link = getByText('test');
    fireEvent.click(link);
    expect(clickHandler).toHaveBeenCalled();
  });
  describe('interaction tracking', () => {
    it('tracks click events', () => {
      const { trackEvent } = useTracking();
      const { getByText } = render(<Link trackingLabel="test link">test</Link>);
      const link = getByText('test');
      fireEvent.click(link);
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Click',
          ixn_label: 'test link',
          ixn_object: 'Link',
          ixn_type: 'Link',
          ixn_value: '',
        },
      });
    });
  });
});

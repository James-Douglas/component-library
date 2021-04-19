import React from 'react';
import { useTracking } from 'react-tracking';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { fireEvent, render } from '../../../../../testUtils';
import IconToggle, { getToggleContent } from '../IconToggle.component';

/* eslint-disable react/prop-types */
describe('getToggleContent()', () => {
  const IconToggleContentContainer = ({
    id, icon, title, description,
  }) => (
    <>{getToggleContent(id, icon, title, description)}</>
  );

  it('renders with props', () => {
    const { getByText, container } = render(
      <IconToggleContentContainer
        id="testing"
        trackingLabel="test-tracking-label"
        icon={faCheck}
        title="test"
        description="test description"
      />,
    );
    expect(getByText('test')).toBeInTheDocument();
    expect(getByText('test description')).toBeInTheDocument();
    expect(container.querySelector('.fa-check')).toBeInTheDocument();
  });
});

describe('IconToggle', () => {
  it('renders with props', () => {
    const { container } = render(
      <IconToggle
        id="test"
        trackingLabel="test-tracking-label"
        value="test"
        title="test icon toggle"
        icon={faCheck}
      />,
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  describe('interaction tracking', () => {
    it('tracks clicks', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <IconToggle
          id="test"
          icon={faCheck}
          trackingLabel="test-tracking-label"
          value="test"
        />,
      );
      const input = container.querySelector('input');
      fireEvent.click(input);
      expect(trackEvent.mock.calls[0][0]).toStrictEqual({
        interaction: {
          ixn_action: 'Click',
          ixn_label: '',
          ixn_object: 'Toggle Buttons',
          ixn_type: 'IconToggle',
          ixn_value: 'test-tracking-label',
        },
      });
    });
  });
});

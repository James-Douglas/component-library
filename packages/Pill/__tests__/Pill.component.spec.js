import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/pro-regular-svg-icons/faCreditCard';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { useTracking } from 'react-tracking';
import { render, fireEvent } from '../../../testUtils';
import Pill from '../Pill.component';

describe('Pill', () => {
  it('can render a basic pill component', () => {
    const { getByText, container } = render(<Pill trackingLabel="test" label="Example Pill" />);
    expect(getByText('Example Pill')).toBeInTheDocument();
    expect(container.querySelector('[data-icon="plus"]')).toBeInTheDocument();
  });

  it('can render a pill with an icon', () => {
    const { container } = render(
      <Pill
        trackingLabel="test"
        label="Example Pill"
        icon={<FontAwesomeIcon icon={faCreditCard} className="test-icon" />}
      />,
    );
    expect(container.querySelector('.test-icon')).toBeInTheDocument();
  });

  it('can render selected', () => {
    const { container } = render(
      <Pill
        trackingLabel="test"
        label="Example Pill"
        icon={<FontAwesomeIcon icon={faCreditCard} className="test-icon" />}
        selected
      />,
    );
    expect(container.querySelector('.MuiButtonBase-root.MuiChip-root')).toHaveStyle(`background: ${ctmTheme.colors.primary50} !important;`);
  });

  it('can render a pill which responds to a click event', () => {
    const mockClickCallback = jest.fn();
    const { container } = render(
      <Pill
        trackingLabel="test"
        label="Example Pill"
        handleClick={mockClickCallback}
        className="test-pill"
      />,
    );
    const clickable = container.querySelector('.test-pill');
    fireEvent.click(clickable);
    expect(mockClickCallback.mock.calls.length).toBe(1);
  });

  describe('interaction tracking', () => {
    it('tracks select and unselect actions', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <Pill
          label="Example Pill"
          trackingLabel="test"
          className="test-pill"
        />,
      );
      const clickable = container.querySelector('.test-pill');
      fireEvent.click(clickable);
      fireEvent.click(clickable);
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Select',
          ixn_label: 'test',
          ixn_object: 'Pill',
          ixn_type: 'Pill',
          ixn_value: '',
        },
      });
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Unselect',
          ixn_label: 'test',
          ixn_object: 'Pill',
          ixn_type: 'Pill',
          ixn_value: '',
        },
      });
    });
  });
});

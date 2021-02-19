import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/pro-regular-svg-icons/faCreditCard';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render, fireEvent } from '../../../testUtils';
import Pill from '../Pill.component';

describe('Pill', () => {
  it('can render a basic pill component', () => {
    const { getByText, container } = render(<Pill label="Example Pill" />);
    expect(getByText('Example Pill')).toBeInTheDocument();
    expect(container.querySelector('[data-icon="plus"]')).toBeInTheDocument();
  });

  it('can render a pill with an icon', () => {
    const { container } = render(
      <Pill
        label="Example Pill"
        icon={<FontAwesomeIcon icon={faCreditCard} className="test-icon" />}
      />,
    );
    expect(container.querySelector('.test-icon')).toBeInTheDocument();
  });

  it('can render selected', () => {
    const { container } = render(
      <Pill
        label="Example Pill"
        icon={<FontAwesomeIcon icon={faCreditCard} className="test-icon" />}
        selected
      />,
    );
    expect(container.querySelector('.MuiButtonBase-root.MuiChip-root')).toHaveStyle(`background: ${ctmTheme.colors.primary50}`);
  });

  it('can render a pill which responds to a click event', () => {
    const mockClickCallback = jest.fn();
    const { container } = render(
      <Pill
        label="Example Pill"
        handleClick={mockClickCallback}
        className="test-pill"
      />,
    );
    const clickable = container.querySelector('.test-pill');
    fireEvent.click(clickable);
    expect(mockClickCallback.mock.calls.length).toBe(1);
  });
});

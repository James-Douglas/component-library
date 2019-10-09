import React from 'react';
import { render } from '@testing-library/react';
import ToggleLabel from '../ToggleLabel';

describe('ToggleLabel', () => {
  it('renders with minimal props', () => {
    const { container } = render(<ToggleLabel dirty={false} autofill={false} id="test" />);
    expect(container).toMatchSnapshot();
  });
  it('renders with autofill class when autofill & not dirty', () => {
    const { container } = render(<ToggleLabel dirty={false} autofill id="test" />);
    const label = container.querySelector('.toggle-label');
    expect(label).toHaveClass('autofill');
  });
  it('renders without autofill class when autofill and dirty', () => {
    const { container } = render(<ToggleLabel dirty autofill id="test" />);
    const label = container.querySelector('.toggle-label');
    expect(label).not.toHaveClass('autofill');
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import Icon from '../Icon.component';

describe('Icon', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<Icon name="info" />);
    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector('svg')).not.toBeNull();
    expect(container.querySelector('.icon')).not.toBeNull();
  });

  it('renders a ctm icon', () => {
    const { container } = render(<Icon name="contact" />);

    expect(container.querySelector('svg')).not.toBeNull();
    expect(container.querySelector('.icon')).not.toBeNull();
  });

  it('changes the size of the icon (ctm)', () => {
    const { container } = render(<Icon name="contact" size={5} />);

    expect(container.querySelector('svg')).not.toBeNull();
    expect(container.querySelector('.icon')).not.toBeNull();
    expect(container.querySelector('.icon')).toHaveStyle('width: 5rem');
  });

  it('renders a font awesome icon', () => {
    const { container } = render(<Icon name="check" />);

    expect(container.querySelector('svg')).not.toBeNull();
    expect(container.querySelector('[data-icon="check"]')).not.toBeNull();
  });

  it('changes the size of the icon (font awesome)', () => {
    const { container } = render(<Icon name="check" size={5} />);

    expect(container.querySelector('svg')).not.toBeNull();
    expect(container.querySelector('[data-icon="check"]')).not.toBeNull();
    expect(container.querySelector('[data-icon="check"]')).toHaveStyle('font-size: 5rem');
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button.component';

describe('Button', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<Button id="test-id" />);
    expect(container).toMatchSnapshot();
  });

  it('renders with props', () => {
    const { container, getByText } = render(<Button id="test-id" type="primary" onDark size="md" content="test content" disabled icon="check" iconAlignRight />);

    const btn = container.querySelector('#test-id');
    const icon = btn.querySelector('.btn-icon');

    expect(getByText('test content')).toBeDefined();
    expect(btn.classList).toContain('primary');
    expect(btn.classList).toContain('onDark');
    expect(btn.classList).toContain('md');
    expect(btn.classList).not.toContain('secondary');
    expect(icon).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('renders a primary button when the prop is supplied', () => {
    const { container } = render(<Button id="test-id" type="primary" content="test thing" />);

    const btn = container.querySelector('#test-id');

    expect(btn.classList).toContain('primary');
  });

  it('renders a secondary button in mode = onDark, when the props are supplied', () => {
    const { container } = render(<Button id="test-id" type="secondary" onDark content="test thing" />);

    const btn = container.querySelector('#test-id');

    expect(btn.classList).toContain('secondary');
    expect(btn.classList).not.toContain('primary');
    expect(btn.classList).toContain('onDark');
  });

  it('renders a text button with an icon when specified', () => {
    const { container } = render(<Button id="test-id" type="text" icon="check" content="test thing" />);

    const btn = container.querySelector('#test-id');
    const icon = container.querySelector('.btn-icon').classList[0];

    expect(btn.classList).toContain('text');
    expect(btn.classList).not.toContain('onDark');
    expect(btn.classList).not.toContain('primary');
    expect(btn.classList).not.toContain('secondary');
    expect(icon).toBe('btn-icon');
  });

  it('renders a link button (a href) when specified', () => {
    const { container } = render(<Button id="test-id" type="link" href="#" content="test thing" />);

    const btn = container.querySelector('#test-id');

    expect(btn.classList).toContain('link');
    expect(btn.getAttribute('href')).toBe('#');
    expect(btn.classList).not.toContain('onDark');
  });

  it('renders a footer link (a href) when specified', () => {
    const { container } = render(<Button id="test-id" type="footer-link" href="#" content="test thing" />);

    const btn = container.querySelector('#test-id');

    expect(btn.classList).toContain('footer-link');
    expect(btn.classList).not.toContain('secondary');
    expect(btn.classList).not.toContain('link');
    expect(btn.classList).not.toContain('onDark');
    expect(btn.getAttribute('href')).toBe('#');
  });
});

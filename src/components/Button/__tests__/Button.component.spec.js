import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button.component';

/* id, btnType, btnMode, btnSize, content, disabled, icon, size, iconAlignRight, href, target, */
describe('Button', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<Button id="test-id" />);
    expect(container).toMatchSnapshot();
  });

  it('renders with props', () => {
    const { container, getByText } = render(<Button id="test-id" btnType="primary" btnMode="onDark" btnSize="md" content="test content" disabled icon="check" iconAlignRight />);

    const btn = container.querySelector('#test-id');
    const icon = btn.querySelector('.btn-icon');
    const btnTypeAttr = btn.getAttribute('btntype');
    const btnModeAttr = btn.getAttribute('btnmode');

    expect(getByText('test content')).toBeDefined();
    expect(btnTypeAttr).toBe('primary');
    expect(btnModeAttr).toBe('onDark');
    expect(btn.classList[1]).toBe('md');
    expect(icon).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('renders a primary button when the prop is supplied', () => {
    const { container } = render(<Button id="test-id" btnType="primary" content="test thing" />);

    const btn = container.querySelector('#test-id');
    const btnTypeAttr = btn.getAttribute('btntype');

    expect(btnTypeAttr).toBe('primary');
  });

  it('renders a secondary button in mode = onDark, when the props are supplied', () => {
    const { container } = render(<Button id="test-id" btnType="secondary" btnMode="onDark" content="test thing" />);

    const btn = container.querySelector('#test-id');
    const btnTypeAttr = btn.getAttribute('btntype');
    const btnModeAttr = btn.getAttribute('btnmode');

    expect(btnTypeAttr).toBe('secondary');
    expect(btnModeAttr).toBe('onDark');
  });

  it('renders a text button with an icon when specified', () => {
    const { container } = render(<Button id="test-id" btnType="text" icon="check" content="test thing" />);

    const btn = container.querySelector('#test-id');
    const btnTypeAttr = btn.getAttribute('btntype');
    const icon = container.querySelector('.btn-icon').classList[0];

    expect(btnTypeAttr).toBe('text');
    expect(btn.getAttribute('btnMode')).toBe('');
    expect(icon).toBe('btn-icon');
  });

  it('renders a link button (a href) when specified', () => {
    const { container } = render(<Button id="test-id" btnType="link" href="#" content="test thing" />);

    const btn = container.querySelector('#test-id');
    const btnTypeAttr = btn.getAttribute('btntype');

    expect(btnTypeAttr).toBe('link');
    expect(btn.getAttribute('href')).toBe('#');
    expect(btn.getAttribute('btnMode')).toBe('');
  });

  it('renders a footer link (a href) when specified', () => {
    const { container } = render(<Button id="test-id" btnType="footer-link" href="#" content="test thing" />);

    const btn = container.querySelector('#test-id');
    const btnTypeAttr = btn.getAttribute('btntype');

    expect(btnTypeAttr).toBe('footer-link');
    expect(btn.getAttribute('href')).toBe('#');
    expect(btn.getAttribute('btnMode')).toBe('');
  });
});

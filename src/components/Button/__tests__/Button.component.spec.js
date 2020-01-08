import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
import Button from '../Button.component';

describe('Button', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<Button id="test-id" />);
    expect(container).toMatchSnapshot();
  });

  it('renders with props', () => {
    const { container, getByText } = render(<Button id="test-id" variant="primary" darkMode size="md" content="test content" icon={faInfoCircle} iconAlignRight />);
    const btn = container.querySelector('#test-id');
    expect(getByText('test content')).toBeDefined();
    expect(btn).toHaveStyle('background: #36A93F'); // primaryAA from theme.js
    expect(btn).toHaveStyle('flex-direction: row-reverse');
    expect(btn).toHaveStyleRule('box-shadow', '0 0.5rem 0.5rem 0 rgba(0,0,0,.1)');
    expect(container).toMatchSnapshot();
  });

  it('renders a primary button when the prop is supplied', () => {
    const { container } = render(<Button id="test-id" variant="primary" content="test thing" />);
    const btn = container.querySelector('#test-id');
    expect(btn).not.toHaveStyle('flex-direction: row-reverse');
    expect(btn).toHaveStyleRule('background', '#36A93F'); // primaryAA from theme.js
  });

  it('renders a secondary button when the prop is supplied', () => {
    const { container } = render(<Button id="test-id" variant="secondary" content="test thing" />);
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyle('background: #FFFFFF');
    expect(btn).toHaveStyle('border: 1px solid #001442'); // secondaryDarker from theme.js
  });

  it('renders a secondary button in mode = darkMode, when the props are supplied', () => {
    const { container } = render(<Button id="test-id" variant="secondary" darkMode content="test thing" />);
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyle('border: 1px solid transparent');
    expect(btn).toHaveStyleRule('box-shadow', '0 0.5rem 0.5rem 0 rgba(0,0,0,.1)');
  });

  it('renders a tertiary button when the prop is supplied', () => {
    const { container } = render(<Button id="test-id" variant="tertiary" content="test thing" />);
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('box-shadow', '0 0.5rem 0.5rem 0 rgba(0,0,0,.1)');
    expect(btn).toHaveStyle('border-radius: 0');
  });

  it('renders a tertiary button in darkmode when the props are supplied', () => {
    const { container } = render(<Button id="test-id" variant="tertiary" darkMode content="test thing" />);
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('box-shadow', '0 0.5rem 0.5rem 0 rgba(0,0,0,.1)');
    expect(btn).toHaveStyle('border: 1px solid #001443'); // blueDark from theme.js
  });

  it('renders a text button with an icon when specified', () => {
    const { container } = render(<Button id="test-id" variant="text" icon={faInfoCircle} content="test thing" />);
    const icon = container.querySelector('svg');
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyle('color: #000000');
    expect(icon).toBeTruthy();
  });

  it('renders a link button (a href) when specified', () => {
    const { container } = render(<Button id="test-id" variant="link" href="#" content="test thing" />);
    const btn = container.querySelector('#test-id');
    expect(btn.getAttribute('href')).toBe('#');
    expect(btn).toHaveStyle('color: #000000');
  });

  it('renders a link button (a href) in darkMode when specified', () => {
    const { container } = render(<Button id="test-id" variant="link" href="#" darkMode content="test thing" />);
    const btn = container.querySelector('#test-id');
    expect(btn.getAttribute('href')).toBe('#');
    expect(btn).toHaveStyle('color: #FFFFFF');
  });

  it('renders a footer link (a href) when specified', () => {
    const { container } = render(<Button id="test-id" variant="footer-link" href="#" content="test thing" />);
    const btn = container.querySelector('#test-id');
    expect(btn.getAttribute('href')).toBe('#');
    expect(btn).toHaveStyle('color: #000000');
  });

  it('renders a footer link (a href) in darkMode when specified', () => {
    const { container } = render(<Button id="test-id" variant="footer-link" darkMode href="#" content="test thing" />);
    const btn = container.querySelector('#test-id');
    expect(btn.getAttribute('href')).toBe('#');
    expect(btn).toHaveStyle('color: #FFFFFF');
  });
  it('renders a disabled button when the prop is supplied', () => {
    const { container } = render(<Button id="test-id" variant="primary" content="test thing" variant="footer-link" disabled />);
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('cursor', 'not-allowed');
  });
  it('renders button aligned right', () => {
    const { container } = render(<Button id="test-id" content="test thing" variant="footer-link" iconAlignRight icon={faInfoCircle} />);
    const btn = container.querySelector('#test-id');
    const wrapper = container.querySelector('a');
    expect(btn).toHaveStyleRule('flex-direction', 'row-reverse');
    expect(wrapper).toBeInTheDocument();
  });
  it('renders text button', () => {
    const { container } = render(<Button id="test-id" content="test thing" variant="text" darkMode iconAlignRight icon={faInfoCircle} />);
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('color', '#FFFFFF');
  });
  it('renders a tertiary button when the prop is disabled', () => {
    const { container } = render(<Button id="test-id" variant="tertiary" content="test thing" disabled />);
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('cursor', 'not-allowed');
  });
  it('renders a tertiary button when the prop is sm size', () => {
    const { container } = render(<Button id="test-id" variant="tertiary" content="test thing" size="sm" />);
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('max-width', '12rem');
  });
  it('renders a tertiary button when the prop is lg size', () => {
    const { container } = render(<Button id="test-id" variant="tertiary" content="test thing" size="lg" />);
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('min-width', '16rem');
  });
});

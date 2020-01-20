import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
import Button from '../Button.component';
import getTheme from '../../../utils/getTheme';

const theme = getTheme();

describe('Button', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<Button id="test-id" />);
    expect(container).toMatchSnapshot();
  });

  it('renders with props', () => {
    const { container, getByText } = render(
      <Button id="test-id" variant="primary" darkMode size="md" icon={faInfoCircle} iconAlignRight>
        test content
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(getByText('test content')).toBeDefined();
    expect(btn).toHaveStyleRule('background', theme.button.primary.background);
    expect(btn).toHaveStyleRule('flex-direction', 'row-reverse');
    expect(btn).toHaveStyleRule('box-shadow', theme.button.shadows.default);
    expect(container).toMatchSnapshot();
  });

  it('renders a primary button when the prop is supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="primary">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('BUTTON');
    expect(btn).not.toHaveStyle('flex-direction: row-reverse');
    expect(btn).toHaveStyleRule('background', theme.button.primary.background);
  });

  it('renders a primary button as a link when the props are supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="primary" href="#">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyleRule('background', theme.button.primary.background);
  });

  it('renders a secondary button when the prop is supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="secondary">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('BUTTON');
    expect(btn).toHaveStyleRule('background', theme.button.secondary.background);
    expect(btn).toHaveStyleRule('border', theme.button.secondary.border);
  });

  it('renders a secondary button as a link when the props are supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="secondary" href="#">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('background', theme.button.secondary.background);
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyleRule('border', theme.button.secondary.border);
  });

  it('renders a secondary button in mode = darkMode, when the props are supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="secondary" darkMode>
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('border', theme.button.secondary.borderDarkMode);
    expect(btn).toHaveStyleRule('box-shadow', theme.boxShadow.sm);
  });

  it('renders a secondary button in mode = darkMode as a link, when the props are supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="secondary" darkMode href="#">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('border', theme.button.secondary.borderDarkMode);
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyleRule('box-shadow', theme.boxShadow.sm);
  });

  it('renders a tertiary button when the prop is supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="tertiary">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('BUTTON');
    expect(btn).toHaveStyleRule('box-shadow', theme.boxShadow.sm);
    expect(btn).toHaveStyleRule('border-radius', theme.button.tertiary.borderRadius);
  });

  it('renders a tertiary button as a link when the props are supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="tertiary" href="#">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyleRule('box-shadow', theme.boxShadow.sm);
    expect(btn).toHaveStyleRule('border-radius', theme.button.tertiary.borderRadius);
  });

  it('renders a tertiary button in darkmode when the props are supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="tertiary" darkMode>
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('BUTTON');
    expect(btn).toHaveStyleRule('box-shadow', theme.boxShadow.sm);
    expect(btn).toHaveStyleRule('border', theme.button.tertiary.borderDarkMode);
  });

  it('renders a text button with an icon when specified', () => {
    const { container } = render(
      <Button id="test-id" variant="text" icon={faInfoCircle} href="#">
        test thing
      </Button>,
    );
    const icon = container.querySelector('svg');
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('A');
    expect(icon).toBeTruthy();
    expect(btn).toHaveStyleRule(`color: ${theme.colors.black}`);
  });

  it('renders a text button as a link with an icon when specified', () => {
    const { container } = render(
      <Button id="test-id" variant="text" icon={faInfoCircle}>
        test thing
      </Button>,
    );
    const icon = container.querySelector('svg');
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('BUTTON');
    expect(icon).toBeTruthy();
    expect(btn).toHaveStyleRule(`color: ${theme.colors.black}`);
  });

  it('renders a link button (a href) when specified', () => {
    const { container } = render(
      <Button id="test-id" variant="link" href="#">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.getAttribute('href')).toBe('#');
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyleRule(`color: ${theme.colors.black}`);
  });

  it('renders a link button (a href) in darkMode when specified', () => {
    const { container } = render(
      <Button id="test-id" variant="link" href="#" darkMode>
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.getAttribute('href')).toBe('#');
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyle(`color: ${theme.colors.white}`);
  });

  it('renders a footer link (a href) when specified', () => {
    const { container } = render(
      <Button id="test-id" variant="footer-link" href="#">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.getAttribute('href')).toBe('#');
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyleRule(`color: ${theme.colors.black}`);
  });

  it('renders a footer link (a href) in darkMode when specified', () => {
    const { container } = render(
      <Button id="test-id" variant="footer-link" darkMode href="#">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.getAttribute('href')).toBe('#');
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyleRule(`color: ${theme.colors.black}`);
  });

  it('renders a disabled button when the prop is supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="primary" disabled>
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('cursor', 'not-allowed');
  });

  it('renders button aligned right', () => {
    const { container } = render(
      <Button id="test-id" variant="footer-link" href="#" iconAlignRight icon={faInfoCircle}>
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    const wrapper = container.querySelector('a');
    expect(btn).toHaveStyleRule('flex-direction', 'row-reverse');
    expect(wrapper).toBeInTheDocument();
  });

  it('renders text button', () => {
    const { container } = render(
      <Button id="test-id" variant="text" darkMode iconAlignRight icon={faInfoCircle}>
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule(`color: ${theme.colors.black}`);
  });

  it('renders a tertiary button when the prop is disabled', () => {
    const { container } = render(
      <Button id="test-id" variant="tertiary" disabled>
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('cursor', 'not-allowed');
  });

  it('renders a tertiary button when the prop is sm size', () => {
    const { container } = render(
      <Button id="test-id" variant="tertiary" size="sm">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('min-height', '3.6rem');
  });

  it('renders a tertiary button when the prop is lg size', () => {
    const { container } = render(
      <Button id="test-id" variant="tertiary" size="lg">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('min-width', '20rem');
  });
});

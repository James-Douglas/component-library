import React from 'react';
import 'jest-styled-components';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
import { render } from '@testing-library/react';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import Button from '../Button.component';

describe('Button', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<Button id="test-id" />);
    expect(container).toMatchSnapshot();
  });

  it('renders with props', () => {
    const { container, getByText } = render(
      <Button id="test-id" variant="hero" icon={faInfoCircle} iconAlign="right">
        test content
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(getByText('test content')).toBeDefined();
    expect(btn).toHaveStyleRule('background', ctmTheme.button.hero.background);
    expect(btn).toHaveStyleRule('flex-direction', 'row-reverse');
    expect(btn).toHaveStyleRule('box-shadow', ctmTheme.button.shadows.default);
    expect(container).toMatchSnapshot();
  });

  it('renders a hero button', () => {
    const { container } = render(
      <Button id="test-id" variant="hero">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('BUTTON');
    expect(btn).not.toHaveStyle('flex-direction: row-reverse');
    expect(btn).toHaveStyleRule('background', ctmTheme.button.hero.background);
  });

  it('renders an inverted hero button', () => {
    const { container } = render(
      <Button id="test-id" variant="hero" inverted>
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('BUTTON');
    expect(btn).not.toHaveStyle('flex-direction: row-reverse');
    expect(btn).toHaveStyleRule('background', ctmTheme.button.hero.backgroundInverted);
  });

  it('renders a hero button as a link when the props are supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="hero" href="#">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyleRule('background', ctmTheme.button.hero.background);
  });

  it('renders a primary button', () => {
    const { container } = render(
      <Button id="test-id" variant="primary">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('BUTTON');
    expect(btn).toHaveStyleRule('background', ctmTheme.button.primary.background);
    expect(btn).toHaveStyleRule('color', ctmTheme.button.primary.color);
  });

  it('renders an inverted primary', () => {
    const { container } = render(
      <Button id="test-id" variant="primary" inverted>
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('BUTTON');
    expect(btn).toHaveStyleRule('background', ctmTheme.button.primary.backgroundInverted);
    expect(btn).toHaveStyleRule('color', ctmTheme.button.primary.colorInverted);
  });

  it('renders a secondary button', () => {
    const { container } = render(
      <Button id="test-id" variant="secondary">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('BUTTON');
    expect(btn).toHaveStyleRule('background', ctmTheme.button.secondary.background);
    expect(btn).toHaveStyleRule('border', ctmTheme.button.secondary.border);
  });

  it('renders a secondary button as a link when the props are supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="secondary" href="#">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('background', ctmTheme.button.secondary.background);
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyleRule('border', ctmTheme.button.secondary.border);
  });

  it('renders a secondary button in mode = inverted, when the props are supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="secondary" inverted>
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('border', ctmTheme.button.secondary.borderInverted);
    expect(btn).toHaveStyleRule('box-shadow', ctmTheme.button.shadows.default);
  });

  it('renders a secondary button in mode = inverted as a link, when the props are supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="secondary" inverted href="#">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('border', ctmTheme.button.secondary.borderInverted);
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyleRule('box-shadow', ctmTheme.button.shadows.default);
  });

  it('renders a tertiary button', () => {
    const { container } = render(
      <Button id="test-id" variant="tertiary">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('BUTTON');
    expect(btn).toHaveStyleRule('box-shadow', ctmTheme.button.shadows.disabled);
  });

  it('renders a tertiary button as a link when the props are supplied', () => {
    const { container } = render(
      <Button id="test-id" variant="tertiary" href="#">
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn.nodeName).toBe('A');
    expect(btn).toHaveStyleRule('box-shadow', ctmTheme.button.shadows.disabled);
  });

  it('renders a disabled button', () => {
    const { container } = render(
      <Button id="test-id" variant="hero" disabled>
        test thing
      </Button>,
    );
    const btn = container.querySelector('#test-id');
    expect(btn).toHaveStyleRule('cursor', 'not-allowed');
  });
});

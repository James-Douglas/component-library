import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent } from '../../../testUtils';
import 'jest-styled-components';
import Tooltip, { getContent } from '../Tooltip.component';

describe('getContent()', () => {
  // eslint-disable-next-line react/prop-types
  const ContentContainer = ({ title, body }) => (
    <>
      {getContent(title, body)}
    </>
  );

  it('returns correct content for title only', () => {
    const { container } = render(<ContentContainer title="test title" />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('returns correct content for body only', () => {
    const { container } = render(<ContentContainer body="test body" />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('returns correct content for title and body', () => {
    const { container } = render(<ContentContainer title="test title" body="test body" />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe('Tooltip', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  beforeAll(() => {
    global.document.createRange = () => ({
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
      },
    });
  });

  it('renders tooltip click', () => {
    const { container } = render(<Tooltip body="test tooltip content" />);
    const tooltipTriggerElement = container.querySelector('[role="tooltip"]');
    fireEvent.click(tooltipTriggerElement);
    const tooltip = document.querySelector('div[data-tippy-root]');
    expect(tooltip).toBeInTheDocument();
  });

  it('renders tooltip hover', () => {
    const { container, getByText } = render(<Tooltip body="test tooltip content" />);
    const tooltipTriggerElement = container.querySelector('[role="tooltip"]');
    fireEvent.mouseOver(tooltipTriggerElement);
    const tooltip = document.querySelector('div[data-tippy-root]');
    expect(tooltip).toHaveStyle('visibility: visible');
    expect(getByText('test tooltip content')).toBeInTheDocument();
    fireEvent.mouseLeave(tooltipTriggerElement);
    expect(tooltip).toHaveStyle('visibility: hidden');
  });

  it('renders tooltip correctly', () => {
    const { container, getByText } = render(<Tooltip body="test tooltip content" />);
    const tooltipTriggerElement = container.querySelector('svg');
    fireEvent.click(tooltipTriggerElement);
    expect(getByText('test tooltip content')).toBeInTheDocument();
  });

  it('dismisses tooltip on escape key', async () => {
    render(<Tooltip body="test tooltip content" />);
    const tooltipTriggerElement = document.body.querySelector('[role="tooltip"]');
    fireEvent.click(tooltipTriggerElement);
    const tooltipElement = document.querySelector('div[data-tippy-root]');
    expect(tooltipElement).toBeInTheDocument();

    fireEvent.keyDown(tooltipTriggerElement, { key: 'Escape', code: 27 });
    expect(document.body.querySelector('div[data-tippy-root]')).not.toBeVisible();
  });

  it('tooltip on click body', async () => {
    render(<Tooltip body="test tooltip content" />);
    const tooltipTriggerElement = document.body.querySelector('[role="tooltip"]');
    fireEvent.click(tooltipTriggerElement);
    const tooltipElement = document.querySelector('div[data-tippy-root]');
    act(() => {
      document.body.click();
    });
    expect(tooltipElement).not.toBeVisible();
  });

  it('dismisses tooltip on click outside', () => {
    render(<Tooltip body="test tooltip content" />);

    const tooltipTriggerElement = document.body.querySelector('[role="tooltip"]');
    fireEvent.click(tooltipTriggerElement);

    const tooltipElement = document.querySelector('div[data-tippy-root]');
    expect(tooltipElement).toBeInTheDocument();

    fireEvent.click(document.body);
    expect(tooltipElement).not.toBeVisible();
  });

  it('dismisses tooltip on blur', () => {
    render(<Tooltip body="test tooltip content" />);

    const tooltipTriggerElement = document.body.querySelector('[role="tooltip"]');
    fireEvent.click(tooltipTriggerElement);

    const tooltipElement = document.querySelector('div[data-tippy-root]');
    expect(tooltipElement).toBeInTheDocument();

    fireEvent.blur(tooltipTriggerElement);
    expect(tooltipElement).not.toBeVisible();
  });
});

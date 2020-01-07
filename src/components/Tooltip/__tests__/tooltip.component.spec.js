import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

  it('renders with minimal props', () => {
    const { queryByText, container } = render(<Tooltip body="test tooltip content" />);
    expect(container.innerHTML).toMatchSnapshot();
    expect(queryByText('test tooltip content')).not.toBeInTheDocument();
  });

  it('renders tooltip correctly', () => {
    const { container, getByText } = render(<Tooltip body="test tooltip content" />);
    const tooltipTriggerElement = container.querySelector('svg');
    fireEvent.click(tooltipTriggerElement);
    expect(getByText('test tooltip content')).toBeInTheDocument();
  });

  it('renders with justify-end class when justifyEnd is true', () => {
    const { container } = render(<Tooltip body="test tooltip content" justifyEnd />);
    const tooltipWrapper = container.firstChild;
    expect(tooltipWrapper).toHaveStyleRule('justify-content', 'flex-end');
  });

  it('dismisses tooltip on escape key', async () => {
    render(<Tooltip body="test tooltip content" />);
    const tooltipTriggerElement = document.body.querySelector('[role="tooltip"]');
    fireEvent.click(tooltipTriggerElement);
    const tooltipElement = document.body.querySelector('.tippy-popper');
    expect(tooltipElement).toBeInTheDocument();

    fireEvent.keyDown(tooltipTriggerElement, { key: 'Escape', code: 27 });
    expect(document.body.querySelector('.tippy-popper')).not.toBeVisible();
  });

  it('dismisses tooltip on click outside', () => {
    render(<Tooltip body="test tooltip content" />);

    const tooltipTriggerElement = document.body.querySelector('[role="tooltip"]');
    fireEvent.click(tooltipTriggerElement);

    const tooltipElement = document.body.querySelector('.tippy-popper');
    expect(tooltipElement).toBeInTheDocument();

    fireEvent.click(document.body);
    expect(tooltipElement).not.toBeVisible();
  });

  it('dismisses tooltip on blur', () => {
    render(<Tooltip body="test tooltip content" />);

    const tooltipTriggerElement = document.body.querySelector('[role="tooltip"]');
    fireEvent.click(tooltipTriggerElement);

    const tooltipElement = document.body.querySelector('.tippy-popper');
    expect(tooltipElement).toBeInTheDocument();

    fireEvent.blur(tooltipTriggerElement);
    expect(tooltipElement).not.toBeVisible();
  });
});

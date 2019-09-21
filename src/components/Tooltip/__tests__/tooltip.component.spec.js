import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tooltip from '../Tooltip.component';

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
    const tooltipTriggerElement = container.querySelector('.tooltip-icon');
    fireEvent.click(tooltipTriggerElement);
    expect(getByText('test tooltip content')).toBeInTheDocument();
  });

  it('dismisses tooltip on escape key', async () => {
    render(<Tooltip body="test tooltip content" />);
    const tooltipTriggerElement = document.body.querySelector('.tooltip-icon');
    fireEvent.click(tooltipTriggerElement);

    const tooltipElement = document.body.querySelector('.tippy-popper');
    expect(tooltipElement).toBeInTheDocument();

    fireEvent.keyDown(tooltipTriggerElement, { key: 'Escape', code: 27 });
    expect(document.body.querySelector('.tippy-popper')).not.toBeVisible();
  });

  it('dismisses tooltip on click outside', () => {
    const { container } = render(<Tooltip body="test tooltip content" />);

    const tooltipTriggerElement = container.querySelector('.tooltip-icon');
    fireEvent.click(tooltipTriggerElement);

    const tooltipElement = document.body.querySelector('.tippy-popper');
    expect(tooltipElement).toBeInTheDocument();

    fireEvent.click(document.body);
    expect(tooltipElement).not.toBeVisible();
  });

  it('dismisses tooltip on blur', () => {
    const { container } = render(<Tooltip body="test tooltip content" />);

    const tooltipTriggerElement = container.querySelector('.tooltip-icon');
    fireEvent.click(tooltipTriggerElement);

    const tooltipElement = document.body.querySelector('.tippy-popper');
    expect(tooltipElement).toBeInTheDocument();

    fireEvent.blur(tooltipTriggerElement);
    expect(tooltipElement).not.toBeVisible();
  });

  it('has correct placement when in a small container', () => {
    const containingElement = document.createElement('div');
    Object.defineProperty(containingElement, 'offsetWidth', { value: 200, writable: false });
    containingElement.id = 'test-container';

    document.body.appendChild(containingElement);

    const { container } = render(<Tooltip body="test tooltip content" boundingElementSelector="#test-container" />);

    const tooltipTriggerElement = container.querySelector('.tooltip-icon');
    fireEvent.click(tooltipTriggerElement);

    const tooltipElement = document.body.querySelector('.tippy-popper');
    // eslint-disable-next-line no-underscore-dangle
    expect(tooltipElement._tippy.props.placement).toEqual('bottom-end');
  });
});

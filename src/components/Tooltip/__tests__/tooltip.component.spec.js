import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tooltip, { calculateTooltipWidth, getTippyPlacement, getContent } from '../Tooltip.component';

describe('calculateTooltipWidth()', () => {
  const testTooltipElement = (right) => ({
    getBoundingClientRect: () => ({ right }),
  });

  const testBoundingElement = (left, right, offsetWidth) => ({
    getBoundingClientRect: () => ({ right, left }),
    offsetWidth,
  });

  it('returns null when params null', () => {
    expect(calculateTooltipWidth()).toBeNull();
  });

  it('returns bounding elements width for misaligned tooltips', () => {
    const expected = 200;
    const tooltipElement = testTooltipElement(100);
    const boundingElement = testBoundingElement(85, 260, expected);
    expect(calculateTooltipWidth(tooltipElement, boundingElement)).toEqual(expected);
  });

  it('returns 150 when containerWidth is below minimum', () => {
    const tooltipElement = testTooltipElement(200);
    const boundingElement = testBoundingElement(120, 130, 100);
    expect(calculateTooltipWidth(tooltipElement, boundingElement)).toEqual(150);
  });

  it('returns 500 when containerWidth exceeds maximum', () => {
    const tooltipElement = testTooltipElement(1240);
    const boundingElement = testBoundingElement(0, 1500, 1500);
    expect(calculateTooltipWidth(tooltipElement, boundingElement)).toEqual(500);
  });

  it('returns containerWidth when within bounds and properly aligned', () => {
    const tooltipElement = testTooltipElement(340);
    const boundingElement = testBoundingElement(40, 370, 330);
    expect(calculateTooltipWidth(tooltipElement, boundingElement)).toEqual(270);
  });
});

describe('getTippyPlacement()', () => {
  it('returns left when desktop true and containerWidth > 499', () => {
    expect(getTippyPlacement(true, 500)).toEqual('left');
  });

  it('returns bottom-end when desktop false', () => {
    expect(getTippyPlacement(false, 500)).toEqual('bottom-end');
  });

  it('returns bottom-end when containerWidth under 500', () => {
    expect(getTippyPlacement(true, 400)).toEqual('bottom-end');
  });
});

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
    const tooltipTriggerElement = container.querySelector('.tooltip-icon');
    fireEvent.click(tooltipTriggerElement);
    expect(getByText('test tooltip content')).toBeInTheDocument();
  });

  it('renders with justify-end class when justifyEnd is true', () => {
    const { container } = render(<Tooltip body="test tooltip content" justifyEnd />);
    expect(container.querySelector('.tooltip-wrapper')).toHaveClass('justify-end');
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

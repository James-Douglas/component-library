import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/pro-regular-svg-icons/faCreditCard';
import { render, fireEvent } from '../../../testUtils';
import Pill from '../Pill.component';

describe('Pill', () => {
  it('can render a basic pill component', () => {
    const { getByText } = render(<Pill label="Example Pill" />);
    expect(getByText('Example Pill')).toBeInTheDocument();
  });

  it('can render a pill with an icon', () => {
    const { container } = render(
      <Pill
        label="Example Pill"
        icon={<FontAwesomeIcon icon={faCreditCard} className="test-icon" />}
      />,
    );
    expect(container.querySelector('.test-icon')).toBeInTheDocument();
  });

  it('can render a pill with a click icon when a handle click is passed', () => {
    const { container } = render(
      <Pill
        label="Example Pill"
        handleClick={() => {}}
        deleteIcon={
          <FontAwesomeIcon icon={faCreditCard} className="test-deleteIcon" />
        }
      />,
    );
    expect(container.querySelector('.test-deleteIcon')).toBeInTheDocument();
  });

  it('can not render a pill with a click icon when a handle click is not passed', () => {
    const { container } = render(
      <Pill
        label="Example Pill"
        deleteIcon={
          <FontAwesomeIcon icon={faCreditCard} className="test-deleteIcon" />
        }
      />,
    );
    expect(container.querySelector('.test-deleteIcon')).not.toBeInTheDocument();
  });

  it('can render a pill which responds to a click event when no delete event is provided', () => {
    const mockClickCallback = jest.fn();
    const mockDeleteCallback = jest.fn();
    const { container } = render(
      <Pill
        label="Example Pill"
        handleClick={mockClickCallback}
        handleDelete={mockDeleteCallback}
        deleteIcon={
          <FontAwesomeIcon icon={faCreditCard} className="test-deleteIcon" />
        }
        className="test-pill"
      />,
    );
    const clickable = container.querySelector('.test-pill');
    fireEvent.click(clickable);
    expect(container.querySelector('.test-deleteIcon')).toBeInTheDocument();
    expect(mockClickCallback.mock.calls.length).toBe(1);
    expect(mockDeleteCallback.mock.calls.length).toBe(0);
  });

  it('can render a pill which responds to a click event when a click and delete event is provided', () => {
    const mockClickCallback = jest.fn();
    const mockDeleteCallback = jest.fn();
    const { container } = render(
      <Pill
        label="Example Pill"
        handleClick={mockClickCallback}
        handleDelete={mockDeleteCallback}
        deleteIcon={
          <FontAwesomeIcon icon={faCreditCard} className="test-deleteIcon" />
        }
        className="test-pill"
      />,
    );
    const clickable = container.querySelector('.test-pill');
    fireEvent.click(clickable);
    expect(container.querySelector('.test-deleteIcon')).toBeInTheDocument();
    expect(mockClickCallback.mock.calls.length).toBe(1);
    expect(mockDeleteCallback.mock.calls.length).toBe(0);
  });

  it('can render a pill which responds to a delete event when a click and delete event is provided', () => {
    const mockClickCallback = jest.fn();
    const mockDeleteCallback = jest.fn();
    const { container } = render(
      <Pill
        label="Example Pill"
        handleClick={mockClickCallback}
        handleDelete={mockDeleteCallback}
        deleteIcon={
          <FontAwesomeIcon icon={faCreditCard} className="test-deleteIcon" />
        }
        className="test-pill"
      />,
    );
    const clickable = container.querySelector('.test-deleteIcon');
    expect(clickable).toBeInTheDocument();
    fireEvent.click(clickable);
    expect(mockClickCallback.mock.calls.length).toBe(0);
    expect(mockDeleteCallback.mock.calls.length).toBe(1);
  });
});

import React from 'react';
import { fireEvent, render } from '../../../testUtils';
import LayerEventManager from '../LayerEventManager';

describe('LayerEventManager', () => {
  // eslint-disable-next-line react/prop-types
  const TestComponent = () => (
    <div>test</div>
  );
  it('applies props to children', () => {
    const { container, getByText } = render(<LayerEventManager visible><TestComponent /></LayerEventManager>);
    const wrapper = container.children[1];
    expect(wrapper).toHaveStyle('z-index: 51');
    expect(wrapper).toHaveAttribute('id');
    expect(getByText('test')).toBeInTheDocument();
  });
  it('traps focus when trapFocus is true', () => {
    const outsideElementFocusHandler = jest.fn();
    const { container } = render(
      <>
        <button type="button" className="outside" onFocus={outsideElementFocusHandler}>button</button>
        <LayerEventManager visible trapFocus><TestComponent /></LayerEventManager>
      </>,
    );
    fireEvent.keyPress(container, { key: 'Tab', keyCode: 9 });
    fireEvent.keyPress(container, { key: 'Tab', keyCode: 9 });
    fireEvent.keyPress(container, { key: 'Tab', keyCode: 9 });
    expect(outsideElementFocusHandler).not.toHaveBeenCalled();
  });
});

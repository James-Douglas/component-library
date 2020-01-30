import React from 'react';
import { render } from '../testUtils';
import LayerEventManager from '../LayerEventManager';

describe('LayerEventManager', () => {
  // eslint-disable-next-line react/prop-types
  const TestComponent = () => (
    <div>test</div>
  );
  it('applies props to children', () => {
    const { container, getByText } = render(<LayerEventManager visible><TestComponent /></LayerEventManager>);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle('z-index: 30');
    expect(wrapper).toHaveAttribute('id');
    expect(getByText('test')).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import Tracker from '../Tracker.component';

describe('Tracker', () => {
  const props = {
    steps: [
      { label: 'About You', url: '#label' },
      { label: 'Your Cover', url: '#another' },
      { label: 'Your Details', url: '#one-more', active: true },
      { label: 'Compare Cover', url: '#again', disabled: true },
      { label: 'Purchase Cover', url: '#again', disabled: true },
    ],
  };
  it('renders correctly', () => {
    const { getByText } = render(<Tracker value={60} steps={props.steps} isSticky stuck />);
    console.log(render(<Tracker value={60} steps={props.steps} isSticky stuck />));
  });
  it('renders correctly', () => {
    const { container } = render(<Tracker value={60} steps={props.steps} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders correctly with value as string', () => {
    const { container } = render(<Tracker value="66" steps={props.steps} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('should check scroll and update isSticky and stuck props', () => {
    const { container } = render(<Tracker value={60} steps={props.steps} isSticky stuck />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('should check scroll and update isSticky and stuck props', () => {
    const { container } = render(<Tracker value={60} isSticky={false} stuck={false} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});

import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import Overlay from '../Overlay.component';


describe('Overlay', () => {
  it('Overlay', () => {
    const { container } = render(<Overlay />);
    const animate = container.querySelector('.overlay');
    expect(animate).toBeInTheDocument();
  });
  it('Overlay click', () => {
    const closeOverlay = jest.fn();
    const { container } = render(<Overlay onClose={closeOverlay} />);
    const overlay = container.querySelector('.overlay');
    fireEvent.click(overlay);
    expect(closeOverlay).toHaveBeenCalled();
  });
  it('Overlay click', () => {
    const closeOverlay = jest.fn();
    const { container } = render(<Overlay />);
    const overlay = container.querySelector('.overlay');
    fireEvent.click(overlay);
    expect(closeOverlay).not.toHaveBeenCalled();
  });
});

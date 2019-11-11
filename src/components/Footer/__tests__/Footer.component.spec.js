import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Footer from '../Footer.component';

describe('Footer', () => {
  it('renders with minimal props', () => {
    const { container } = render(<Footer />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders with disclaimer text', () => {
    const { getByText } = render(<Footer disclaimer="test disclaimer" />);
    expect(getByText('test disclaimer')).toBeInTheDocument();
  });
  it('scrolls to top on scroll-top icon click', () => {
    const mockScroll = jest.fn();
    global.scroll = mockScroll;
    const { container } = render(<Footer />);

    Object.defineProperty(window, 'pageYOffset', { value: 1000, writable: true });

    const scrollTopIcon = container.querySelector('.scroll-top-icon');
    fireEvent.click(scrollTopIcon);

    expect(mockScroll).toHaveBeenCalled();
    const { top, behavior } = mockScroll.mock.calls[0][0];
    expect(top).toEqual(0);
    expect(behavior).toEqual('smooth');
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import Picture from '../Picture.component';

describe('Picture', () => {
  it('renders correctly without props', () => {
    const { container } = render(<Picture />);
    expect(container).toMatchSnapshot();
    const img = container.querySelector('img');
    expect(img).toBeDefined();
    expect(img.getAttribute('alt')).toEqual('a placeholder image');
    expect(img.getAttribute('src')).toEqual('placeholder.png');
    expect(img.getAttribute('title')).toEqual('a placeholder title');
  });

  it('uses title and alt props', () => {
    const { container } = render(<Picture alt="test" title="Test" />);
    const img = container.querySelector('img');
    expect(img).toBeDefined();
    expect(img.getAttribute('alt')).toEqual('test');
    expect(img.getAttribute('title')).toEqual('Test');
  });
});

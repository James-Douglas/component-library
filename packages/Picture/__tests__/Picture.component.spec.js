import React from 'react';
import { render } from '@testing-library/react';
import { Picture } from '../Picture.component';
import Placeholder from '../../../images/placeholder.png';

describe('Picture', () => {
  it('does not render without required src prop', () => {
    const { container } = render(<div id="test"><Picture src="" /></div>);
    expect(container.querySelector('#test')).toBeEmpty();
  });

  it('renders with minimal props', () => {
    const { container } = render(<Picture src={Placeholder} />);
    const img = container.querySelector('img');
    expect(img).toBeDefined();
    expect(img.getAttribute('src')).toEqual('placeholder.png');
  });

  it('renders with srcsets', () => {
    const { container } = render(<Picture src={Placeholder} srcsets={[{ srcset: Placeholder, media: 'min-width: 768px' }]} />);
    const img = container.querySelector('img');
    expect(img).toBeDefined();
    const source = container.querySelector('source');
    expect(source).toBeDefined();
    expect(source.getAttribute('srcset')).toEqual('placeholder.png');
    expect(source.getAttribute('media')).toEqual('min-width: 768px');
  });

  it('renders with title and alt props', () => {
    const { container } = render(<Picture src={Placeholder} srcsets={[{ srcset: Placeholder, media: 'min-width: 768px' }]} alt="test" title="Test" />);
    const img = container.querySelector('img');
    expect(img.getAttribute('alt')).toEqual('test');
    expect(img.getAttribute('title')).toEqual('Test');
  });
});

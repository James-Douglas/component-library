import React from 'react';
import { render } from '../../../testUtils';

import Footer from '../Footer.component';

describe('Footer', () => {
  it('renders with minimal props', () => {
    const { container } = render(<Footer />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with disclaimer text and clickable links', () => {
    const { getByText, container } = render(
      <Footer>
        <>test disclaimer and a <a href="https://dev.comparethemarket.com.au/" id="link">link</a></>
      </Footer>,
    );
    const link = container.querySelector('#link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://dev.comparethemarket.com.au/');
    expect(getByText('test disclaimer and a')).toBeInTheDocument();
  });

  it('renders with a white bg by default', () => {
    const { container } = render(
      <Footer>
        <>test disclaimer</>
      </Footer>,
    );
    const footer = container.firstChild.firstChild;
    expect(footer).toHaveStyle('background: #ffffff');
  });

  it('renders with a transparent bg when the prop is supplied', () => {
    const { container } = render(
      <Footer background={false}>
        <>test disclaimer</>
      </Footer>,
    );
    const footer = container.firstChild.firstChild;
    expect(footer).toHaveStyle('background: transparent');
  });

  it('renders with a default type', () => {
    const { container } = render(
      <Footer>
        <>test disclaimer</>
      </Footer>,
    );
    const pTags = container.getElementsByTagName('p');
    expect(pTags[0].textContent).toBe('test disclaimer');
    expect(pTags[1].textContent).toBe('© 2020 Compare The Market. All rights reserved. ACN: 117323 378. AFSL 422926.');
  });

  it('renders a customer accounts footer type', () => {
    const { container } = render(
      <Footer type="customer-accounts">
        <p>test disclaimer</p>
      </Footer>,
    );
    const pTags = container.getElementsByTagName('p');
    expect(pTags[0].textContent).toBe('© 2020 Compare The Market. All rights reserved. ACN: 117323 378. AFSL 422926.');
    expect(pTags[1].textContent).toBe('test disclaimer');
  });
});

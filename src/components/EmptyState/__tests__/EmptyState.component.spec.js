import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import EmptyState from '../EmptyState.component';

describe('Empty State', () => {
  it('renders empty state page with default image', () => {
    const { container } = render(<EmptyState />);
    const picture = container.querySelector('img');
    expect(picture).toHaveAttribute('src', 'sergei.png');
  });
  it('renders empty state page with custom image', () => {
    const { container } = render(
      <EmptyState
        picture={{
          src: 'https://www.comparethemarket.com.au/wp-content/uploads/2019/08/Artboard-1-copy-2@2x.png',
          srcsets: [
            {
              srcset: 'https://www.comparethemarket.com.au/wp-content/uploads/2019/08/Artboard-1-copy-2@2x.png',
              media: '(min-width: 1200px)',
            },
          ],
          alt: 'test',
          title: 'test',
        }}
      />,
    );
    const picture = container.querySelector('img');
    expect(picture).toHaveAttribute('src', 'https://www.comparethemarket.com.au/wp-content/uploads/2019/08/Artboard-1-copy-2@2x.png');
  });
  it('renders the empty state heading by default', () => {
    const { getByText } = render(<EmptyState />);
    expect(getByText('Sorry, no results found')).toBeInTheDocument();
  });
  it('renders a custom heading', () => {
    const customHeading = 'A custom heading';
    const { container } = render(<EmptyState heading={customHeading} />);
    const headingText = container.querySelector('h3').innerHTML;
    expect(headingText).toBe(customHeading);
  });
});

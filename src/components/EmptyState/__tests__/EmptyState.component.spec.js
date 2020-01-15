import React from 'react';
import 'jest-styled-components';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import EmptyState from '../EmptyState.component';

describe('Empty State', () => {
  it('renders empty state page with default image', () => {
    const { container } = render(<EmptyState />);
    const picture = container.querySelector('img');
    expect(picture).toHaveAttribute('src', 'sergei.png');
  });
  it('renders empty state page with cudtom image', () => {
    const { container } = render(<EmptyState picture="https://www.comparethemarket.com.au/wp-content/uploads/2019/08/Artboard-1-copy-2@2x.png" />);
    const picture = container.querySelector('img');
    expect(picture).toHaveAttribute('src', 'https://www.comparethemarket.com.au/wp-content/uploads/2019/08/Artboard-1-copy-2@2x.png');
  });
});

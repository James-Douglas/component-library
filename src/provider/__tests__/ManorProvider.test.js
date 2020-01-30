import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import ManorProvider from '../ManorProvider';

describe('ManorProvider', () => {
  it('injects global styles value', () => {
    render(<ManorProvider />);
    expect(document.head).toHaveTextContent('h1,h2,h3,h4,h5,h6,p,ul,ol,ul li,ol l input,label,button,textarea,.subtitle-primary,.subtitle-secondary,.microcopy,.overline,.subscript');
  });
});

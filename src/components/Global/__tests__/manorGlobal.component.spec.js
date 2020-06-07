import React from 'react';
import 'jest-styled-components';
import { render } from '../../../testUtils';
import { ManorGlobalStyles } from '../manorGlobal.component';
import '@testing-library/jest-dom/extend-expect';


describe('ManorGlobal', () => {
  it('should inject new global styles', () => {
    // GITHUB/styled-components/styled-components/blob/0aa3170c255a49cd41c3fbeb2b8051b5d132f229/src/test/rehydration.test.js
    render(<ManorGlobalStyles />);

    expect(document.head).toHaveTextContent('h1,h2,h3,h4,h5,h6,p,ul,ol,ul li,ol li,input,label,button,textarea,.subtitle-primary,.subtitle-secondary,.microcopy,.overline,.subscript,::placeholder');
  });
});

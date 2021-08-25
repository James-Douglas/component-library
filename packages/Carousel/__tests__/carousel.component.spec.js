import React from 'react';
import 'jest-styled-components';
import { render } from '../../../testUtils';
import Carousel from '../Carousel.component';

/* Modal
–––––––––––––––––––––––––––––––––––––––––––––––––– */

describe('Carousel', () => {
  it('renders with minimal props', () => {
    const { baseElement } = render(<Carousel id="test-carousel" trackingLabel="test-carousel-trackingLabel" />);
    const carousel = baseElement.querySelector('#test-carousel');
    expect(carousel).toBeInTheDocument();
    expect(carousel).toMatchSnapshot();
  });
});

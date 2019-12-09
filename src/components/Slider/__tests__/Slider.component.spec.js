import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import Slider from '../Slider.component';
import Overlay from '../../Overlay/Overlay.component';

describe('Slider', () => {
  it('check content inside slider exist', () => {
    const { getByText } = render(<Slider>Hello I can move!</Slider>);
    expect(getByText('Hello I can move!')).toBeInTheDocument();
  });
  it('check default slider direction', () => {
    const { container } = render(<Slider />);
    const sliderChild = container.firstChild;
    expect(sliderChild.getAttribute('direction')).toBe('right');
  });
  it('check slider bottom direction', () => {
    const { container } = render(<Slider notificationSize="400px" direction="bottom" />);
    const sliderChild = container.firstChild;
    expect(sliderChild).toHaveStyleRule('background', '#FFFFFF');
    expect(sliderChild).toHaveStyleRule('z-index', '40');
  });
  it('check slider styles open section', () => {
    const { container } = render(<Slider notificationSize="20%" direction="bottom" show>Slider content inside</Slider>);
    const sliderChild = container.firstChild;
    expect(sliderChild).toHaveStyleRule('bottom', '0');
  });
  it('check bottom slider', () => {
    const { container } = render(
      <>
        <Overlay opacityLevel={0.3} />
        <Slider notificationSize="400px" direction="left" closeButton show />
      </>,
    );
    const animate = container.querySelector('[direction="left"]');
    expect(animate).toHaveStyleRule('width', '400px');
    expect(animate).toHaveStyleRule('top', '0');
    expect(animate).toHaveStyleRule('left', '0');
  });
  it('check bottom slider hidden', () => {
    const { container } = render(
      <>
        <Overlay opacityLevel={0.3} />
        <Slider notificationSize="400px" direction="left" closeButton />
      </>,
    );
    const animate = container.querySelector('[direction="left"]');
    expect(animate).toHaveStyleRule('left', 'NaN');
  });
  it('check top slider', () => {
    const onCloseFun = jest.fn();
    const { container } = render(
      <>
        <Overlay opacityLevel={0.3} />
        <Slider notificationSize="400px" direction="top" closeButton onClose={onCloseFun} show>
          Slider opened
        </Slider>
      </>,
    );
    const close = container.querySelector('.icon-close');
    fireEvent.click(close);
    expect(onCloseFun).toHaveBeenCalled();
    const animate = container.querySelector('[direction="top"]');
    expect(animate).toHaveStyleRule('width', '100%');
    expect(animate).toHaveStyleRule('height', '400px');
    expect(animate).toHaveStyleRule('top', '0');
  });
  it('check top slider hidden', () => {
    const { container } = render(
      <>
        <Overlay opacityLevel={0.3} />
        <Slider notificationSize="400px" direction="top" closeButton>
          Slider opened
        </Slider>
      </>,
    );
    const animate = container.querySelector('[direction="top"]');
    expect(animate).toHaveStyleRule('top', 'NaN');
  });
  it('check right slider', () => {
    const { container } = render(
      <>
        <Overlay opacityLevel={0.3} />
        <Slider notificationSize="400px" closeButton show>
          Slider opened
        </Slider>
      </>,
    );
    const animate = container.querySelector('[direction="right"]');
    expect(animate).toHaveStyleRule('width', '400px');
    expect(animate).toHaveStyleRule('right', '0');
  });
  it('click on close will not do anything', () => {
    const onCloseFun = jest.fn();
    const { container } = render(
      <>
        <Overlay opacityLevel={0.3} />
        <Slider notificationSize="400px" direction="left" closeButton />
      </>,
    );
    const overlay = container.querySelector('.icon-close');
    fireEvent.click(overlay);
    expect(onCloseFun).not.toHaveBeenCalled();
  });
});

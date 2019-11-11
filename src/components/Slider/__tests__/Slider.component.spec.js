import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Slider from '../Slider.component';
import Overlay from '../../Overlay/Overlay.component';

describe('Slider', () => {
  it('check default slider direction', () => {
    const { container } = render(<Slider />);
    const animate = container.querySelector('.animate');
    expect(animate).toHaveClass('right');
  });
  it('check content inside slider exist', () => {
    const { getByText } = render(<Slider>Hello I can move!</Slider>);
    expect(getByText('Hello I can move!')).toBeInTheDocument();
  });
  it('check slider bottom direction', () => {
    const { container } = render(<Slider notificationSize="400px" direction="bottom" />);
    const animate = container.querySelector('.animate');
    expect(animate).toHaveClass('bottom');
  });
  it('check slider styles open section', () => {
    const { container } = render(<Slider notificationSize="20%" direction="bottom" show />);
    const animate = container.querySelector('.animate');
    expect(animate.style.height).toEqual('20%');
    expect(animate.style.bottom).toEqual('0px');
  });
  it('check slider styles closed section', () => {
    const { container } = render(<Slider notificationSize="20%" direction="bottom" />);
    const animate = container.querySelector('.animate');
    expect(animate.style.height).toEqual('20%');
    expect(animate.style.bottom).toEqual('-20%');
  });
  it('check slider top direction', () => {
    const { container } = render(<Slider notificationSize="400px" direction="top" />);
    const animate = container.querySelector('.animate');
    expect(animate).toHaveClass('top');
  });
  it('check slider styles top direction closed section', () => {
    const { container } = render(<Slider notificationSize="20%" direction="top" />);
    const animate = container.querySelector('.animate');
    expect(animate.style.height).toEqual('20%');
    expect(animate.style.top).toEqual('-20%');
  });
  it('check slider styles top direction open section', () => {
    const { container } = render(<Slider notificationSize="20%" direction="top" show />);
    const animate = container.querySelector('.animate');
    expect(animate.style.height).toEqual('20%');
    expect(animate.style.top).toEqual('0px');
  });
  it('check slider left direction', () => {
    const { container } = render(<Slider notificationSize="400px" direction="left" />);
    const animate = container.querySelector('.animate');
    expect(animate).toHaveClass('left');
  });
  it('check slider styles direction left', () => {
    const { container } = render(<Slider notificationSize="20%" direction="left" />);
    const animate = container.querySelector('.animate');
    expect(animate.style.width).toEqual('20%');
    expect(animate.style.left).toEqual('-20%');
  });
  it('check slider right default direction', () => {
    const { container } = render(<Slider notificationSize="400px" />);
    const animate = container.querySelector('.animate');
    expect(animate).toHaveClass('right');
  });
  it('check slider styles default right direction when open', () => {
    const { container } = render(<Slider notificationSize="20%" show />);
    const animate = container.querySelector('.animate');
    expect(animate.style.width).toEqual('20%');
    expect(animate.style.right).toEqual('0px');
  });
  it('check close slider', () => {
    const onCloseFun = jest.fn();
    const { container } = render(
      <>
        <Overlay opacityLevel={0.3} />
        <Slider notificationSize="400px" direction="left" closeButton onClose={onCloseFun} />
      </>,
    );
    const animate = container.querySelector('.animate');
    const close = container.querySelector('.icon-close');
    fireEvent.click(close);
    expect(onCloseFun).toHaveBeenCalled();
    expect(animate).toHaveClass('shadow-none');
    expect(animate).toHaveClass('left');
  });
  it('check shadow attr', () => {
    const { container } = render(
      <>
        <Overlay opacityLevel={0.3} />
        <Slider notificationSize="400px" direction="left" show />
      </>,
    );
    const animate = container.querySelector('.animate');
    expect(animate).toHaveClass('shadow-lg');
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

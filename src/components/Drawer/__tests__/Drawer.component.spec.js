import React from 'react';

import { render, fireEvent } from '../../../testUtils';
import 'jest-styled-components';
import Drawer from '../Drawer.component';
import getTheme from '../../../utils/getTheme';

const theme = getTheme();

describe('Drawer', () => {
  it('check content inside Drawer exist', () => {
    const { getByText } = render(<Drawer visible handleClose={() => {}}>Hello I can move!</Drawer>);
    expect(getByText('Hello I can move!')).toBeInTheDocument();
  });
  it('check default Drawer direction', () => {
    const { container } = render(<Drawer visible handleClose={() => {}} />);
    const DrawerChild = container.firstChild.firstChild;
    expect(DrawerChild.getAttribute('direction')).toBe('right');
  });
  it('check Drawer bottom direction', () => {
    const { container } = render(<Drawer visible handleClose={() => {}} size="400px" direction="bottom" />);
    const drawerWrapper = container.firstChild;
    expect(drawerWrapper.firstChild).toHaveStyleRule('background', '#FFFFFF');
    expect(drawerWrapper).toHaveStyle(`z-index: ${parseInt(theme.zIndex['30'], 10)}`);
  });
  it('check Drawer styles open section', () => {
    const { container } = render(<Drawer size="20%" direction="bottom" visible handleClose={() => {}}>Drawer content inside</Drawer>);
    const DrawerChild = container.firstChild.firstChild;
    expect(DrawerChild).toHaveStyleRule('bottom', '0');
  });
  it('check bottom Drawer', () => {
    const { container } = render(<Drawer size="400px" direction="left" closeButton visible handleClose={() => {}} />);
    const animate = container.querySelector('[direction="left"]');
    expect(animate).toHaveStyleRule('width', '400px');
    expect(animate).toHaveStyleRule('top', '0');
    expect(animate).toHaveStyleRule('left', '0');
  });
  it('check top Drawer', () => {
    const handleCloseFun = jest.fn();
    const { container } = render(
      <Drawer size="400px" direction="top" closeButton handleClose={handleCloseFun} visible>
        Drawer opened
      </Drawer>,
    );
    const close = container.querySelector('.fa-times');

    fireEvent.click(close);
    expect(handleCloseFun).toHaveBeenCalled();
  });
  it('check left Drawer padding', () => {
    const { container } = render(
      <Drawer size="400px" direction="left" visible handleClose={() => {}}>
        Drawer opened
      </Drawer>,
    );
    const contentPadding = container.querySelectorAll('[direction="left"]')[1];
    expect(contentPadding).toHaveStyleRule('padding-top', `${theme.spacing[32]}`);
  });
  it('check left Drawer on escapse', () => {
    const handleCloseFun = jest.fn();
    const { container } = render(
      <Drawer size="400px" direction="left" visible handleClose={handleCloseFun}>
        Drawer opened
      </Drawer>,
    );
    fireEvent.keyDown(container, { key: 'Escape', keyCode: 27 });
    expect(handleCloseFun).toHaveBeenCalled();
  });
  it('check right Drawer', () => {
    const { container } = render(
      <Drawer size="400px" closeButton visible handleClose={() => {}}>
        Drawer opened
      </Drawer>,
    );
    const animate = container.querySelector('[direction="right"]');
    expect(animate).toHaveStyleRule('width', '400px');
    expect(animate).toHaveStyleRule('right', '0');
  });
  it('check bottom Drawer ', () => {
    const { container } = render(
      <Drawer size="400px" closeButton visible handleClose={() => {}} direction="bottom">
        Drawer opened
      </Drawer>,
    );
    const animateBottom = container.querySelectorAll('[direction="bottom"]')[0];
    expect(animateBottom).toHaveStyleRule('bottom', '0');
  });
  it('check zIndex for layers', () => {
    const { container } = render(
      <>
        <Drawer
          id="1"
          size="300px"
          visible
          direction="bottom"
          iconClassName="closeIconSlide"
          closeButton
          handleClose={() => {}}
        >
          <div> First Layer</div>
        </Drawer>
        <Drawer
          id="2"
          size="300px"
          direction="right"
          iconClassName="closeIconSlide"
          closeButton
          handleClose={() => {}}
        >
          <div> Second Layer</div>
        </Drawer>
      </>,
    );

    const bottomDirectionDrawerLayer = container.querySelector('#layer-1');
    expect(bottomDirectionDrawerLayer).toHaveStyle(`z-index: ${parseInt(theme.zIndex['30'], 10)}`);

    render(
      <>
        <Drawer
          id="1"
          size="300px"
          visible
          direction="bottom"
          iconClassName="closeIconSlide"
          closeButton
          handleClose={() => {}}
        >
          <div> First Layer</div>
        </Drawer>
        <Drawer
          id="2"
          size="300px"
          visible
          direction="right"
          iconClassName="closeIconSlide"
          closeButton
          handleClose={() => {}}
        >
          <div> Second Layer</div>
        </Drawer>
      </>,
      { container },
    );

    const rightDirectionDrawerLayer = container.querySelector('#layer-2');
    expect(rightDirectionDrawerLayer).toHaveStyle(`z-index: ${parseInt(theme.zIndex['30'], 10) + 1}`);
  });
});

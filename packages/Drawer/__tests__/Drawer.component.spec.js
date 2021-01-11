import React from 'react';
import 'jest-styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render, fireEvent } from '../../../testUtils';
import Drawer from '../Drawer.component';

describe('Drawer', () => {
  it('check content inside Drawer exist', () => {
    const { getByText } = render(<Drawer visible handleClose={() => {}}>Hello I can move!</Drawer>);
    expect(getByText('Hello I can move!')).toBeInTheDocument();
  });
  it('check default Drawer direction', () => {
    const { container } = render(<Drawer visible handleClose={() => {}} />);
    const DrawerChild = container.firstChild;
    expect(DrawerChild.getAttribute('direction')).toBe('right');
  });
  it('check Drawer bottom direction', () => {
    const { container } = render(<Drawer visible handleClose={() => {}} size="400px" direction="bottom" />);
    expect(container.firstChild).toHaveStyleRule('background', '#FFFFFF');
    expect(container.firstChild).toHaveStyle('z-index: 999999');
  });
  it('check Drawer styles open section', () => {
    const { container } = render(<Drawer size="20%" direction="bottom" visible handleClose={() => {}}>Drawer content inside</Drawer>);
    const DrawerChild = container.firstChild;
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
    expect(contentPadding).toHaveStyleRule('padding-top', `${ctmTheme.spacing[32]}`);
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
});

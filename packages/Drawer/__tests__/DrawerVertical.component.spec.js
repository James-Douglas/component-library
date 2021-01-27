import React from 'react';
import 'jest-styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render } from '../../../testUtils';
import DrawerVertical from '../DrawerVertical.component';

describe('DrawerVertical', () => {
  it('check content inside Drawer exist', () => {
    const { getByText } = render(<DrawerVertical visible handleClose={() => {}}>Hello I can move!</DrawerVertical>);
    expect(getByText('Hello I can move!')).toBeInTheDocument();
  });
  it('check default Drawer direction', () => {
    const { container } = render(<DrawerVertical visible handleClose={() => {}} />);
    const DrawerChild = container.firstChild;
    expect(DrawerChild.getAttribute('direction')).toBe('right');
  });
  it('check Drawer styles open section', () => {
    const { container } = render(<DrawerVertical size="20%" direction="right" visible handleClose={() => {}}>Drawer content inside</DrawerVertical>);
    const DrawerChild = container.firstChild;
    expect(DrawerChild).toHaveStyleRule('right', '0');
  });
  it('check left Drawer padding', () => {
    const { container } = render(
      <DrawerVertical size="400px" direction="left" visible handleClose={() => {}}>
        Drawer opened
      </DrawerVertical>,
    );
    const contentPadding = container.querySelectorAll('[direction="left"]')[1];
    expect(contentPadding).toHaveStyleRule('padding-top', `${ctmTheme.spacing[32]}`);
  });
  it('check right Drawer', () => {
    const { container } = render(
      <DrawerVertical size="400px" closeButton visible handleClose={() => {}}>
        Drawer opened
      </DrawerVertical>,
    );
    const animate = container.querySelector('[direction="right"]');
    expect(animate).toHaveStyleRule('width', '400px');
    expect(animate).toHaveStyleRule('right', '0');
  });
});

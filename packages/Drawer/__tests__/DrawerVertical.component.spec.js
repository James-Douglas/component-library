import React from 'react';
import 'jest-styled-components';
import { useTracking } from 'react-tracking';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render } from '../../../testUtils';
import DrawerVertical from '../DrawerVertical.component';

describe('DrawerVertical', () => {
  it('check content inside Drawer exist', () => {
    const { getByText } = render(<DrawerVertical trackingLabel="test" visible handleClose={() => {}}>Hello I can move!</DrawerVertical>);
    expect(getByText('Hello I can move!')).toBeInTheDocument();
  });

  it('check default Drawer direction', () => {
    const { container } = render(<DrawerVertical trackingLabel="test" visible handleClose={() => {}} />);
    const DrawerChild = container.firstChild;
    expect(DrawerChild.getAttribute('direction')).toBe('right');
  });

  it('check Drawer styles open section', () => {
    const { container } = render(<DrawerVertical trackingLabel="test" size="20%" direction="right" visible handleClose={() => {}}>Drawer content inside</DrawerVertical>);
    const DrawerChild = container.firstChild;
    expect(DrawerChild).toHaveStyleRule('right', '0');
  });

  it('check left Drawer padding', () => {
    const { container } = render(
      <DrawerVertical trackingLabel="test" size="400px" direction="left" visible handleClose={() => {}}>
        Drawer opened
      </DrawerVertical>,
    );
    const contentPadding = container.querySelectorAll('[direction="left"]')[1];
    expect(contentPadding).toHaveStyleRule('padding-top', `${ctmTheme.spacing[32]}`);
  });

  it('check right Drawer', () => {
    const { container } = render(
      <DrawerVertical trackingLabel="test" size="400px" closeButton visible handleClose={() => {}}>
        Drawer opened
      </DrawerVertical>,
    );
    const animate = container.querySelector('[direction="right"]');
    expect(animate).toHaveStyleRule('width', '400px');
    expect(animate).toHaveStyleRule('right', '0');
  });

  describe('interaction tracking', () => {
    it('tracks show action', () => {
      const { trackEvent } = useTracking();
      const { rerender } = render(
        <DrawerVertical trackingLabel="test" size="400px" closeButton visible handleClose={() => {}}>
          Drawer opened
        </DrawerVertical>,
      );

      rerender(
        <DrawerVertical trackingLabel="test" size="400px" closeButton visible={false} handleClose={() => {}}>
          Drawer opened
        </DrawerVertical>,
      );

      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Show',
          ixn_object: 'Drawer',
          ixn_type: 'right',
          ixn_label: 'test',
          ixn_value: '',
        },
      });
    });
  });
});

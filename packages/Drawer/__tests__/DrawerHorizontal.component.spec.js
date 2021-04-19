import React from 'react';
import 'jest-styled-components';
import { useTracking } from 'react-tracking';
import { render, fireEvent } from '../../../testUtils';
import Drawer from '../DrawerHorizontal.component';

describe('Drawer', () => {
  it('check content inside Drawer exist', () => {
    const { getByText } = render(<Drawer trackingLabel="test" visible handleClose={() => {}}>Hello I can move!</Drawer>);
    expect(getByText('Hello I can move!')).toBeInTheDocument();
  });

  it('check Drawer bottom direction', () => {
    const { container } = render(<Drawer trackingLabel="test" visible handleClose={() => {}} size={400} direction="bottom" />);
    expect(container.firstChild).toHaveStyleRule('background', '#FFFFFF');
    expect(container.firstChild).toHaveStyle('z-index: 999999');
  });

  it('check Drawer styles open section', () => {
    const { container } = render(<Drawer trackingLabel="test" size={200} direction="bottom" visible handleClose={() => {}}>Drawer content inside</Drawer>);
    const DrawerChild = container.firstChild;
    expect(DrawerChild).toHaveStyleRule('bottom', '-200px');
  });

  it('check top Drawer', () => {
    const handleCloseFun = jest.fn();
    const { container } = render(
      <Drawer trackingLabel="test" size={400} direction="top" closeButton handleClose={handleCloseFun} visible>
        Drawer opened
      </Drawer>,
    );
    const close = container.querySelector('.fa-times');

    fireEvent.click(close);
    expect(handleCloseFun).toHaveBeenCalled();
  });

  it('check bottom Drawer ', () => {
    const { container } = render(
      <Drawer trackingLabel="test" size={400} closeButton visible handleClose={() => {}} direction="bottom">
        Drawer opened
      </Drawer>,
    );
    const animateBottom = container.querySelectorAll('[direction="bottom"]')[0];
    expect(animateBottom).toHaveStyleRule('bottom', '-400px');
  });

  describe('interaction tracking', () => {
    it('tracks show action', () => {
      const { trackEvent } = useTracking();
      render(
        <Drawer trackingLabel="test" size={400} closeButton visible handleClose={() => {}} direction="bottom">
          Hello I am a drawer
        </Drawer>,
      );

      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Show',
          ixn_object: 'Drawer',
          ixn_type: 'bottom',
          ixn_label: 'test',
          ixn_value: '',
        },
      });
    });
  });
});

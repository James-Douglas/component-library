import React from 'react';
import { render } from '../../../../testUtils';
import MobileLayout from '../MobileLayout.component';

let mockBreakpointValue = 'xs';
let mockIsDesktopValue = false;
jest.mock('../../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => mockBreakpointValue),
  isDesktop: jest.fn(() => mockIsDesktopValue),
}));

describe('MobileLayout', () => {
  it('allows additional classes to be passed through', () => {
    const { container } = render(
      <MobileLayout className="test-class">
        <div className="child-content">test</div>
      </MobileLayout>,
    );
    const test = container.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });

  it('renders on mobile only devices', () => {
    const ui = (
      <MobileLayout>
        <div className="child-content">test</div>
      </MobileLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'md';
    mockIsDesktopValue = true;
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });
});

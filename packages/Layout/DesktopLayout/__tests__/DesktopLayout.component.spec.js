import React from 'react';
import { render } from '../../../../testUtils';
import DesktopLayout from '../DesktopLayout.component';

let mockBreakpointValue = 'md';
let mockIsDesktopValue = true;
jest.mock('../../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => mockBreakpointValue),
  isDesktop: jest.fn(() => mockIsDesktopValue),
}));

describe('DesktopLayout', () => {
  it('allows additional classes to be passed through', () => {
    const { container } = render(
      <DesktopLayout className="test-class">
        <div className="child-content">test</div>
      </DesktopLayout>,
    );
    const test = container.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });

  it('renders on desktop only devices', () => {
    const ui = (
      <DesktopLayout>
        <div className="child-content">test</div>
      </DesktopLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'xs';
    mockIsDesktopValue = false;
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });
});
